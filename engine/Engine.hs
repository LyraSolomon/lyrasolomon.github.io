import System.Directory
import System.Process (callCommand)
import Control.Monad
import Data.Time.Clock (UTCTime)
import qualified Data.Set as Set
import Debug.Trace

runEngine :: FilePath -> String -> IO String
runEngine p ('$':'{':'$':xs) = ("${" ++) <$> runEngine p xs
runEngine p ('$':'{':xs) = (++) <$> runCommand p (takeWhile (/='}') xs) <*> runEngine p (tail $ dropWhile (/='}') xs)
runEngine p (x:xs) = (x:) <$> runEngine p xs
runEngine _ [] = return []

runCommand :: FilePath -> String -> IO String
runCommand p ('i':'n':'c':'l':'u':'d':'e':'(':'/':xs) = (runEngine p . init) =<< readFile ("includes/" ++ takeWhile (/=')') xs)
runCommand p ('i':'n':'c':'l':'u':'d':'e':'(':xs) = (runEngine p . init) =<< readFile (p ++ "/includes/" ++ takeWhile (/=')') xs)
runCommand p ('e':'a':'c':'h':'p':'o':'s':'t':'(':xs) = (runEngine p) =<< (eachPost . init) =<< readFile (p ++ "/includes/" ++ takeWhile (/=')') xs)
runCommand p s = fail ("in file" ++ show p ++ "unknown command: " ++ s)

main :: IO ()
main = do
  root <- getCurrentDirectory
  createDirectoryIfMissing False (root ++ "/build")
  apps <- listDirectory $ root ++ "/apps"
  outs <- concat <$> mapM (\x -> buildApp $ root ++ "/apps/" ++ x) apps
  prune (Set.fromList outs) (root ++ "/build")

buildApp :: FilePath -> IO [FilePath]
buildApp src = do
  skip <- doesFileExist (src ++ "/IGNORE")
  if skip then return [] else do
    srcRel <- makeRelativeToCurrentDirectory src
    putStrLn $ "*** building " ++ srcRel ++ " ***"
    hasGenrule <- (&&) <$> doesFileExist (src ++ "/makefile") <*> doesDirectoryExist (src ++ "/codegen")
    when hasGenrule $ withCurrentDirectory src $ callCommand "make"
    root <- getCurrentDirectory
    url <- readFile $ src ++ "/includes/url"
    let dst = root ++ "/build" ++ init url
    includesLastModified <- max <$> lastModified (src ++ "/includes") <*> lastModified (root ++ "/includes")
    buildFile src (src ++ "/pages") dst includesLastModified

buildFile :: FilePath -> FilePath -> FilePath -> UTCTime -> IO [FilePath]
buildFile ctx src dst incModified = do
  isDir <- doesDirectoryExist src
  if isDir then do
    files <- listDirectory src
    createDirectoryIfMissing False dst
    concat <$> mapM (\x -> buildFile ctx (src ++ "/" ++ x) (dst ++ "/" ++ x) incModified) files
  else do
    exists <- doesFileExist dst
    rebuild <- if exists then do
        srcModified <- getModificationTime src
        dstModified <- getModificationTime dst
        return $ srcModified > dstModified || incModified > dstModified
      else return True
    when rebuild (do
      processed <- runEngine ctx =<< readFile src
      srcRel <- makeRelativeToCurrentDirectory src
      putStrLn srcRel
      writeFile dst processed)
    return [dst]

prune :: Set.Set FilePath -> FilePath -> IO ()
prune keep src = do
  isDir <- doesDirectoryExist src
  if isDir then do
    files <- listDirectory src
    mapM_ (\x -> prune keep (src ++ "/" ++ x)) files
    newContents <- listDirectory src
    when (null newContents) (removeDirectory src)
  else
    when (src `Set.notMember` keep) (removeFile src)

lastModified :: FilePath -> IO UTCTime
lastModified p = do
  isDir <- doesDirectoryExist p
  if isDir then do
    files <- listDirectory p
    maximum <$> mapM (\x -> lastModified (p ++ "/" ++ x)) files
  else getModificationTime p

eachPost :: String -> IO String
eachPost str = do
  root <- getCurrentDirectory
  apps <- filterM (\str-> not <$> doesFileExist (root ++ "/apps/" ++ str ++"/IGNORE")) =<< listDirectory (root ++ "/apps")
  concat <$> mapM (\app -> runEngine (root ++ "/apps/" ++ app) str) (filter ((/='_') . head) $ traceShowId apps)

import System.Directory

runEngine :: FilePath -> String -> IO String
runEngine p ('$':'{':'$':xs) = ("${" ++) <$> runEngine p xs
runEngine p ('$':'{':xs) = (++) <$> runCommand p (takeWhile (/='}') xs) <*> runEngine p (tail $ dropWhile (/='}') xs)
runEngine p (x:xs) = (x:) <$> runEngine p xs
runEngine _ [] = return []

runCommand :: FilePath -> String -> IO String
runCommand p ('i':'n':'c':'l':'u':'d':'e':'(':'/':xs) = (runEngine p . init) =<< readFile ("includes/" ++ takeWhile (/=')') xs)
runCommand p ('i':'n':'c':'l':'u':'d':'e':'(':xs) = (runEngine p . init) =<< readFile (p ++ "/includes/" ++ takeWhile (/=')') xs)

main :: IO ()
main = do
  root <- getCurrentDirectory
  apps <- listDirectory $ root ++ "/apps"
  removeDirectoryRecursive $ root ++ "/build"
  createDirectory $ root ++ "/build"
  mapM_ (\x -> buildApp $ root ++ "/apps/" ++ x) apps

buildApp :: FilePath -> IO ()
buildApp src = do
  srcRel <- makeRelativeToCurrentDirectory src
  putStrLn $ "*** building " ++ srcRel ++ " ***"
  root <- getCurrentDirectory
  url <- readFile $ src ++ "/url"
  let dst = root ++ "/build" ++ init url
  buildFile src (src ++ "/pages") dst

buildFile :: FilePath -> FilePath -> FilePath -> IO ()
buildFile ctx src dst = do
  isDir <- doesDirectoryExist src
  if isDir then do
    files <- listDirectory src
    createDirectoryIfMissing False dst
    mapM_ (\x -> buildFile ctx (src ++ "/" ++ x) (dst ++ "/" ++ x)) files
    return ()
  else do
    processed <- runEngine ctx =<< readFile src
    srcRel <- makeRelativeToCurrentDirectory src
    putStrLn srcRel
    writeFile dst processed

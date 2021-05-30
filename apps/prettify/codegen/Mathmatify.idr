module Main

-- TODO fix this, it's a mess
-- TODO add more languages
-- TODO add toggle for combiners
import Data.SortedMap

data Font = Normal | Script | Fraktur | Doublestrike | Sans | Mono | Circled | Circled2 | InvCircled | Squared | InvSquared | Parens | Dots | Coms
data Alphanum = Greek | Latin | Arabic
data FontChar = Symbol Int | Character Alphanum Font Bool Bool Bool Int -- Script, Bold, Italic, Uppercase, Index

export mathify : String -> String
export main : IO ()
parse : List Char -> List FontChar
parse' : (Font, Bool, Bool) -> List Char -> List FontChar
lookupSymbol : List Char -> (Int, List Char)
getUnicode : FontChar -> Char
supTable : SortedMap Char Int
subTable : SortedMap Char Int
symbolTable : SortedMap (List Char) Int

mathify = pack . map getUnicode . parse . unpack

main = putStr (mathify "${include(idr_escape.js)}") -- this is honestly disgusting

parse str = parse' (Normal, False, False) str

-- Fonts
parse' (font, bold, _) ('<'::'i'::'>'::str) = parse' (font, bold, True) str
parse' (font, bold, _) ('<'::'/'::'i'::'>'::str) = parse' (font, bold, False) str
parse' (font, _, italic) ('<'::'b'::'>'::str) = parse' (font, True, italic) str
parse' (font, _, italic) ('<'::'/'::'b'::'>'::str) = parse' (font, False, italic) str
parse' (_, b, i) ('<'::'s'::'e'::'r'::'i'::'f'::'>'::str) = parse' (Normal, b, i) str
parse' (_, b, i) ('<'::'s'::'c'::'r'::'i'::'p'::'t'::'>'::str) = parse' (Script, b, i) str
parse' (_, b, i) ('<'::'f'::'r'::'a'::'k'::'t'::'u'::'r'::'>'::str) = parse' (Fraktur, b, i) str
parse' (_, b, i) ('<'::'l'::'i'::'n'::'e'::'s'::'>'::str) = parse' (Doublestrike, b, i) str
parse' (_, b, i) ('<'::'s'::'a'::'n'::'s'::'>'::str) = parse' (Sans, b, i) str
parse' (_, b, i) ('<'::'m'::'o'::'n'::'o'::'>'::str) = parse' (Mono, b, i) str
-- Named Symbols
parse' style@(s, b, i) ('\\'::'1'::n::str) = if ord n >= 0x3a || ord n < 0x30 then Character Arabic s b i False 0x31 :: parse' style str
                                             else Character Arabic s b i False (ord n - 0x30 + 10) :: parse' style (n::str)
parse' style@(s, b, i) ('\\'::'2'::'0'::str) = Character Arabic s b i False (0x30 + 20) :: parse' style str
parse' style@(s, b, i) ('\\'::str) = let (c, str') = lookupSymbol str
                                         c' = if c < 0x0370 || c > 0x03ff then -- not in 'Greek and Coptic' block
                                                Symbol c
                                              else if c < 0x03ac then -- is uppercase Greek
                                                Character Greek s b i True (c - 0x0391) -- Subtract Alpha
                                              else
                                                Character Greek s b i False (c - 0x03b1) -- Subtract alpha
                                     in c' :: parse' style str'
-- Symbol Combinations
parse' style ('&'::'&'::str) = Symbol 0x2227 :: parse' style str
parse' style ('|'::'|'::str) = Symbol 0x2228 :: parse' style str
parse' style ('!'::'!'::str) = Symbol 0x00ac :: parse' style str
parse' style ('!'::'|'::'|'::str) = Symbol 0x22bd :: parse' style str
parse' style ('!'::'&'::'&'::str) = Symbol 0x22bc :: parse' style str
parse' style ('?'::'!'::'='::str) = Symbol 0x22bb :: parse' style str
parse' style ('_'::'|'::'_'::str) = Symbol 0x22a5 :: parse' style str
parse' style (':'::'='::str) = Symbol 0x2254 :: parse' style str
parse' style ('<'::'='::str) = Symbol 0x2264 :: parse' style str
parse' style ('>'::'='::str) = Symbol 0x2265 :: parse' style str
parse' style ('<'::'<'::str) = Symbol 0x226a :: parse' style str
parse' style ('>'::'>'::str) = Symbol 0x226b :: parse' style str
parse' style ('+'::'-'::str) = Symbol 0x00b1 :: parse' style str
parse' style ('!'::'='::str) = Symbol 0x2260 :: parse' style str
parse' style ('['::'!'::str) = Symbol 0x00a1 :: parse' style str
parse' style ('['::'?'::str) = Symbol 0x00bf :: parse' style str
parse' style ('<'::'\"'::str) = Symbol 0x00ab :: parse' style str
parse' style ('\"'::'>'::str) = Symbol 0x00bb :: parse' style str
parse' style ('\"'::']'::str) = Symbol 0x201d :: parse' style str
parse' style ('\''::']'::str) = Symbol 0x2019 :: parse' style str
parse' style ('['::'\"'::str) = Symbol 0x201c :: parse' style str
parse' style ('['::'\''::str) = Symbol 0x2018 :: parse' style str
parse' style ('-'::'-'::'-'::str) = Symbol 0x2014 :: parse' style str
parse' style ('.'::'.'::'.'::str) = Symbol 0x2026 :: parse' style str
parse' style ('-'::'-'::str) = Symbol 0x2013 :: parse' style str
parse' style ('?'::'?'::str) = Symbol 0x2e2e :: parse' style str
parse' style ('!'::'?'::str) = Symbol 0x203d :: parse' style str
parse' style ('^'::c::str) = Symbol (fromMaybe 0xfffd $ Data.SortedMap.lookup c supTable) :: parse' style str
parse' style ('_'::c::str) = Symbol (fromMaybe 0xfffd $ Data.SortedMap.lookup c subTable) :: parse' style str
parse' style ('/'::'-'::str) = Symbol 0x0336 :: parse' style str
parse' style ('/'::'/'::'/'::str) = Symbol 0x0338 :: parse' style str
parse' style ('/'::'/'::str) = Symbol 0x0337 :: parse' style str
-- Single Characters
parse' style@(s, b, i) (c''::str) = let c = ord c''
                                        c' = if c >= 0x0030 && c <= 0x0039 then -- is digit
                                               Character Arabic s b i False (c - 0x0030) -- subtract '0'
                                             else if c >= 0x0041 && c <= 0x005a then -- is uppercase Latin
                                               Character Latin s b i True (c - 0x0041) -- subtract 'A'
                                             else if c >= 0x0061 && c <= 0x007a then -- is lowercase Latin
                                               Character Latin s b i False (c - 0x0061) -- subtract 'a'
                                             else
                                               Symbol c
                                    in c' :: parse' style str
parse' _ [] = []

lookupSymbol str = (fromMaybe 0xfffd (Data.SortedMap.lookup (takeWhile (/= ' ') str) symbolTable),
                    case dropWhile (/= ' ') str of [] => []
                                                   c :: str' => str')

getUnicode (Symbol c) = chr c
-- TODO add these
--getUnicode (Character Arabic Circled _ _ _ c) = chr (0x2460 + c)
--getUnicode (Character Arabic Parens _ _ _ c) = chr (if c > 0 then 0x2473 + c else 0x30)
--getUnicode (Character Latin Parens _ _ True c) = chr (0x1f110 + c)
--getUnicode (Character Latin Parens _ _ False c) = chr (0x249c + c)

getUnicode (Character Arabic Normal True _ _ c) = chr (if c > 9 then 0xfffd else 0x1d7ce + c)
getUnicode (Character Arabic Doublestrike _ _ _ c) = chr (if c > 9 then 0xfffd else 0x1d7d8 + c)
getUnicode (Character Arabic Sans False _ _ c) = chr (if c > 9 then 0xfffd else 0x1d7e2 + c)
getUnicode (Character Arabic Sans True _ _ c) = chr (if c > 9 then 0xfffd else 0x1d7ec + c)
getUnicode (Character Arabic Mono _ _ _ c) = chr (if c > 9 then 0xfffd else 0x1d7f6 + c)
getUnicode (Character Arabic _ _ _ _ c) = chr (0x30 + c)
getUnicode (Character Greek Normal True False True c) = chr (0x1d6a8 + c)
getUnicode (Character Greek Normal True False False c) = chr (0x1d6c2 + c)
getUnicode (Character Greek Normal False True True c) = chr (0x1d6e2 + c)
getUnicode (Character Greek Normal False True False c) = chr (0x1d6fc + c)
getUnicode (Character Greek Normal True True True c) = chr (0x1d71c + c)
getUnicode (Character Greek Normal True True False c) = chr (0x1d736 + c)
getUnicode (Character Greek Sans _ False True c) = chr (0x1d756 + c)
getUnicode (Character Greek Sans _ False False c) = chr (0x1d770 + c)
getUnicode (Character Greek Sans _ True True c) = chr (0x1d790 + c)
getUnicode (Character Greek Sans _ True False c) = chr (0x1d7aa + c)
getUnicode (Character Greek _ _ _ True c) = chr (0x0391 + c)
getUnicode (Character Greek _ _ _ False c) = chr (0x03b1 + c)
getUnicode (Character Latin Normal True False True c) = chr (0x1d400 + c)
getUnicode (Character Latin Normal True False False c) = chr (0x1d41a + c)
getUnicode (Character Latin Normal False True True c) = chr (0x1d434 + c)
getUnicode (Character Latin Normal False True False 7) = chr 0x1d629
getUnicode (Character Latin Normal False True False c) = chr (0x1d44e + c)
getUnicode (Character Latin Normal True True True c) = chr (0x1d468 + c)
getUnicode (Character Latin Normal True True False c) = chr (0x1d482 + c)
getUnicode (Character Latin Script False _ True 1) = chr 0x212c
getUnicode (Character Latin Script False _ True 4) = chr 0x2130
getUnicode (Character Latin Script False _ True 5) = chr 0x2131
getUnicode (Character Latin Script False _ True 7) = chr 0x210b
getUnicode (Character Latin Script False _ True 8) = chr 0x2110
getUnicode (Character Latin Script False _ True 11) = chr 0x2112
getUnicode (Character Latin Script False _ True 12) = chr 0x2133
getUnicode (Character Latin Script False _ True 15) = chr 0x2118
getUnicode (Character Latin Script False _ True 17) = chr 0x211b
getUnicode (Character Latin Script False _ True c) = chr (0x1d49c + c)
getUnicode (Character Latin Script False _ False 4) = chr 0x212f
getUnicode (Character Latin Script False _ False 6) = chr 0x21a9
getUnicode (Character Latin Script False _ False 14) = chr 0x2134
getUnicode (Character Latin Script False _ False c) = chr (0x1d4b6 + c)
getUnicode (Character Latin Script True _ True c) = chr (0x1d4d0 + c)
getUnicode (Character Latin Script True _ False c) = chr (0x1d4ea + c)
getUnicode (Character Latin Fraktur False _ True 2) = chr 0x212d
getUnicode (Character Latin Fraktur False _ True 7) = chr 0x210c
getUnicode (Character Latin Fraktur False _ True 8) = chr 0x2111
getUnicode (Character Latin Fraktur False _ True 17) = chr 0x211c
getUnicode (Character Latin Fraktur False _ True 25) = chr 0x2128
getUnicode (Character Latin Fraktur False _ True c) = chr (0x1d504 + c)
getUnicode (Character Latin Fraktur False _ False c) = chr (0x1d51e + c)
getUnicode (Character Latin Fraktur True _ True c) = chr (0x1d56c + c)
getUnicode (Character Latin Fraktur True _ False c) = chr (0x1d586 + c)
getUnicode (Character Latin Doublestrike _ _ True 2) = chr 0x2102
getUnicode (Character Latin Doublestrike _ _ True 7) = chr 0x210d
getUnicode (Character Latin Doublestrike _ _ True 13) = chr 0x2115
getUnicode (Character Latin Doublestrike _ _ True 15) = chr 0x2119
getUnicode (Character Latin Doublestrike _ _ True 16) = chr 0x211a
getUnicode (Character Latin Doublestrike _ _ True 17) = chr 0x211d
getUnicode (Character Latin Doublestrike _ _ True 25) = chr 0x2124
getUnicode (Character Latin Doublestrike _ _ True c) = chr (0x1d538 + c)
getUnicode (Character Latin Doublestrike _ _ False c) = chr (0x1d552 + c)
getUnicode (Character Latin Sans False False True c) = chr (0x1d5a0 + c)
getUnicode (Character Latin Sans False False False c) = chr (0x1d5ba + c)
getUnicode (Character Latin Sans True False True c) = chr (0x1d5d4 + c)
getUnicode (Character Latin Sans True False False c) = chr (0x1d5ee + c)
getUnicode (Character Latin Sans False True True c) = chr (0x1d608 + c)
getUnicode (Character Latin Sans False True False c) = chr (0x1d622 + c)
getUnicode (Character Latin Sans True True True c) = chr (0x1d63c + c)
getUnicode (Character Latin Sans True True False c) = chr (0x1d656 + c)
getUnicode (Character Latin Mono _ _ True c) = chr (0x1d670 + c)
getUnicode (Character Latin Mono _ _ False c) = chr (0x1d68a + c)
getUnicode (Character Latin _ _ _ True c) = chr (0x0041 + c)
getUnicode (Character Latin _ _ _ False c) = chr (0x0061 + c)

supTable = fromList [
  -- Diacritical Marks
  ('_', 0x0304),
  ('^', 0x0302),
  ('.', 0x0307),
  ('~', 0x0303),
  ('>', 0x20d1),
  (':', 0x0308),
  -- Characters
  ('\'', 0x02b9),
  ('\"', 0x02ba),
  ('0', 0x2070),
  ('i', 0x2071),
  ('4', 0x2074),
  ('5', 0x2075),
  ('6', 0x2076),
  ('7', 0x2077),
  ('8', 0x2078),
  ('9', 0x2079),
  ('+', 0x207a),
  ('-', 0x207b),
  ('=', 0x207c),
  ('(', 0x207d),
  (')', 0x207e),
  ('n', 0x207f),
  ('1', 0x00b9),
  ('2', 0x00b2),
  ('3', 0x00b3),
  (' ', 0x005e)]

subTable = fromList [
  -- TODO subscript greek
  ('i', 0x1d62),
  ('r', 0x1d63),
  ('u', 0x1d64),
  ('v', 0x1d65),
  ('0', 0x2080),
  ('1', 0x2081),
  ('2', 0x2082),
  ('3', 0x2083),
  ('4', 0x2084),
  ('5', 0x2085),
  ('6', 0x2086),
  ('7', 0x2087),
  ('8', 0x2088),
  ('9', 0x2089),
  ('+', 0x208a),
  ('-', 0x208b),
  ('=', 0x208c),
  ('(', 0x208d),
  (')', 0x208e),
  ('a', 0x2090),
  ('e', 0x2091),
  ('o', 0x2092),
  ('x', 0x2093),
  ('h', 0x2095),
  ('k', 0x2096),
  ('l', 0x2097),
  ('m', 0x2098),
  ('n', 0x2099),
  ('p', 0x209a),
  ('s', 0x209b),
  ('t', 0x209c),
  ('_', 0x0332),
  (' ', 0x005f)]

symbolTable = fromList [
  (unpack "", 0x005c),
  -- Proofs, Sets, and Logic
  -- Uses &&, ||, !!, _|_, :=
  (unpack "forall", 0x2200),
  (unpack "exists", 0x2203),
  (unpack "!exists", 0x2204),
  (unpack "empty", 0x2205),
  (unpack "elem", 0x2208),
  (unpack "!elem", 0x2209),
  (unpack "member", 0x220b),
  (unpack "!member", 0x220c),
  (unpack "qed", 0x220e),
  (unpack "intersect", 0x2229),
  (unpack "union", 0x222a),
  (unpack "therefore", 0x2234),
  (unpack "because", 0x2235),
  (unpack "subset", 0x2282),
  (unpack "superset", 0x2283),
  (unpack "subeq", 0x2286),
  (unpack "supeq", 0x2287),
  (unpack "xor", 0x2297),
  -- Arithmetic
  -- Uses >=, <=, >>, <<, +=, !=
  (unpack "sqrt", 0x221a),
  (unpack "3root", 0x221b),
  (unpack "4root", 0x221c),
  (unpack "divides", 0x2223),
  (unpack "!divides", 0x2224),
  (unpack "propto", 0x221d),
  (unpack "inf", 0x221e),
  (unpack "lfloor", 0x230a),
  (unpack "rfloor", 0x230b),
  (unpack "lceil", 0x2308),
  (unpack "rceil", 0x2309),
  -- Calculus
  (unpack "int", 0x222b),
  (unpack "iint", 0x222c),
  (unpack "iiint", 0x222d),
  (unpack "cint", 0x222e),
  (unpack "ciint", 0x222f),
  (unpack "ciiint", 0x2230),
  (unpack "partial", 0x2202),
  (unpack "del", 0x2207),
  -- Geometry
  (unpack "parallel", 0x2225),
  (unpack "!parallel", 0x2226),
  (unpack "perp", 0x27c2),
  (unpack "deg", 0x00b0),
  -- Linear Algebra
  (unpack "dotprod", 0x00b7),
  (unpack "crossprod", 0x00d7),
  -- Lists
  (unpack "all", 0x22c0),
  (unpack "any", 0x22c1),
  (unpack "union1", 0x22c3),
  (unpack "intersect1", 0x22c2),
  (unpack "prod", 0x220f),
  (unpack "sum", 0x2211),
  -- Uppercase Greek
  (unpack "Alpha", 0x0391),
  (unpack "Beta", 0x0392),
  (unpack "Gamma", 0x0393),
  (unpack "Delta", 0x0394),
  (unpack "Epsilon", 0x0395),
  (unpack "Zeta", 0x0396),
  (unpack "Eta", 0x0397),
  (unpack "Theta", 0x0398),
  (unpack "Iota", 0x0399),
  (unpack "Kappa", 0x039a),
  (unpack "Lambda", 0x039b),
  (unpack "Mu", 0x039c),
  (unpack "Nu", 0x039d),
  (unpack "Xi", 0x039e),
  (unpack "Omicron", 0x039f),
  (unpack "Pi", 0x03a0),
  (unpack "Rho", 0x03a1),
  (unpack "Sigma", 0x03a3),
  (unpack "Tau", 0x03a4),
  (unpack "Upsilon", 0x03a5),
  (unpack "Phi", 0x03a6),
  (unpack "Chi", 0x03a7),
  (unpack "Psi", 0x03a8),
  (unpack "Omega", 0x03a9),
  -- Lowercase Greek
  (unpack "alpha", 0x03b1),
  (unpack "beta", 0x03b2),
  (unpack "gamma", 0x03b3),
  (unpack "delta", 0x03b4),
  (unpack "epsilon", 0x03b5),
  (unpack "zeta", 0x03b6),
  (unpack "eta", 0x03b7),
  (unpack "theta", 0x03b8),
  (unpack "iota", 0x03b9),
  (unpack "kappa", 0x03ba),
  (unpack "lambda", 0x03bb),
  (unpack "mu", 0x03bc),
  (unpack "nu", 0x03bd),
  (unpack "xi", 0x03be),
  (unpack "omicron", 0x03bf),
  (unpack "pi", 0x03c0),
  (unpack "rho", 0x03c1),
  (unpack "sigma1", 0x03c2),
  (unpack "sigma", 0x03c3),
  (unpack "tau", 0x03c4),
  (unpack "upsilon", 0x03c5),
  (unpack "phi", 0x03c6),
  (unpack "chi", 0x03c7),
  (unpack "psi", 0x03c8),
  (unpack "omega", 0x03c9),
  -- Formatting
  -- Uses [!, [?, <", ">, [", [', '], "], ..., !?, --, ---, ?]
  (unpack "P", 0x00b6),
  (unpack "S", 0x00a7),
  (unpack "C", 0x00a9),
  (unpack "CL", 0x1f12f),
  (unpack "R", 0x00ae),
  (unpack "TM", 0x2122),
  (unpack "cent", 0x00a2),
  (unpack "yen", 0x00a5),
  (unpack "dagger", 0x2020),
  (unpack "dagger2", 0x2021)]

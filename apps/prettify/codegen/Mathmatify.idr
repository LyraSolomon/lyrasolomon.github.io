module Main

-- TODO fix this, it's a mess
-- TODO add more languages
import Data.SortedMap

-- TODO: superscript & subscript, markings

--data Roman = R_Normal | R_Bold | R_Italic | R_BoldItalic | R_Script | R_BoldScript | R_Fraktur |
--             R_Doublestrike | R_BoldFraktur | R_Sans | R_BoldSans | R_ItalicSans | R_BISans | R_Mono
--data Greek = G_Normal | G_Bold | G_Italic | G_BoldItalic
--data Numeral = N_Normal | N_Bold | N_Doublestrike | N_Sans | N_BoldSans | N_Mono

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
--parse' style ('|'::']'::str) = Symbol 0x1d102 :: parse' style str
--parse' style ('%'::'%'::str) = Symbol 0x1d10e :: parse' style str
--parse' style ('{'::'{'::str) = Symbol 0x1d114 :: parse' style str
--parse' style ('['::'['::str) = Symbol 0x1d115 :: parse' style str
--parse' style ('['::'|'::':'::str) = Symbol 0x1d106 :: parse' style str
--parse' style (':'::'|'::']'::str) = Symbol 0x1d107 :: parse' style str
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
  -- Music
  -- Uses {{, [[, |], [|:, :|], %%
--  (unpack "sharp", 0x266d),
--  (unpack "sharp2", 0x1d12a),
--  (unpack "natural", 0x266e),
--  (unpack "flat", 0x266f),
--  (unpack "flat2", 0x1d12b),
--  (unpack "dalsegno", 0x1d109),
--  (unpack "dacapo", 0x1d10a),
--  (unpack "segno", 0x1d10b),
--  (unpack "capo", 0x1d10c),
--  (unpack "fermata", 0x1d110),
--  (unpack "fermata1", 0x1d111),
--  (unpack "breath", 0x1d112),
--  (unpack "caesura", 0x1d113),
--  (unpack "stafflines", 0x1d11a),
--  (unpack "barline", 0x1d100),
--  (unpack "barline2", 0x1d101),
--  (unpack "cleffg", 0x1d11e),
--  (unpack "cleffc", 0x1d121),
--  (unpack "clefff", 0x1d122),
--  (unpack "cleffdrum", 0x1d125),
--  (unpack "g8a", 0x1d11f),
--  (unpack "g8b", 0x1d120),
--  (unpack "f8a", 0x1d123),
--  (unpack "f8b", 0x1d124),
--  (unpack "4_4", 0x1d134),
--  (unpack "2_4", 0x1d135),
--  (unpack "multirest", 0x1d129),
--  (unpack "rest1", 0x1d13b),
--  (unpack "rest2", 0x1d13c),
--  (unpack "rest4", 0x1d13d),
--  (unpack "rest8", 0x1d13e),
--  (unpack "rest16", 0x1d13f),
--  (unpack "rest32", 0x1d140),
--  (unpack "rest64", 0x1d141),
--  (unpack "rest128", 0x1d142),
--  (unpack "note1", 0x1d15d),
--  (unpack "note2", 0x1d15e),
--  (unpack "note4", 0x1d15f),
--  (unpack "note8", 0x1d160),
--  (unpack "note16", 0x1d161),
--  (unpack "note32", 0x1d162),
--  (unpack "note64", 0x1d163),
--  (unpack "note128", 0x1d164),
--  -- (unpack "dotnote", 0x1d16d), This is a little bit completely broken everywhere
--  -- (unpack "accent", 0x1d17b),
--  -- (unpack "staccato", 0x1d17c),
--  -- (unpack "tenuto", 0x1d17d),
--  -- (unpack "marcato", 0x1d17f),
--  -- (unpack "mar_stac", 0x1d180),
--  -- (unpack "acc_stac", 0x1d181),
--  -- (unpack "upbow", 0x1d1aa),
--  -- (unpack "downbow", 0x1d1ab),
--  (unpack "arpeggio", 0x1d183),
--  (unpack "subito", 0x1d18d),
--  (unpack "piano", 0x1d18f),
--  (unpack "mezzo", 0x1d190),
--  (unpack "forte", 0x1d191),
--  (unpack "crescendo", 0x1d192),
--  (unpack "decresc", 0x1d193),
--  (unpack "grace", 0x1d195),
--  (unpack "grace1", 0x1d194),
--  (unpack "trill", 0x1d196),
--  (unpack "turn", 0x1d197),
--  (unpack "trill0", 0x1d19c),
--  (unpack "trill1", 0x1d19d),
--  (unpack "pedal", 0x1d1ae),
--  (unpack "!pedal", 0x1d1af),
--  (unpack "pedal1", 0x1d1b0),
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
  -- Maps, Games & Signs
--  (unpack "kingw", 0x2654),
--  (unpack "queenw", 0x2655),
--  (unpack "rookw", 0x2656),
--  (unpack "bishopw", 0x2657),
--  (unpack "knightw", 0x2658),
--  (unpack "pawnw", 0x2659),
--  (unpack "kingb", 0x265a),
--  (unpack "queenb", 0x265b),
--  (unpack "rookb", 0x265c),
--  (unpack "bishopb", 0x265d),
--  (unpack "knightb", 0x265e),
--  (unpack "pawnb", 0x265f),
--  (unpack "heartw", 0x2661),
--  (unpack "diamondw", 0x2662),
--  (unpack "spadew", 0x2664),
--  (unpack "clubw", 0x2667),
--  (unpack "heartb", 0x2665),
--  (unpack "diamondb", 0x2666),
--  (unpack "spadeb", 0x2660),
--  (unpack "clubb", 0x2663),
--  (unpack "die1", 0x2680),
--  (unpack "die2", 0x2681),
--  (unpack "die3", 0x2682),
--  (unpack "die4", 0x2683),
--  (unpack "die5", 0x2684),
--  (unpack "die6", 0x2685),
--  (unpack "flagw", 0x2690),
--  (unpack "flagb", 0x2691),
--  (unpack "tools", 0x2692),
--  (unpack "anchor", 0x2693),
--  (unpack "swords", 0x2694),
--  (unpack "aesculapius", 0x2695),
--  (unpack "hermes", 0x269a),
--  (unpack "atom", 0x269b),
--  (unpack "warning", 0x26a0),
--  (unpack "highv", 0x26a1),
--  (unpack "crossshield", 0x26e8),
--  (unpack "shrine", 0x26e9),
--  (unpack "mountain", 0x26f0),
--  (unpack "skullcross", 0x2620),
--  (unpack "radioactive", 0x2622),
--  (unpack "biohazard", 0x2623),
--  (unpack "music", 0x266b),
--  (unpack "sunb", 0x2600),
--  (unpack "sunw", 0x263c),
--  (unpack "cloud", 0x2601),
--  (unpack "umbrella", 0x2602),
--  (unpack "rain", 0x2614),
--  (unpack "starw", 0x2606),
--  (unpack "starb", 0x2605),
--  (unpack "scales", 0x2696),
--  (unpack "beach", 0x26f1),
--  (unpack "ferry", 0x26f4),
--  (unpack "ski", 0x26f7),
--  (unpack "tent", 0x26fa),
--  (unpack "winde", 0x1f000),
--  (unpack "winds", 0x1f001),
--  (unpack "windw", 0x1f002),
--  (unpack "windn", 0x1f003),
--  (unpack "dragonr", 0x1f004),
--  (unpack "dragong", 0x1f005),
--  (unpack "dragonw", 0x1f006),
--  (unpack "char1", 0x1f007),
--  (unpack "char2", 0x1f008),
--  (unpack "char3", 0x1f009),
--  (unpack "char4", 0x1f00a),
--  (unpack "char5", 0x1f00b),
--  (unpack "char6", 0x1f00c),
--  (unpack "char7", 0x1f00d),
--  (unpack "char8", 0x1f00e),
--  (unpack "char9", 0x1f00f),
--  (unpack "bamboo1", 0x1f010),
--  (unpack "bamboo2", 0x1f011),
--  (unpack "bamboo3", 0x1f012),
--  (unpack "bamboo4", 0x1f013),
--  (unpack "bamboo5", 0x1f014),
--  (unpack "bamboo6", 0x1f015),
--  (unpack "bamboo7", 0x1f016),
--  (unpack "bamboo8", 0x1f017),
--  (unpack "bamboo9", 0x1f018),
--  (unpack "circ1", 0x1f019),
--  (unpack "circ2", 0x1f01a),
--  (unpack "circ3", 0x1f01b),
--  (unpack "circ4", 0x1f01c),
--  (unpack "circ5", 0x1f01d),
--  (unpack "circ6", 0x1f01e),
--  (unpack "circ7", 0x1f01f),
--  (unpack "circ8", 0x1f020),
--  (unpack "circ9", 0x1f021),
--  (unpack "plum", 0x1f022),
--  (unpack "orchid", 0x1f023),
--  (unpack "bamboo", 0x1f024),
--  (unpack "chrysanthemum", 0x1f025),
--  (unpack "spring", 0x1f026),
--  (unpack "summer", 0x1f027),
--  (unpack "autumn", 0x1f028),
--  (unpack "winter", 0x1f029),
--  (unpack "mahjoker", 0x1f02a),
--  (unpack "tileback", 0x1f02b),
--  (unpack "hback", 0x1f030),
--  (unpack "h00", 0x1f031),
--  (unpack "h01", 0x1f032),
--  (unpack "h02", 0x1f033),
--  (unpack "h03", 0x1f034),
--  (unpack "h04", 0x1f035),
--  (unpack "h05", 0x1f036),
--  (unpack "h06", 0x1f037),
--  (unpack "h10", 0x1f038),
--  (unpack "h11", 0x1f039),
--  (unpack "h12", 0x1f03a),
--  (unpack "h13", 0x1f03b),
--  (unpack "h14", 0x1f03c),
--  (unpack "h15", 0x1f03d),
--  (unpack "h16", 0x1f03e),
--  (unpack "h20", 0x1f03f),
--  (unpack "h21", 0x1f040),
--  (unpack "h22", 0x1f041),
--  (unpack "h23", 0x1f042),
--  (unpack "h24", 0x1f043),
--  (unpack "h25", 0x1f044),
--  (unpack "h26", 0x1f045),
--  (unpack "h30", 0x1f046),
--  (unpack "h31", 0x1f047),
--  (unpack "h32", 0x1f048),
--  (unpack "h33", 0x1f049),
--  (unpack "h34", 0x1f04a),
--  (unpack "h35", 0x1f04b),
--  (unpack "h36", 0x1f04c),
--  (unpack "h40", 0x1f04d),
--  (unpack "h41", 0x1f04e),
--  (unpack "h42", 0x1f04f),
--  (unpack "h43", 0x1f050),
--  (unpack "h44", 0x1f051),
--  (unpack "h45", 0x1f052),
--  (unpack "h46", 0x1f053),
--  (unpack "h50", 0x1f054),
--  (unpack "h51", 0x1f055),
--  (unpack "h52", 0x1f056),
--  (unpack "h53", 0x1f057),
--  (unpack "h54", 0x1f058),
--  (unpack "h55", 0x1f059),
--  (unpack "h56", 0x1f05a),
--  (unpack "h60", 0x1f05b),
--  (unpack "h61", 0x1f05c),
--  (unpack "h62", 0x1f05d),
--  (unpack "h63", 0x1f05e),
--  (unpack "h64", 0x1f05f),
--  (unpack "h65", 0x1f060),
--  (unpack "h66", 0x1f061),
--  (unpack "vback", 0x1f062),
--  (unpack "v00", 0x1f063),
--  (unpack "v01", 0x1f064),
--  (unpack "v02", 0x1f065),
--  (unpack "v03", 0x1f066),
--  (unpack "v04", 0x1f067),
--  (unpack "v05", 0x1f068),
--  (unpack "v06", 0x1f069),
--  (unpack "v10", 0x1f06a),
--  (unpack "v11", 0x1f06b),
--  (unpack "v12", 0x1f06c),
--  (unpack "v13", 0x1f06d),
--  (unpack "v14", 0x1f06e),
--  (unpack "v15", 0x1f06f),
--  (unpack "v16", 0x1f070),
--  (unpack "v20", 0x1f071),
--  (unpack "v21", 0x1f072),
--  (unpack "v22", 0x1f073),
--  (unpack "v23", 0x1f074),
--  (unpack "v24", 0x1f075),
--  (unpack "v25", 0x1f076),
--  (unpack "v26", 0x1f077),
--  (unpack "v30", 0x1f078),
--  (unpack "v31", 0x1f079),
--  (unpack "v32", 0x1f07a),
--  (unpack "v33", 0x1f07b),
--  (unpack "v34", 0x1f07c),
--  (unpack "v35", 0x1f07d),
--  (unpack "v36", 0x1f07e),
--  (unpack "v40", 0x1f07f),
--  (unpack "v41", 0x1f080),
--  (unpack "v42", 0x1f081),
--  (unpack "v43", 0x1f082),
--  (unpack "v44", 0x1f083),
--  (unpack "v45", 0x1f084),
--  (unpack "v46", 0x1f085),
--  (unpack "v50", 0x1f086),
--  (unpack "v51", 0x1f087),
--  (unpack "v52", 0x1f088),
--  (unpack "v53", 0x1f089),
--  (unpack "v54", 0x1f08a),
--  (unpack "v55", 0x1f08b),
--  (unpack "v56", 0x1f08c),
--  (unpack "v60", 0x1f08d),
--  (unpack "v61", 0x1f08e),
--  (unpack "v62", 0x1f08f),
--  (unpack "v63", 0x1f090),
--  (unpack "v64", 0x1f091),
--  (unpack "v65", 0x1f092),
--  (unpack "v66", 0x1f093),
--  (unpack "cardback", 0x1f0a0),
--  (unpack "spadea", 0x1f0a1),
--  (unpack "spade2", 0x1f0a2),
--  (unpack "spade3", 0x1f0a3),
--  (unpack "spade4", 0x1f0a4),
--  (unpack "spade5", 0x1f0a5),
--  (unpack "spade6", 0x1f0a6),
--  (unpack "spade7", 0x1f0a7),
--  (unpack "spade8", 0x1f0a8),
--  (unpack "spade9", 0x1f0a9),
--  (unpack "spade10", 0x1f0aa),
--  (unpack "spadej", 0x1f0ab),
--  (unpack "spadec", 0x1f0ac),
--  (unpack "spadeq", 0x1f0ad),
--  (unpack "spadek", 0x1f0ae),
--  (unpack "hearta", 0x1f0b1),
--  (unpack "heart2", 0x1f0b2),
--  (unpack "heart3", 0x1f0b3),
--  (unpack "heart4", 0x1f0b4),
--  (unpack "heart5", 0x1f0b5),
--  (unpack "heart6", 0x1f0b6),
--  (unpack "heart7", 0x1f0b7),
--  (unpack "heart8", 0x1f0b8),
--  (unpack "heart9", 0x1f0b9),
--  (unpack "heart10", 0x1f0ba),
--  (unpack "heartj", 0x1f0bb),
--  (unpack "heartc", 0x1f0bc),
--  (unpack "heartq", 0x1f0bd),
--  (unpack "heartk", 0x1f0be),
--  (unpack "diamonda", 0x1f0c1),
--  (unpack "diamond2", 0x1f0c2),
--  (unpack "diamond3", 0x1f0c3),
--  (unpack "diamond4", 0x1f0c4),
--  (unpack "diamond5", 0x1f0c5),
--  (unpack "diamond6", 0x1f0c6),
--  (unpack "diamond7", 0x1f0c7),
--  (unpack "diamond8", 0x1f0c8),
--  (unpack "diamond9", 0x1f0c9),
--  (unpack "diamond10", 0x1f0ca),
--  (unpack "diamondj", 0x1f0cb),
--  (unpack "diamondc", 0x1f0cc),
--  (unpack "diamondq", 0x1f0cd),
--  (unpack "diamondk", 0x1f0ce),
--  (unpack "cluba", 0x1f0d1),
--  (unpack "club2", 0x1f0d2),
--  (unpack "club3", 0x1f0d3),
--  (unpack "club4", 0x1f0d4),
--  (unpack "club5", 0x1f0d5),
--  (unpack "club6", 0x1f0d6),
--  (unpack "club7", 0x1f0d7),
--  (unpack "club8", 0x1f0d8),
--  (unpack "club9", 0x1f0d9),
--  (unpack "club10", 0x1f0da),
--  (unpack "clubj", 0x1f0db),
--  (unpack "clubc", 0x1f0dc),
--  (unpack "clubq", 0x1f0dd),
--  (unpack "clubk", 0x1f0de),
--  (unpack "jokerb", 0x1f0cf),
--  (unpack "jokerw", 0x1f0df),
--  (unpack "t0000", 0x1f55b),
--  (unpack "t0100", 0x1f550),
--  (unpack "t0200", 0x1f551),
--  (unpack "t0300", 0x1f552),
--  (unpack "t0400", 0x1f553),
--  (unpack "t0500", 0x1f554),
--  (unpack "t0600", 0x1f555),
--  (unpack "t0700", 0x1f556),
--  (unpack "t0800", 0x1f557),
--  (unpack "t0900", 0x1f558),
--  (unpack "t1000", 0x1f559),
--  (unpack "t1100", 0x1f55a),
--  (unpack "t0030", 0x1f567),
--  (unpack "t0130", 0x1f55c),
--  (unpack "t0230", 0x1f55d),
--  (unpack "t0330", 0x1f55e),
--  (unpack "t0430", 0x1f55f),
--  (unpack "t0530", 0x1f560),
--  (unpack "t0630", 0x1f561),
--  (unpack "t0730", 0x1f562),
--  (unpack "t0830", 0x1f563),
--  (unpack "t0930", 0x1f564),
--  (unpack "t1030", 0x1f565),
--  (unpack "t1130", 0x1f566),
--  -- Alchemy, Gender, Astrology
--  (unpack "sol", 0x2609),
--  (unpack "mercury", 0x263f),
--  (unpack "venus", 0x2640),
--  (unpack "terra", 0x2641),
--  (unpack "mars", 0x2642),
--  (unpack "jupiter", 0x2643),
--  (unpack "saturn", 0x2644),
--  (unpack "uranus", 0x2645),
--  (unpack "neptune", 0x2646),
--  (unpack "pluto", 0x2647),
--  (unpack "aries", 0x2648),
--  (unpack "taurus", 0x2649),
--  (unpack "gemini", 0x264a),
--  (unpack "cancer", 0x264b),
--  (unpack "leo", 0x264c),
--  (unpack "virgo", 0x264d),
--  (unpack "libra", 0x264e),
--  (unpack "scorpius", 0x264f),
--  (unpack "sagittarius", 0x2650),
--  (unpack "capricorn", 0x2651),
--  (unpack "aquarius", 0x2652),
--  (unpack "pisces", 0x2653),
--  (unpack "wlw", 0x26a2),
--  (unpack "mlm", 0x26a3),
--  (unpack "het", 0x26a4),
--  (unpack "trans", 0x26a7),
--  (unpack "nb", 0x26a8),
--  (unpack "agender", 0x26b2),
--  (unpack "ceres", 0x26b3),
--  (unpack "pallas", 0x26b4),
--  (unpack "juno", 0x26b5),
--  (unpack "vesta", 0x26b6),
--  (unpack "chiron", 0x26b7),
--  (unpack "lilith", 0x26b8),
--  (unpack "air", 0x1f701),
--  (unpack "fire", 0x1f702),
--  (unpack "earth", 0x1f703),
--  (unpack "water", 0x1f704),
--  (unpack "sulfur", 0x1f70d),
--  (unpack "salt", 0x1f714),
--  (unpack "copper", 0x1f722),
--  (unpack "antimony", 0x1f72c),
--  (unpack "gold", 0x1f71a),
--  (unpack "silver", 0x1f71b),
--  (unpack "moon1", 0x1f311),
--  (unpack "moon2", 0x1f312),
--  (unpack "moon3", 0x1f313),
--  (unpack "moon4", 0x1f314),
--  (unpack "moon5", 0x1f315),
--  (unpack "moon6", 0x1f316),
--  (unpack "moon7", 0x1f317),
--  (unpack "moon8", 0x1f318),
--  -- Groups
--  (unpack "caduceus", 0x2624),
--  (unpack "ankh", 0x2625),
--  (unpack "islam", 0x262a),
--  (unpack "comm", 0x262d),
--  (unpack "peace", 0x262e),
--  (unpack "yy", 0x262f),
--  (unpack "dharma", 0x2638),
--  (unpack "recycle", 0x267b),
--  (unpack "penta", 0x26e4),
--  (unpack "pentar", 0x26e5),
--  (unpack "pental", 0x26e6),
--  (unpack "!penta", 0x26e7),
--  (unpack "om", 0x1f549),
--  (unpack "crossl", 0x1f547),
--  (unpack "crosso", 0x1f546),
--  (unpack "crossc", 0x1f548),
--  (unpack "crossj", 0x2629),
--  (unpack "crossm", 0x2720),
--  (unpack "6star", 0x2721)]

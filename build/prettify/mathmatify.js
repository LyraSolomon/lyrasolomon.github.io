"use strict";

(function(){

const $JSRTS = {
    throw: function (x) {
        throw x;
    },
    Lazy: function (e) {
        this.js_idris_lazy_calc = e;
        this.js_idris_lazy_val = void 0;
    },
    force: function (x) {
        if (x === undefined || x.js_idris_lazy_calc === undefined) {
            return x
        } else {
            if (x.js_idris_lazy_val === undefined) {
                x.js_idris_lazy_val = x.js_idris_lazy_calc()
            }
            return x.js_idris_lazy_val
        }
    },
    prim_strSubstr: function (offset, len, str) {
        return str.substr(Math.max(0, offset), Math.max(0, len))
    }
};
$JSRTS.prim_systemInfo = function (index) {
    switch (index) {
        case 0:
            return "javascript";
        case 1:
            return navigator.platform;
    }
    return "";
};

$JSRTS.prim_writeStr = function (x) { return console.log(x) };

$JSRTS.prim_readStr = function () { return prompt('Prelude.getLine') };

$JSRTS.die = function (message) { throw new Error(message) };



function $partial_0_2$prim_95__95_strCons(){
    return (function(x1){
        return (function(x2){
            return prim_95__95_strCons(x1, x2);
        });
    });
}

function $partial_0_1$Main__getUnicode(){
    return (function(x1){
        return Main__getUnicode(x1);
    });
}

function $partial_0_2$Data__SortedMap___123_fromList_95_0_125_(){
    return (function(x1){
        return (function(x2){
            return Data__SortedMap___123_fromList_95_0_125_(x1, x2);
        });
    });
}

function $partial_0_1$Main___123_lookupSymbol_95_1_125_(){
    return (function(x1){
        return Main___123_lookupSymbol_95_1_125_(x1);
    });
}

function $partial_0_2$Main___123_subTable_95_3_125_(){
    return (function(x1){
        return (function(x2){
            return Main___123_subTable_95_3_125_(x1, x2);
        });
    });
}

function $partial_0_2$Main___123_subTable_95_4_125_(){
    return (function(x1){
        return (function(x2){
            return Main___123_subTable_95_4_125_(x1, x2);
        });
    });
}

function $partial_0_2$Main___123_subTable_95_5_125_(){
    return (function(x1){
        return (function(x2){
            return Main___123_subTable_95_5_125_(x1, x2);
        });
    });
}

function $partial_0_2$Main___123_subTable_95_6_125_(){
    return (function(x1){
        return (function(x2){
            return Main___123_subTable_95_6_125_(x1, x2);
        });
    });
}

function $partial_0_2$Main___123_symbolTable_95_13_125_(){
    return (function(x1){
        return (function(x2){
            return Main___123_symbolTable_95_13_125_(x1, x2);
        });
    });
}

function $partial_0_2$Main___123_symbolTable_95_16_125_(){
    return (function(x1){
        return (function(x2){
            return Main___123_symbolTable_95_16_125_(x1, x2);
        });
    });
}

function $partial_0_2$Main___123_symbolTable_95_21_125_(){
    return (function(x1){
        return (function(x2){
            return Main___123_symbolTable_95_21_125_(x1, x2);
        });
    });
}

function $partial_0_2$Main___123_symbolTable_95_26_125_(){
    return (function(x1){
        return (function(x2){
            return Main___123_symbolTable_95_26_125_(x1, x2);
        });
    });
}

const $HC_0_0$MkUnit = ({type: 0});
function $HC_2_1$Prelude__List___58__58_($1, $2){
    this.type = 1;
    this.$1 = $1;
    this.$2 = $2;
}

const $HC_0_2$Main__Arabic = ({type: 2});
function $HC_3_1$Data__SortedMap__Branch2($1, $2, $3){
    this.type = 1;
    this.$1 = $1;
    this.$2 = $2;
    this.$3 = $3;
}

function $HC_5_2$Data__SortedMap__Branch3($1, $2, $3, $4, $5){
    this.type = 2;
    this.$1 = $1;
    this.$2 = $2;
    this.$3 = $3;
    this.$4 = $4;
    this.$5 = $5;
}

function $HC_6_1$Main__Character($1, $2, $3, $4, $5, $6){
    this.type = 1;
    this.$1 = $1;
    this.$2 = $2;
    this.$3 = $3;
    this.$4 = $4;
    this.$5 = $5;
    this.$6 = $6;
}

const $HC_0_3$Main__Doublestrike = ({type: 3});
function $HC_1_0$Data__SortedMap__Empty($1){
    this.type = 0;
    this.$1 = $1;
}

const $HC_0_2$Main__Fraktur = ({type: 2});
const $HC_0_0$Main__Greek = ({type: 0});
function $HC_1_1$Prelude__Maybe__Just($1){
    this.type = 1;
    this.$1 = $1;
}

const $HC_0_1$Main__Latin = ({type: 1});
function $HC_2_0$Data__SortedMap__Leaf($1, $2){
    this.type = 0;
    this.$1 = $1;
    this.$2 = $2;
}

function $HC_1_0$Prelude__Either__Left($1){
    this.type = 0;
    this.$1 = $1;
}

function $HC_2_1$Data__SortedMap__M($1, $2){
    this.type = 1;
    this.$1 = $1;
    this.$2 = $2;
}

function $HC_2_0$Builtins__MkPair($1, $2){
    this.type = 0;
    this.$1 = $1;
    this.$2 = $2;
}

const $HC_0_5$Main__Mono = ({type: 5});
const $HC_0_0$Prelude__List__Nil = ({type: 0});
const $HC_0_1$Prelude__Basics__No = ({type: 1});
const $HC_0_0$Main__Normal = ({type: 0});
const $HC_0_0$Prelude__Maybe__Nothing = ({type: 0});
function $HC_1_1$Prelude__Either__Right($1){
    this.type = 1;
    this.$1 = $1;
}

const $HC_0_4$Main__Sans = ({type: 4});
const $HC_0_1$Main__Script = ({type: 1});
function $HC_2_1$Prelude__Strings__StrCons($1, $2){
    this.type = 1;
    this.$1 = $1;
    this.$2 = $2;
}

const $HC_0_0$Prelude__Strings__StrNil = ({type: 0});
function $HC_1_0$Main__Symbol($1){
    this.type = 0;
    this.$1 = $1;
}

const $HC_0_0$Prelude__Basics__Yes = ({type: 0});
function $HC_2_0$Prelude__Interfaces__Eq_95_ictor($1, $2){
    this.type = 0;
    this.$1 = $1;
    this.$2 = $2;
}

function $HC_3_0$Prelude__Interfaces__Ord_95_ictor($1, $2, $3){
    this.type = 0;
    this.$1 = $1;
    this.$2 = $2;
    this.$3 = $3;
}

// prim__strCons

function prim_95__95_strCons($_0_arg, $_1_arg){
    return (($_0_arg)+($_1_arg));
}

// Prelude.Chars.chr

function Prelude__Chars__chr($_0_arg){
    let $cg$1 = null;
    if((((($_0_arg >= 0)) ? 1|0 : 0|0) === 0)) {
        $cg$1 = false;
    } else {
        $cg$1 = ($_0_arg < 1114112);
    }
    
    
    if($cg$1) {
        return String.fromCharCode($_0_arg);
    } else {
        return "\x00";
    }
}

// Prelude.List.dropWhile

function Prelude__List__dropWhile($_0_arg, $_1_arg, $_2_arg){
    for(;;) {
        
        if(($_2_arg.type === 1)) {
            
            if($_1_arg($_2_arg.$1)) {
                $_0_arg = null;
                $_1_arg = $_1_arg;
                $_2_arg = $_2_arg.$2;
            } else {
                return new $HC_2_1$Prelude__List___58__58_($_2_arg.$1, $_2_arg.$2);
            }
        } else {
            return $_2_arg;
        }
    }
}

// Data.SortedMap.fromList

function Data__SortedMap__fromList($_0_arg, $_1_arg, $_2_arg, $_3_arg){
    return Prelude__Foldable__Prelude__List___64_Prelude__Foldable__Foldable_36_List_58__33_foldl_58_0(null, null, $partial_0_2$Data__SortedMap___123_fromList_95_0_125_(), new $HC_1_0$Data__SortedMap__Empty($_2_arg), $_3_arg);
}

// Main.getUnicode

function Main__getUnicode($_0_arg){
    
    if(($_0_arg.type === 1)) {
        const $cg$3 = $_0_arg.$1;
        if(($cg$3.type === 2)) {
            const $cg$72 = $_0_arg.$2;
            if(($cg$72.type === 3)) {
                let $cg$80 = null;
                if((((($_0_arg.$6 > 9)) ? 1|0 : 0|0) === 0)) {
                    $cg$80 = (120792 + $_0_arg.$6);
                } else {
                    $cg$80 = 65533;
                }
                
                return Prelude__Chars__chr($cg$80);
            } else if(($cg$72.type === 5)) {
                let $cg$79 = null;
                if((((($_0_arg.$6 > 9)) ? 1|0 : 0|0) === 0)) {
                    $cg$79 = (120822 + $_0_arg.$6);
                } else {
                    $cg$79 = 65533;
                }
                
                return Prelude__Chars__chr($cg$79);
            } else if(($cg$72.type === 0)) {
                
                if($_0_arg.$3) {
                    let $cg$78 = null;
                    if((((($_0_arg.$6 > 9)) ? 1|0 : 0|0) === 0)) {
                        $cg$78 = (120782 + $_0_arg.$6);
                    } else {
                        $cg$78 = 65533;
                    }
                    
                    return Prelude__Chars__chr($cg$78);
                } else {
                    return Prelude__Chars__chr((48 + $_0_arg.$6));
                }
            } else if(($cg$72.type === 4)) {
                const $cg$74 = $_0_arg.$3;
                if((!$cg$74)) {
                    let $cg$76 = null;
                    if((((($_0_arg.$6 > 9)) ? 1|0 : 0|0) === 0)) {
                        $cg$76 = (120802 + $_0_arg.$6);
                    } else {
                        $cg$76 = 65533;
                    }
                    
                    return Prelude__Chars__chr($cg$76);
                } else if($cg$74) {
                    let $cg$75 = null;
                    if((((($_0_arg.$6 > 9)) ? 1|0 : 0|0) === 0)) {
                        $cg$75 = (120812 + $_0_arg.$6);
                    } else {
                        $cg$75 = 65533;
                    }
                    
                    return Prelude__Chars__chr($cg$75);
                } else {
                    return Prelude__Chars__chr((48 + $_0_arg.$6));
                }
            } else {
                return Prelude__Chars__chr((48 + $_0_arg.$6));
            }
        } else if(($cg$3.type === 0)) {
            const $cg$53 = $_0_arg.$2;
            if(($cg$53.type === 0)) {
                const $cg$61 = $_0_arg.$3;
                if((!$cg$61)) {
                    
                    if($_0_arg.$4) {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((120546 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((120572 + $_0_arg.$6));
                        }
                    } else {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((913 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((945 + $_0_arg.$6));
                        }
                    }
                } else if($cg$61) {
                    const $cg$64 = $_0_arg.$4;
                    if((!$cg$64)) {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((120488 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((120514 + $_0_arg.$6));
                        }
                    } else if($cg$64) {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((120604 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((120630 + $_0_arg.$6));
                        }
                    } else {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((913 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((945 + $_0_arg.$6));
                        }
                    }
                } else {
                    
                    if($_0_arg.$5) {
                        return Prelude__Chars__chr((913 + $_0_arg.$6));
                    } else {
                        return Prelude__Chars__chr((945 + $_0_arg.$6));
                    }
                }
            } else if(($cg$53.type === 4)) {
                const $cg$56 = $_0_arg.$4;
                if((!$cg$56)) {
                    
                    if($_0_arg.$5) {
                        return Prelude__Chars__chr((120662 + $_0_arg.$6));
                    } else {
                        return Prelude__Chars__chr((120688 + $_0_arg.$6));
                    }
                } else if($cg$56) {
                    
                    if($_0_arg.$5) {
                        return Prelude__Chars__chr((120720 + $_0_arg.$6));
                    } else {
                        return Prelude__Chars__chr((120746 + $_0_arg.$6));
                    }
                } else {
                    
                    if($_0_arg.$5) {
                        return Prelude__Chars__chr((913 + $_0_arg.$6));
                    } else {
                        return Prelude__Chars__chr((945 + $_0_arg.$6));
                    }
                }
            } else {
                
                if($_0_arg.$5) {
                    return Prelude__Chars__chr((913 + $_0_arg.$6));
                } else {
                    return Prelude__Chars__chr((945 + $_0_arg.$6));
                }
            }
        } else {
            const $cg$5 = $_0_arg.$2;
            if(($cg$5.type === 3)) {
                
                if($_0_arg.$5) {
                    const $cg$51 = $_0_arg.$6;
                    if(($cg$51 === 2)) {
                        return Prelude__Chars__chr(8450);
                    } else if(($cg$51 === 7)) {
                        return Prelude__Chars__chr(8461);
                    } else if(($cg$51 === 13)) {
                        return Prelude__Chars__chr(8469);
                    } else if(($cg$51 === 15)) {
                        return Prelude__Chars__chr(8473);
                    } else if(($cg$51 === 16)) {
                        return Prelude__Chars__chr(8474);
                    } else if(($cg$51 === 17)) {
                        return Prelude__Chars__chr(8477);
                    } else if(($cg$51 === 25)) {
                        return Prelude__Chars__chr(8484);
                    } else {
                        return Prelude__Chars__chr((120120 + $_0_arg.$6));
                    }
                } else {
                    return Prelude__Chars__chr((120146 + $_0_arg.$6));
                }
            } else if(($cg$5.type === 2)) {
                const $cg$43 = $_0_arg.$3;
                if((!$cg$43)) {
                    
                    if($_0_arg.$5) {
                        const $cg$48 = $_0_arg.$6;
                        if(($cg$48 === 2)) {
                            return Prelude__Chars__chr(8493);
                        } else if(($cg$48 === 7)) {
                            return Prelude__Chars__chr(8460);
                        } else if(($cg$48 === 8)) {
                            return Prelude__Chars__chr(8465);
                        } else if(($cg$48 === 17)) {
                            return Prelude__Chars__chr(8476);
                        } else if(($cg$48 === 25)) {
                            return Prelude__Chars__chr(8488);
                        } else {
                            return Prelude__Chars__chr((120068 + $_0_arg.$6));
                        }
                    } else {
                        return Prelude__Chars__chr((120094 + $_0_arg.$6));
                    }
                } else if($cg$43) {
                    
                    if($_0_arg.$5) {
                        return Prelude__Chars__chr((120172 + $_0_arg.$6));
                    } else {
                        return Prelude__Chars__chr((120198 + $_0_arg.$6));
                    }
                } else {
                    
                    if($_0_arg.$5) {
                        return Prelude__Chars__chr((65 + $_0_arg.$6));
                    } else {
                        return Prelude__Chars__chr((97 + $_0_arg.$6));
                    }
                }
            } else if(($cg$5.type === 5)) {
                
                if($_0_arg.$5) {
                    return Prelude__Chars__chr((120432 + $_0_arg.$6));
                } else {
                    return Prelude__Chars__chr((120458 + $_0_arg.$6));
                }
            } else if(($cg$5.type === 0)) {
                const $cg$30 = $_0_arg.$3;
                if((!$cg$30)) {
                    
                    if($_0_arg.$4) {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((119860 + $_0_arg.$6));
                        } else {
                            
                            if(($_0_arg.$6 === 7)) {
                                return Prelude__Chars__chr(120361);
                            } else {
                                return Prelude__Chars__chr((119886 + $_0_arg.$6));
                            }
                        }
                    } else {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((65 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((97 + $_0_arg.$6));
                        }
                    }
                } else if($cg$30) {
                    const $cg$33 = $_0_arg.$4;
                    if((!$cg$33)) {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((119808 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((119834 + $_0_arg.$6));
                        }
                    } else if($cg$33) {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((119912 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((119938 + $_0_arg.$6));
                        }
                    } else {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((65 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((97 + $_0_arg.$6));
                        }
                    }
                } else {
                    
                    if($_0_arg.$5) {
                        return Prelude__Chars__chr((65 + $_0_arg.$6));
                    } else {
                        return Prelude__Chars__chr((97 + $_0_arg.$6));
                    }
                }
            } else if(($cg$5.type === 4)) {
                const $cg$17 = $_0_arg.$3;
                if((!$cg$17)) {
                    const $cg$25 = $_0_arg.$4;
                    if((!$cg$25)) {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((120224 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((120250 + $_0_arg.$6));
                        }
                    } else if($cg$25) {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((120328 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((120354 + $_0_arg.$6));
                        }
                    } else {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((65 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((97 + $_0_arg.$6));
                        }
                    }
                } else if($cg$17) {
                    const $cg$20 = $_0_arg.$4;
                    if((!$cg$20)) {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((120276 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((120302 + $_0_arg.$6));
                        }
                    } else if($cg$20) {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((120380 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((120406 + $_0_arg.$6));
                        }
                    } else {
                        
                        if($_0_arg.$5) {
                            return Prelude__Chars__chr((65 + $_0_arg.$6));
                        } else {
                            return Prelude__Chars__chr((97 + $_0_arg.$6));
                        }
                    }
                } else {
                    
                    if($_0_arg.$5) {
                        return Prelude__Chars__chr((65 + $_0_arg.$6));
                    } else {
                        return Prelude__Chars__chr((97 + $_0_arg.$6));
                    }
                }
            } else if(($cg$5.type === 1)) {
                const $cg$8 = $_0_arg.$3;
                if((!$cg$8)) {
                    
                    if($_0_arg.$5) {
                        const $cg$15 = $_0_arg.$6;
                        if(($cg$15 === 1)) {
                            return Prelude__Chars__chr(8492);
                        } else if(($cg$15 === 4)) {
                            return Prelude__Chars__chr(8496);
                        } else if(($cg$15 === 5)) {
                            return Prelude__Chars__chr(8497);
                        } else if(($cg$15 === 7)) {
                            return Prelude__Chars__chr(8459);
                        } else if(($cg$15 === 8)) {
                            return Prelude__Chars__chr(8464);
                        } else if(($cg$15 === 11)) {
                            return Prelude__Chars__chr(8466);
                        } else if(($cg$15 === 12)) {
                            return Prelude__Chars__chr(8499);
                        } else if(($cg$15 === 15)) {
                            return Prelude__Chars__chr(8472);
                        } else if(($cg$15 === 17)) {
                            return Prelude__Chars__chr(8475);
                        } else {
                            return Prelude__Chars__chr((119964 + $_0_arg.$6));
                        }
                    } else {
                        const $cg$13 = $_0_arg.$6;
                        if(($cg$13 === 4)) {
                            return Prelude__Chars__chr(8495);
                        } else if(($cg$13 === 6)) {
                            return Prelude__Chars__chr(8617);
                        } else if(($cg$13 === 14)) {
                            return Prelude__Chars__chr(8500);
                        } else {
                            return Prelude__Chars__chr((119990 + $_0_arg.$6));
                        }
                    }
                } else if($cg$8) {
                    
                    if($_0_arg.$5) {
                        return Prelude__Chars__chr((120016 + $_0_arg.$6));
                    } else {
                        return Prelude__Chars__chr((120042 + $_0_arg.$6));
                    }
                } else {
                    
                    if($_0_arg.$5) {
                        return Prelude__Chars__chr((65 + $_0_arg.$6));
                    } else {
                        return Prelude__Chars__chr((97 + $_0_arg.$6));
                    }
                }
            } else {
                
                if($_0_arg.$5) {
                    return Prelude__Chars__chr((65 + $_0_arg.$6));
                } else {
                    return Prelude__Chars__chr((97 + $_0_arg.$6));
                }
            }
        }
    } else {
        return Prelude__Chars__chr($_0_arg.$1);
    }
}

// Data.SortedMap.insert

function Data__SortedMap__insert($_0_arg, $_1_arg, $_2_arg, $_3_arg, $_4_arg){
    
    if(($_4_arg.type === 0)) {
        return new $HC_2_1$Data__SortedMap__M($_4_arg.$1, new $HC_2_0$Data__SortedMap__Leaf($_2_arg, $_3_arg));
    } else {
        const $cg$3 = Data__SortedMap__treeInsert(null, null, $_4_arg.$1, null, $_2_arg, $_3_arg, $_4_arg.$2);
        if(($cg$3.type === 0)) {
            return new $HC_2_1$Data__SortedMap__M($_4_arg.$1, $cg$3.$1);
        } else {
            return new $HC_2_1$Data__SortedMap__M($_4_arg.$1, $cg$3.$1);
        }
    }
}

// Main.lookupSymbol

function Main__lookupSymbol($_0_arg){
    const $cg$2 = Main__symbolTable();
    let $cg$1 = null;
    if(($cg$2.type === 0)) {
        $cg$1 = $HC_0_0$Prelude__Maybe__Nothing;
    } else {
        $cg$1 = Data__SortedMap__treeLookup(null, null, $cg$2.$1, null, Prelude__List__takeWhile(null, $partial_0_1$Main___123_lookupSymbol_95_1_125_(), $_0_arg), $cg$2.$2);
    }
    
    let $cg$3 = null;
    if(($cg$1.type === 1)) {
        $cg$3 = $cg$1.$1;
    } else {
        $cg$3 = 65533;
    }
    
    const $cg$5 = Prelude__List__dropWhile(null, $partial_0_1$Main___123_lookupSymbol_95_1_125_(), $_0_arg);
    let $cg$4 = null;
    if(($cg$5.type === 1)) {
        $cg$4 = $cg$5.$2;
    } else {
        $cg$4 = $HC_0_0$Prelude__List__Nil;
    }
    
    return new $HC_2_0$Builtins__MkPair($cg$3, $cg$4);
}

// Main.main

function Main__main($_0_in){
    const $_1_in = $JSRTS.prim_writeStr(Main__mathify("" + ignore(mathify = Main__mathify) + ""));
    return $HC_0_0$MkUnit;
}

// Main.mathify

function Main__mathify($_36_in){
    let $cg$1 = null;
    if((((($_36_in == "")) ? 1|0 : 0|0) === 0)) {
        $cg$1 = true;
    } else {
        $cg$1 = false;
    }
    
    let $cg$2 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$1, true).type === 1)) {
        $cg$2 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$3 = null;
        if((((($_36_in.slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$3 = true;
        } else {
            $cg$3 = false;
        }
        
        let $cg$4 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$3, true).type === 1)) {
            $cg$4 = $HC_0_0$Prelude__List__Nil;
        } else {
            let $cg$5 = null;
            if((((($_36_in.slice(1).slice(1) == "")) ? 1|0 : 0|0) === 0)) {
                $cg$5 = true;
            } else {
                $cg$5 = false;
            }
            
            let $cg$6 = null;
            if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$5, true).type === 1)) {
                $cg$6 = $HC_0_0$Prelude__List__Nil;
            } else {
                let $cg$7 = null;
                if((((($_36_in.slice(1).slice(1).slice(1) == "")) ? 1|0 : 0|0) === 0)) {
                    $cg$7 = true;
                } else {
                    $cg$7 = false;
                }
                
                let $cg$8 = null;
                if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$7, true).type === 1)) {
                    $cg$8 = $HC_0_0$Prelude__List__Nil;
                } else {
                    let $cg$9 = null;
                    if((((($_36_in.slice(1).slice(1).slice(1).slice(1) == "")) ? 1|0 : 0|0) === 0)) {
                        $cg$9 = true;
                    } else {
                        $cg$9 = false;
                    }
                    
                    let $cg$10 = null;
                    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$9, true).type === 1)) {
                        $cg$10 = $HC_0_0$Prelude__List__Nil;
                    } else {
                        let $cg$11 = null;
                        if((((($_36_in.slice(1).slice(1).slice(1).slice(1).slice(1) == "")) ? 1|0 : 0|0) === 0)) {
                            $cg$11 = true;
                        } else {
                            $cg$11 = false;
                        }
                        
                        let $cg$12 = null;
                        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$11, true).type === 1)) {
                            $cg$12 = $HC_0_0$Prelude__List__Nil;
                        } else {
                            let $cg$13 = null;
                            if((((($_36_in.slice(1).slice(1).slice(1).slice(1).slice(1).slice(1) == "")) ? 1|0 : 0|0) === 0)) {
                                $cg$13 = true;
                            } else {
                                $cg$13 = false;
                            }
                            
                            let $cg$14 = null;
                            if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$13, true).type === 1)) {
                                $cg$14 = $HC_0_0$Prelude__List__Nil;
                            } else {
                                $cg$14 = new $HC_2_1$Prelude__List___58__58_($_36_in.slice(1).slice(1).slice(1).slice(1).slice(1).slice(1)[0], Prelude__Strings__unpack($_36_in.slice(1).slice(1).slice(1).slice(1).slice(1).slice(1).slice(1)));
                            }
                            
                            $cg$12 = new $HC_2_1$Prelude__List___58__58_($_36_in.slice(1).slice(1).slice(1).slice(1).slice(1)[0], $cg$14);
                        }
                        
                        $cg$10 = new $HC_2_1$Prelude__List___58__58_($_36_in.slice(1).slice(1).slice(1).slice(1)[0], $cg$12);
                    }
                    
                    $cg$8 = new $HC_2_1$Prelude__List___58__58_($_36_in.slice(1).slice(1).slice(1)[0], $cg$10);
                }
                
                $cg$6 = new $HC_2_1$Prelude__List___58__58_($_36_in.slice(1).slice(1)[0], $cg$8);
            }
            
            $cg$4 = new $HC_2_1$Prelude__List___58__58_($_36_in.slice(1)[0], $cg$6);
        }
        
        $cg$2 = new $HC_2_1$Prelude__List___58__58_($_36_in[0], $cg$4);
    }
    
    return Prelude__Foldable__Prelude__List___64_Prelude__Foldable__Foldable_36_List_58__33_foldr_58_0(null, null, $partial_0_2$prim_95__95_strCons(), "", Prelude__Functor__Prelude__List___64_Prelude__Functor__Functor_36_List_58__33_map_58_0(null, null, $partial_0_1$Main__getUnicode(), Main__parse_39_(new $HC_2_0$Builtins__MkPair($HC_0_0$Main__Normal, new $HC_2_0$Builtins__MkPair(false, false)), $cg$2)));
}

// Main.parse'

function Main__parse_39_($_0_arg, $_1_arg){
    for(;;) {
        
        if(($_1_arg.type === 1)) {
            const $cg$3 = $_1_arg.$1;
            if(($cg$3 === "!")) {
                const $cg$5 = $_1_arg.$2;
                if(($cg$5.type === 1)) {
                    const $cg$16 = $cg$5.$1;
                    if(($cg$16 === "!")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(172), Main__parse_39_($_0_arg, $cg$5.$2));
                    } else if(($cg$16 === "&")) {
                        const $cg$18 = $cg$5.$2;
                        if(($cg$18.type === 1)) {
                            
                            if(($cg$18.$1 === "&")) {
                                return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8892), Main__parse_39_($_0_arg, $cg$18.$2));
                            } else {
                                
                                const $cg$31 = $_0_arg.$2;
                                const $_12_in = (($_1_arg.$1).charCodeAt(0)|0);
                                let $cg$32 = null;
                                if((((($_12_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                    $cg$32 = false;
                                } else {
                                    $cg$32 = ($_12_in <= 57);
                                }
                                
                                let $cg$33 = null;
                                if($cg$32) {
                                    $cg$33 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$31.$1, $cg$31.$2, false, ($_12_in - 48));
                                } else {
                                    let $cg$34 = null;
                                    if((((($_12_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                        $cg$34 = false;
                                    } else {
                                        $cg$34 = ($_12_in <= 90);
                                    }
                                    
                                    
                                    if($cg$34) {
                                        $cg$33 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$31.$1, $cg$31.$2, true, ($_12_in - 65));
                                    } else {
                                        let $cg$36 = null;
                                        if((((($_12_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                            $cg$36 = false;
                                        } else {
                                            $cg$36 = ($_12_in <= 122);
                                        }
                                        
                                        
                                        if($cg$36) {
                                            $cg$33 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$31.$1, $cg$31.$2, false, ($_12_in - 97));
                                        } else {
                                            $cg$33 = new $HC_1_0$Main__Symbol($_12_in);
                                        }
                                    }
                                }
                                
                                return new $HC_2_1$Prelude__List___58__58_($cg$33, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$31.$1, $cg$31.$2)), $_1_arg.$2));
                            }
                        } else {
                            
                            const $cg$21 = $_0_arg.$2;
                            const $_17_in = (($_1_arg.$1).charCodeAt(0)|0);
                            let $cg$22 = null;
                            if((((($_17_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                $cg$22 = false;
                            } else {
                                $cg$22 = ($_17_in <= 57);
                            }
                            
                            let $cg$23 = null;
                            if($cg$22) {
                                $cg$23 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$21.$1, $cg$21.$2, false, ($_17_in - 48));
                            } else {
                                let $cg$24 = null;
                                if((((($_17_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                    $cg$24 = false;
                                } else {
                                    $cg$24 = ($_17_in <= 90);
                                }
                                
                                
                                if($cg$24) {
                                    $cg$23 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$21.$1, $cg$21.$2, true, ($_17_in - 65));
                                } else {
                                    let $cg$26 = null;
                                    if((((($_17_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                        $cg$26 = false;
                                    } else {
                                        $cg$26 = ($_17_in <= 122);
                                    }
                                    
                                    
                                    if($cg$26) {
                                        $cg$23 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$21.$1, $cg$21.$2, false, ($_17_in - 97));
                                    } else {
                                        $cg$23 = new $HC_1_0$Main__Symbol($_17_in);
                                    }
                                }
                            }
                            
                            return new $HC_2_1$Prelude__List___58__58_($cg$23, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$21.$1, $cg$21.$2)), $_1_arg.$2));
                        }
                    } else if(($cg$16 === "=")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8800), Main__parse_39_($_0_arg, $cg$5.$2));
                    } else if(($cg$16 === "?")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8253), Main__parse_39_($_0_arg, $cg$5.$2));
                    } else if(($cg$16 === "|")) {
                        const $cg$39 = $cg$5.$2;
                        if(($cg$39.type === 1)) {
                            
                            if(($cg$39.$1 === "|")) {
                                return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8893), Main__parse_39_($_0_arg, $cg$39.$2));
                            } else {
                                
                                const $cg$52 = $_0_arg.$2;
                                const $_24_in = (($_1_arg.$1).charCodeAt(0)|0);
                                let $cg$53 = null;
                                if((((($_24_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                    $cg$53 = false;
                                } else {
                                    $cg$53 = ($_24_in <= 57);
                                }
                                
                                let $cg$54 = null;
                                if($cg$53) {
                                    $cg$54 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$52.$1, $cg$52.$2, false, ($_24_in - 48));
                                } else {
                                    let $cg$55 = null;
                                    if((((($_24_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                        $cg$55 = false;
                                    } else {
                                        $cg$55 = ($_24_in <= 90);
                                    }
                                    
                                    
                                    if($cg$55) {
                                        $cg$54 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$52.$1, $cg$52.$2, true, ($_24_in - 65));
                                    } else {
                                        let $cg$57 = null;
                                        if((((($_24_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                            $cg$57 = false;
                                        } else {
                                            $cg$57 = ($_24_in <= 122);
                                        }
                                        
                                        
                                        if($cg$57) {
                                            $cg$54 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$52.$1, $cg$52.$2, false, ($_24_in - 97));
                                        } else {
                                            $cg$54 = new $HC_1_0$Main__Symbol($_24_in);
                                        }
                                    }
                                }
                                
                                return new $HC_2_1$Prelude__List___58__58_($cg$54, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$52.$1, $cg$52.$2)), $_1_arg.$2));
                            }
                        } else {
                            
                            const $cg$42 = $_0_arg.$2;
                            const $_29_in = (($_1_arg.$1).charCodeAt(0)|0);
                            let $cg$43 = null;
                            if((((($_29_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                $cg$43 = false;
                            } else {
                                $cg$43 = ($_29_in <= 57);
                            }
                            
                            let $cg$44 = null;
                            if($cg$43) {
                                $cg$44 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$42.$1, $cg$42.$2, false, ($_29_in - 48));
                            } else {
                                let $cg$45 = null;
                                if((((($_29_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                    $cg$45 = false;
                                } else {
                                    $cg$45 = ($_29_in <= 90);
                                }
                                
                                
                                if($cg$45) {
                                    $cg$44 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$42.$1, $cg$42.$2, true, ($_29_in - 65));
                                } else {
                                    let $cg$47 = null;
                                    if((((($_29_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                        $cg$47 = false;
                                    } else {
                                        $cg$47 = ($_29_in <= 122);
                                    }
                                    
                                    
                                    if($cg$47) {
                                        $cg$44 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$42.$1, $cg$42.$2, false, ($_29_in - 97));
                                    } else {
                                        $cg$44 = new $HC_1_0$Main__Symbol($_29_in);
                                    }
                                }
                            }
                            
                            return new $HC_2_1$Prelude__List___58__58_($cg$44, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$42.$1, $cg$42.$2)), $_1_arg.$2));
                        }
                    } else {
                        
                        const $cg$61 = $_0_arg.$2;
                        const $_34_in = (($_1_arg.$1).charCodeAt(0)|0);
                        let $cg$62 = null;
                        if((((($_34_in >= 48)) ? 1|0 : 0|0) === 0)) {
                            $cg$62 = false;
                        } else {
                            $cg$62 = ($_34_in <= 57);
                        }
                        
                        let $cg$63 = null;
                        if($cg$62) {
                            $cg$63 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$61.$1, $cg$61.$2, false, ($_34_in - 48));
                        } else {
                            let $cg$64 = null;
                            if((((($_34_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                $cg$64 = false;
                            } else {
                                $cg$64 = ($_34_in <= 90);
                            }
                            
                            
                            if($cg$64) {
                                $cg$63 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$61.$1, $cg$61.$2, true, ($_34_in - 65));
                            } else {
                                let $cg$66 = null;
                                if((((($_34_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                    $cg$66 = false;
                                } else {
                                    $cg$66 = ($_34_in <= 122);
                                }
                                
                                
                                if($cg$66) {
                                    $cg$63 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$61.$1, $cg$61.$2, false, ($_34_in - 97));
                                } else {
                                    $cg$63 = new $HC_1_0$Main__Symbol($_34_in);
                                }
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$63, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$61.$1, $cg$61.$2)), $_1_arg.$2));
                    }
                } else {
                    
                    const $cg$8 = $_0_arg.$2;
                    const $_39_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$9 = null;
                    if((((($_39_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$9 = false;
                    } else {
                        $cg$9 = ($_39_in <= 57);
                    }
                    
                    let $cg$10 = null;
                    if($cg$9) {
                        $cg$10 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$8.$1, $cg$8.$2, false, ($_39_in - 48));
                    } else {
                        let $cg$11 = null;
                        if((((($_39_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$11 = false;
                        } else {
                            $cg$11 = ($_39_in <= 90);
                        }
                        
                        
                        if($cg$11) {
                            $cg$10 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$8.$1, $cg$8.$2, true, ($_39_in - 65));
                        } else {
                            let $cg$13 = null;
                            if((((($_39_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$13 = false;
                            } else {
                                $cg$13 = ($_39_in <= 122);
                            }
                            
                            
                            if($cg$13) {
                                $cg$10 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$8.$1, $cg$8.$2, false, ($_39_in - 97));
                            } else {
                                $cg$10 = new $HC_1_0$Main__Symbol($_39_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$10, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$8.$1, $cg$8.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === "\"")) {
                const $cg$69 = $_1_arg.$2;
                if(($cg$69.type === 1)) {
                    const $cg$80 = $cg$69.$1;
                    if(($cg$80 === ">")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(187), Main__parse_39_($_0_arg, $cg$69.$2));
                    } else if(($cg$80 === "]")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8221), Main__parse_39_($_0_arg, $cg$69.$2));
                    } else {
                        
                        const $cg$83 = $_0_arg.$2;
                        const $_46_in = (($_1_arg.$1).charCodeAt(0)|0);
                        let $cg$84 = null;
                        if((((($_46_in >= 48)) ? 1|0 : 0|0) === 0)) {
                            $cg$84 = false;
                        } else {
                            $cg$84 = ($_46_in <= 57);
                        }
                        
                        let $cg$85 = null;
                        if($cg$84) {
                            $cg$85 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$83.$1, $cg$83.$2, false, ($_46_in - 48));
                        } else {
                            let $cg$86 = null;
                            if((((($_46_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                $cg$86 = false;
                            } else {
                                $cg$86 = ($_46_in <= 90);
                            }
                            
                            
                            if($cg$86) {
                                $cg$85 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$83.$1, $cg$83.$2, true, ($_46_in - 65));
                            } else {
                                let $cg$88 = null;
                                if((((($_46_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                    $cg$88 = false;
                                } else {
                                    $cg$88 = ($_46_in <= 122);
                                }
                                
                                
                                if($cg$88) {
                                    $cg$85 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$83.$1, $cg$83.$2, false, ($_46_in - 97));
                                } else {
                                    $cg$85 = new $HC_1_0$Main__Symbol($_46_in);
                                }
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$85, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$83.$1, $cg$83.$2)), $_1_arg.$2));
                    }
                } else {
                    
                    const $cg$72 = $_0_arg.$2;
                    const $_51_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$73 = null;
                    if((((($_51_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$73 = false;
                    } else {
                        $cg$73 = ($_51_in <= 57);
                    }
                    
                    let $cg$74 = null;
                    if($cg$73) {
                        $cg$74 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$72.$1, $cg$72.$2, false, ($_51_in - 48));
                    } else {
                        let $cg$75 = null;
                        if((((($_51_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$75 = false;
                        } else {
                            $cg$75 = ($_51_in <= 90);
                        }
                        
                        
                        if($cg$75) {
                            $cg$74 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$72.$1, $cg$72.$2, true, ($_51_in - 65));
                        } else {
                            let $cg$77 = null;
                            if((((($_51_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$77 = false;
                            } else {
                                $cg$77 = ($_51_in <= 122);
                            }
                            
                            
                            if($cg$77) {
                                $cg$74 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$72.$1, $cg$72.$2, false, ($_51_in - 97));
                            } else {
                                $cg$74 = new $HC_1_0$Main__Symbol($_51_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$74, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$72.$1, $cg$72.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === "&")) {
                const $cg$91 = $_1_arg.$2;
                if(($cg$91.type === 1)) {
                    
                    if(($cg$91.$1 === "&")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8743), Main__parse_39_($_0_arg, $cg$91.$2));
                    } else {
                        
                        const $cg$104 = $_0_arg.$2;
                        const $_58_in = (($_1_arg.$1).charCodeAt(0)|0);
                        let $cg$105 = null;
                        if((((($_58_in >= 48)) ? 1|0 : 0|0) === 0)) {
                            $cg$105 = false;
                        } else {
                            $cg$105 = ($_58_in <= 57);
                        }
                        
                        let $cg$106 = null;
                        if($cg$105) {
                            $cg$106 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$104.$1, $cg$104.$2, false, ($_58_in - 48));
                        } else {
                            let $cg$107 = null;
                            if((((($_58_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                $cg$107 = false;
                            } else {
                                $cg$107 = ($_58_in <= 90);
                            }
                            
                            
                            if($cg$107) {
                                $cg$106 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$104.$1, $cg$104.$2, true, ($_58_in - 65));
                            } else {
                                let $cg$109 = null;
                                if((((($_58_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                    $cg$109 = false;
                                } else {
                                    $cg$109 = ($_58_in <= 122);
                                }
                                
                                
                                if($cg$109) {
                                    $cg$106 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$104.$1, $cg$104.$2, false, ($_58_in - 97));
                                } else {
                                    $cg$106 = new $HC_1_0$Main__Symbol($_58_in);
                                }
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$106, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$104.$1, $cg$104.$2)), $_1_arg.$2));
                    }
                } else {
                    
                    const $cg$94 = $_0_arg.$2;
                    const $_63_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$95 = null;
                    if((((($_63_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$95 = false;
                    } else {
                        $cg$95 = ($_63_in <= 57);
                    }
                    
                    let $cg$96 = null;
                    if($cg$95) {
                        $cg$96 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$94.$1, $cg$94.$2, false, ($_63_in - 48));
                    } else {
                        let $cg$97 = null;
                        if((((($_63_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$97 = false;
                        } else {
                            $cg$97 = ($_63_in <= 90);
                        }
                        
                        
                        if($cg$97) {
                            $cg$96 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$94.$1, $cg$94.$2, true, ($_63_in - 65));
                        } else {
                            let $cg$99 = null;
                            if((((($_63_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$99 = false;
                            } else {
                                $cg$99 = ($_63_in <= 122);
                            }
                            
                            
                            if($cg$99) {
                                $cg$96 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$94.$1, $cg$94.$2, false, ($_63_in - 97));
                            } else {
                                $cg$96 = new $HC_1_0$Main__Symbol($_63_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$96, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$94.$1, $cg$94.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === "\'")) {
                const $cg$112 = $_1_arg.$2;
                if(($cg$112.type === 1)) {
                    
                    if(($cg$112.$1 === "]")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8217), Main__parse_39_($_0_arg, $cg$112.$2));
                    } else {
                        
                        const $cg$125 = $_0_arg.$2;
                        const $_70_in = (($_1_arg.$1).charCodeAt(0)|0);
                        let $cg$126 = null;
                        if((((($_70_in >= 48)) ? 1|0 : 0|0) === 0)) {
                            $cg$126 = false;
                        } else {
                            $cg$126 = ($_70_in <= 57);
                        }
                        
                        let $cg$127 = null;
                        if($cg$126) {
                            $cg$127 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$125.$1, $cg$125.$2, false, ($_70_in - 48));
                        } else {
                            let $cg$128 = null;
                            if((((($_70_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                $cg$128 = false;
                            } else {
                                $cg$128 = ($_70_in <= 90);
                            }
                            
                            
                            if($cg$128) {
                                $cg$127 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$125.$1, $cg$125.$2, true, ($_70_in - 65));
                            } else {
                                let $cg$130 = null;
                                if((((($_70_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                    $cg$130 = false;
                                } else {
                                    $cg$130 = ($_70_in <= 122);
                                }
                                
                                
                                if($cg$130) {
                                    $cg$127 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$125.$1, $cg$125.$2, false, ($_70_in - 97));
                                } else {
                                    $cg$127 = new $HC_1_0$Main__Symbol($_70_in);
                                }
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$127, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$125.$1, $cg$125.$2)), $_1_arg.$2));
                    }
                } else {
                    
                    const $cg$115 = $_0_arg.$2;
                    const $_75_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$116 = null;
                    if((((($_75_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$116 = false;
                    } else {
                        $cg$116 = ($_75_in <= 57);
                    }
                    
                    let $cg$117 = null;
                    if($cg$116) {
                        $cg$117 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$115.$1, $cg$115.$2, false, ($_75_in - 48));
                    } else {
                        let $cg$118 = null;
                        if((((($_75_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$118 = false;
                        } else {
                            $cg$118 = ($_75_in <= 90);
                        }
                        
                        
                        if($cg$118) {
                            $cg$117 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$115.$1, $cg$115.$2, true, ($_75_in - 65));
                        } else {
                            let $cg$120 = null;
                            if((((($_75_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$120 = false;
                            } else {
                                $cg$120 = ($_75_in <= 122);
                            }
                            
                            
                            if($cg$120) {
                                $cg$117 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$115.$1, $cg$115.$2, false, ($_75_in - 97));
                            } else {
                                $cg$117 = new $HC_1_0$Main__Symbol($_75_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$117, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$115.$1, $cg$115.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === "+")) {
                const $cg$133 = $_1_arg.$2;
                if(($cg$133.type === 1)) {
                    
                    if(($cg$133.$1 === "-")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(177), Main__parse_39_($_0_arg, $cg$133.$2));
                    } else {
                        
                        const $cg$146 = $_0_arg.$2;
                        const $_82_in = (($_1_arg.$1).charCodeAt(0)|0);
                        let $cg$147 = null;
                        if((((($_82_in >= 48)) ? 1|0 : 0|0) === 0)) {
                            $cg$147 = false;
                        } else {
                            $cg$147 = ($_82_in <= 57);
                        }
                        
                        let $cg$148 = null;
                        if($cg$147) {
                            $cg$148 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$146.$1, $cg$146.$2, false, ($_82_in - 48));
                        } else {
                            let $cg$149 = null;
                            if((((($_82_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                $cg$149 = false;
                            } else {
                                $cg$149 = ($_82_in <= 90);
                            }
                            
                            
                            if($cg$149) {
                                $cg$148 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$146.$1, $cg$146.$2, true, ($_82_in - 65));
                            } else {
                                let $cg$151 = null;
                                if((((($_82_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                    $cg$151 = false;
                                } else {
                                    $cg$151 = ($_82_in <= 122);
                                }
                                
                                
                                if($cg$151) {
                                    $cg$148 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$146.$1, $cg$146.$2, false, ($_82_in - 97));
                                } else {
                                    $cg$148 = new $HC_1_0$Main__Symbol($_82_in);
                                }
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$148, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$146.$1, $cg$146.$2)), $_1_arg.$2));
                    }
                } else {
                    
                    const $cg$136 = $_0_arg.$2;
                    const $_87_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$137 = null;
                    if((((($_87_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$137 = false;
                    } else {
                        $cg$137 = ($_87_in <= 57);
                    }
                    
                    let $cg$138 = null;
                    if($cg$137) {
                        $cg$138 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$136.$1, $cg$136.$2, false, ($_87_in - 48));
                    } else {
                        let $cg$139 = null;
                        if((((($_87_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$139 = false;
                        } else {
                            $cg$139 = ($_87_in <= 90);
                        }
                        
                        
                        if($cg$139) {
                            $cg$138 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$136.$1, $cg$136.$2, true, ($_87_in - 65));
                        } else {
                            let $cg$141 = null;
                            if((((($_87_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$141 = false;
                            } else {
                                $cg$141 = ($_87_in <= 122);
                            }
                            
                            
                            if($cg$141) {
                                $cg$138 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$136.$1, $cg$136.$2, false, ($_87_in - 97));
                            } else {
                                $cg$138 = new $HC_1_0$Main__Symbol($_87_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$138, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$136.$1, $cg$136.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === "-")) {
                const $cg$154 = $_1_arg.$2;
                if(($cg$154.type === 1)) {
                    
                    if(($cg$154.$1 === "-")) {
                        const $cg$166 = $cg$154.$2;
                        if(($cg$166.type === 1)) {
                            
                            if(($cg$166.$1 === "-")) {
                                return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8212), Main__parse_39_($_0_arg, $cg$166.$2));
                            } else {
                                return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8211), Main__parse_39_($_0_arg, $cg$154.$2));
                            }
                        } else {
                            return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8211), Main__parse_39_($_0_arg, $cg$154.$2));
                        }
                    } else {
                        
                        const $cg$170 = $_0_arg.$2;
                        const $_96_in = (($_1_arg.$1).charCodeAt(0)|0);
                        let $cg$171 = null;
                        if((((($_96_in >= 48)) ? 1|0 : 0|0) === 0)) {
                            $cg$171 = false;
                        } else {
                            $cg$171 = ($_96_in <= 57);
                        }
                        
                        let $cg$172 = null;
                        if($cg$171) {
                            $cg$172 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$170.$1, $cg$170.$2, false, ($_96_in - 48));
                        } else {
                            let $cg$173 = null;
                            if((((($_96_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                $cg$173 = false;
                            } else {
                                $cg$173 = ($_96_in <= 90);
                            }
                            
                            
                            if($cg$173) {
                                $cg$172 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$170.$1, $cg$170.$2, true, ($_96_in - 65));
                            } else {
                                let $cg$175 = null;
                                if((((($_96_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                    $cg$175 = false;
                                } else {
                                    $cg$175 = ($_96_in <= 122);
                                }
                                
                                
                                if($cg$175) {
                                    $cg$172 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$170.$1, $cg$170.$2, false, ($_96_in - 97));
                                } else {
                                    $cg$172 = new $HC_1_0$Main__Symbol($_96_in);
                                }
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$172, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$170.$1, $cg$170.$2)), $_1_arg.$2));
                    }
                } else {
                    
                    const $cg$157 = $_0_arg.$2;
                    const $_101_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$158 = null;
                    if((((($_101_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$158 = false;
                    } else {
                        $cg$158 = ($_101_in <= 57);
                    }
                    
                    let $cg$159 = null;
                    if($cg$158) {
                        $cg$159 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$157.$1, $cg$157.$2, false, ($_101_in - 48));
                    } else {
                        let $cg$160 = null;
                        if((((($_101_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$160 = false;
                        } else {
                            $cg$160 = ($_101_in <= 90);
                        }
                        
                        
                        if($cg$160) {
                            $cg$159 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$157.$1, $cg$157.$2, true, ($_101_in - 65));
                        } else {
                            let $cg$162 = null;
                            if((((($_101_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$162 = false;
                            } else {
                                $cg$162 = ($_101_in <= 122);
                            }
                            
                            
                            if($cg$162) {
                                $cg$159 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$157.$1, $cg$157.$2, false, ($_101_in - 97));
                            } else {
                                $cg$159 = new $HC_1_0$Main__Symbol($_101_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$159, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$157.$1, $cg$157.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === ".")) {
                const $cg$178 = $_1_arg.$2;
                if(($cg$178.type === 1)) {
                    
                    if(($cg$178.$1 === ".")) {
                        const $cg$190 = $cg$178.$2;
                        if(($cg$190.type === 1)) {
                            
                            if(($cg$190.$1 === ".")) {
                                return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8230), Main__parse_39_($_0_arg, $cg$190.$2));
                            } else {
                                
                                const $cg$203 = $_0_arg.$2;
                                const $_110_in = (($_1_arg.$1).charCodeAt(0)|0);
                                let $cg$204 = null;
                                if((((($_110_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                    $cg$204 = false;
                                } else {
                                    $cg$204 = ($_110_in <= 57);
                                }
                                
                                let $cg$205 = null;
                                if($cg$204) {
                                    $cg$205 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$203.$1, $cg$203.$2, false, ($_110_in - 48));
                                } else {
                                    let $cg$206 = null;
                                    if((((($_110_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                        $cg$206 = false;
                                    } else {
                                        $cg$206 = ($_110_in <= 90);
                                    }
                                    
                                    
                                    if($cg$206) {
                                        $cg$205 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$203.$1, $cg$203.$2, true, ($_110_in - 65));
                                    } else {
                                        let $cg$208 = null;
                                        if((((($_110_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                            $cg$208 = false;
                                        } else {
                                            $cg$208 = ($_110_in <= 122);
                                        }
                                        
                                        
                                        if($cg$208) {
                                            $cg$205 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$203.$1, $cg$203.$2, false, ($_110_in - 97));
                                        } else {
                                            $cg$205 = new $HC_1_0$Main__Symbol($_110_in);
                                        }
                                    }
                                }
                                
                                return new $HC_2_1$Prelude__List___58__58_($cg$205, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$203.$1, $cg$203.$2)), $_1_arg.$2));
                            }
                        } else {
                            
                            const $cg$193 = $_0_arg.$2;
                            const $_115_in = (($_1_arg.$1).charCodeAt(0)|0);
                            let $cg$194 = null;
                            if((((($_115_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                $cg$194 = false;
                            } else {
                                $cg$194 = ($_115_in <= 57);
                            }
                            
                            let $cg$195 = null;
                            if($cg$194) {
                                $cg$195 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$193.$1, $cg$193.$2, false, ($_115_in - 48));
                            } else {
                                let $cg$196 = null;
                                if((((($_115_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                    $cg$196 = false;
                                } else {
                                    $cg$196 = ($_115_in <= 90);
                                }
                                
                                
                                if($cg$196) {
                                    $cg$195 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$193.$1, $cg$193.$2, true, ($_115_in - 65));
                                } else {
                                    let $cg$198 = null;
                                    if((((($_115_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                        $cg$198 = false;
                                    } else {
                                        $cg$198 = ($_115_in <= 122);
                                    }
                                    
                                    
                                    if($cg$198) {
                                        $cg$195 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$193.$1, $cg$193.$2, false, ($_115_in - 97));
                                    } else {
                                        $cg$195 = new $HC_1_0$Main__Symbol($_115_in);
                                    }
                                }
                            }
                            
                            return new $HC_2_1$Prelude__List___58__58_($cg$195, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$193.$1, $cg$193.$2)), $_1_arg.$2));
                        }
                    } else {
                        
                        const $cg$212 = $_0_arg.$2;
                        const $_120_in = (($_1_arg.$1).charCodeAt(0)|0);
                        let $cg$213 = null;
                        if((((($_120_in >= 48)) ? 1|0 : 0|0) === 0)) {
                            $cg$213 = false;
                        } else {
                            $cg$213 = ($_120_in <= 57);
                        }
                        
                        let $cg$214 = null;
                        if($cg$213) {
                            $cg$214 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$212.$1, $cg$212.$2, false, ($_120_in - 48));
                        } else {
                            let $cg$215 = null;
                            if((((($_120_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                $cg$215 = false;
                            } else {
                                $cg$215 = ($_120_in <= 90);
                            }
                            
                            
                            if($cg$215) {
                                $cg$214 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$212.$1, $cg$212.$2, true, ($_120_in - 65));
                            } else {
                                let $cg$217 = null;
                                if((((($_120_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                    $cg$217 = false;
                                } else {
                                    $cg$217 = ($_120_in <= 122);
                                }
                                
                                
                                if($cg$217) {
                                    $cg$214 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$212.$1, $cg$212.$2, false, ($_120_in - 97));
                                } else {
                                    $cg$214 = new $HC_1_0$Main__Symbol($_120_in);
                                }
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$214, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$212.$1, $cg$212.$2)), $_1_arg.$2));
                    }
                } else {
                    
                    const $cg$181 = $_0_arg.$2;
                    const $_125_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$182 = null;
                    if((((($_125_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$182 = false;
                    } else {
                        $cg$182 = ($_125_in <= 57);
                    }
                    
                    let $cg$183 = null;
                    if($cg$182) {
                        $cg$183 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$181.$1, $cg$181.$2, false, ($_125_in - 48));
                    } else {
                        let $cg$184 = null;
                        if((((($_125_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$184 = false;
                        } else {
                            $cg$184 = ($_125_in <= 90);
                        }
                        
                        
                        if($cg$184) {
                            $cg$183 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$181.$1, $cg$181.$2, true, ($_125_in - 65));
                        } else {
                            let $cg$186 = null;
                            if((((($_125_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$186 = false;
                            } else {
                                $cg$186 = ($_125_in <= 122);
                            }
                            
                            
                            if($cg$186) {
                                $cg$183 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$181.$1, $cg$181.$2, false, ($_125_in - 97));
                            } else {
                                $cg$183 = new $HC_1_0$Main__Symbol($_125_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$183, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$181.$1, $cg$181.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === "/")) {
                const $cg$220 = $_1_arg.$2;
                if(($cg$220.type === 1)) {
                    const $cg$231 = $cg$220.$1;
                    if(($cg$231 === "-")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(822), Main__parse_39_($_0_arg, $cg$220.$2));
                    } else if(($cg$231 === "/")) {
                        const $cg$233 = $cg$220.$2;
                        if(($cg$233.type === 1)) {
                            
                            if(($cg$233.$1 === "/")) {
                                return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(824), Main__parse_39_($_0_arg, $cg$233.$2));
                            } else {
                                return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(823), Main__parse_39_($_0_arg, $cg$220.$2));
                            }
                        } else {
                            return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(823), Main__parse_39_($_0_arg, $cg$220.$2));
                        }
                    } else {
                        
                        const $cg$237 = $_0_arg.$2;
                        const $_134_in = (($_1_arg.$1).charCodeAt(0)|0);
                        let $cg$238 = null;
                        if((((($_134_in >= 48)) ? 1|0 : 0|0) === 0)) {
                            $cg$238 = false;
                        } else {
                            $cg$238 = ($_134_in <= 57);
                        }
                        
                        let $cg$239 = null;
                        if($cg$238) {
                            $cg$239 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$237.$1, $cg$237.$2, false, ($_134_in - 48));
                        } else {
                            let $cg$240 = null;
                            if((((($_134_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                $cg$240 = false;
                            } else {
                                $cg$240 = ($_134_in <= 90);
                            }
                            
                            
                            if($cg$240) {
                                $cg$239 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$237.$1, $cg$237.$2, true, ($_134_in - 65));
                            } else {
                                let $cg$242 = null;
                                if((((($_134_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                    $cg$242 = false;
                                } else {
                                    $cg$242 = ($_134_in <= 122);
                                }
                                
                                
                                if($cg$242) {
                                    $cg$239 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$237.$1, $cg$237.$2, false, ($_134_in - 97));
                                } else {
                                    $cg$239 = new $HC_1_0$Main__Symbol($_134_in);
                                }
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$239, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$237.$1, $cg$237.$2)), $_1_arg.$2));
                    }
                } else {
                    
                    const $cg$223 = $_0_arg.$2;
                    const $_139_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$224 = null;
                    if((((($_139_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$224 = false;
                    } else {
                        $cg$224 = ($_139_in <= 57);
                    }
                    
                    let $cg$225 = null;
                    if($cg$224) {
                        $cg$225 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$223.$1, $cg$223.$2, false, ($_139_in - 48));
                    } else {
                        let $cg$226 = null;
                        if((((($_139_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$226 = false;
                        } else {
                            $cg$226 = ($_139_in <= 90);
                        }
                        
                        
                        if($cg$226) {
                            $cg$225 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$223.$1, $cg$223.$2, true, ($_139_in - 65));
                        } else {
                            let $cg$228 = null;
                            if((((($_139_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$228 = false;
                            } else {
                                $cg$228 = ($_139_in <= 122);
                            }
                            
                            
                            if($cg$228) {
                                $cg$225 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$223.$1, $cg$223.$2, false, ($_139_in - 97));
                            } else {
                                $cg$225 = new $HC_1_0$Main__Symbol($_139_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$225, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$223.$1, $cg$223.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === ":")) {
                const $cg$245 = $_1_arg.$2;
                if(($cg$245.type === 1)) {
                    
                    if(($cg$245.$1 === "=")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8788), Main__parse_39_($_0_arg, $cg$245.$2));
                    } else {
                        
                        const $cg$258 = $_0_arg.$2;
                        const $_146_in = (($_1_arg.$1).charCodeAt(0)|0);
                        let $cg$259 = null;
                        if((((($_146_in >= 48)) ? 1|0 : 0|0) === 0)) {
                            $cg$259 = false;
                        } else {
                            $cg$259 = ($_146_in <= 57);
                        }
                        
                        let $cg$260 = null;
                        if($cg$259) {
                            $cg$260 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$258.$1, $cg$258.$2, false, ($_146_in - 48));
                        } else {
                            let $cg$261 = null;
                            if((((($_146_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                $cg$261 = false;
                            } else {
                                $cg$261 = ($_146_in <= 90);
                            }
                            
                            
                            if($cg$261) {
                                $cg$260 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$258.$1, $cg$258.$2, true, ($_146_in - 65));
                            } else {
                                let $cg$263 = null;
                                if((((($_146_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                    $cg$263 = false;
                                } else {
                                    $cg$263 = ($_146_in <= 122);
                                }
                                
                                
                                if($cg$263) {
                                    $cg$260 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$258.$1, $cg$258.$2, false, ($_146_in - 97));
                                } else {
                                    $cg$260 = new $HC_1_0$Main__Symbol($_146_in);
                                }
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$260, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$258.$1, $cg$258.$2)), $_1_arg.$2));
                    }
                } else {
                    
                    const $cg$248 = $_0_arg.$2;
                    const $_151_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$249 = null;
                    if((((($_151_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$249 = false;
                    } else {
                        $cg$249 = ($_151_in <= 57);
                    }
                    
                    let $cg$250 = null;
                    if($cg$249) {
                        $cg$250 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$248.$1, $cg$248.$2, false, ($_151_in - 48));
                    } else {
                        let $cg$251 = null;
                        if((((($_151_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$251 = false;
                        } else {
                            $cg$251 = ($_151_in <= 90);
                        }
                        
                        
                        if($cg$251) {
                            $cg$250 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$248.$1, $cg$248.$2, true, ($_151_in - 65));
                        } else {
                            let $cg$253 = null;
                            if((((($_151_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$253 = false;
                            } else {
                                $cg$253 = ($_151_in <= 122);
                            }
                            
                            
                            if($cg$253) {
                                $cg$250 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$248.$1, $cg$248.$2, false, ($_151_in - 97));
                            } else {
                                $cg$250 = new $HC_1_0$Main__Symbol($_151_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$250, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$248.$1, $cg$248.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === "<")) {
                const $cg$266 = $_1_arg.$2;
                if(($cg$266.type === 1)) {
                    const $cg$277 = $cg$266.$1;
                    if(($cg$277 === "\"")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(171), Main__parse_39_($_0_arg, $cg$266.$2));
                    } else if(($cg$277 === "/")) {
                        const $cg$279 = $cg$266.$2;
                        if(($cg$279.type === 1)) {
                            const $cg$290 = $cg$279.$1;
                            if(($cg$290 === "b")) {
                                const $cg$292 = $cg$279.$2;
                                if(($cg$292.type === 1)) {
                                    
                                    if(($cg$292.$1 === ">")) {
                                        
                                        const $cg$305 = $_0_arg.$2;
                                        $_0_arg = new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair(false, $cg$305.$2));
                                        $_1_arg = $cg$292.$2;
                                    } else {
                                        
                                        const $cg$308 = $_0_arg.$2;
                                        const $_166_in = (($_1_arg.$1).charCodeAt(0)|0);
                                        let $cg$309 = null;
                                        if((((($_166_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                            $cg$309 = false;
                                        } else {
                                            $cg$309 = ($_166_in <= 57);
                                        }
                                        
                                        let $cg$310 = null;
                                        if($cg$309) {
                                            $cg$310 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$308.$1, $cg$308.$2, false, ($_166_in - 48));
                                        } else {
                                            let $cg$311 = null;
                                            if((((($_166_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                $cg$311 = false;
                                            } else {
                                                $cg$311 = ($_166_in <= 90);
                                            }
                                            
                                            
                                            if($cg$311) {
                                                $cg$310 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$308.$1, $cg$308.$2, true, ($_166_in - 65));
                                            } else {
                                                let $cg$313 = null;
                                                if((((($_166_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$313 = false;
                                                } else {
                                                    $cg$313 = ($_166_in <= 122);
                                                }
                                                
                                                
                                                if($cg$313) {
                                                    $cg$310 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$308.$1, $cg$308.$2, false, ($_166_in - 97));
                                                } else {
                                                    $cg$310 = new $HC_1_0$Main__Symbol($_166_in);
                                                }
                                            }
                                        }
                                        
                                        return new $HC_2_1$Prelude__List___58__58_($cg$310, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$308.$1, $cg$308.$2)), $_1_arg.$2));
                                    }
                                } else {
                                    
                                    const $cg$295 = $_0_arg.$2;
                                    const $_171_in = (($_1_arg.$1).charCodeAt(0)|0);
                                    let $cg$296 = null;
                                    if((((($_171_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                        $cg$296 = false;
                                    } else {
                                        $cg$296 = ($_171_in <= 57);
                                    }
                                    
                                    let $cg$297 = null;
                                    if($cg$296) {
                                        $cg$297 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$295.$1, $cg$295.$2, false, ($_171_in - 48));
                                    } else {
                                        let $cg$298 = null;
                                        if((((($_171_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                            $cg$298 = false;
                                        } else {
                                            $cg$298 = ($_171_in <= 90);
                                        }
                                        
                                        
                                        if($cg$298) {
                                            $cg$297 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$295.$1, $cg$295.$2, true, ($_171_in - 65));
                                        } else {
                                            let $cg$300 = null;
                                            if((((($_171_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                $cg$300 = false;
                                            } else {
                                                $cg$300 = ($_171_in <= 122);
                                            }
                                            
                                            
                                            if($cg$300) {
                                                $cg$297 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$295.$1, $cg$295.$2, false, ($_171_in - 97));
                                            } else {
                                                $cg$297 = new $HC_1_0$Main__Symbol($_171_in);
                                            }
                                        }
                                    }
                                    
                                    return new $HC_2_1$Prelude__List___58__58_($cg$297, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$295.$1, $cg$295.$2)), $_1_arg.$2));
                                }
                            } else if(($cg$290 === "i")) {
                                const $cg$316 = $cg$279.$2;
                                if(($cg$316.type === 1)) {
                                    
                                    if(($cg$316.$1 === ">")) {
                                        
                                        const $cg$329 = $_0_arg.$2;
                                        $_0_arg = new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$329.$1, false));
                                        $_1_arg = $cg$316.$2;
                                    } else {
                                        
                                        const $cg$332 = $_0_arg.$2;
                                        const $_182_in = (($_1_arg.$1).charCodeAt(0)|0);
                                        let $cg$333 = null;
                                        if((((($_182_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                            $cg$333 = false;
                                        } else {
                                            $cg$333 = ($_182_in <= 57);
                                        }
                                        
                                        let $cg$334 = null;
                                        if($cg$333) {
                                            $cg$334 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$332.$1, $cg$332.$2, false, ($_182_in - 48));
                                        } else {
                                            let $cg$335 = null;
                                            if((((($_182_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                $cg$335 = false;
                                            } else {
                                                $cg$335 = ($_182_in <= 90);
                                            }
                                            
                                            
                                            if($cg$335) {
                                                $cg$334 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$332.$1, $cg$332.$2, true, ($_182_in - 65));
                                            } else {
                                                let $cg$337 = null;
                                                if((((($_182_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$337 = false;
                                                } else {
                                                    $cg$337 = ($_182_in <= 122);
                                                }
                                                
                                                
                                                if($cg$337) {
                                                    $cg$334 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$332.$1, $cg$332.$2, false, ($_182_in - 97));
                                                } else {
                                                    $cg$334 = new $HC_1_0$Main__Symbol($_182_in);
                                                }
                                            }
                                        }
                                        
                                        return new $HC_2_1$Prelude__List___58__58_($cg$334, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$332.$1, $cg$332.$2)), $_1_arg.$2));
                                    }
                                } else {
                                    
                                    const $cg$319 = $_0_arg.$2;
                                    const $_187_in = (($_1_arg.$1).charCodeAt(0)|0);
                                    let $cg$320 = null;
                                    if((((($_187_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                        $cg$320 = false;
                                    } else {
                                        $cg$320 = ($_187_in <= 57);
                                    }
                                    
                                    let $cg$321 = null;
                                    if($cg$320) {
                                        $cg$321 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$319.$1, $cg$319.$2, false, ($_187_in - 48));
                                    } else {
                                        let $cg$322 = null;
                                        if((((($_187_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                            $cg$322 = false;
                                        } else {
                                            $cg$322 = ($_187_in <= 90);
                                        }
                                        
                                        
                                        if($cg$322) {
                                            $cg$321 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$319.$1, $cg$319.$2, true, ($_187_in - 65));
                                        } else {
                                            let $cg$324 = null;
                                            if((((($_187_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                $cg$324 = false;
                                            } else {
                                                $cg$324 = ($_187_in <= 122);
                                            }
                                            
                                            
                                            if($cg$324) {
                                                $cg$321 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$319.$1, $cg$319.$2, false, ($_187_in - 97));
                                            } else {
                                                $cg$321 = new $HC_1_0$Main__Symbol($_187_in);
                                            }
                                        }
                                    }
                                    
                                    return new $HC_2_1$Prelude__List___58__58_($cg$321, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$319.$1, $cg$319.$2)), $_1_arg.$2));
                                }
                            } else {
                                
                                const $cg$341 = $_0_arg.$2;
                                const $_192_in = (($_1_arg.$1).charCodeAt(0)|0);
                                let $cg$342 = null;
                                if((((($_192_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                    $cg$342 = false;
                                } else {
                                    $cg$342 = ($_192_in <= 57);
                                }
                                
                                let $cg$343 = null;
                                if($cg$342) {
                                    $cg$343 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$341.$1, $cg$341.$2, false, ($_192_in - 48));
                                } else {
                                    let $cg$344 = null;
                                    if((((($_192_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                        $cg$344 = false;
                                    } else {
                                        $cg$344 = ($_192_in <= 90);
                                    }
                                    
                                    
                                    if($cg$344) {
                                        $cg$343 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$341.$1, $cg$341.$2, true, ($_192_in - 65));
                                    } else {
                                        let $cg$346 = null;
                                        if((((($_192_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                            $cg$346 = false;
                                        } else {
                                            $cg$346 = ($_192_in <= 122);
                                        }
                                        
                                        
                                        if($cg$346) {
                                            $cg$343 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$341.$1, $cg$341.$2, false, ($_192_in - 97));
                                        } else {
                                            $cg$343 = new $HC_1_0$Main__Symbol($_192_in);
                                        }
                                    }
                                }
                                
                                return new $HC_2_1$Prelude__List___58__58_($cg$343, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$341.$1, $cg$341.$2)), $_1_arg.$2));
                            }
                        } else {
                            
                            const $cg$282 = $_0_arg.$2;
                            const $_197_in = (($_1_arg.$1).charCodeAt(0)|0);
                            let $cg$283 = null;
                            if((((($_197_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                $cg$283 = false;
                            } else {
                                $cg$283 = ($_197_in <= 57);
                            }
                            
                            let $cg$284 = null;
                            if($cg$283) {
                                $cg$284 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$282.$1, $cg$282.$2, false, ($_197_in - 48));
                            } else {
                                let $cg$285 = null;
                                if((((($_197_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                    $cg$285 = false;
                                } else {
                                    $cg$285 = ($_197_in <= 90);
                                }
                                
                                
                                if($cg$285) {
                                    $cg$284 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$282.$1, $cg$282.$2, true, ($_197_in - 65));
                                } else {
                                    let $cg$287 = null;
                                    if((((($_197_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                        $cg$287 = false;
                                    } else {
                                        $cg$287 = ($_197_in <= 122);
                                    }
                                    
                                    
                                    if($cg$287) {
                                        $cg$284 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$282.$1, $cg$282.$2, false, ($_197_in - 97));
                                    } else {
                                        $cg$284 = new $HC_1_0$Main__Symbol($_197_in);
                                    }
                                }
                            }
                            
                            return new $HC_2_1$Prelude__List___58__58_($cg$284, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$282.$1, $cg$282.$2)), $_1_arg.$2));
                        }
                    } else if(($cg$277 === "<")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8810), Main__parse_39_($_0_arg, $cg$266.$2));
                    } else if(($cg$277 === "=")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8804), Main__parse_39_($_0_arg, $cg$266.$2));
                    } else if(($cg$277 === "b")) {
                        const $cg$349 = $cg$266.$2;
                        if(($cg$349.type === 1)) {
                            
                            if(($cg$349.$1 === ">")) {
                                
                                const $cg$362 = $_0_arg.$2;
                                $_0_arg = new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair(true, $cg$362.$2));
                                $_1_arg = $cg$349.$2;
                            } else {
                                
                                const $cg$365 = $_0_arg.$2;
                                const $_208_in = (($_1_arg.$1).charCodeAt(0)|0);
                                let $cg$366 = null;
                                if((((($_208_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                    $cg$366 = false;
                                } else {
                                    $cg$366 = ($_208_in <= 57);
                                }
                                
                                let $cg$367 = null;
                                if($cg$366) {
                                    $cg$367 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$365.$1, $cg$365.$2, false, ($_208_in - 48));
                                } else {
                                    let $cg$368 = null;
                                    if((((($_208_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                        $cg$368 = false;
                                    } else {
                                        $cg$368 = ($_208_in <= 90);
                                    }
                                    
                                    
                                    if($cg$368) {
                                        $cg$367 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$365.$1, $cg$365.$2, true, ($_208_in - 65));
                                    } else {
                                        let $cg$370 = null;
                                        if((((($_208_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                            $cg$370 = false;
                                        } else {
                                            $cg$370 = ($_208_in <= 122);
                                        }
                                        
                                        
                                        if($cg$370) {
                                            $cg$367 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$365.$1, $cg$365.$2, false, ($_208_in - 97));
                                        } else {
                                            $cg$367 = new $HC_1_0$Main__Symbol($_208_in);
                                        }
                                    }
                                }
                                
                                return new $HC_2_1$Prelude__List___58__58_($cg$367, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$365.$1, $cg$365.$2)), $_1_arg.$2));
                            }
                        } else {
                            
                            const $cg$352 = $_0_arg.$2;
                            const $_213_in = (($_1_arg.$1).charCodeAt(0)|0);
                            let $cg$353 = null;
                            if((((($_213_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                $cg$353 = false;
                            } else {
                                $cg$353 = ($_213_in <= 57);
                            }
                            
                            let $cg$354 = null;
                            if($cg$353) {
                                $cg$354 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$352.$1, $cg$352.$2, false, ($_213_in - 48));
                            } else {
                                let $cg$355 = null;
                                if((((($_213_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                    $cg$355 = false;
                                } else {
                                    $cg$355 = ($_213_in <= 90);
                                }
                                
                                
                                if($cg$355) {
                                    $cg$354 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$352.$1, $cg$352.$2, true, ($_213_in - 65));
                                } else {
                                    let $cg$357 = null;
                                    if((((($_213_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                        $cg$357 = false;
                                    } else {
                                        $cg$357 = ($_213_in <= 122);
                                    }
                                    
                                    
                                    if($cg$357) {
                                        $cg$354 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$352.$1, $cg$352.$2, false, ($_213_in - 97));
                                    } else {
                                        $cg$354 = new $HC_1_0$Main__Symbol($_213_in);
                                    }
                                }
                            }
                            
                            return new $HC_2_1$Prelude__List___58__58_($cg$354, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$352.$1, $cg$352.$2)), $_1_arg.$2));
                        }
                    } else if(($cg$277 === "f")) {
                        const $cg$373 = $cg$266.$2;
                        if(($cg$373.type === 1)) {
                            
                            if(($cg$373.$1 === "r")) {
                                const $cg$385 = $cg$373.$2;
                                if(($cg$385.type === 1)) {
                                    
                                    if(($cg$385.$1 === "a")) {
                                        const $cg$397 = $cg$385.$2;
                                        if(($cg$397.type === 1)) {
                                            
                                            if(($cg$397.$1 === "k")) {
                                                const $cg$409 = $cg$397.$2;
                                                if(($cg$409.type === 1)) {
                                                    
                                                    if(($cg$409.$1 === "t")) {
                                                        const $cg$421 = $cg$409.$2;
                                                        if(($cg$421.type === 1)) {
                                                            
                                                            if(($cg$421.$1 === "u")) {
                                                                const $cg$433 = $cg$421.$2;
                                                                if(($cg$433.type === 1)) {
                                                                    
                                                                    if(($cg$433.$1 === "r")) {
                                                                        const $cg$445 = $cg$433.$2;
                                                                        if(($cg$445.type === 1)) {
                                                                            
                                                                            if(($cg$445.$1 === ">")) {
                                                                                
                                                                                const $cg$458 = $_0_arg.$2;
                                                                                $_0_arg = new $HC_2_0$Builtins__MkPair($HC_0_2$Main__Fraktur, new $HC_2_0$Builtins__MkPair($cg$458.$1, $cg$458.$2));
                                                                                $_1_arg = $cg$445.$2;
                                                                            } else {
                                                                                
                                                                                const $cg$461 = $_0_arg.$2;
                                                                                const $_236_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                                                let $cg$462 = null;
                                                                                if((((($_236_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                                                    $cg$462 = false;
                                                                                } else {
                                                                                    $cg$462 = ($_236_in <= 57);
                                                                                }
                                                                                
                                                                                let $cg$463 = null;
                                                                                if($cg$462) {
                                                                                    $cg$463 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$461.$1, $cg$461.$2, false, ($_236_in - 48));
                                                                                } else {
                                                                                    let $cg$464 = null;
                                                                                    if((((($_236_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                                        $cg$464 = false;
                                                                                    } else {
                                                                                        $cg$464 = ($_236_in <= 90);
                                                                                    }
                                                                                    
                                                                                    
                                                                                    if($cg$464) {
                                                                                        $cg$463 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$461.$1, $cg$461.$2, true, ($_236_in - 65));
                                                                                    } else {
                                                                                        let $cg$466 = null;
                                                                                        if((((($_236_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                                            $cg$466 = false;
                                                                                        } else {
                                                                                            $cg$466 = ($_236_in <= 122);
                                                                                        }
                                                                                        
                                                                                        
                                                                                        if($cg$466) {
                                                                                            $cg$463 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$461.$1, $cg$461.$2, false, ($_236_in - 97));
                                                                                        } else {
                                                                                            $cg$463 = new $HC_1_0$Main__Symbol($_236_in);
                                                                                        }
                                                                                    }
                                                                                }
                                                                                
                                                                                return new $HC_2_1$Prelude__List___58__58_($cg$463, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$461.$1, $cg$461.$2)), $_1_arg.$2));
                                                                            }
                                                                        } else {
                                                                            
                                                                            const $cg$448 = $_0_arg.$2;
                                                                            const $_241_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                                            let $cg$449 = null;
                                                                            if((((($_241_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                                                $cg$449 = false;
                                                                            } else {
                                                                                $cg$449 = ($_241_in <= 57);
                                                                            }
                                                                            
                                                                            let $cg$450 = null;
                                                                            if($cg$449) {
                                                                                $cg$450 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$448.$1, $cg$448.$2, false, ($_241_in - 48));
                                                                            } else {
                                                                                let $cg$451 = null;
                                                                                if((((($_241_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                                    $cg$451 = false;
                                                                                } else {
                                                                                    $cg$451 = ($_241_in <= 90);
                                                                                }
                                                                                
                                                                                
                                                                                if($cg$451) {
                                                                                    $cg$450 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$448.$1, $cg$448.$2, true, ($_241_in - 65));
                                                                                } else {
                                                                                    let $cg$453 = null;
                                                                                    if((((($_241_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                                        $cg$453 = false;
                                                                                    } else {
                                                                                        $cg$453 = ($_241_in <= 122);
                                                                                    }
                                                                                    
                                                                                    
                                                                                    if($cg$453) {
                                                                                        $cg$450 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$448.$1, $cg$448.$2, false, ($_241_in - 97));
                                                                                    } else {
                                                                                        $cg$450 = new $HC_1_0$Main__Symbol($_241_in);
                                                                                    }
                                                                                }
                                                                            }
                                                                            
                                                                            return new $HC_2_1$Prelude__List___58__58_($cg$450, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$448.$1, $cg$448.$2)), $_1_arg.$2));
                                                                        }
                                                                    } else {
                                                                        
                                                                        const $cg$470 = $_0_arg.$2;
                                                                        const $_246_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                                        let $cg$471 = null;
                                                                        if((((($_246_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                                            $cg$471 = false;
                                                                        } else {
                                                                            $cg$471 = ($_246_in <= 57);
                                                                        }
                                                                        
                                                                        let $cg$472 = null;
                                                                        if($cg$471) {
                                                                            $cg$472 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$470.$1, $cg$470.$2, false, ($_246_in - 48));
                                                                        } else {
                                                                            let $cg$473 = null;
                                                                            if((((($_246_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                                $cg$473 = false;
                                                                            } else {
                                                                                $cg$473 = ($_246_in <= 90);
                                                                            }
                                                                            
                                                                            
                                                                            if($cg$473) {
                                                                                $cg$472 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$470.$1, $cg$470.$2, true, ($_246_in - 65));
                                                                            } else {
                                                                                let $cg$475 = null;
                                                                                if((((($_246_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                                    $cg$475 = false;
                                                                                } else {
                                                                                    $cg$475 = ($_246_in <= 122);
                                                                                }
                                                                                
                                                                                
                                                                                if($cg$475) {
                                                                                    $cg$472 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$470.$1, $cg$470.$2, false, ($_246_in - 97));
                                                                                } else {
                                                                                    $cg$472 = new $HC_1_0$Main__Symbol($_246_in);
                                                                                }
                                                                            }
                                                                        }
                                                                        
                                                                        return new $HC_2_1$Prelude__List___58__58_($cg$472, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$470.$1, $cg$470.$2)), $_1_arg.$2));
                                                                    }
                                                                } else {
                                                                    
                                                                    const $cg$436 = $_0_arg.$2;
                                                                    const $_251_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                                    let $cg$437 = null;
                                                                    if((((($_251_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                                        $cg$437 = false;
                                                                    } else {
                                                                        $cg$437 = ($_251_in <= 57);
                                                                    }
                                                                    
                                                                    let $cg$438 = null;
                                                                    if($cg$437) {
                                                                        $cg$438 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$436.$1, $cg$436.$2, false, ($_251_in - 48));
                                                                    } else {
                                                                        let $cg$439 = null;
                                                                        if((((($_251_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                            $cg$439 = false;
                                                                        } else {
                                                                            $cg$439 = ($_251_in <= 90);
                                                                        }
                                                                        
                                                                        
                                                                        if($cg$439) {
                                                                            $cg$438 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$436.$1, $cg$436.$2, true, ($_251_in - 65));
                                                                        } else {
                                                                            let $cg$441 = null;
                                                                            if((((($_251_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                                $cg$441 = false;
                                                                            } else {
                                                                                $cg$441 = ($_251_in <= 122);
                                                                            }
                                                                            
                                                                            
                                                                            if($cg$441) {
                                                                                $cg$438 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$436.$1, $cg$436.$2, false, ($_251_in - 97));
                                                                            } else {
                                                                                $cg$438 = new $HC_1_0$Main__Symbol($_251_in);
                                                                            }
                                                                        }
                                                                    }
                                                                    
                                                                    return new $HC_2_1$Prelude__List___58__58_($cg$438, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$436.$1, $cg$436.$2)), $_1_arg.$2));
                                                                }
                                                            } else {
                                                                
                                                                const $cg$479 = $_0_arg.$2;
                                                                const $_256_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                                let $cg$480 = null;
                                                                if((((($_256_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                                    $cg$480 = false;
                                                                } else {
                                                                    $cg$480 = ($_256_in <= 57);
                                                                }
                                                                
                                                                let $cg$481 = null;
                                                                if($cg$480) {
                                                                    $cg$481 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$479.$1, $cg$479.$2, false, ($_256_in - 48));
                                                                } else {
                                                                    let $cg$482 = null;
                                                                    if((((($_256_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                        $cg$482 = false;
                                                                    } else {
                                                                        $cg$482 = ($_256_in <= 90);
                                                                    }
                                                                    
                                                                    
                                                                    if($cg$482) {
                                                                        $cg$481 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$479.$1, $cg$479.$2, true, ($_256_in - 65));
                                                                    } else {
                                                                        let $cg$484 = null;
                                                                        if((((($_256_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                            $cg$484 = false;
                                                                        } else {
                                                                            $cg$484 = ($_256_in <= 122);
                                                                        }
                                                                        
                                                                        
                                                                        if($cg$484) {
                                                                            $cg$481 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$479.$1, $cg$479.$2, false, ($_256_in - 97));
                                                                        } else {
                                                                            $cg$481 = new $HC_1_0$Main__Symbol($_256_in);
                                                                        }
                                                                    }
                                                                }
                                                                
                                                                return new $HC_2_1$Prelude__List___58__58_($cg$481, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$479.$1, $cg$479.$2)), $_1_arg.$2));
                                                            }
                                                        } else {
                                                            
                                                            const $cg$424 = $_0_arg.$2;
                                                            const $_261_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                            let $cg$425 = null;
                                                            if((((($_261_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$425 = false;
                                                            } else {
                                                                $cg$425 = ($_261_in <= 57);
                                                            }
                                                            
                                                            let $cg$426 = null;
                                                            if($cg$425) {
                                                                $cg$426 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$424.$1, $cg$424.$2, false, ($_261_in - 48));
                                                            } else {
                                                                let $cg$427 = null;
                                                                if((((($_261_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                    $cg$427 = false;
                                                                } else {
                                                                    $cg$427 = ($_261_in <= 90);
                                                                }
                                                                
                                                                
                                                                if($cg$427) {
                                                                    $cg$426 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$424.$1, $cg$424.$2, true, ($_261_in - 65));
                                                                } else {
                                                                    let $cg$429 = null;
                                                                    if((((($_261_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                        $cg$429 = false;
                                                                    } else {
                                                                        $cg$429 = ($_261_in <= 122);
                                                                    }
                                                                    
                                                                    
                                                                    if($cg$429) {
                                                                        $cg$426 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$424.$1, $cg$424.$2, false, ($_261_in - 97));
                                                                    } else {
                                                                        $cg$426 = new $HC_1_0$Main__Symbol($_261_in);
                                                                    }
                                                                }
                                                            }
                                                            
                                                            return new $HC_2_1$Prelude__List___58__58_($cg$426, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$424.$1, $cg$424.$2)), $_1_arg.$2));
                                                        }
                                                    } else {
                                                        
                                                        const $cg$488 = $_0_arg.$2;
                                                        const $_266_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                        let $cg$489 = null;
                                                        if((((($_266_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$489 = false;
                                                        } else {
                                                            $cg$489 = ($_266_in <= 57);
                                                        }
                                                        
                                                        let $cg$490 = null;
                                                        if($cg$489) {
                                                            $cg$490 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$488.$1, $cg$488.$2, false, ($_266_in - 48));
                                                        } else {
                                                            let $cg$491 = null;
                                                            if((((($_266_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$491 = false;
                                                            } else {
                                                                $cg$491 = ($_266_in <= 90);
                                                            }
                                                            
                                                            
                                                            if($cg$491) {
                                                                $cg$490 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$488.$1, $cg$488.$2, true, ($_266_in - 65));
                                                            } else {
                                                                let $cg$493 = null;
                                                                if((((($_266_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                    $cg$493 = false;
                                                                } else {
                                                                    $cg$493 = ($_266_in <= 122);
                                                                }
                                                                
                                                                
                                                                if($cg$493) {
                                                                    $cg$490 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$488.$1, $cg$488.$2, false, ($_266_in - 97));
                                                                } else {
                                                                    $cg$490 = new $HC_1_0$Main__Symbol($_266_in);
                                                                }
                                                            }
                                                        }
                                                        
                                                        return new $HC_2_1$Prelude__List___58__58_($cg$490, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$488.$1, $cg$488.$2)), $_1_arg.$2));
                                                    }
                                                } else {
                                                    
                                                    const $cg$412 = $_0_arg.$2;
                                                    const $_271_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                    let $cg$413 = null;
                                                    if((((($_271_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$413 = false;
                                                    } else {
                                                        $cg$413 = ($_271_in <= 57);
                                                    }
                                                    
                                                    let $cg$414 = null;
                                                    if($cg$413) {
                                                        $cg$414 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$412.$1, $cg$412.$2, false, ($_271_in - 48));
                                                    } else {
                                                        let $cg$415 = null;
                                                        if((((($_271_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$415 = false;
                                                        } else {
                                                            $cg$415 = ($_271_in <= 90);
                                                        }
                                                        
                                                        
                                                        if($cg$415) {
                                                            $cg$414 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$412.$1, $cg$412.$2, true, ($_271_in - 65));
                                                        } else {
                                                            let $cg$417 = null;
                                                            if((((($_271_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$417 = false;
                                                            } else {
                                                                $cg$417 = ($_271_in <= 122);
                                                            }
                                                            
                                                            
                                                            if($cg$417) {
                                                                $cg$414 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$412.$1, $cg$412.$2, false, ($_271_in - 97));
                                                            } else {
                                                                $cg$414 = new $HC_1_0$Main__Symbol($_271_in);
                                                            }
                                                        }
                                                    }
                                                    
                                                    return new $HC_2_1$Prelude__List___58__58_($cg$414, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$412.$1, $cg$412.$2)), $_1_arg.$2));
                                                }
                                            } else {
                                                
                                                const $cg$497 = $_0_arg.$2;
                                                const $_276_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                let $cg$498 = null;
                                                if((((($_276_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$498 = false;
                                                } else {
                                                    $cg$498 = ($_276_in <= 57);
                                                }
                                                
                                                let $cg$499 = null;
                                                if($cg$498) {
                                                    $cg$499 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$497.$1, $cg$497.$2, false, ($_276_in - 48));
                                                } else {
                                                    let $cg$500 = null;
                                                    if((((($_276_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$500 = false;
                                                    } else {
                                                        $cg$500 = ($_276_in <= 90);
                                                    }
                                                    
                                                    
                                                    if($cg$500) {
                                                        $cg$499 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$497.$1, $cg$497.$2, true, ($_276_in - 65));
                                                    } else {
                                                        let $cg$502 = null;
                                                        if((((($_276_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$502 = false;
                                                        } else {
                                                            $cg$502 = ($_276_in <= 122);
                                                        }
                                                        
                                                        
                                                        if($cg$502) {
                                                            $cg$499 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$497.$1, $cg$497.$2, false, ($_276_in - 97));
                                                        } else {
                                                            $cg$499 = new $HC_1_0$Main__Symbol($_276_in);
                                                        }
                                                    }
                                                }
                                                
                                                return new $HC_2_1$Prelude__List___58__58_($cg$499, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$497.$1, $cg$497.$2)), $_1_arg.$2));
                                            }
                                        } else {
                                            
                                            const $cg$400 = $_0_arg.$2;
                                            const $_281_in = (($_1_arg.$1).charCodeAt(0)|0);
                                            let $cg$401 = null;
                                            if((((($_281_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                $cg$401 = false;
                                            } else {
                                                $cg$401 = ($_281_in <= 57);
                                            }
                                            
                                            let $cg$402 = null;
                                            if($cg$401) {
                                                $cg$402 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$400.$1, $cg$400.$2, false, ($_281_in - 48));
                                            } else {
                                                let $cg$403 = null;
                                                if((((($_281_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$403 = false;
                                                } else {
                                                    $cg$403 = ($_281_in <= 90);
                                                }
                                                
                                                
                                                if($cg$403) {
                                                    $cg$402 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$400.$1, $cg$400.$2, true, ($_281_in - 65));
                                                } else {
                                                    let $cg$405 = null;
                                                    if((((($_281_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$405 = false;
                                                    } else {
                                                        $cg$405 = ($_281_in <= 122);
                                                    }
                                                    
                                                    
                                                    if($cg$405) {
                                                        $cg$402 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$400.$1, $cg$400.$2, false, ($_281_in - 97));
                                                    } else {
                                                        $cg$402 = new $HC_1_0$Main__Symbol($_281_in);
                                                    }
                                                }
                                            }
                                            
                                            return new $HC_2_1$Prelude__List___58__58_($cg$402, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$400.$1, $cg$400.$2)), $_1_arg.$2));
                                        }
                                    } else {
                                        
                                        const $cg$506 = $_0_arg.$2;
                                        const $_286_in = (($_1_arg.$1).charCodeAt(0)|0);
                                        let $cg$507 = null;
                                        if((((($_286_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                            $cg$507 = false;
                                        } else {
                                            $cg$507 = ($_286_in <= 57);
                                        }
                                        
                                        let $cg$508 = null;
                                        if($cg$507) {
                                            $cg$508 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$506.$1, $cg$506.$2, false, ($_286_in - 48));
                                        } else {
                                            let $cg$509 = null;
                                            if((((($_286_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                $cg$509 = false;
                                            } else {
                                                $cg$509 = ($_286_in <= 90);
                                            }
                                            
                                            
                                            if($cg$509) {
                                                $cg$508 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$506.$1, $cg$506.$2, true, ($_286_in - 65));
                                            } else {
                                                let $cg$511 = null;
                                                if((((($_286_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$511 = false;
                                                } else {
                                                    $cg$511 = ($_286_in <= 122);
                                                }
                                                
                                                
                                                if($cg$511) {
                                                    $cg$508 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$506.$1, $cg$506.$2, false, ($_286_in - 97));
                                                } else {
                                                    $cg$508 = new $HC_1_0$Main__Symbol($_286_in);
                                                }
                                            }
                                        }
                                        
                                        return new $HC_2_1$Prelude__List___58__58_($cg$508, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$506.$1, $cg$506.$2)), $_1_arg.$2));
                                    }
                                } else {
                                    
                                    const $cg$388 = $_0_arg.$2;
                                    const $_291_in = (($_1_arg.$1).charCodeAt(0)|0);
                                    let $cg$389 = null;
                                    if((((($_291_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                        $cg$389 = false;
                                    } else {
                                        $cg$389 = ($_291_in <= 57);
                                    }
                                    
                                    let $cg$390 = null;
                                    if($cg$389) {
                                        $cg$390 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$388.$1, $cg$388.$2, false, ($_291_in - 48));
                                    } else {
                                        let $cg$391 = null;
                                        if((((($_291_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                            $cg$391 = false;
                                        } else {
                                            $cg$391 = ($_291_in <= 90);
                                        }
                                        
                                        
                                        if($cg$391) {
                                            $cg$390 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$388.$1, $cg$388.$2, true, ($_291_in - 65));
                                        } else {
                                            let $cg$393 = null;
                                            if((((($_291_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                $cg$393 = false;
                                            } else {
                                                $cg$393 = ($_291_in <= 122);
                                            }
                                            
                                            
                                            if($cg$393) {
                                                $cg$390 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$388.$1, $cg$388.$2, false, ($_291_in - 97));
                                            } else {
                                                $cg$390 = new $HC_1_0$Main__Symbol($_291_in);
                                            }
                                        }
                                    }
                                    
                                    return new $HC_2_1$Prelude__List___58__58_($cg$390, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$388.$1, $cg$388.$2)), $_1_arg.$2));
                                }
                            } else {
                                
                                const $cg$515 = $_0_arg.$2;
                                const $_296_in = (($_1_arg.$1).charCodeAt(0)|0);
                                let $cg$516 = null;
                                if((((($_296_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                    $cg$516 = false;
                                } else {
                                    $cg$516 = ($_296_in <= 57);
                                }
                                
                                let $cg$517 = null;
                                if($cg$516) {
                                    $cg$517 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$515.$1, $cg$515.$2, false, ($_296_in - 48));
                                } else {
                                    let $cg$518 = null;
                                    if((((($_296_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                        $cg$518 = false;
                                    } else {
                                        $cg$518 = ($_296_in <= 90);
                                    }
                                    
                                    
                                    if($cg$518) {
                                        $cg$517 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$515.$1, $cg$515.$2, true, ($_296_in - 65));
                                    } else {
                                        let $cg$520 = null;
                                        if((((($_296_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                            $cg$520 = false;
                                        } else {
                                            $cg$520 = ($_296_in <= 122);
                                        }
                                        
                                        
                                        if($cg$520) {
                                            $cg$517 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$515.$1, $cg$515.$2, false, ($_296_in - 97));
                                        } else {
                                            $cg$517 = new $HC_1_0$Main__Symbol($_296_in);
                                        }
                                    }
                                }
                                
                                return new $HC_2_1$Prelude__List___58__58_($cg$517, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$515.$1, $cg$515.$2)), $_1_arg.$2));
                            }
                        } else {
                            
                            const $cg$376 = $_0_arg.$2;
                            const $_301_in = (($_1_arg.$1).charCodeAt(0)|0);
                            let $cg$377 = null;
                            if((((($_301_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                $cg$377 = false;
                            } else {
                                $cg$377 = ($_301_in <= 57);
                            }
                            
                            let $cg$378 = null;
                            if($cg$377) {
                                $cg$378 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$376.$1, $cg$376.$2, false, ($_301_in - 48));
                            } else {
                                let $cg$379 = null;
                                if((((($_301_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                    $cg$379 = false;
                                } else {
                                    $cg$379 = ($_301_in <= 90);
                                }
                                
                                
                                if($cg$379) {
                                    $cg$378 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$376.$1, $cg$376.$2, true, ($_301_in - 65));
                                } else {
                                    let $cg$381 = null;
                                    if((((($_301_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                        $cg$381 = false;
                                    } else {
                                        $cg$381 = ($_301_in <= 122);
                                    }
                                    
                                    
                                    if($cg$381) {
                                        $cg$378 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$376.$1, $cg$376.$2, false, ($_301_in - 97));
                                    } else {
                                        $cg$378 = new $HC_1_0$Main__Symbol($_301_in);
                                    }
                                }
                            }
                            
                            return new $HC_2_1$Prelude__List___58__58_($cg$378, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$376.$1, $cg$376.$2)), $_1_arg.$2));
                        }
                    } else if(($cg$277 === "i")) {
                        const $cg$523 = $cg$266.$2;
                        if(($cg$523.type === 1)) {
                            
                            if(($cg$523.$1 === ">")) {
                                
                                const $cg$536 = $_0_arg.$2;
                                $_0_arg = new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$536.$1, true));
                                $_1_arg = $cg$523.$2;
                            } else {
                                
                                const $cg$539 = $_0_arg.$2;
                                const $_312_in = (($_1_arg.$1).charCodeAt(0)|0);
                                let $cg$540 = null;
                                if((((($_312_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                    $cg$540 = false;
                                } else {
                                    $cg$540 = ($_312_in <= 57);
                                }
                                
                                let $cg$541 = null;
                                if($cg$540) {
                                    $cg$541 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$539.$1, $cg$539.$2, false, ($_312_in - 48));
                                } else {
                                    let $cg$542 = null;
                                    if((((($_312_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                        $cg$542 = false;
                                    } else {
                                        $cg$542 = ($_312_in <= 90);
                                    }
                                    
                                    
                                    if($cg$542) {
                                        $cg$541 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$539.$1, $cg$539.$2, true, ($_312_in - 65));
                                    } else {
                                        let $cg$544 = null;
                                        if((((($_312_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                            $cg$544 = false;
                                        } else {
                                            $cg$544 = ($_312_in <= 122);
                                        }
                                        
                                        
                                        if($cg$544) {
                                            $cg$541 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$539.$1, $cg$539.$2, false, ($_312_in - 97));
                                        } else {
                                            $cg$541 = new $HC_1_0$Main__Symbol($_312_in);
                                        }
                                    }
                                }
                                
                                return new $HC_2_1$Prelude__List___58__58_($cg$541, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$539.$1, $cg$539.$2)), $_1_arg.$2));
                            }
                        } else {
                            
                            const $cg$526 = $_0_arg.$2;
                            const $_317_in = (($_1_arg.$1).charCodeAt(0)|0);
                            let $cg$527 = null;
                            if((((($_317_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                $cg$527 = false;
                            } else {
                                $cg$527 = ($_317_in <= 57);
                            }
                            
                            let $cg$528 = null;
                            if($cg$527) {
                                $cg$528 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$526.$1, $cg$526.$2, false, ($_317_in - 48));
                            } else {
                                let $cg$529 = null;
                                if((((($_317_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                    $cg$529 = false;
                                } else {
                                    $cg$529 = ($_317_in <= 90);
                                }
                                
                                
                                if($cg$529) {
                                    $cg$528 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$526.$1, $cg$526.$2, true, ($_317_in - 65));
                                } else {
                                    let $cg$531 = null;
                                    if((((($_317_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                        $cg$531 = false;
                                    } else {
                                        $cg$531 = ($_317_in <= 122);
                                    }
                                    
                                    
                                    if($cg$531) {
                                        $cg$528 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$526.$1, $cg$526.$2, false, ($_317_in - 97));
                                    } else {
                                        $cg$528 = new $HC_1_0$Main__Symbol($_317_in);
                                    }
                                }
                            }
                            
                            return new $HC_2_1$Prelude__List___58__58_($cg$528, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$526.$1, $cg$526.$2)), $_1_arg.$2));
                        }
                    } else if(($cg$277 === "l")) {
                        const $cg$547 = $cg$266.$2;
                        if(($cg$547.type === 1)) {
                            
                            if(($cg$547.$1 === "i")) {
                                const $cg$559 = $cg$547.$2;
                                if(($cg$559.type === 1)) {
                                    
                                    if(($cg$559.$1 === "n")) {
                                        const $cg$571 = $cg$559.$2;
                                        if(($cg$571.type === 1)) {
                                            
                                            if(($cg$571.$1 === "e")) {
                                                const $cg$583 = $cg$571.$2;
                                                if(($cg$583.type === 1)) {
                                                    
                                                    if(($cg$583.$1 === "s")) {
                                                        const $cg$595 = $cg$583.$2;
                                                        if(($cg$595.type === 1)) {
                                                            
                                                            if(($cg$595.$1 === ">")) {
                                                                
                                                                const $cg$608 = $_0_arg.$2;
                                                                $_0_arg = new $HC_2_0$Builtins__MkPair($HC_0_3$Main__Doublestrike, new $HC_2_0$Builtins__MkPair($cg$608.$1, $cg$608.$2));
                                                                $_1_arg = $cg$595.$2;
                                                            } else {
                                                                
                                                                const $cg$611 = $_0_arg.$2;
                                                                const $_336_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                                let $cg$612 = null;
                                                                if((((($_336_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                                    $cg$612 = false;
                                                                } else {
                                                                    $cg$612 = ($_336_in <= 57);
                                                                }
                                                                
                                                                let $cg$613 = null;
                                                                if($cg$612) {
                                                                    $cg$613 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$611.$1, $cg$611.$2, false, ($_336_in - 48));
                                                                } else {
                                                                    let $cg$614 = null;
                                                                    if((((($_336_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                        $cg$614 = false;
                                                                    } else {
                                                                        $cg$614 = ($_336_in <= 90);
                                                                    }
                                                                    
                                                                    
                                                                    if($cg$614) {
                                                                        $cg$613 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$611.$1, $cg$611.$2, true, ($_336_in - 65));
                                                                    } else {
                                                                        let $cg$616 = null;
                                                                        if((((($_336_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                            $cg$616 = false;
                                                                        } else {
                                                                            $cg$616 = ($_336_in <= 122);
                                                                        }
                                                                        
                                                                        
                                                                        if($cg$616) {
                                                                            $cg$613 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$611.$1, $cg$611.$2, false, ($_336_in - 97));
                                                                        } else {
                                                                            $cg$613 = new $HC_1_0$Main__Symbol($_336_in);
                                                                        }
                                                                    }
                                                                }
                                                                
                                                                return new $HC_2_1$Prelude__List___58__58_($cg$613, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$611.$1, $cg$611.$2)), $_1_arg.$2));
                                                            }
                                                        } else {
                                                            
                                                            const $cg$598 = $_0_arg.$2;
                                                            const $_341_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                            let $cg$599 = null;
                                                            if((((($_341_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$599 = false;
                                                            } else {
                                                                $cg$599 = ($_341_in <= 57);
                                                            }
                                                            
                                                            let $cg$600 = null;
                                                            if($cg$599) {
                                                                $cg$600 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$598.$1, $cg$598.$2, false, ($_341_in - 48));
                                                            } else {
                                                                let $cg$601 = null;
                                                                if((((($_341_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                    $cg$601 = false;
                                                                } else {
                                                                    $cg$601 = ($_341_in <= 90);
                                                                }
                                                                
                                                                
                                                                if($cg$601) {
                                                                    $cg$600 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$598.$1, $cg$598.$2, true, ($_341_in - 65));
                                                                } else {
                                                                    let $cg$603 = null;
                                                                    if((((($_341_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                        $cg$603 = false;
                                                                    } else {
                                                                        $cg$603 = ($_341_in <= 122);
                                                                    }
                                                                    
                                                                    
                                                                    if($cg$603) {
                                                                        $cg$600 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$598.$1, $cg$598.$2, false, ($_341_in - 97));
                                                                    } else {
                                                                        $cg$600 = new $HC_1_0$Main__Symbol($_341_in);
                                                                    }
                                                                }
                                                            }
                                                            
                                                            return new $HC_2_1$Prelude__List___58__58_($cg$600, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$598.$1, $cg$598.$2)), $_1_arg.$2));
                                                        }
                                                    } else {
                                                        
                                                        const $cg$620 = $_0_arg.$2;
                                                        const $_346_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                        let $cg$621 = null;
                                                        if((((($_346_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$621 = false;
                                                        } else {
                                                            $cg$621 = ($_346_in <= 57);
                                                        }
                                                        
                                                        let $cg$622 = null;
                                                        if($cg$621) {
                                                            $cg$622 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$620.$1, $cg$620.$2, false, ($_346_in - 48));
                                                        } else {
                                                            let $cg$623 = null;
                                                            if((((($_346_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$623 = false;
                                                            } else {
                                                                $cg$623 = ($_346_in <= 90);
                                                            }
                                                            
                                                            
                                                            if($cg$623) {
                                                                $cg$622 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$620.$1, $cg$620.$2, true, ($_346_in - 65));
                                                            } else {
                                                                let $cg$625 = null;
                                                                if((((($_346_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                    $cg$625 = false;
                                                                } else {
                                                                    $cg$625 = ($_346_in <= 122);
                                                                }
                                                                
                                                                
                                                                if($cg$625) {
                                                                    $cg$622 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$620.$1, $cg$620.$2, false, ($_346_in - 97));
                                                                } else {
                                                                    $cg$622 = new $HC_1_0$Main__Symbol($_346_in);
                                                                }
                                                            }
                                                        }
                                                        
                                                        return new $HC_2_1$Prelude__List___58__58_($cg$622, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$620.$1, $cg$620.$2)), $_1_arg.$2));
                                                    }
                                                } else {
                                                    
                                                    const $cg$586 = $_0_arg.$2;
                                                    const $_351_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                    let $cg$587 = null;
                                                    if((((($_351_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$587 = false;
                                                    } else {
                                                        $cg$587 = ($_351_in <= 57);
                                                    }
                                                    
                                                    let $cg$588 = null;
                                                    if($cg$587) {
                                                        $cg$588 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$586.$1, $cg$586.$2, false, ($_351_in - 48));
                                                    } else {
                                                        let $cg$589 = null;
                                                        if((((($_351_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$589 = false;
                                                        } else {
                                                            $cg$589 = ($_351_in <= 90);
                                                        }
                                                        
                                                        
                                                        if($cg$589) {
                                                            $cg$588 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$586.$1, $cg$586.$2, true, ($_351_in - 65));
                                                        } else {
                                                            let $cg$591 = null;
                                                            if((((($_351_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$591 = false;
                                                            } else {
                                                                $cg$591 = ($_351_in <= 122);
                                                            }
                                                            
                                                            
                                                            if($cg$591) {
                                                                $cg$588 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$586.$1, $cg$586.$2, false, ($_351_in - 97));
                                                            } else {
                                                                $cg$588 = new $HC_1_0$Main__Symbol($_351_in);
                                                            }
                                                        }
                                                    }
                                                    
                                                    return new $HC_2_1$Prelude__List___58__58_($cg$588, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$586.$1, $cg$586.$2)), $_1_arg.$2));
                                                }
                                            } else {
                                                
                                                const $cg$629 = $_0_arg.$2;
                                                const $_356_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                let $cg$630 = null;
                                                if((((($_356_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$630 = false;
                                                } else {
                                                    $cg$630 = ($_356_in <= 57);
                                                }
                                                
                                                let $cg$631 = null;
                                                if($cg$630) {
                                                    $cg$631 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$629.$1, $cg$629.$2, false, ($_356_in - 48));
                                                } else {
                                                    let $cg$632 = null;
                                                    if((((($_356_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$632 = false;
                                                    } else {
                                                        $cg$632 = ($_356_in <= 90);
                                                    }
                                                    
                                                    
                                                    if($cg$632) {
                                                        $cg$631 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$629.$1, $cg$629.$2, true, ($_356_in - 65));
                                                    } else {
                                                        let $cg$634 = null;
                                                        if((((($_356_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$634 = false;
                                                        } else {
                                                            $cg$634 = ($_356_in <= 122);
                                                        }
                                                        
                                                        
                                                        if($cg$634) {
                                                            $cg$631 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$629.$1, $cg$629.$2, false, ($_356_in - 97));
                                                        } else {
                                                            $cg$631 = new $HC_1_0$Main__Symbol($_356_in);
                                                        }
                                                    }
                                                }
                                                
                                                return new $HC_2_1$Prelude__List___58__58_($cg$631, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$629.$1, $cg$629.$2)), $_1_arg.$2));
                                            }
                                        } else {
                                            
                                            const $cg$574 = $_0_arg.$2;
                                            const $_361_in = (($_1_arg.$1).charCodeAt(0)|0);
                                            let $cg$575 = null;
                                            if((((($_361_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                $cg$575 = false;
                                            } else {
                                                $cg$575 = ($_361_in <= 57);
                                            }
                                            
                                            let $cg$576 = null;
                                            if($cg$575) {
                                                $cg$576 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$574.$1, $cg$574.$2, false, ($_361_in - 48));
                                            } else {
                                                let $cg$577 = null;
                                                if((((($_361_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$577 = false;
                                                } else {
                                                    $cg$577 = ($_361_in <= 90);
                                                }
                                                
                                                
                                                if($cg$577) {
                                                    $cg$576 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$574.$1, $cg$574.$2, true, ($_361_in - 65));
                                                } else {
                                                    let $cg$579 = null;
                                                    if((((($_361_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$579 = false;
                                                    } else {
                                                        $cg$579 = ($_361_in <= 122);
                                                    }
                                                    
                                                    
                                                    if($cg$579) {
                                                        $cg$576 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$574.$1, $cg$574.$2, false, ($_361_in - 97));
                                                    } else {
                                                        $cg$576 = new $HC_1_0$Main__Symbol($_361_in);
                                                    }
                                                }
                                            }
                                            
                                            return new $HC_2_1$Prelude__List___58__58_($cg$576, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$574.$1, $cg$574.$2)), $_1_arg.$2));
                                        }
                                    } else {
                                        
                                        const $cg$638 = $_0_arg.$2;
                                        const $_366_in = (($_1_arg.$1).charCodeAt(0)|0);
                                        let $cg$639 = null;
                                        if((((($_366_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                            $cg$639 = false;
                                        } else {
                                            $cg$639 = ($_366_in <= 57);
                                        }
                                        
                                        let $cg$640 = null;
                                        if($cg$639) {
                                            $cg$640 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$638.$1, $cg$638.$2, false, ($_366_in - 48));
                                        } else {
                                            let $cg$641 = null;
                                            if((((($_366_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                $cg$641 = false;
                                            } else {
                                                $cg$641 = ($_366_in <= 90);
                                            }
                                            
                                            
                                            if($cg$641) {
                                                $cg$640 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$638.$1, $cg$638.$2, true, ($_366_in - 65));
                                            } else {
                                                let $cg$643 = null;
                                                if((((($_366_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$643 = false;
                                                } else {
                                                    $cg$643 = ($_366_in <= 122);
                                                }
                                                
                                                
                                                if($cg$643) {
                                                    $cg$640 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$638.$1, $cg$638.$2, false, ($_366_in - 97));
                                                } else {
                                                    $cg$640 = new $HC_1_0$Main__Symbol($_366_in);
                                                }
                                            }
                                        }
                                        
                                        return new $HC_2_1$Prelude__List___58__58_($cg$640, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$638.$1, $cg$638.$2)), $_1_arg.$2));
                                    }
                                } else {
                                    
                                    const $cg$562 = $_0_arg.$2;
                                    const $_371_in = (($_1_arg.$1).charCodeAt(0)|0);
                                    let $cg$563 = null;
                                    if((((($_371_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                        $cg$563 = false;
                                    } else {
                                        $cg$563 = ($_371_in <= 57);
                                    }
                                    
                                    let $cg$564 = null;
                                    if($cg$563) {
                                        $cg$564 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$562.$1, $cg$562.$2, false, ($_371_in - 48));
                                    } else {
                                        let $cg$565 = null;
                                        if((((($_371_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                            $cg$565 = false;
                                        } else {
                                            $cg$565 = ($_371_in <= 90);
                                        }
                                        
                                        
                                        if($cg$565) {
                                            $cg$564 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$562.$1, $cg$562.$2, true, ($_371_in - 65));
                                        } else {
                                            let $cg$567 = null;
                                            if((((($_371_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                $cg$567 = false;
                                            } else {
                                                $cg$567 = ($_371_in <= 122);
                                            }
                                            
                                            
                                            if($cg$567) {
                                                $cg$564 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$562.$1, $cg$562.$2, false, ($_371_in - 97));
                                            } else {
                                                $cg$564 = new $HC_1_0$Main__Symbol($_371_in);
                                            }
                                        }
                                    }
                                    
                                    return new $HC_2_1$Prelude__List___58__58_($cg$564, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$562.$1, $cg$562.$2)), $_1_arg.$2));
                                }
                            } else {
                                
                                const $cg$647 = $_0_arg.$2;
                                const $_376_in = (($_1_arg.$1).charCodeAt(0)|0);
                                let $cg$648 = null;
                                if((((($_376_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                    $cg$648 = false;
                                } else {
                                    $cg$648 = ($_376_in <= 57);
                                }
                                
                                let $cg$649 = null;
                                if($cg$648) {
                                    $cg$649 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$647.$1, $cg$647.$2, false, ($_376_in - 48));
                                } else {
                                    let $cg$650 = null;
                                    if((((($_376_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                        $cg$650 = false;
                                    } else {
                                        $cg$650 = ($_376_in <= 90);
                                    }
                                    
                                    
                                    if($cg$650) {
                                        $cg$649 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$647.$1, $cg$647.$2, true, ($_376_in - 65));
                                    } else {
                                        let $cg$652 = null;
                                        if((((($_376_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                            $cg$652 = false;
                                        } else {
                                            $cg$652 = ($_376_in <= 122);
                                        }
                                        
                                        
                                        if($cg$652) {
                                            $cg$649 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$647.$1, $cg$647.$2, false, ($_376_in - 97));
                                        } else {
                                            $cg$649 = new $HC_1_0$Main__Symbol($_376_in);
                                        }
                                    }
                                }
                                
                                return new $HC_2_1$Prelude__List___58__58_($cg$649, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$647.$1, $cg$647.$2)), $_1_arg.$2));
                            }
                        } else {
                            
                            const $cg$550 = $_0_arg.$2;
                            const $_381_in = (($_1_arg.$1).charCodeAt(0)|0);
                            let $cg$551 = null;
                            if((((($_381_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                $cg$551 = false;
                            } else {
                                $cg$551 = ($_381_in <= 57);
                            }
                            
                            let $cg$552 = null;
                            if($cg$551) {
                                $cg$552 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$550.$1, $cg$550.$2, false, ($_381_in - 48));
                            } else {
                                let $cg$553 = null;
                                if((((($_381_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                    $cg$553 = false;
                                } else {
                                    $cg$553 = ($_381_in <= 90);
                                }
                                
                                
                                if($cg$553) {
                                    $cg$552 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$550.$1, $cg$550.$2, true, ($_381_in - 65));
                                } else {
                                    let $cg$555 = null;
                                    if((((($_381_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                        $cg$555 = false;
                                    } else {
                                        $cg$555 = ($_381_in <= 122);
                                    }
                                    
                                    
                                    if($cg$555) {
                                        $cg$552 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$550.$1, $cg$550.$2, false, ($_381_in - 97));
                                    } else {
                                        $cg$552 = new $HC_1_0$Main__Symbol($_381_in);
                                    }
                                }
                            }
                            
                            return new $HC_2_1$Prelude__List___58__58_($cg$552, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$550.$1, $cg$550.$2)), $_1_arg.$2));
                        }
                    } else if(($cg$277 === "m")) {
                        const $cg$655 = $cg$266.$2;
                        if(($cg$655.type === 1)) {
                            
                            if(($cg$655.$1 === "o")) {
                                const $cg$667 = $cg$655.$2;
                                if(($cg$667.type === 1)) {
                                    
                                    if(($cg$667.$1 === "n")) {
                                        const $cg$679 = $cg$667.$2;
                                        if(($cg$679.type === 1)) {
                                            
                                            if(($cg$679.$1 === "o")) {
                                                const $cg$691 = $cg$679.$2;
                                                if(($cg$691.type === 1)) {
                                                    
                                                    if(($cg$691.$1 === ">")) {
                                                        
                                                        const $cg$704 = $_0_arg.$2;
                                                        $_0_arg = new $HC_2_0$Builtins__MkPair($HC_0_5$Main__Mono, new $HC_2_0$Builtins__MkPair($cg$704.$1, $cg$704.$2));
                                                        $_1_arg = $cg$691.$2;
                                                    } else {
                                                        
                                                        const $cg$707 = $_0_arg.$2;
                                                        const $_398_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                        let $cg$708 = null;
                                                        if((((($_398_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$708 = false;
                                                        } else {
                                                            $cg$708 = ($_398_in <= 57);
                                                        }
                                                        
                                                        let $cg$709 = null;
                                                        if($cg$708) {
                                                            $cg$709 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$707.$1, $cg$707.$2, false, ($_398_in - 48));
                                                        } else {
                                                            let $cg$710 = null;
                                                            if((((($_398_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$710 = false;
                                                            } else {
                                                                $cg$710 = ($_398_in <= 90);
                                                            }
                                                            
                                                            
                                                            if($cg$710) {
                                                                $cg$709 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$707.$1, $cg$707.$2, true, ($_398_in - 65));
                                                            } else {
                                                                let $cg$712 = null;
                                                                if((((($_398_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                    $cg$712 = false;
                                                                } else {
                                                                    $cg$712 = ($_398_in <= 122);
                                                                }
                                                                
                                                                
                                                                if($cg$712) {
                                                                    $cg$709 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$707.$1, $cg$707.$2, false, ($_398_in - 97));
                                                                } else {
                                                                    $cg$709 = new $HC_1_0$Main__Symbol($_398_in);
                                                                }
                                                            }
                                                        }
                                                        
                                                        return new $HC_2_1$Prelude__List___58__58_($cg$709, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$707.$1, $cg$707.$2)), $_1_arg.$2));
                                                    }
                                                } else {
                                                    
                                                    const $cg$694 = $_0_arg.$2;
                                                    const $_403_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                    let $cg$695 = null;
                                                    if((((($_403_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$695 = false;
                                                    } else {
                                                        $cg$695 = ($_403_in <= 57);
                                                    }
                                                    
                                                    let $cg$696 = null;
                                                    if($cg$695) {
                                                        $cg$696 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$694.$1, $cg$694.$2, false, ($_403_in - 48));
                                                    } else {
                                                        let $cg$697 = null;
                                                        if((((($_403_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$697 = false;
                                                        } else {
                                                            $cg$697 = ($_403_in <= 90);
                                                        }
                                                        
                                                        
                                                        if($cg$697) {
                                                            $cg$696 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$694.$1, $cg$694.$2, true, ($_403_in - 65));
                                                        } else {
                                                            let $cg$699 = null;
                                                            if((((($_403_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$699 = false;
                                                            } else {
                                                                $cg$699 = ($_403_in <= 122);
                                                            }
                                                            
                                                            
                                                            if($cg$699) {
                                                                $cg$696 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$694.$1, $cg$694.$2, false, ($_403_in - 97));
                                                            } else {
                                                                $cg$696 = new $HC_1_0$Main__Symbol($_403_in);
                                                            }
                                                        }
                                                    }
                                                    
                                                    return new $HC_2_1$Prelude__List___58__58_($cg$696, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$694.$1, $cg$694.$2)), $_1_arg.$2));
                                                }
                                            } else {
                                                
                                                const $cg$716 = $_0_arg.$2;
                                                const $_408_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                let $cg$717 = null;
                                                if((((($_408_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$717 = false;
                                                } else {
                                                    $cg$717 = ($_408_in <= 57);
                                                }
                                                
                                                let $cg$718 = null;
                                                if($cg$717) {
                                                    $cg$718 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$716.$1, $cg$716.$2, false, ($_408_in - 48));
                                                } else {
                                                    let $cg$719 = null;
                                                    if((((($_408_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$719 = false;
                                                    } else {
                                                        $cg$719 = ($_408_in <= 90);
                                                    }
                                                    
                                                    
                                                    if($cg$719) {
                                                        $cg$718 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$716.$1, $cg$716.$2, true, ($_408_in - 65));
                                                    } else {
                                                        let $cg$721 = null;
                                                        if((((($_408_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$721 = false;
                                                        } else {
                                                            $cg$721 = ($_408_in <= 122);
                                                        }
                                                        
                                                        
                                                        if($cg$721) {
                                                            $cg$718 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$716.$1, $cg$716.$2, false, ($_408_in - 97));
                                                        } else {
                                                            $cg$718 = new $HC_1_0$Main__Symbol($_408_in);
                                                        }
                                                    }
                                                }
                                                
                                                return new $HC_2_1$Prelude__List___58__58_($cg$718, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$716.$1, $cg$716.$2)), $_1_arg.$2));
                                            }
                                        } else {
                                            
                                            const $cg$682 = $_0_arg.$2;
                                            const $_413_in = (($_1_arg.$1).charCodeAt(0)|0);
                                            let $cg$683 = null;
                                            if((((($_413_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                $cg$683 = false;
                                            } else {
                                                $cg$683 = ($_413_in <= 57);
                                            }
                                            
                                            let $cg$684 = null;
                                            if($cg$683) {
                                                $cg$684 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$682.$1, $cg$682.$2, false, ($_413_in - 48));
                                            } else {
                                                let $cg$685 = null;
                                                if((((($_413_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$685 = false;
                                                } else {
                                                    $cg$685 = ($_413_in <= 90);
                                                }
                                                
                                                
                                                if($cg$685) {
                                                    $cg$684 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$682.$1, $cg$682.$2, true, ($_413_in - 65));
                                                } else {
                                                    let $cg$687 = null;
                                                    if((((($_413_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$687 = false;
                                                    } else {
                                                        $cg$687 = ($_413_in <= 122);
                                                    }
                                                    
                                                    
                                                    if($cg$687) {
                                                        $cg$684 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$682.$1, $cg$682.$2, false, ($_413_in - 97));
                                                    } else {
                                                        $cg$684 = new $HC_1_0$Main__Symbol($_413_in);
                                                    }
                                                }
                                            }
                                            
                                            return new $HC_2_1$Prelude__List___58__58_($cg$684, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$682.$1, $cg$682.$2)), $_1_arg.$2));
                                        }
                                    } else {
                                        
                                        const $cg$725 = $_0_arg.$2;
                                        const $_418_in = (($_1_arg.$1).charCodeAt(0)|0);
                                        let $cg$726 = null;
                                        if((((($_418_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                            $cg$726 = false;
                                        } else {
                                            $cg$726 = ($_418_in <= 57);
                                        }
                                        
                                        let $cg$727 = null;
                                        if($cg$726) {
                                            $cg$727 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$725.$1, $cg$725.$2, false, ($_418_in - 48));
                                        } else {
                                            let $cg$728 = null;
                                            if((((($_418_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                $cg$728 = false;
                                            } else {
                                                $cg$728 = ($_418_in <= 90);
                                            }
                                            
                                            
                                            if($cg$728) {
                                                $cg$727 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$725.$1, $cg$725.$2, true, ($_418_in - 65));
                                            } else {
                                                let $cg$730 = null;
                                                if((((($_418_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$730 = false;
                                                } else {
                                                    $cg$730 = ($_418_in <= 122);
                                                }
                                                
                                                
                                                if($cg$730) {
                                                    $cg$727 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$725.$1, $cg$725.$2, false, ($_418_in - 97));
                                                } else {
                                                    $cg$727 = new $HC_1_0$Main__Symbol($_418_in);
                                                }
                                            }
                                        }
                                        
                                        return new $HC_2_1$Prelude__List___58__58_($cg$727, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$725.$1, $cg$725.$2)), $_1_arg.$2));
                                    }
                                } else {
                                    
                                    const $cg$670 = $_0_arg.$2;
                                    const $_423_in = (($_1_arg.$1).charCodeAt(0)|0);
                                    let $cg$671 = null;
                                    if((((($_423_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                        $cg$671 = false;
                                    } else {
                                        $cg$671 = ($_423_in <= 57);
                                    }
                                    
                                    let $cg$672 = null;
                                    if($cg$671) {
                                        $cg$672 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$670.$1, $cg$670.$2, false, ($_423_in - 48));
                                    } else {
                                        let $cg$673 = null;
                                        if((((($_423_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                            $cg$673 = false;
                                        } else {
                                            $cg$673 = ($_423_in <= 90);
                                        }
                                        
                                        
                                        if($cg$673) {
                                            $cg$672 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$670.$1, $cg$670.$2, true, ($_423_in - 65));
                                        } else {
                                            let $cg$675 = null;
                                            if((((($_423_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                $cg$675 = false;
                                            } else {
                                                $cg$675 = ($_423_in <= 122);
                                            }
                                            
                                            
                                            if($cg$675) {
                                                $cg$672 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$670.$1, $cg$670.$2, false, ($_423_in - 97));
                                            } else {
                                                $cg$672 = new $HC_1_0$Main__Symbol($_423_in);
                                            }
                                        }
                                    }
                                    
                                    return new $HC_2_1$Prelude__List___58__58_($cg$672, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$670.$1, $cg$670.$2)), $_1_arg.$2));
                                }
                            } else {
                                
                                const $cg$734 = $_0_arg.$2;
                                const $_428_in = (($_1_arg.$1).charCodeAt(0)|0);
                                let $cg$735 = null;
                                if((((($_428_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                    $cg$735 = false;
                                } else {
                                    $cg$735 = ($_428_in <= 57);
                                }
                                
                                let $cg$736 = null;
                                if($cg$735) {
                                    $cg$736 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$734.$1, $cg$734.$2, false, ($_428_in - 48));
                                } else {
                                    let $cg$737 = null;
                                    if((((($_428_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                        $cg$737 = false;
                                    } else {
                                        $cg$737 = ($_428_in <= 90);
                                    }
                                    
                                    
                                    if($cg$737) {
                                        $cg$736 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$734.$1, $cg$734.$2, true, ($_428_in - 65));
                                    } else {
                                        let $cg$739 = null;
                                        if((((($_428_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                            $cg$739 = false;
                                        } else {
                                            $cg$739 = ($_428_in <= 122);
                                        }
                                        
                                        
                                        if($cg$739) {
                                            $cg$736 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$734.$1, $cg$734.$2, false, ($_428_in - 97));
                                        } else {
                                            $cg$736 = new $HC_1_0$Main__Symbol($_428_in);
                                        }
                                    }
                                }
                                
                                return new $HC_2_1$Prelude__List___58__58_($cg$736, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$734.$1, $cg$734.$2)), $_1_arg.$2));
                            }
                        } else {
                            
                            const $cg$658 = $_0_arg.$2;
                            const $_433_in = (($_1_arg.$1).charCodeAt(0)|0);
                            let $cg$659 = null;
                            if((((($_433_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                $cg$659 = false;
                            } else {
                                $cg$659 = ($_433_in <= 57);
                            }
                            
                            let $cg$660 = null;
                            if($cg$659) {
                                $cg$660 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$658.$1, $cg$658.$2, false, ($_433_in - 48));
                            } else {
                                let $cg$661 = null;
                                if((((($_433_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                    $cg$661 = false;
                                } else {
                                    $cg$661 = ($_433_in <= 90);
                                }
                                
                                
                                if($cg$661) {
                                    $cg$660 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$658.$1, $cg$658.$2, true, ($_433_in - 65));
                                } else {
                                    let $cg$663 = null;
                                    if((((($_433_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                        $cg$663 = false;
                                    } else {
                                        $cg$663 = ($_433_in <= 122);
                                    }
                                    
                                    
                                    if($cg$663) {
                                        $cg$660 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$658.$1, $cg$658.$2, false, ($_433_in - 97));
                                    } else {
                                        $cg$660 = new $HC_1_0$Main__Symbol($_433_in);
                                    }
                                }
                            }
                            
                            return new $HC_2_1$Prelude__List___58__58_($cg$660, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$658.$1, $cg$658.$2)), $_1_arg.$2));
                        }
                    } else if(($cg$277 === "s")) {
                        const $cg$742 = $cg$266.$2;
                        if(($cg$742.type === 1)) {
                            const $cg$753 = $cg$742.$1;
                            if(($cg$753 === "a")) {
                                const $cg$755 = $cg$742.$2;
                                if(($cg$755.type === 1)) {
                                    
                                    if(($cg$755.$1 === "n")) {
                                        const $cg$767 = $cg$755.$2;
                                        if(($cg$767.type === 1)) {
                                            
                                            if(($cg$767.$1 === "s")) {
                                                const $cg$779 = $cg$767.$2;
                                                if(($cg$779.type === 1)) {
                                                    
                                                    if(($cg$779.$1 === ">")) {
                                                        
                                                        const $cg$792 = $_0_arg.$2;
                                                        $_0_arg = new $HC_2_0$Builtins__MkPair($HC_0_4$Main__Sans, new $HC_2_0$Builtins__MkPair($cg$792.$1, $cg$792.$2));
                                                        $_1_arg = $cg$779.$2;
                                                    } else {
                                                        
                                                        const $cg$795 = $_0_arg.$2;
                                                        const $_450_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                        let $cg$796 = null;
                                                        if((((($_450_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$796 = false;
                                                        } else {
                                                            $cg$796 = ($_450_in <= 57);
                                                        }
                                                        
                                                        let $cg$797 = null;
                                                        if($cg$796) {
                                                            $cg$797 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$795.$1, $cg$795.$2, false, ($_450_in - 48));
                                                        } else {
                                                            let $cg$798 = null;
                                                            if((((($_450_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$798 = false;
                                                            } else {
                                                                $cg$798 = ($_450_in <= 90);
                                                            }
                                                            
                                                            
                                                            if($cg$798) {
                                                                $cg$797 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$795.$1, $cg$795.$2, true, ($_450_in - 65));
                                                            } else {
                                                                let $cg$800 = null;
                                                                if((((($_450_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                    $cg$800 = false;
                                                                } else {
                                                                    $cg$800 = ($_450_in <= 122);
                                                                }
                                                                
                                                                
                                                                if($cg$800) {
                                                                    $cg$797 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$795.$1, $cg$795.$2, false, ($_450_in - 97));
                                                                } else {
                                                                    $cg$797 = new $HC_1_0$Main__Symbol($_450_in);
                                                                }
                                                            }
                                                        }
                                                        
                                                        return new $HC_2_1$Prelude__List___58__58_($cg$797, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$795.$1, $cg$795.$2)), $_1_arg.$2));
                                                    }
                                                } else {
                                                    
                                                    const $cg$782 = $_0_arg.$2;
                                                    const $_455_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                    let $cg$783 = null;
                                                    if((((($_455_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$783 = false;
                                                    } else {
                                                        $cg$783 = ($_455_in <= 57);
                                                    }
                                                    
                                                    let $cg$784 = null;
                                                    if($cg$783) {
                                                        $cg$784 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$782.$1, $cg$782.$2, false, ($_455_in - 48));
                                                    } else {
                                                        let $cg$785 = null;
                                                        if((((($_455_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$785 = false;
                                                        } else {
                                                            $cg$785 = ($_455_in <= 90);
                                                        }
                                                        
                                                        
                                                        if($cg$785) {
                                                            $cg$784 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$782.$1, $cg$782.$2, true, ($_455_in - 65));
                                                        } else {
                                                            let $cg$787 = null;
                                                            if((((($_455_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$787 = false;
                                                            } else {
                                                                $cg$787 = ($_455_in <= 122);
                                                            }
                                                            
                                                            
                                                            if($cg$787) {
                                                                $cg$784 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$782.$1, $cg$782.$2, false, ($_455_in - 97));
                                                            } else {
                                                                $cg$784 = new $HC_1_0$Main__Symbol($_455_in);
                                                            }
                                                        }
                                                    }
                                                    
                                                    return new $HC_2_1$Prelude__List___58__58_($cg$784, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$782.$1, $cg$782.$2)), $_1_arg.$2));
                                                }
                                            } else {
                                                
                                                const $cg$804 = $_0_arg.$2;
                                                const $_460_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                let $cg$805 = null;
                                                if((((($_460_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$805 = false;
                                                } else {
                                                    $cg$805 = ($_460_in <= 57);
                                                }
                                                
                                                let $cg$806 = null;
                                                if($cg$805) {
                                                    $cg$806 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$804.$1, $cg$804.$2, false, ($_460_in - 48));
                                                } else {
                                                    let $cg$807 = null;
                                                    if((((($_460_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$807 = false;
                                                    } else {
                                                        $cg$807 = ($_460_in <= 90);
                                                    }
                                                    
                                                    
                                                    if($cg$807) {
                                                        $cg$806 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$804.$1, $cg$804.$2, true, ($_460_in - 65));
                                                    } else {
                                                        let $cg$809 = null;
                                                        if((((($_460_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$809 = false;
                                                        } else {
                                                            $cg$809 = ($_460_in <= 122);
                                                        }
                                                        
                                                        
                                                        if($cg$809) {
                                                            $cg$806 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$804.$1, $cg$804.$2, false, ($_460_in - 97));
                                                        } else {
                                                            $cg$806 = new $HC_1_0$Main__Symbol($_460_in);
                                                        }
                                                    }
                                                }
                                                
                                                return new $HC_2_1$Prelude__List___58__58_($cg$806, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$804.$1, $cg$804.$2)), $_1_arg.$2));
                                            }
                                        } else {
                                            
                                            const $cg$770 = $_0_arg.$2;
                                            const $_465_in = (($_1_arg.$1).charCodeAt(0)|0);
                                            let $cg$771 = null;
                                            if((((($_465_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                $cg$771 = false;
                                            } else {
                                                $cg$771 = ($_465_in <= 57);
                                            }
                                            
                                            let $cg$772 = null;
                                            if($cg$771) {
                                                $cg$772 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$770.$1, $cg$770.$2, false, ($_465_in - 48));
                                            } else {
                                                let $cg$773 = null;
                                                if((((($_465_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$773 = false;
                                                } else {
                                                    $cg$773 = ($_465_in <= 90);
                                                }
                                                
                                                
                                                if($cg$773) {
                                                    $cg$772 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$770.$1, $cg$770.$2, true, ($_465_in - 65));
                                                } else {
                                                    let $cg$775 = null;
                                                    if((((($_465_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$775 = false;
                                                    } else {
                                                        $cg$775 = ($_465_in <= 122);
                                                    }
                                                    
                                                    
                                                    if($cg$775) {
                                                        $cg$772 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$770.$1, $cg$770.$2, false, ($_465_in - 97));
                                                    } else {
                                                        $cg$772 = new $HC_1_0$Main__Symbol($_465_in);
                                                    }
                                                }
                                            }
                                            
                                            return new $HC_2_1$Prelude__List___58__58_($cg$772, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$770.$1, $cg$770.$2)), $_1_arg.$2));
                                        }
                                    } else {
                                        
                                        const $cg$813 = $_0_arg.$2;
                                        const $_470_in = (($_1_arg.$1).charCodeAt(0)|0);
                                        let $cg$814 = null;
                                        if((((($_470_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                            $cg$814 = false;
                                        } else {
                                            $cg$814 = ($_470_in <= 57);
                                        }
                                        
                                        let $cg$815 = null;
                                        if($cg$814) {
                                            $cg$815 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$813.$1, $cg$813.$2, false, ($_470_in - 48));
                                        } else {
                                            let $cg$816 = null;
                                            if((((($_470_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                $cg$816 = false;
                                            } else {
                                                $cg$816 = ($_470_in <= 90);
                                            }
                                            
                                            
                                            if($cg$816) {
                                                $cg$815 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$813.$1, $cg$813.$2, true, ($_470_in - 65));
                                            } else {
                                                let $cg$818 = null;
                                                if((((($_470_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$818 = false;
                                                } else {
                                                    $cg$818 = ($_470_in <= 122);
                                                }
                                                
                                                
                                                if($cg$818) {
                                                    $cg$815 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$813.$1, $cg$813.$2, false, ($_470_in - 97));
                                                } else {
                                                    $cg$815 = new $HC_1_0$Main__Symbol($_470_in);
                                                }
                                            }
                                        }
                                        
                                        return new $HC_2_1$Prelude__List___58__58_($cg$815, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$813.$1, $cg$813.$2)), $_1_arg.$2));
                                    }
                                } else {
                                    
                                    const $cg$758 = $_0_arg.$2;
                                    const $_475_in = (($_1_arg.$1).charCodeAt(0)|0);
                                    let $cg$759 = null;
                                    if((((($_475_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                        $cg$759 = false;
                                    } else {
                                        $cg$759 = ($_475_in <= 57);
                                    }
                                    
                                    let $cg$760 = null;
                                    if($cg$759) {
                                        $cg$760 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$758.$1, $cg$758.$2, false, ($_475_in - 48));
                                    } else {
                                        let $cg$761 = null;
                                        if((((($_475_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                            $cg$761 = false;
                                        } else {
                                            $cg$761 = ($_475_in <= 90);
                                        }
                                        
                                        
                                        if($cg$761) {
                                            $cg$760 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$758.$1, $cg$758.$2, true, ($_475_in - 65));
                                        } else {
                                            let $cg$763 = null;
                                            if((((($_475_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                $cg$763 = false;
                                            } else {
                                                $cg$763 = ($_475_in <= 122);
                                            }
                                            
                                            
                                            if($cg$763) {
                                                $cg$760 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$758.$1, $cg$758.$2, false, ($_475_in - 97));
                                            } else {
                                                $cg$760 = new $HC_1_0$Main__Symbol($_475_in);
                                            }
                                        }
                                    }
                                    
                                    return new $HC_2_1$Prelude__List___58__58_($cg$760, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$758.$1, $cg$758.$2)), $_1_arg.$2));
                                }
                            } else if(($cg$753 === "c")) {
                                const $cg$821 = $cg$742.$2;
                                if(($cg$821.type === 1)) {
                                    
                                    if(($cg$821.$1 === "r")) {
                                        const $cg$833 = $cg$821.$2;
                                        if(($cg$833.type === 1)) {
                                            
                                            if(($cg$833.$1 === "i")) {
                                                const $cg$845 = $cg$833.$2;
                                                if(($cg$845.type === 1)) {
                                                    
                                                    if(($cg$845.$1 === "p")) {
                                                        const $cg$857 = $cg$845.$2;
                                                        if(($cg$857.type === 1)) {
                                                            
                                                            if(($cg$857.$1 === "t")) {
                                                                const $cg$869 = $cg$857.$2;
                                                                if(($cg$869.type === 1)) {
                                                                    
                                                                    if(($cg$869.$1 === ">")) {
                                                                        
                                                                        const $cg$882 = $_0_arg.$2;
                                                                        $_0_arg = new $HC_2_0$Builtins__MkPair($HC_0_1$Main__Script, new $HC_2_0$Builtins__MkPair($cg$882.$1, $cg$882.$2));
                                                                        $_1_arg = $cg$869.$2;
                                                                    } else {
                                                                        
                                                                        const $cg$885 = $_0_arg.$2;
                                                                        const $_494_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                                        let $cg$886 = null;
                                                                        if((((($_494_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                                            $cg$886 = false;
                                                                        } else {
                                                                            $cg$886 = ($_494_in <= 57);
                                                                        }
                                                                        
                                                                        let $cg$887 = null;
                                                                        if($cg$886) {
                                                                            $cg$887 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$885.$1, $cg$885.$2, false, ($_494_in - 48));
                                                                        } else {
                                                                            let $cg$888 = null;
                                                                            if((((($_494_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                                $cg$888 = false;
                                                                            } else {
                                                                                $cg$888 = ($_494_in <= 90);
                                                                            }
                                                                            
                                                                            
                                                                            if($cg$888) {
                                                                                $cg$887 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$885.$1, $cg$885.$2, true, ($_494_in - 65));
                                                                            } else {
                                                                                let $cg$890 = null;
                                                                                if((((($_494_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                                    $cg$890 = false;
                                                                                } else {
                                                                                    $cg$890 = ($_494_in <= 122);
                                                                                }
                                                                                
                                                                                
                                                                                if($cg$890) {
                                                                                    $cg$887 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$885.$1, $cg$885.$2, false, ($_494_in - 97));
                                                                                } else {
                                                                                    $cg$887 = new $HC_1_0$Main__Symbol($_494_in);
                                                                                }
                                                                            }
                                                                        }
                                                                        
                                                                        return new $HC_2_1$Prelude__List___58__58_($cg$887, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$885.$1, $cg$885.$2)), $_1_arg.$2));
                                                                    }
                                                                } else {
                                                                    
                                                                    const $cg$872 = $_0_arg.$2;
                                                                    const $_499_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                                    let $cg$873 = null;
                                                                    if((((($_499_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                                        $cg$873 = false;
                                                                    } else {
                                                                        $cg$873 = ($_499_in <= 57);
                                                                    }
                                                                    
                                                                    let $cg$874 = null;
                                                                    if($cg$873) {
                                                                        $cg$874 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$872.$1, $cg$872.$2, false, ($_499_in - 48));
                                                                    } else {
                                                                        let $cg$875 = null;
                                                                        if((((($_499_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                            $cg$875 = false;
                                                                        } else {
                                                                            $cg$875 = ($_499_in <= 90);
                                                                        }
                                                                        
                                                                        
                                                                        if($cg$875) {
                                                                            $cg$874 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$872.$1, $cg$872.$2, true, ($_499_in - 65));
                                                                        } else {
                                                                            let $cg$877 = null;
                                                                            if((((($_499_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                                $cg$877 = false;
                                                                            } else {
                                                                                $cg$877 = ($_499_in <= 122);
                                                                            }
                                                                            
                                                                            
                                                                            if($cg$877) {
                                                                                $cg$874 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$872.$1, $cg$872.$2, false, ($_499_in - 97));
                                                                            } else {
                                                                                $cg$874 = new $HC_1_0$Main__Symbol($_499_in);
                                                                            }
                                                                        }
                                                                    }
                                                                    
                                                                    return new $HC_2_1$Prelude__List___58__58_($cg$874, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$872.$1, $cg$872.$2)), $_1_arg.$2));
                                                                }
                                                            } else {
                                                                
                                                                const $cg$894 = $_0_arg.$2;
                                                                const $_504_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                                let $cg$895 = null;
                                                                if((((($_504_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                                    $cg$895 = false;
                                                                } else {
                                                                    $cg$895 = ($_504_in <= 57);
                                                                }
                                                                
                                                                let $cg$896 = null;
                                                                if($cg$895) {
                                                                    $cg$896 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$894.$1, $cg$894.$2, false, ($_504_in - 48));
                                                                } else {
                                                                    let $cg$897 = null;
                                                                    if((((($_504_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                        $cg$897 = false;
                                                                    } else {
                                                                        $cg$897 = ($_504_in <= 90);
                                                                    }
                                                                    
                                                                    
                                                                    if($cg$897) {
                                                                        $cg$896 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$894.$1, $cg$894.$2, true, ($_504_in - 65));
                                                                    } else {
                                                                        let $cg$899 = null;
                                                                        if((((($_504_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                            $cg$899 = false;
                                                                        } else {
                                                                            $cg$899 = ($_504_in <= 122);
                                                                        }
                                                                        
                                                                        
                                                                        if($cg$899) {
                                                                            $cg$896 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$894.$1, $cg$894.$2, false, ($_504_in - 97));
                                                                        } else {
                                                                            $cg$896 = new $HC_1_0$Main__Symbol($_504_in);
                                                                        }
                                                                    }
                                                                }
                                                                
                                                                return new $HC_2_1$Prelude__List___58__58_($cg$896, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$894.$1, $cg$894.$2)), $_1_arg.$2));
                                                            }
                                                        } else {
                                                            
                                                            const $cg$860 = $_0_arg.$2;
                                                            const $_509_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                            let $cg$861 = null;
                                                            if((((($_509_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$861 = false;
                                                            } else {
                                                                $cg$861 = ($_509_in <= 57);
                                                            }
                                                            
                                                            let $cg$862 = null;
                                                            if($cg$861) {
                                                                $cg$862 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$860.$1, $cg$860.$2, false, ($_509_in - 48));
                                                            } else {
                                                                let $cg$863 = null;
                                                                if((((($_509_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                    $cg$863 = false;
                                                                } else {
                                                                    $cg$863 = ($_509_in <= 90);
                                                                }
                                                                
                                                                
                                                                if($cg$863) {
                                                                    $cg$862 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$860.$1, $cg$860.$2, true, ($_509_in - 65));
                                                                } else {
                                                                    let $cg$865 = null;
                                                                    if((((($_509_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                        $cg$865 = false;
                                                                    } else {
                                                                        $cg$865 = ($_509_in <= 122);
                                                                    }
                                                                    
                                                                    
                                                                    if($cg$865) {
                                                                        $cg$862 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$860.$1, $cg$860.$2, false, ($_509_in - 97));
                                                                    } else {
                                                                        $cg$862 = new $HC_1_0$Main__Symbol($_509_in);
                                                                    }
                                                                }
                                                            }
                                                            
                                                            return new $HC_2_1$Prelude__List___58__58_($cg$862, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$860.$1, $cg$860.$2)), $_1_arg.$2));
                                                        }
                                                    } else {
                                                        
                                                        const $cg$903 = $_0_arg.$2;
                                                        const $_514_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                        let $cg$904 = null;
                                                        if((((($_514_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$904 = false;
                                                        } else {
                                                            $cg$904 = ($_514_in <= 57);
                                                        }
                                                        
                                                        let $cg$905 = null;
                                                        if($cg$904) {
                                                            $cg$905 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$903.$1, $cg$903.$2, false, ($_514_in - 48));
                                                        } else {
                                                            let $cg$906 = null;
                                                            if((((($_514_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$906 = false;
                                                            } else {
                                                                $cg$906 = ($_514_in <= 90);
                                                            }
                                                            
                                                            
                                                            if($cg$906) {
                                                                $cg$905 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$903.$1, $cg$903.$2, true, ($_514_in - 65));
                                                            } else {
                                                                let $cg$908 = null;
                                                                if((((($_514_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                    $cg$908 = false;
                                                                } else {
                                                                    $cg$908 = ($_514_in <= 122);
                                                                }
                                                                
                                                                
                                                                if($cg$908) {
                                                                    $cg$905 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$903.$1, $cg$903.$2, false, ($_514_in - 97));
                                                                } else {
                                                                    $cg$905 = new $HC_1_0$Main__Symbol($_514_in);
                                                                }
                                                            }
                                                        }
                                                        
                                                        return new $HC_2_1$Prelude__List___58__58_($cg$905, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$903.$1, $cg$903.$2)), $_1_arg.$2));
                                                    }
                                                } else {
                                                    
                                                    const $cg$848 = $_0_arg.$2;
                                                    const $_519_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                    let $cg$849 = null;
                                                    if((((($_519_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$849 = false;
                                                    } else {
                                                        $cg$849 = ($_519_in <= 57);
                                                    }
                                                    
                                                    let $cg$850 = null;
                                                    if($cg$849) {
                                                        $cg$850 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$848.$1, $cg$848.$2, false, ($_519_in - 48));
                                                    } else {
                                                        let $cg$851 = null;
                                                        if((((($_519_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$851 = false;
                                                        } else {
                                                            $cg$851 = ($_519_in <= 90);
                                                        }
                                                        
                                                        
                                                        if($cg$851) {
                                                            $cg$850 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$848.$1, $cg$848.$2, true, ($_519_in - 65));
                                                        } else {
                                                            let $cg$853 = null;
                                                            if((((($_519_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$853 = false;
                                                            } else {
                                                                $cg$853 = ($_519_in <= 122);
                                                            }
                                                            
                                                            
                                                            if($cg$853) {
                                                                $cg$850 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$848.$1, $cg$848.$2, false, ($_519_in - 97));
                                                            } else {
                                                                $cg$850 = new $HC_1_0$Main__Symbol($_519_in);
                                                            }
                                                        }
                                                    }
                                                    
                                                    return new $HC_2_1$Prelude__List___58__58_($cg$850, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$848.$1, $cg$848.$2)), $_1_arg.$2));
                                                }
                                            } else {
                                                
                                                const $cg$912 = $_0_arg.$2;
                                                const $_524_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                let $cg$913 = null;
                                                if((((($_524_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$913 = false;
                                                } else {
                                                    $cg$913 = ($_524_in <= 57);
                                                }
                                                
                                                let $cg$914 = null;
                                                if($cg$913) {
                                                    $cg$914 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$912.$1, $cg$912.$2, false, ($_524_in - 48));
                                                } else {
                                                    let $cg$915 = null;
                                                    if((((($_524_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$915 = false;
                                                    } else {
                                                        $cg$915 = ($_524_in <= 90);
                                                    }
                                                    
                                                    
                                                    if($cg$915) {
                                                        $cg$914 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$912.$1, $cg$912.$2, true, ($_524_in - 65));
                                                    } else {
                                                        let $cg$917 = null;
                                                        if((((($_524_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$917 = false;
                                                        } else {
                                                            $cg$917 = ($_524_in <= 122);
                                                        }
                                                        
                                                        
                                                        if($cg$917) {
                                                            $cg$914 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$912.$1, $cg$912.$2, false, ($_524_in - 97));
                                                        } else {
                                                            $cg$914 = new $HC_1_0$Main__Symbol($_524_in);
                                                        }
                                                    }
                                                }
                                                
                                                return new $HC_2_1$Prelude__List___58__58_($cg$914, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$912.$1, $cg$912.$2)), $_1_arg.$2));
                                            }
                                        } else {
                                            
                                            const $cg$836 = $_0_arg.$2;
                                            const $_529_in = (($_1_arg.$1).charCodeAt(0)|0);
                                            let $cg$837 = null;
                                            if((((($_529_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                $cg$837 = false;
                                            } else {
                                                $cg$837 = ($_529_in <= 57);
                                            }
                                            
                                            let $cg$838 = null;
                                            if($cg$837) {
                                                $cg$838 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$836.$1, $cg$836.$2, false, ($_529_in - 48));
                                            } else {
                                                let $cg$839 = null;
                                                if((((($_529_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$839 = false;
                                                } else {
                                                    $cg$839 = ($_529_in <= 90);
                                                }
                                                
                                                
                                                if($cg$839) {
                                                    $cg$838 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$836.$1, $cg$836.$2, true, ($_529_in - 65));
                                                } else {
                                                    let $cg$841 = null;
                                                    if((((($_529_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$841 = false;
                                                    } else {
                                                        $cg$841 = ($_529_in <= 122);
                                                    }
                                                    
                                                    
                                                    if($cg$841) {
                                                        $cg$838 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$836.$1, $cg$836.$2, false, ($_529_in - 97));
                                                    } else {
                                                        $cg$838 = new $HC_1_0$Main__Symbol($_529_in);
                                                    }
                                                }
                                            }
                                            
                                            return new $HC_2_1$Prelude__List___58__58_($cg$838, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$836.$1, $cg$836.$2)), $_1_arg.$2));
                                        }
                                    } else {
                                        
                                        const $cg$921 = $_0_arg.$2;
                                        const $_534_in = (($_1_arg.$1).charCodeAt(0)|0);
                                        let $cg$922 = null;
                                        if((((($_534_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                            $cg$922 = false;
                                        } else {
                                            $cg$922 = ($_534_in <= 57);
                                        }
                                        
                                        let $cg$923 = null;
                                        if($cg$922) {
                                            $cg$923 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$921.$1, $cg$921.$2, false, ($_534_in - 48));
                                        } else {
                                            let $cg$924 = null;
                                            if((((($_534_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                $cg$924 = false;
                                            } else {
                                                $cg$924 = ($_534_in <= 90);
                                            }
                                            
                                            
                                            if($cg$924) {
                                                $cg$923 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$921.$1, $cg$921.$2, true, ($_534_in - 65));
                                            } else {
                                                let $cg$926 = null;
                                                if((((($_534_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$926 = false;
                                                } else {
                                                    $cg$926 = ($_534_in <= 122);
                                                }
                                                
                                                
                                                if($cg$926) {
                                                    $cg$923 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$921.$1, $cg$921.$2, false, ($_534_in - 97));
                                                } else {
                                                    $cg$923 = new $HC_1_0$Main__Symbol($_534_in);
                                                }
                                            }
                                        }
                                        
                                        return new $HC_2_1$Prelude__List___58__58_($cg$923, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$921.$1, $cg$921.$2)), $_1_arg.$2));
                                    }
                                } else {
                                    
                                    const $cg$824 = $_0_arg.$2;
                                    const $_539_in = (($_1_arg.$1).charCodeAt(0)|0);
                                    let $cg$825 = null;
                                    if((((($_539_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                        $cg$825 = false;
                                    } else {
                                        $cg$825 = ($_539_in <= 57);
                                    }
                                    
                                    let $cg$826 = null;
                                    if($cg$825) {
                                        $cg$826 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$824.$1, $cg$824.$2, false, ($_539_in - 48));
                                    } else {
                                        let $cg$827 = null;
                                        if((((($_539_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                            $cg$827 = false;
                                        } else {
                                            $cg$827 = ($_539_in <= 90);
                                        }
                                        
                                        
                                        if($cg$827) {
                                            $cg$826 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$824.$1, $cg$824.$2, true, ($_539_in - 65));
                                        } else {
                                            let $cg$829 = null;
                                            if((((($_539_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                $cg$829 = false;
                                            } else {
                                                $cg$829 = ($_539_in <= 122);
                                            }
                                            
                                            
                                            if($cg$829) {
                                                $cg$826 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$824.$1, $cg$824.$2, false, ($_539_in - 97));
                                            } else {
                                                $cg$826 = new $HC_1_0$Main__Symbol($_539_in);
                                            }
                                        }
                                    }
                                    
                                    return new $HC_2_1$Prelude__List___58__58_($cg$826, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$824.$1, $cg$824.$2)), $_1_arg.$2));
                                }
                            } else if(($cg$753 === "e")) {
                                const $cg$929 = $cg$742.$2;
                                if(($cg$929.type === 1)) {
                                    
                                    if(($cg$929.$1 === "r")) {
                                        const $cg$941 = $cg$929.$2;
                                        if(($cg$941.type === 1)) {
                                            
                                            if(($cg$941.$1 === "i")) {
                                                const $cg$953 = $cg$941.$2;
                                                if(($cg$953.type === 1)) {
                                                    
                                                    if(($cg$953.$1 === "f")) {
                                                        const $cg$965 = $cg$953.$2;
                                                        if(($cg$965.type === 1)) {
                                                            
                                                            if(($cg$965.$1 === ">")) {
                                                                
                                                                const $cg$978 = $_0_arg.$2;
                                                                $_0_arg = new $HC_2_0$Builtins__MkPair($HC_0_0$Main__Normal, new $HC_2_0$Builtins__MkPair($cg$978.$1, $cg$978.$2));
                                                                $_1_arg = $cg$965.$2;
                                                            } else {
                                                                
                                                                const $cg$981 = $_0_arg.$2;
                                                                const $_556_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                                let $cg$982 = null;
                                                                if((((($_556_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                                    $cg$982 = false;
                                                                } else {
                                                                    $cg$982 = ($_556_in <= 57);
                                                                }
                                                                
                                                                let $cg$983 = null;
                                                                if($cg$982) {
                                                                    $cg$983 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$981.$1, $cg$981.$2, false, ($_556_in - 48));
                                                                } else {
                                                                    let $cg$984 = null;
                                                                    if((((($_556_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                        $cg$984 = false;
                                                                    } else {
                                                                        $cg$984 = ($_556_in <= 90);
                                                                    }
                                                                    
                                                                    
                                                                    if($cg$984) {
                                                                        $cg$983 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$981.$1, $cg$981.$2, true, ($_556_in - 65));
                                                                    } else {
                                                                        let $cg$986 = null;
                                                                        if((((($_556_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                            $cg$986 = false;
                                                                        } else {
                                                                            $cg$986 = ($_556_in <= 122);
                                                                        }
                                                                        
                                                                        
                                                                        if($cg$986) {
                                                                            $cg$983 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$981.$1, $cg$981.$2, false, ($_556_in - 97));
                                                                        } else {
                                                                            $cg$983 = new $HC_1_0$Main__Symbol($_556_in);
                                                                        }
                                                                    }
                                                                }
                                                                
                                                                return new $HC_2_1$Prelude__List___58__58_($cg$983, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$981.$1, $cg$981.$2)), $_1_arg.$2));
                                                            }
                                                        } else {
                                                            
                                                            const $cg$968 = $_0_arg.$2;
                                                            const $_561_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                            let $cg$969 = null;
                                                            if((((($_561_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$969 = false;
                                                            } else {
                                                                $cg$969 = ($_561_in <= 57);
                                                            }
                                                            
                                                            let $cg$970 = null;
                                                            if($cg$969) {
                                                                $cg$970 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$968.$1, $cg$968.$2, false, ($_561_in - 48));
                                                            } else {
                                                                let $cg$971 = null;
                                                                if((((($_561_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                    $cg$971 = false;
                                                                } else {
                                                                    $cg$971 = ($_561_in <= 90);
                                                                }
                                                                
                                                                
                                                                if($cg$971) {
                                                                    $cg$970 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$968.$1, $cg$968.$2, true, ($_561_in - 65));
                                                                } else {
                                                                    let $cg$973 = null;
                                                                    if((((($_561_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                        $cg$973 = false;
                                                                    } else {
                                                                        $cg$973 = ($_561_in <= 122);
                                                                    }
                                                                    
                                                                    
                                                                    if($cg$973) {
                                                                        $cg$970 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$968.$1, $cg$968.$2, false, ($_561_in - 97));
                                                                    } else {
                                                                        $cg$970 = new $HC_1_0$Main__Symbol($_561_in);
                                                                    }
                                                                }
                                                            }
                                                            
                                                            return new $HC_2_1$Prelude__List___58__58_($cg$970, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$968.$1, $cg$968.$2)), $_1_arg.$2));
                                                        }
                                                    } else {
                                                        
                                                        const $cg$990 = $_0_arg.$2;
                                                        const $_566_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                        let $cg$991 = null;
                                                        if((((($_566_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$991 = false;
                                                        } else {
                                                            $cg$991 = ($_566_in <= 57);
                                                        }
                                                        
                                                        let $cg$992 = null;
                                                        if($cg$991) {
                                                            $cg$992 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$990.$1, $cg$990.$2, false, ($_566_in - 48));
                                                        } else {
                                                            let $cg$993 = null;
                                                            if((((($_566_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$993 = false;
                                                            } else {
                                                                $cg$993 = ($_566_in <= 90);
                                                            }
                                                            
                                                            
                                                            if($cg$993) {
                                                                $cg$992 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$990.$1, $cg$990.$2, true, ($_566_in - 65));
                                                            } else {
                                                                let $cg$995 = null;
                                                                if((((($_566_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                    $cg$995 = false;
                                                                } else {
                                                                    $cg$995 = ($_566_in <= 122);
                                                                }
                                                                
                                                                
                                                                if($cg$995) {
                                                                    $cg$992 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$990.$1, $cg$990.$2, false, ($_566_in - 97));
                                                                } else {
                                                                    $cg$992 = new $HC_1_0$Main__Symbol($_566_in);
                                                                }
                                                            }
                                                        }
                                                        
                                                        return new $HC_2_1$Prelude__List___58__58_($cg$992, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$990.$1, $cg$990.$2)), $_1_arg.$2));
                                                    }
                                                } else {
                                                    
                                                    const $cg$956 = $_0_arg.$2;
                                                    const $_571_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                    let $cg$957 = null;
                                                    if((((($_571_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$957 = false;
                                                    } else {
                                                        $cg$957 = ($_571_in <= 57);
                                                    }
                                                    
                                                    let $cg$958 = null;
                                                    if($cg$957) {
                                                        $cg$958 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$956.$1, $cg$956.$2, false, ($_571_in - 48));
                                                    } else {
                                                        let $cg$959 = null;
                                                        if((((($_571_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$959 = false;
                                                        } else {
                                                            $cg$959 = ($_571_in <= 90);
                                                        }
                                                        
                                                        
                                                        if($cg$959) {
                                                            $cg$958 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$956.$1, $cg$956.$2, true, ($_571_in - 65));
                                                        } else {
                                                            let $cg$961 = null;
                                                            if((((($_571_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                                $cg$961 = false;
                                                            } else {
                                                                $cg$961 = ($_571_in <= 122);
                                                            }
                                                            
                                                            
                                                            if($cg$961) {
                                                                $cg$958 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$956.$1, $cg$956.$2, false, ($_571_in - 97));
                                                            } else {
                                                                $cg$958 = new $HC_1_0$Main__Symbol($_571_in);
                                                            }
                                                        }
                                                    }
                                                    
                                                    return new $HC_2_1$Prelude__List___58__58_($cg$958, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$956.$1, $cg$956.$2)), $_1_arg.$2));
                                                }
                                            } else {
                                                
                                                const $cg$999 = $_0_arg.$2;
                                                const $_576_in = (($_1_arg.$1).charCodeAt(0)|0);
                                                let $cg$1000 = null;
                                                if((((($_576_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$1000 = false;
                                                } else {
                                                    $cg$1000 = ($_576_in <= 57);
                                                }
                                                
                                                let $cg$1001 = null;
                                                if($cg$1000) {
                                                    $cg$1001 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$999.$1, $cg$999.$2, false, ($_576_in - 48));
                                                } else {
                                                    let $cg$1002 = null;
                                                    if((((($_576_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$1002 = false;
                                                    } else {
                                                        $cg$1002 = ($_576_in <= 90);
                                                    }
                                                    
                                                    
                                                    if($cg$1002) {
                                                        $cg$1001 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$999.$1, $cg$999.$2, true, ($_576_in - 65));
                                                    } else {
                                                        let $cg$1004 = null;
                                                        if((((($_576_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                            $cg$1004 = false;
                                                        } else {
                                                            $cg$1004 = ($_576_in <= 122);
                                                        }
                                                        
                                                        
                                                        if($cg$1004) {
                                                            $cg$1001 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$999.$1, $cg$999.$2, false, ($_576_in - 97));
                                                        } else {
                                                            $cg$1001 = new $HC_1_0$Main__Symbol($_576_in);
                                                        }
                                                    }
                                                }
                                                
                                                return new $HC_2_1$Prelude__List___58__58_($cg$1001, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$999.$1, $cg$999.$2)), $_1_arg.$2));
                                            }
                                        } else {
                                            
                                            const $cg$944 = $_0_arg.$2;
                                            const $_581_in = (($_1_arg.$1).charCodeAt(0)|0);
                                            let $cg$945 = null;
                                            if((((($_581_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                                $cg$945 = false;
                                            } else {
                                                $cg$945 = ($_581_in <= 57);
                                            }
                                            
                                            let $cg$946 = null;
                                            if($cg$945) {
                                                $cg$946 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$944.$1, $cg$944.$2, false, ($_581_in - 48));
                                            } else {
                                                let $cg$947 = null;
                                                if((((($_581_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$947 = false;
                                                } else {
                                                    $cg$947 = ($_581_in <= 90);
                                                }
                                                
                                                
                                                if($cg$947) {
                                                    $cg$946 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$944.$1, $cg$944.$2, true, ($_581_in - 65));
                                                } else {
                                                    let $cg$949 = null;
                                                    if((((($_581_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                        $cg$949 = false;
                                                    } else {
                                                        $cg$949 = ($_581_in <= 122);
                                                    }
                                                    
                                                    
                                                    if($cg$949) {
                                                        $cg$946 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$944.$1, $cg$944.$2, false, ($_581_in - 97));
                                                    } else {
                                                        $cg$946 = new $HC_1_0$Main__Symbol($_581_in);
                                                    }
                                                }
                                            }
                                            
                                            return new $HC_2_1$Prelude__List___58__58_($cg$946, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$944.$1, $cg$944.$2)), $_1_arg.$2));
                                        }
                                    } else {
                                        
                                        const $cg$1008 = $_0_arg.$2;
                                        const $_586_in = (($_1_arg.$1).charCodeAt(0)|0);
                                        let $cg$1009 = null;
                                        if((((($_586_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                            $cg$1009 = false;
                                        } else {
                                            $cg$1009 = ($_586_in <= 57);
                                        }
                                        
                                        let $cg$1010 = null;
                                        if($cg$1009) {
                                            $cg$1010 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1008.$1, $cg$1008.$2, false, ($_586_in - 48));
                                        } else {
                                            let $cg$1011 = null;
                                            if((((($_586_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                                $cg$1011 = false;
                                            } else {
                                                $cg$1011 = ($_586_in <= 90);
                                            }
                                            
                                            
                                            if($cg$1011) {
                                                $cg$1010 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1008.$1, $cg$1008.$2, true, ($_586_in - 65));
                                            } else {
                                                let $cg$1013 = null;
                                                if((((($_586_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                    $cg$1013 = false;
                                                } else {
                                                    $cg$1013 = ($_586_in <= 122);
                                                }
                                                
                                                
                                                if($cg$1013) {
                                                    $cg$1010 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1008.$1, $cg$1008.$2, false, ($_586_in - 97));
                                                } else {
                                                    $cg$1010 = new $HC_1_0$Main__Symbol($_586_in);
                                                }
                                            }
                                        }
                                        
                                        return new $HC_2_1$Prelude__List___58__58_($cg$1010, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1008.$1, $cg$1008.$2)), $_1_arg.$2));
                                    }
                                } else {
                                    
                                    const $cg$932 = $_0_arg.$2;
                                    const $_591_in = (($_1_arg.$1).charCodeAt(0)|0);
                                    let $cg$933 = null;
                                    if((((($_591_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                        $cg$933 = false;
                                    } else {
                                        $cg$933 = ($_591_in <= 57);
                                    }
                                    
                                    let $cg$934 = null;
                                    if($cg$933) {
                                        $cg$934 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$932.$1, $cg$932.$2, false, ($_591_in - 48));
                                    } else {
                                        let $cg$935 = null;
                                        if((((($_591_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                            $cg$935 = false;
                                        } else {
                                            $cg$935 = ($_591_in <= 90);
                                        }
                                        
                                        
                                        if($cg$935) {
                                            $cg$934 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$932.$1, $cg$932.$2, true, ($_591_in - 65));
                                        } else {
                                            let $cg$937 = null;
                                            if((((($_591_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                                $cg$937 = false;
                                            } else {
                                                $cg$937 = ($_591_in <= 122);
                                            }
                                            
                                            
                                            if($cg$937) {
                                                $cg$934 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$932.$1, $cg$932.$2, false, ($_591_in - 97));
                                            } else {
                                                $cg$934 = new $HC_1_0$Main__Symbol($_591_in);
                                            }
                                        }
                                    }
                                    
                                    return new $HC_2_1$Prelude__List___58__58_($cg$934, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$932.$1, $cg$932.$2)), $_1_arg.$2));
                                }
                            } else {
                                
                                const $cg$1017 = $_0_arg.$2;
                                const $_596_in = (($_1_arg.$1).charCodeAt(0)|0);
                                let $cg$1018 = null;
                                if((((($_596_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                    $cg$1018 = false;
                                } else {
                                    $cg$1018 = ($_596_in <= 57);
                                }
                                
                                let $cg$1019 = null;
                                if($cg$1018) {
                                    $cg$1019 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1017.$1, $cg$1017.$2, false, ($_596_in - 48));
                                } else {
                                    let $cg$1020 = null;
                                    if((((($_596_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                        $cg$1020 = false;
                                    } else {
                                        $cg$1020 = ($_596_in <= 90);
                                    }
                                    
                                    
                                    if($cg$1020) {
                                        $cg$1019 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1017.$1, $cg$1017.$2, true, ($_596_in - 65));
                                    } else {
                                        let $cg$1022 = null;
                                        if((((($_596_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                            $cg$1022 = false;
                                        } else {
                                            $cg$1022 = ($_596_in <= 122);
                                        }
                                        
                                        
                                        if($cg$1022) {
                                            $cg$1019 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1017.$1, $cg$1017.$2, false, ($_596_in - 97));
                                        } else {
                                            $cg$1019 = new $HC_1_0$Main__Symbol($_596_in);
                                        }
                                    }
                                }
                                
                                return new $HC_2_1$Prelude__List___58__58_($cg$1019, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1017.$1, $cg$1017.$2)), $_1_arg.$2));
                            }
                        } else {
                            
                            const $cg$745 = $_0_arg.$2;
                            const $_601_in = (($_1_arg.$1).charCodeAt(0)|0);
                            let $cg$746 = null;
                            if((((($_601_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                $cg$746 = false;
                            } else {
                                $cg$746 = ($_601_in <= 57);
                            }
                            
                            let $cg$747 = null;
                            if($cg$746) {
                                $cg$747 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$745.$1, $cg$745.$2, false, ($_601_in - 48));
                            } else {
                                let $cg$748 = null;
                                if((((($_601_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                    $cg$748 = false;
                                } else {
                                    $cg$748 = ($_601_in <= 90);
                                }
                                
                                
                                if($cg$748) {
                                    $cg$747 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$745.$1, $cg$745.$2, true, ($_601_in - 65));
                                } else {
                                    let $cg$750 = null;
                                    if((((($_601_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                        $cg$750 = false;
                                    } else {
                                        $cg$750 = ($_601_in <= 122);
                                    }
                                    
                                    
                                    if($cg$750) {
                                        $cg$747 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$745.$1, $cg$745.$2, false, ($_601_in - 97));
                                    } else {
                                        $cg$747 = new $HC_1_0$Main__Symbol($_601_in);
                                    }
                                }
                            }
                            
                            return new $HC_2_1$Prelude__List___58__58_($cg$747, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$745.$1, $cg$745.$2)), $_1_arg.$2));
                        }
                    } else {
                        
                        const $cg$1026 = $_0_arg.$2;
                        const $_606_in = (($_1_arg.$1).charCodeAt(0)|0);
                        let $cg$1027 = null;
                        if((((($_606_in >= 48)) ? 1|0 : 0|0) === 0)) {
                            $cg$1027 = false;
                        } else {
                            $cg$1027 = ($_606_in <= 57);
                        }
                        
                        let $cg$1028 = null;
                        if($cg$1027) {
                            $cg$1028 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1026.$1, $cg$1026.$2, false, ($_606_in - 48));
                        } else {
                            let $cg$1029 = null;
                            if((((($_606_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                $cg$1029 = false;
                            } else {
                                $cg$1029 = ($_606_in <= 90);
                            }
                            
                            
                            if($cg$1029) {
                                $cg$1028 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1026.$1, $cg$1026.$2, true, ($_606_in - 65));
                            } else {
                                let $cg$1031 = null;
                                if((((($_606_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                    $cg$1031 = false;
                                } else {
                                    $cg$1031 = ($_606_in <= 122);
                                }
                                
                                
                                if($cg$1031) {
                                    $cg$1028 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1026.$1, $cg$1026.$2, false, ($_606_in - 97));
                                } else {
                                    $cg$1028 = new $HC_1_0$Main__Symbol($_606_in);
                                }
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$1028, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1026.$1, $cg$1026.$2)), $_1_arg.$2));
                    }
                } else {
                    
                    const $cg$269 = $_0_arg.$2;
                    const $_611_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$270 = null;
                    if((((($_611_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$270 = false;
                    } else {
                        $cg$270 = ($_611_in <= 57);
                    }
                    
                    let $cg$271 = null;
                    if($cg$270) {
                        $cg$271 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$269.$1, $cg$269.$2, false, ($_611_in - 48));
                    } else {
                        let $cg$272 = null;
                        if((((($_611_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$272 = false;
                        } else {
                            $cg$272 = ($_611_in <= 90);
                        }
                        
                        
                        if($cg$272) {
                            $cg$271 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$269.$1, $cg$269.$2, true, ($_611_in - 65));
                        } else {
                            let $cg$274 = null;
                            if((((($_611_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$274 = false;
                            } else {
                                $cg$274 = ($_611_in <= 122);
                            }
                            
                            
                            if($cg$274) {
                                $cg$271 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$269.$1, $cg$269.$2, false, ($_611_in - 97));
                            } else {
                                $cg$271 = new $HC_1_0$Main__Symbol($_611_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$271, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$269.$1, $cg$269.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === ">")) {
                const $cg$1034 = $_1_arg.$2;
                if(($cg$1034.type === 1)) {
                    const $cg$1045 = $cg$1034.$1;
                    if(($cg$1045 === "=")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8805), Main__parse_39_($_0_arg, $cg$1034.$2));
                    } else if(($cg$1045 === ">")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8811), Main__parse_39_($_0_arg, $cg$1034.$2));
                    } else {
                        
                        const $cg$1048 = $_0_arg.$2;
                        const $_618_in = (($_1_arg.$1).charCodeAt(0)|0);
                        let $cg$1049 = null;
                        if((((($_618_in >= 48)) ? 1|0 : 0|0) === 0)) {
                            $cg$1049 = false;
                        } else {
                            $cg$1049 = ($_618_in <= 57);
                        }
                        
                        let $cg$1050 = null;
                        if($cg$1049) {
                            $cg$1050 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1048.$1, $cg$1048.$2, false, ($_618_in - 48));
                        } else {
                            let $cg$1051 = null;
                            if((((($_618_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                $cg$1051 = false;
                            } else {
                                $cg$1051 = ($_618_in <= 90);
                            }
                            
                            
                            if($cg$1051) {
                                $cg$1050 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1048.$1, $cg$1048.$2, true, ($_618_in - 65));
                            } else {
                                let $cg$1053 = null;
                                if((((($_618_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                    $cg$1053 = false;
                                } else {
                                    $cg$1053 = ($_618_in <= 122);
                                }
                                
                                
                                if($cg$1053) {
                                    $cg$1050 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1048.$1, $cg$1048.$2, false, ($_618_in - 97));
                                } else {
                                    $cg$1050 = new $HC_1_0$Main__Symbol($_618_in);
                                }
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$1050, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1048.$1, $cg$1048.$2)), $_1_arg.$2));
                    }
                } else {
                    
                    const $cg$1037 = $_0_arg.$2;
                    const $_623_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$1038 = null;
                    if((((($_623_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$1038 = false;
                    } else {
                        $cg$1038 = ($_623_in <= 57);
                    }
                    
                    let $cg$1039 = null;
                    if($cg$1038) {
                        $cg$1039 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1037.$1, $cg$1037.$2, false, ($_623_in - 48));
                    } else {
                        let $cg$1040 = null;
                        if((((($_623_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$1040 = false;
                        } else {
                            $cg$1040 = ($_623_in <= 90);
                        }
                        
                        
                        if($cg$1040) {
                            $cg$1039 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1037.$1, $cg$1037.$2, true, ($_623_in - 65));
                        } else {
                            let $cg$1042 = null;
                            if((((($_623_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$1042 = false;
                            } else {
                                $cg$1042 = ($_623_in <= 122);
                            }
                            
                            
                            if($cg$1042) {
                                $cg$1039 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1037.$1, $cg$1037.$2, false, ($_623_in - 97));
                            } else {
                                $cg$1039 = new $HC_1_0$Main__Symbol($_623_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$1039, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1037.$1, $cg$1037.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === "?")) {
                const $cg$1056 = $_1_arg.$2;
                if(($cg$1056.type === 1)) {
                    const $cg$1067 = $cg$1056.$1;
                    if(($cg$1067 === "!")) {
                        const $cg$1069 = $cg$1056.$2;
                        if(($cg$1069.type === 1)) {
                            
                            if(($cg$1069.$1 === "=")) {
                                return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8891), Main__parse_39_($_0_arg, $cg$1069.$2));
                            } else {
                                
                                const $cg$1082 = $_0_arg.$2;
                                const $_632_in = (($_1_arg.$1).charCodeAt(0)|0);
                                let $cg$1083 = null;
                                if((((($_632_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                    $cg$1083 = false;
                                } else {
                                    $cg$1083 = ($_632_in <= 57);
                                }
                                
                                let $cg$1084 = null;
                                if($cg$1083) {
                                    $cg$1084 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1082.$1, $cg$1082.$2, false, ($_632_in - 48));
                                } else {
                                    let $cg$1085 = null;
                                    if((((($_632_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                        $cg$1085 = false;
                                    } else {
                                        $cg$1085 = ($_632_in <= 90);
                                    }
                                    
                                    
                                    if($cg$1085) {
                                        $cg$1084 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1082.$1, $cg$1082.$2, true, ($_632_in - 65));
                                    } else {
                                        let $cg$1087 = null;
                                        if((((($_632_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                            $cg$1087 = false;
                                        } else {
                                            $cg$1087 = ($_632_in <= 122);
                                        }
                                        
                                        
                                        if($cg$1087) {
                                            $cg$1084 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1082.$1, $cg$1082.$2, false, ($_632_in - 97));
                                        } else {
                                            $cg$1084 = new $HC_1_0$Main__Symbol($_632_in);
                                        }
                                    }
                                }
                                
                                return new $HC_2_1$Prelude__List___58__58_($cg$1084, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1082.$1, $cg$1082.$2)), $_1_arg.$2));
                            }
                        } else {
                            
                            const $cg$1072 = $_0_arg.$2;
                            const $_637_in = (($_1_arg.$1).charCodeAt(0)|0);
                            let $cg$1073 = null;
                            if((((($_637_in >= 48)) ? 1|0 : 0|0) === 0)) {
                                $cg$1073 = false;
                            } else {
                                $cg$1073 = ($_637_in <= 57);
                            }
                            
                            let $cg$1074 = null;
                            if($cg$1073) {
                                $cg$1074 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1072.$1, $cg$1072.$2, false, ($_637_in - 48));
                            } else {
                                let $cg$1075 = null;
                                if((((($_637_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                    $cg$1075 = false;
                                } else {
                                    $cg$1075 = ($_637_in <= 90);
                                }
                                
                                
                                if($cg$1075) {
                                    $cg$1074 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1072.$1, $cg$1072.$2, true, ($_637_in - 65));
                                } else {
                                    let $cg$1077 = null;
                                    if((((($_637_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                        $cg$1077 = false;
                                    } else {
                                        $cg$1077 = ($_637_in <= 122);
                                    }
                                    
                                    
                                    if($cg$1077) {
                                        $cg$1074 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1072.$1, $cg$1072.$2, false, ($_637_in - 97));
                                    } else {
                                        $cg$1074 = new $HC_1_0$Main__Symbol($_637_in);
                                    }
                                }
                            }
                            
                            return new $HC_2_1$Prelude__List___58__58_($cg$1074, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1072.$1, $cg$1072.$2)), $_1_arg.$2));
                        }
                    } else if(($cg$1067 === "?")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(11822), Main__parse_39_($_0_arg, $cg$1056.$2));
                    } else {
                        
                        const $cg$1091 = $_0_arg.$2;
                        const $_642_in = (($_1_arg.$1).charCodeAt(0)|0);
                        let $cg$1092 = null;
                        if((((($_642_in >= 48)) ? 1|0 : 0|0) === 0)) {
                            $cg$1092 = false;
                        } else {
                            $cg$1092 = ($_642_in <= 57);
                        }
                        
                        let $cg$1093 = null;
                        if($cg$1092) {
                            $cg$1093 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1091.$1, $cg$1091.$2, false, ($_642_in - 48));
                        } else {
                            let $cg$1094 = null;
                            if((((($_642_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                $cg$1094 = false;
                            } else {
                                $cg$1094 = ($_642_in <= 90);
                            }
                            
                            
                            if($cg$1094) {
                                $cg$1093 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1091.$1, $cg$1091.$2, true, ($_642_in - 65));
                            } else {
                                let $cg$1096 = null;
                                if((((($_642_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                    $cg$1096 = false;
                                } else {
                                    $cg$1096 = ($_642_in <= 122);
                                }
                                
                                
                                if($cg$1096) {
                                    $cg$1093 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1091.$1, $cg$1091.$2, false, ($_642_in - 97));
                                } else {
                                    $cg$1093 = new $HC_1_0$Main__Symbol($_642_in);
                                }
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$1093, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1091.$1, $cg$1091.$2)), $_1_arg.$2));
                    }
                } else {
                    
                    const $cg$1059 = $_0_arg.$2;
                    const $_647_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$1060 = null;
                    if((((($_647_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$1060 = false;
                    } else {
                        $cg$1060 = ($_647_in <= 57);
                    }
                    
                    let $cg$1061 = null;
                    if($cg$1060) {
                        $cg$1061 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1059.$1, $cg$1059.$2, false, ($_647_in - 48));
                    } else {
                        let $cg$1062 = null;
                        if((((($_647_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$1062 = false;
                        } else {
                            $cg$1062 = ($_647_in <= 90);
                        }
                        
                        
                        if($cg$1062) {
                            $cg$1061 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1059.$1, $cg$1059.$2, true, ($_647_in - 65));
                        } else {
                            let $cg$1064 = null;
                            if((((($_647_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$1064 = false;
                            } else {
                                $cg$1064 = ($_647_in <= 122);
                            }
                            
                            
                            if($cg$1064) {
                                $cg$1061 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1059.$1, $cg$1059.$2, false, ($_647_in - 97));
                            } else {
                                $cg$1061 = new $HC_1_0$Main__Symbol($_647_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$1061, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1059.$1, $cg$1059.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === "[")) {
                const $cg$1099 = $_1_arg.$2;
                if(($cg$1099.type === 1)) {
                    const $cg$1110 = $cg$1099.$1;
                    if(($cg$1110 === "!")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(161), Main__parse_39_($_0_arg, $cg$1099.$2));
                    } else if(($cg$1110 === "\"")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8220), Main__parse_39_($_0_arg, $cg$1099.$2));
                    } else if(($cg$1110 === "\'")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8216), Main__parse_39_($_0_arg, $cg$1099.$2));
                    } else if(($cg$1110 === "?")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(191), Main__parse_39_($_0_arg, $cg$1099.$2));
                    } else {
                        
                        const $cg$1113 = $_0_arg.$2;
                        const $_654_in = (($_1_arg.$1).charCodeAt(0)|0);
                        let $cg$1114 = null;
                        if((((($_654_in >= 48)) ? 1|0 : 0|0) === 0)) {
                            $cg$1114 = false;
                        } else {
                            $cg$1114 = ($_654_in <= 57);
                        }
                        
                        let $cg$1115 = null;
                        if($cg$1114) {
                            $cg$1115 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1113.$1, $cg$1113.$2, false, ($_654_in - 48));
                        } else {
                            let $cg$1116 = null;
                            if((((($_654_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                $cg$1116 = false;
                            } else {
                                $cg$1116 = ($_654_in <= 90);
                            }
                            
                            
                            if($cg$1116) {
                                $cg$1115 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1113.$1, $cg$1113.$2, true, ($_654_in - 65));
                            } else {
                                let $cg$1118 = null;
                                if((((($_654_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                    $cg$1118 = false;
                                } else {
                                    $cg$1118 = ($_654_in <= 122);
                                }
                                
                                
                                if($cg$1118) {
                                    $cg$1115 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1113.$1, $cg$1113.$2, false, ($_654_in - 97));
                                } else {
                                    $cg$1115 = new $HC_1_0$Main__Symbol($_654_in);
                                }
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$1115, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1113.$1, $cg$1113.$2)), $_1_arg.$2));
                    }
                } else {
                    
                    const $cg$1102 = $_0_arg.$2;
                    const $_659_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$1103 = null;
                    if((((($_659_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$1103 = false;
                    } else {
                        $cg$1103 = ($_659_in <= 57);
                    }
                    
                    let $cg$1104 = null;
                    if($cg$1103) {
                        $cg$1104 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1102.$1, $cg$1102.$2, false, ($_659_in - 48));
                    } else {
                        let $cg$1105 = null;
                        if((((($_659_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$1105 = false;
                        } else {
                            $cg$1105 = ($_659_in <= 90);
                        }
                        
                        
                        if($cg$1105) {
                            $cg$1104 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1102.$1, $cg$1102.$2, true, ($_659_in - 65));
                        } else {
                            let $cg$1107 = null;
                            if((((($_659_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$1107 = false;
                            } else {
                                $cg$1107 = ($_659_in <= 122);
                            }
                            
                            
                            if($cg$1107) {
                                $cg$1104 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1102.$1, $cg$1102.$2, false, ($_659_in - 97));
                            } else {
                                $cg$1104 = new $HC_1_0$Main__Symbol($_659_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$1104, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1102.$1, $cg$1102.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === "\\")) {
                const $cg$1121 = $_1_arg.$2;
                if(($cg$1121.type === 1)) {
                    const $cg$1131 = $cg$1121.$1;
                    if(($cg$1131 === "1")) {
                        const $cg$1133 = $cg$1121.$2;
                        if(($cg$1133.type === 1)) {
                            
                            const $cg$1144 = $_0_arg.$2;
                            const $_668_in = new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1144.$1, $cg$1144.$2));
                            let $cg$1145 = null;
                            if((((((($cg$1133.$1).charCodeAt(0)|0) >= 58)) ? 1|0 : 0|0) === 0)) {
                                $cg$1145 = ((($cg$1133.$1).charCodeAt(0)|0) < 48);
                            } else {
                                $cg$1145 = true;
                            }
                            
                            
                            if($cg$1145) {
                                return new $HC_2_1$Prelude__List___58__58_(new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1144.$1, $cg$1144.$2, false, 49), Main__parse_39_($_668_in, $cg$1133.$2));
                            } else {
                                return new $HC_2_1$Prelude__List___58__58_(new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1144.$1, $cg$1144.$2, false, (((($cg$1133.$1).charCodeAt(0)|0) - 48) + 10)), Main__parse_39_($_668_in, new $HC_2_1$Prelude__List___58__58_($cg$1133.$1, $cg$1133.$2)));
                            }
                        } else {
                            
                            const $cg$1136 = $_0_arg.$2;
                            const $cg$1138 = Main__lookupSymbol($_1_arg.$2);
                            let $cg$1139 = null;
                            if((((($cg$1138.$1 < 880)) ? 1|0 : 0|0) === 0)) {
                                $cg$1139 = ($cg$1138.$1 > 1023);
                            } else {
                                $cg$1139 = true;
                            }
                            
                            let $cg$1140 = null;
                            if($cg$1139) {
                                $cg$1140 = new $HC_1_0$Main__Symbol($cg$1138.$1);
                            } else {
                                
                                if((((($cg$1138.$1 < 940)) ? 1|0 : 0|0) === 0)) {
                                    $cg$1140 = new $HC_6_1$Main__Character($HC_0_0$Main__Greek, $_0_arg.$1, $cg$1136.$1, $cg$1136.$2, false, ($cg$1138.$1 - 945));
                                } else {
                                    $cg$1140 = new $HC_6_1$Main__Character($HC_0_0$Main__Greek, $_0_arg.$1, $cg$1136.$1, $cg$1136.$2, true, ($cg$1138.$1 - 913));
                                }
                            }
                            
                            return new $HC_2_1$Prelude__List___58__58_($cg$1140, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1136.$1, $cg$1136.$2)), $cg$1138.$2));
                        }
                    } else if(($cg$1131 === "2")) {
                        const $cg$1148 = $cg$1121.$2;
                        if(($cg$1148.type === 1)) {
                            
                            if(($cg$1148.$1 === "0")) {
                                
                                const $cg$1160 = $_0_arg.$2;
                                return new $HC_2_1$Prelude__List___58__58_(new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1160.$1, $cg$1160.$2, false, 68), Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1160.$1, $cg$1160.$2)), $cg$1148.$2));
                            } else {
                                
                                const $cg$1163 = $_0_arg.$2;
                                const $cg$1165 = Main__lookupSymbol($_1_arg.$2);
                                let $cg$1166 = null;
                                if((((($cg$1165.$1 < 880)) ? 1|0 : 0|0) === 0)) {
                                    $cg$1166 = ($cg$1165.$1 > 1023);
                                } else {
                                    $cg$1166 = true;
                                }
                                
                                let $cg$1167 = null;
                                if($cg$1166) {
                                    $cg$1167 = new $HC_1_0$Main__Symbol($cg$1165.$1);
                                } else {
                                    
                                    if((((($cg$1165.$1 < 940)) ? 1|0 : 0|0) === 0)) {
                                        $cg$1167 = new $HC_6_1$Main__Character($HC_0_0$Main__Greek, $_0_arg.$1, $cg$1163.$1, $cg$1163.$2, false, ($cg$1165.$1 - 945));
                                    } else {
                                        $cg$1167 = new $HC_6_1$Main__Character($HC_0_0$Main__Greek, $_0_arg.$1, $cg$1163.$1, $cg$1163.$2, true, ($cg$1165.$1 - 913));
                                    }
                                }
                                
                                return new $HC_2_1$Prelude__List___58__58_($cg$1167, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1163.$1, $cg$1163.$2)), $cg$1165.$2));
                            }
                        } else {
                            
                            const $cg$1151 = $_0_arg.$2;
                            const $cg$1153 = Main__lookupSymbol($_1_arg.$2);
                            let $cg$1154 = null;
                            if((((($cg$1153.$1 < 880)) ? 1|0 : 0|0) === 0)) {
                                $cg$1154 = ($cg$1153.$1 > 1023);
                            } else {
                                $cg$1154 = true;
                            }
                            
                            let $cg$1155 = null;
                            if($cg$1154) {
                                $cg$1155 = new $HC_1_0$Main__Symbol($cg$1153.$1);
                            } else {
                                
                                if((((($cg$1153.$1 < 940)) ? 1|0 : 0|0) === 0)) {
                                    $cg$1155 = new $HC_6_1$Main__Character($HC_0_0$Main__Greek, $_0_arg.$1, $cg$1151.$1, $cg$1151.$2, false, ($cg$1153.$1 - 945));
                                } else {
                                    $cg$1155 = new $HC_6_1$Main__Character($HC_0_0$Main__Greek, $_0_arg.$1, $cg$1151.$1, $cg$1151.$2, true, ($cg$1153.$1 - 913));
                                }
                            }
                            
                            return new $HC_2_1$Prelude__List___58__58_($cg$1155, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1151.$1, $cg$1151.$2)), $cg$1153.$2));
                        }
                    } else {
                        
                        const $cg$1171 = $_0_arg.$2;
                        const $cg$1173 = Main__lookupSymbol($_1_arg.$2);
                        let $cg$1174 = null;
                        if((((($cg$1173.$1 < 880)) ? 1|0 : 0|0) === 0)) {
                            $cg$1174 = ($cg$1173.$1 > 1023);
                        } else {
                            $cg$1174 = true;
                        }
                        
                        let $cg$1175 = null;
                        if($cg$1174) {
                            $cg$1175 = new $HC_1_0$Main__Symbol($cg$1173.$1);
                        } else {
                            
                            if((((($cg$1173.$1 < 940)) ? 1|0 : 0|0) === 0)) {
                                $cg$1175 = new $HC_6_1$Main__Character($HC_0_0$Main__Greek, $_0_arg.$1, $cg$1171.$1, $cg$1171.$2, false, ($cg$1173.$1 - 945));
                            } else {
                                $cg$1175 = new $HC_6_1$Main__Character($HC_0_0$Main__Greek, $_0_arg.$1, $cg$1171.$1, $cg$1171.$2, true, ($cg$1173.$1 - 913));
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$1175, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1171.$1, $cg$1171.$2)), $cg$1173.$2));
                    }
                } else {
                    
                    const $cg$1124 = $_0_arg.$2;
                    const $cg$1126 = Main__lookupSymbol($_1_arg.$2);
                    let $cg$1127 = null;
                    if((((($cg$1126.$1 < 880)) ? 1|0 : 0|0) === 0)) {
                        $cg$1127 = ($cg$1126.$1 > 1023);
                    } else {
                        $cg$1127 = true;
                    }
                    
                    let $cg$1128 = null;
                    if($cg$1127) {
                        $cg$1128 = new $HC_1_0$Main__Symbol($cg$1126.$1);
                    } else {
                        
                        if((((($cg$1126.$1 < 940)) ? 1|0 : 0|0) === 0)) {
                            $cg$1128 = new $HC_6_1$Main__Character($HC_0_0$Main__Greek, $_0_arg.$1, $cg$1124.$1, $cg$1124.$2, false, ($cg$1126.$1 - 945));
                        } else {
                            $cg$1128 = new $HC_6_1$Main__Character($HC_0_0$Main__Greek, $_0_arg.$1, $cg$1124.$1, $cg$1124.$2, true, ($cg$1126.$1 - 913));
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$1128, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1124.$1, $cg$1124.$2)), $cg$1126.$2));
                }
            } else if(($cg$3 === "^")) {
                const $cg$1178 = $_1_arg.$2;
                if(($cg$1178.type === 1)) {
                    const $cg$1189 = Main__supTable();
                    let $cg$1188 = null;
                    if(($cg$1189.type === 0)) {
                        $cg$1188 = $HC_0_0$Prelude__Maybe__Nothing;
                    } else {
                        $cg$1188 = Data__SortedMap__treeLookup(null, null, $cg$1189.$1, null, $cg$1178.$1, $cg$1189.$2);
                    }
                    
                    let $cg$1190 = null;
                    if(($cg$1188.type === 1)) {
                        $cg$1190 = $cg$1188.$1;
                    } else {
                        $cg$1190 = 65533;
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol($cg$1190), Main__parse_39_($_0_arg, $cg$1178.$2));
                } else {
                    
                    const $cg$1181 = $_0_arg.$2;
                    const $_718_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$1182 = null;
                    if((((($_718_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$1182 = false;
                    } else {
                        $cg$1182 = ($_718_in <= 57);
                    }
                    
                    let $cg$1183 = null;
                    if($cg$1182) {
                        $cg$1183 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1181.$1, $cg$1181.$2, false, ($_718_in - 48));
                    } else {
                        let $cg$1184 = null;
                        if((((($_718_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$1184 = false;
                        } else {
                            $cg$1184 = ($_718_in <= 90);
                        }
                        
                        
                        if($cg$1184) {
                            $cg$1183 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1181.$1, $cg$1181.$2, true, ($_718_in - 65));
                        } else {
                            let $cg$1186 = null;
                            if((((($_718_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$1186 = false;
                            } else {
                                $cg$1186 = ($_718_in <= 122);
                            }
                            
                            
                            if($cg$1186) {
                                $cg$1183 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1181.$1, $cg$1181.$2, false, ($_718_in - 97));
                            } else {
                                $cg$1183 = new $HC_1_0$Main__Symbol($_718_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$1183, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1181.$1, $cg$1181.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === "_")) {
                const $cg$1192 = $_1_arg.$2;
                if(($cg$1192.type === 1)) {
                    
                    if(($cg$1192.$1 === "|")) {
                        const $cg$1204 = $cg$1192.$2;
                        if(($cg$1204.type === 1)) {
                            
                            if(($cg$1204.$1 === "_")) {
                                return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8869), Main__parse_39_($_0_arg, $cg$1204.$2));
                            } else {
                                const $cg$1210 = Main__subTable();
                                let $cg$1209 = null;
                                if(($cg$1210.type === 0)) {
                                    $cg$1209 = $HC_0_0$Prelude__Maybe__Nothing;
                                } else {
                                    $cg$1209 = Data__SortedMap__treeLookup(null, null, $cg$1210.$1, null, $cg$1192.$1, $cg$1210.$2);
                                }
                                
                                let $cg$1211 = null;
                                if(($cg$1209.type === 1)) {
                                    $cg$1211 = $cg$1209.$1;
                                } else {
                                    $cg$1211 = 65533;
                                }
                                
                                return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol($cg$1211), Main__parse_39_($_0_arg, $cg$1192.$2));
                            }
                        } else {
                            const $cg$1206 = Main__subTable();
                            let $cg$1205 = null;
                            if(($cg$1206.type === 0)) {
                                $cg$1205 = $HC_0_0$Prelude__Maybe__Nothing;
                            } else {
                                $cg$1205 = Data__SortedMap__treeLookup(null, null, $cg$1206.$1, null, $cg$1192.$1, $cg$1206.$2);
                            }
                            
                            let $cg$1207 = null;
                            if(($cg$1205.type === 1)) {
                                $cg$1207 = $cg$1205.$1;
                            } else {
                                $cg$1207 = 65533;
                            }
                            
                            return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol($cg$1207), Main__parse_39_($_0_arg, $cg$1192.$2));
                        }
                    } else {
                        const $cg$1213 = Main__subTable();
                        let $cg$1212 = null;
                        if(($cg$1213.type === 0)) {
                            $cg$1212 = $HC_0_0$Prelude__Maybe__Nothing;
                        } else {
                            $cg$1212 = Data__SortedMap__treeLookup(null, null, $cg$1213.$1, null, $cg$1192.$1, $cg$1213.$2);
                        }
                        
                        let $cg$1214 = null;
                        if(($cg$1212.type === 1)) {
                            $cg$1214 = $cg$1212.$1;
                        } else {
                            $cg$1214 = 65533;
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol($cg$1214), Main__parse_39_($_0_arg, $cg$1192.$2));
                    }
                } else {
                    
                    const $cg$1195 = $_0_arg.$2;
                    const $_748_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$1196 = null;
                    if((((($_748_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$1196 = false;
                    } else {
                        $cg$1196 = ($_748_in <= 57);
                    }
                    
                    let $cg$1197 = null;
                    if($cg$1196) {
                        $cg$1197 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1195.$1, $cg$1195.$2, false, ($_748_in - 48));
                    } else {
                        let $cg$1198 = null;
                        if((((($_748_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$1198 = false;
                        } else {
                            $cg$1198 = ($_748_in <= 90);
                        }
                        
                        
                        if($cg$1198) {
                            $cg$1197 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1195.$1, $cg$1195.$2, true, ($_748_in - 65));
                        } else {
                            let $cg$1200 = null;
                            if((((($_748_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$1200 = false;
                            } else {
                                $cg$1200 = ($_748_in <= 122);
                            }
                            
                            
                            if($cg$1200) {
                                $cg$1197 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1195.$1, $cg$1195.$2, false, ($_748_in - 97));
                            } else {
                                $cg$1197 = new $HC_1_0$Main__Symbol($_748_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$1197, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1195.$1, $cg$1195.$2)), $_1_arg.$2));
                }
            } else if(($cg$3 === "|")) {
                const $cg$1216 = $_1_arg.$2;
                if(($cg$1216.type === 1)) {
                    
                    if(($cg$1216.$1 === "|")) {
                        return new $HC_2_1$Prelude__List___58__58_(new $HC_1_0$Main__Symbol(8744), Main__parse_39_($_0_arg, $cg$1216.$2));
                    } else {
                        
                        const $cg$1229 = $_0_arg.$2;
                        const $_755_in = (($_1_arg.$1).charCodeAt(0)|0);
                        let $cg$1230 = null;
                        if((((($_755_in >= 48)) ? 1|0 : 0|0) === 0)) {
                            $cg$1230 = false;
                        } else {
                            $cg$1230 = ($_755_in <= 57);
                        }
                        
                        let $cg$1231 = null;
                        if($cg$1230) {
                            $cg$1231 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1229.$1, $cg$1229.$2, false, ($_755_in - 48));
                        } else {
                            let $cg$1232 = null;
                            if((((($_755_in >= 65)) ? 1|0 : 0|0) === 0)) {
                                $cg$1232 = false;
                            } else {
                                $cg$1232 = ($_755_in <= 90);
                            }
                            
                            
                            if($cg$1232) {
                                $cg$1231 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1229.$1, $cg$1229.$2, true, ($_755_in - 65));
                            } else {
                                let $cg$1234 = null;
                                if((((($_755_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                    $cg$1234 = false;
                                } else {
                                    $cg$1234 = ($_755_in <= 122);
                                }
                                
                                
                                if($cg$1234) {
                                    $cg$1231 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1229.$1, $cg$1229.$2, false, ($_755_in - 97));
                                } else {
                                    $cg$1231 = new $HC_1_0$Main__Symbol($_755_in);
                                }
                            }
                        }
                        
                        return new $HC_2_1$Prelude__List___58__58_($cg$1231, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1229.$1, $cg$1229.$2)), $_1_arg.$2));
                    }
                } else {
                    
                    const $cg$1219 = $_0_arg.$2;
                    const $_760_in = (($_1_arg.$1).charCodeAt(0)|0);
                    let $cg$1220 = null;
                    if((((($_760_in >= 48)) ? 1|0 : 0|0) === 0)) {
                        $cg$1220 = false;
                    } else {
                        $cg$1220 = ($_760_in <= 57);
                    }
                    
                    let $cg$1221 = null;
                    if($cg$1220) {
                        $cg$1221 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1219.$1, $cg$1219.$2, false, ($_760_in - 48));
                    } else {
                        let $cg$1222 = null;
                        if((((($_760_in >= 65)) ? 1|0 : 0|0) === 0)) {
                            $cg$1222 = false;
                        } else {
                            $cg$1222 = ($_760_in <= 90);
                        }
                        
                        
                        if($cg$1222) {
                            $cg$1221 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1219.$1, $cg$1219.$2, true, ($_760_in - 65));
                        } else {
                            let $cg$1224 = null;
                            if((((($_760_in >= 97)) ? 1|0 : 0|0) === 0)) {
                                $cg$1224 = false;
                            } else {
                                $cg$1224 = ($_760_in <= 122);
                            }
                            
                            
                            if($cg$1224) {
                                $cg$1221 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1219.$1, $cg$1219.$2, false, ($_760_in - 97));
                            } else {
                                $cg$1221 = new $HC_1_0$Main__Symbol($_760_in);
                            }
                        }
                    }
                    
                    return new $HC_2_1$Prelude__List___58__58_($cg$1221, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1219.$1, $cg$1219.$2)), $_1_arg.$2));
                }
            } else {
                
                const $cg$1238 = $_0_arg.$2;
                const $_765_in = (($_1_arg.$1).charCodeAt(0)|0);
                let $cg$1239 = null;
                if((((($_765_in >= 48)) ? 1|0 : 0|0) === 0)) {
                    $cg$1239 = false;
                } else {
                    $cg$1239 = ($_765_in <= 57);
                }
                
                let $cg$1240 = null;
                if($cg$1239) {
                    $cg$1240 = new $HC_6_1$Main__Character($HC_0_2$Main__Arabic, $_0_arg.$1, $cg$1238.$1, $cg$1238.$2, false, ($_765_in - 48));
                } else {
                    let $cg$1241 = null;
                    if((((($_765_in >= 65)) ? 1|0 : 0|0) === 0)) {
                        $cg$1241 = false;
                    } else {
                        $cg$1241 = ($_765_in <= 90);
                    }
                    
                    
                    if($cg$1241) {
                        $cg$1240 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1238.$1, $cg$1238.$2, true, ($_765_in - 65));
                    } else {
                        let $cg$1243 = null;
                        if((((($_765_in >= 97)) ? 1|0 : 0|0) === 0)) {
                            $cg$1243 = false;
                        } else {
                            $cg$1243 = ($_765_in <= 122);
                        }
                        
                        
                        if($cg$1243) {
                            $cg$1240 = new $HC_6_1$Main__Character($HC_0_1$Main__Latin, $_0_arg.$1, $cg$1238.$1, $cg$1238.$2, false, ($_765_in - 97));
                        } else {
                            $cg$1240 = new $HC_1_0$Main__Symbol($_765_in);
                        }
                    }
                }
                
                return new $HC_2_1$Prelude__List___58__58_($cg$1240, Main__parse_39_(new $HC_2_0$Builtins__MkPair($_0_arg.$1, new $HC_2_0$Builtins__MkPair($cg$1238.$1, $cg$1238.$2)), $_1_arg.$2));
            }
        } else {
            return $_1_arg;
        }
    }
}

// Main.subTable

function Main__subTable(){
    return Data__SortedMap__fromList(null, null, new $HC_3_0$Prelude__Interfaces__Ord_95_ictor(new $HC_2_0$Prelude__Interfaces__Eq_95_ictor($partial_0_2$Main___123_subTable_95_3_125_(), $partial_0_2$Main___123_subTable_95_4_125_()), $partial_0_2$Main___123_subTable_95_5_125_(), $partial_0_2$Main___123_subTable_95_6_125_()), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("i", 7522), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("r", 7523), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("u", 7524), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("v", 7525), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("0", 8320), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("1", 8321), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("2", 8322), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("3", 8323), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("4", 8324), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("5", 8325), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("6", 8326), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("7", 8327), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("8", 8328), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("9", 8329), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("+", 8330), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("-", 8331), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("=", 8332), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("(", 8333), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair(")", 8334), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("a", 8336), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("e", 8337), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("o", 8338), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("x", 8339), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("h", 8341), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("k", 8342), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("l", 8343), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("m", 8344), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("n", 8345), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("p", 8346), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("s", 8347), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("t", 8348), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("_", 818), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair(" ", 95), $HC_0_0$Prelude__List__Nil))))))))))))))))))))))))))))))))));
}

// Main.supTable

function Main__supTable(){
    return Data__SortedMap__fromList(null, null, new $HC_3_0$Prelude__Interfaces__Ord_95_ictor(new $HC_2_0$Prelude__Interfaces__Eq_95_ictor($partial_0_2$Main___123_subTable_95_3_125_(), $partial_0_2$Main___123_subTable_95_4_125_()), $partial_0_2$Main___123_subTable_95_5_125_(), $partial_0_2$Main___123_subTable_95_6_125_()), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("_", 772), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("^", 770), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair(".", 775), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("~", 771), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair(">", 8401), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair(":", 776), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("\'", 697), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("\"", 698), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("0", 8304), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("i", 8305), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("4", 8308), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("5", 8309), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("6", 8310), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("7", 8311), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("8", 8312), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("9", 8313), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("+", 8314), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("-", 8315), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("=", 8316), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("(", 8317), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair(")", 8318), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("n", 8319), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("1", 185), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("2", 178), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair("3", 179), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair(" ", 94), $HC_0_0$Prelude__List__Nil)))))))))))))))))))))))))));
}

// Main.symbolTable

function Main__symbolTable(){
    let $cg$1 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(false, true).type === 1)) {
        $cg$1 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$2 = null;
        if((((("".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$2 = true;
        } else {
            $cg$2 = false;
        }
        
        let $cg$3 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$2, true).type === 1)) {
            $cg$3 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$3 = new $HC_2_1$Prelude__Strings__StrCons("".slice(1)[0], "".slice(1).slice(1));
        }
        
        $cg$1 = new $HC_2_1$Prelude__List___58__58_(""[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$3));
    }
    
    let $cg$4 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$4 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$5 = null;
        if((((("forall".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$5 = true;
        } else {
            $cg$5 = false;
        }
        
        let $cg$6 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$5, true).type === 1)) {
            $cg$6 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$6 = new $HC_2_1$Prelude__Strings__StrCons("forall".slice(1)[0], "forall".slice(1).slice(1));
        }
        
        $cg$4 = new $HC_2_1$Prelude__List___58__58_("forall"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$6));
    }
    
    let $cg$7 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$7 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$8 = null;
        if((((("exists".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$8 = true;
        } else {
            $cg$8 = false;
        }
        
        let $cg$9 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$8, true).type === 1)) {
            $cg$9 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$9 = new $HC_2_1$Prelude__Strings__StrCons("exists".slice(1)[0], "exists".slice(1).slice(1));
        }
        
        $cg$7 = new $HC_2_1$Prelude__List___58__58_("exists"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$9));
    }
    
    let $cg$10 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$10 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$11 = null;
        if((((("!exists".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$11 = true;
        } else {
            $cg$11 = false;
        }
        
        let $cg$12 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$11, true).type === 1)) {
            $cg$12 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$12 = new $HC_2_1$Prelude__Strings__StrCons("!exists".slice(1)[0], "!exists".slice(1).slice(1));
        }
        
        $cg$10 = new $HC_2_1$Prelude__List___58__58_("!exists"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$12));
    }
    
    let $cg$13 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$13 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$14 = null;
        if((((("empty".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$14 = true;
        } else {
            $cg$14 = false;
        }
        
        let $cg$15 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$14, true).type === 1)) {
            $cg$15 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$15 = new $HC_2_1$Prelude__Strings__StrCons("empty".slice(1)[0], "empty".slice(1).slice(1));
        }
        
        $cg$13 = new $HC_2_1$Prelude__List___58__58_("empty"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$15));
    }
    
    let $cg$16 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$16 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$17 = null;
        if((((("elem".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$17 = true;
        } else {
            $cg$17 = false;
        }
        
        let $cg$18 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$17, true).type === 1)) {
            $cg$18 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$18 = new $HC_2_1$Prelude__Strings__StrCons("elem".slice(1)[0], "elem".slice(1).slice(1));
        }
        
        $cg$16 = new $HC_2_1$Prelude__List___58__58_("elem"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$18));
    }
    
    let $cg$19 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$19 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$20 = null;
        if((((("!elem".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$20 = true;
        } else {
            $cg$20 = false;
        }
        
        let $cg$21 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$20, true).type === 1)) {
            $cg$21 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$21 = new $HC_2_1$Prelude__Strings__StrCons("!elem".slice(1)[0], "!elem".slice(1).slice(1));
        }
        
        $cg$19 = new $HC_2_1$Prelude__List___58__58_("!elem"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$21));
    }
    
    let $cg$22 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$22 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$23 = null;
        if((((("member".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$23 = true;
        } else {
            $cg$23 = false;
        }
        
        let $cg$24 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$23, true).type === 1)) {
            $cg$24 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$24 = new $HC_2_1$Prelude__Strings__StrCons("member".slice(1)[0], "member".slice(1).slice(1));
        }
        
        $cg$22 = new $HC_2_1$Prelude__List___58__58_("member"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$24));
    }
    
    let $cg$25 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$25 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$26 = null;
        if((((("!member".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$26 = true;
        } else {
            $cg$26 = false;
        }
        
        let $cg$27 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$26, true).type === 1)) {
            $cg$27 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$27 = new $HC_2_1$Prelude__Strings__StrCons("!member".slice(1)[0], "!member".slice(1).slice(1));
        }
        
        $cg$25 = new $HC_2_1$Prelude__List___58__58_("!member"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$27));
    }
    
    let $cg$28 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$28 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$29 = null;
        if((((("qed".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$29 = true;
        } else {
            $cg$29 = false;
        }
        
        let $cg$30 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$29, true).type === 1)) {
            $cg$30 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$30 = new $HC_2_1$Prelude__Strings__StrCons("qed".slice(1)[0], "qed".slice(1).slice(1));
        }
        
        $cg$28 = new $HC_2_1$Prelude__List___58__58_("qed"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$30));
    }
    
    let $cg$31 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$31 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$32 = null;
        if((((("intersect".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$32 = true;
        } else {
            $cg$32 = false;
        }
        
        let $cg$33 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$32, true).type === 1)) {
            $cg$33 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$33 = new $HC_2_1$Prelude__Strings__StrCons("intersect".slice(1)[0], "intersect".slice(1).slice(1));
        }
        
        $cg$31 = new $HC_2_1$Prelude__List___58__58_("intersect"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$33));
    }
    
    let $cg$34 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$34 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$35 = null;
        if((((("union".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$35 = true;
        } else {
            $cg$35 = false;
        }
        
        let $cg$36 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$35, true).type === 1)) {
            $cg$36 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$36 = new $HC_2_1$Prelude__Strings__StrCons("union".slice(1)[0], "union".slice(1).slice(1));
        }
        
        $cg$34 = new $HC_2_1$Prelude__List___58__58_("union"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$36));
    }
    
    let $cg$37 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$37 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$38 = null;
        if((((("therefore".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$38 = true;
        } else {
            $cg$38 = false;
        }
        
        let $cg$39 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$38, true).type === 1)) {
            $cg$39 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$39 = new $HC_2_1$Prelude__Strings__StrCons("therefore".slice(1)[0], "therefore".slice(1).slice(1));
        }
        
        $cg$37 = new $HC_2_1$Prelude__List___58__58_("therefore"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$39));
    }
    
    let $cg$40 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$40 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$41 = null;
        if((((("because".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$41 = true;
        } else {
            $cg$41 = false;
        }
        
        let $cg$42 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$41, true).type === 1)) {
            $cg$42 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$42 = new $HC_2_1$Prelude__Strings__StrCons("because".slice(1)[0], "because".slice(1).slice(1));
        }
        
        $cg$40 = new $HC_2_1$Prelude__List___58__58_("because"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$42));
    }
    
    let $cg$43 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$43 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$44 = null;
        if((((("subset".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$44 = true;
        } else {
            $cg$44 = false;
        }
        
        let $cg$45 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$44, true).type === 1)) {
            $cg$45 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$45 = new $HC_2_1$Prelude__Strings__StrCons("subset".slice(1)[0], "subset".slice(1).slice(1));
        }
        
        $cg$43 = new $HC_2_1$Prelude__List___58__58_("subset"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$45));
    }
    
    let $cg$46 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$46 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$47 = null;
        if((((("superset".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$47 = true;
        } else {
            $cg$47 = false;
        }
        
        let $cg$48 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$47, true).type === 1)) {
            $cg$48 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$48 = new $HC_2_1$Prelude__Strings__StrCons("superset".slice(1)[0], "superset".slice(1).slice(1));
        }
        
        $cg$46 = new $HC_2_1$Prelude__List___58__58_("superset"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$48));
    }
    
    let $cg$49 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$49 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$50 = null;
        if((((("subeq".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$50 = true;
        } else {
            $cg$50 = false;
        }
        
        let $cg$51 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$50, true).type === 1)) {
            $cg$51 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$51 = new $HC_2_1$Prelude__Strings__StrCons("subeq".slice(1)[0], "subeq".slice(1).slice(1));
        }
        
        $cg$49 = new $HC_2_1$Prelude__List___58__58_("subeq"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$51));
    }
    
    let $cg$52 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$52 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$53 = null;
        if((((("supeq".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$53 = true;
        } else {
            $cg$53 = false;
        }
        
        let $cg$54 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$53, true).type === 1)) {
            $cg$54 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$54 = new $HC_2_1$Prelude__Strings__StrCons("supeq".slice(1)[0], "supeq".slice(1).slice(1));
        }
        
        $cg$52 = new $HC_2_1$Prelude__List___58__58_("supeq"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$54));
    }
    
    let $cg$55 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$55 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$56 = null;
        if((((("xor".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$56 = true;
        } else {
            $cg$56 = false;
        }
        
        let $cg$57 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$56, true).type === 1)) {
            $cg$57 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$57 = new $HC_2_1$Prelude__Strings__StrCons("xor".slice(1)[0], "xor".slice(1).slice(1));
        }
        
        $cg$55 = new $HC_2_1$Prelude__List___58__58_("xor"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$57));
    }
    
    let $cg$58 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$58 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$59 = null;
        if((((("sqrt".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$59 = true;
        } else {
            $cg$59 = false;
        }
        
        let $cg$60 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$59, true).type === 1)) {
            $cg$60 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$60 = new $HC_2_1$Prelude__Strings__StrCons("sqrt".slice(1)[0], "sqrt".slice(1).slice(1));
        }
        
        $cg$58 = new $HC_2_1$Prelude__List___58__58_("sqrt"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$60));
    }
    
    let $cg$61 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$61 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$62 = null;
        if((((("3root".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$62 = true;
        } else {
            $cg$62 = false;
        }
        
        let $cg$63 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$62, true).type === 1)) {
            $cg$63 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$63 = new $HC_2_1$Prelude__Strings__StrCons("3root".slice(1)[0], "3root".slice(1).slice(1));
        }
        
        $cg$61 = new $HC_2_1$Prelude__List___58__58_("3root"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$63));
    }
    
    let $cg$64 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$64 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$65 = null;
        if((((("4root".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$65 = true;
        } else {
            $cg$65 = false;
        }
        
        let $cg$66 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$65, true).type === 1)) {
            $cg$66 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$66 = new $HC_2_1$Prelude__Strings__StrCons("4root".slice(1)[0], "4root".slice(1).slice(1));
        }
        
        $cg$64 = new $HC_2_1$Prelude__List___58__58_("4root"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$66));
    }
    
    let $cg$67 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$67 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$68 = null;
        if((((("divides".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$68 = true;
        } else {
            $cg$68 = false;
        }
        
        let $cg$69 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$68, true).type === 1)) {
            $cg$69 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$69 = new $HC_2_1$Prelude__Strings__StrCons("divides".slice(1)[0], "divides".slice(1).slice(1));
        }
        
        $cg$67 = new $HC_2_1$Prelude__List___58__58_("divides"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$69));
    }
    
    let $cg$70 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$70 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$71 = null;
        if((((("!divides".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$71 = true;
        } else {
            $cg$71 = false;
        }
        
        let $cg$72 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$71, true).type === 1)) {
            $cg$72 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$72 = new $HC_2_1$Prelude__Strings__StrCons("!divides".slice(1)[0], "!divides".slice(1).slice(1));
        }
        
        $cg$70 = new $HC_2_1$Prelude__List___58__58_("!divides"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$72));
    }
    
    let $cg$73 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$73 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$74 = null;
        if((((("propto".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$74 = true;
        } else {
            $cg$74 = false;
        }
        
        let $cg$75 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$74, true).type === 1)) {
            $cg$75 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$75 = new $HC_2_1$Prelude__Strings__StrCons("propto".slice(1)[0], "propto".slice(1).slice(1));
        }
        
        $cg$73 = new $HC_2_1$Prelude__List___58__58_("propto"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$75));
    }
    
    let $cg$76 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$76 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$77 = null;
        if((((("inf".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$77 = true;
        } else {
            $cg$77 = false;
        }
        
        let $cg$78 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$77, true).type === 1)) {
            $cg$78 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$78 = new $HC_2_1$Prelude__Strings__StrCons("inf".slice(1)[0], "inf".slice(1).slice(1));
        }
        
        $cg$76 = new $HC_2_1$Prelude__List___58__58_("inf"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$78));
    }
    
    let $cg$79 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$79 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$80 = null;
        if((((("lfloor".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$80 = true;
        } else {
            $cg$80 = false;
        }
        
        let $cg$81 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$80, true).type === 1)) {
            $cg$81 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$81 = new $HC_2_1$Prelude__Strings__StrCons("lfloor".slice(1)[0], "lfloor".slice(1).slice(1));
        }
        
        $cg$79 = new $HC_2_1$Prelude__List___58__58_("lfloor"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$81));
    }
    
    let $cg$82 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$82 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$83 = null;
        if((((("rfloor".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$83 = true;
        } else {
            $cg$83 = false;
        }
        
        let $cg$84 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$83, true).type === 1)) {
            $cg$84 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$84 = new $HC_2_1$Prelude__Strings__StrCons("rfloor".slice(1)[0], "rfloor".slice(1).slice(1));
        }
        
        $cg$82 = new $HC_2_1$Prelude__List___58__58_("rfloor"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$84));
    }
    
    let $cg$85 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$85 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$86 = null;
        if((((("lceil".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$86 = true;
        } else {
            $cg$86 = false;
        }
        
        let $cg$87 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$86, true).type === 1)) {
            $cg$87 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$87 = new $HC_2_1$Prelude__Strings__StrCons("lceil".slice(1)[0], "lceil".slice(1).slice(1));
        }
        
        $cg$85 = new $HC_2_1$Prelude__List___58__58_("lceil"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$87));
    }
    
    let $cg$88 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$88 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$89 = null;
        if((((("rceil".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$89 = true;
        } else {
            $cg$89 = false;
        }
        
        let $cg$90 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$89, true).type === 1)) {
            $cg$90 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$90 = new $HC_2_1$Prelude__Strings__StrCons("rceil".slice(1)[0], "rceil".slice(1).slice(1));
        }
        
        $cg$88 = new $HC_2_1$Prelude__List___58__58_("rceil"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$90));
    }
    
    let $cg$91 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$91 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$92 = null;
        if((((("int".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$92 = true;
        } else {
            $cg$92 = false;
        }
        
        let $cg$93 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$92, true).type === 1)) {
            $cg$93 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$93 = new $HC_2_1$Prelude__Strings__StrCons("int".slice(1)[0], "int".slice(1).slice(1));
        }
        
        $cg$91 = new $HC_2_1$Prelude__List___58__58_("int"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$93));
    }
    
    let $cg$94 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$94 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$95 = null;
        if((((("iint".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$95 = true;
        } else {
            $cg$95 = false;
        }
        
        let $cg$96 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$95, true).type === 1)) {
            $cg$96 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$96 = new $HC_2_1$Prelude__Strings__StrCons("iint".slice(1)[0], "iint".slice(1).slice(1));
        }
        
        $cg$94 = new $HC_2_1$Prelude__List___58__58_("iint"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$96));
    }
    
    let $cg$97 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$97 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$98 = null;
        if((((("iiint".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$98 = true;
        } else {
            $cg$98 = false;
        }
        
        let $cg$99 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$98, true).type === 1)) {
            $cg$99 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$99 = new $HC_2_1$Prelude__Strings__StrCons("iiint".slice(1)[0], "iiint".slice(1).slice(1));
        }
        
        $cg$97 = new $HC_2_1$Prelude__List___58__58_("iiint"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$99));
    }
    
    let $cg$100 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$100 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$101 = null;
        if((((("cint".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$101 = true;
        } else {
            $cg$101 = false;
        }
        
        let $cg$102 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$101, true).type === 1)) {
            $cg$102 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$102 = new $HC_2_1$Prelude__Strings__StrCons("cint".slice(1)[0], "cint".slice(1).slice(1));
        }
        
        $cg$100 = new $HC_2_1$Prelude__List___58__58_("cint"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$102));
    }
    
    let $cg$103 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$103 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$104 = null;
        if((((("ciint".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$104 = true;
        } else {
            $cg$104 = false;
        }
        
        let $cg$105 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$104, true).type === 1)) {
            $cg$105 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$105 = new $HC_2_1$Prelude__Strings__StrCons("ciint".slice(1)[0], "ciint".slice(1).slice(1));
        }
        
        $cg$103 = new $HC_2_1$Prelude__List___58__58_("ciint"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$105));
    }
    
    let $cg$106 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$106 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$107 = null;
        if((((("ciiint".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$107 = true;
        } else {
            $cg$107 = false;
        }
        
        let $cg$108 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$107, true).type === 1)) {
            $cg$108 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$108 = new $HC_2_1$Prelude__Strings__StrCons("ciiint".slice(1)[0], "ciiint".slice(1).slice(1));
        }
        
        $cg$106 = new $HC_2_1$Prelude__List___58__58_("ciiint"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$108));
    }
    
    let $cg$109 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$109 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$110 = null;
        if((((("partial".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$110 = true;
        } else {
            $cg$110 = false;
        }
        
        let $cg$111 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$110, true).type === 1)) {
            $cg$111 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$111 = new $HC_2_1$Prelude__Strings__StrCons("partial".slice(1)[0], "partial".slice(1).slice(1));
        }
        
        $cg$109 = new $HC_2_1$Prelude__List___58__58_("partial"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$111));
    }
    
    let $cg$112 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$112 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$113 = null;
        if((((("del".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$113 = true;
        } else {
            $cg$113 = false;
        }
        
        let $cg$114 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$113, true).type === 1)) {
            $cg$114 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$114 = new $HC_2_1$Prelude__Strings__StrCons("del".slice(1)[0], "del".slice(1).slice(1));
        }
        
        $cg$112 = new $HC_2_1$Prelude__List___58__58_("del"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$114));
    }
    
    let $cg$115 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$115 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$116 = null;
        if((((("parallel".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$116 = true;
        } else {
            $cg$116 = false;
        }
        
        let $cg$117 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$116, true).type === 1)) {
            $cg$117 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$117 = new $HC_2_1$Prelude__Strings__StrCons("parallel".slice(1)[0], "parallel".slice(1).slice(1));
        }
        
        $cg$115 = new $HC_2_1$Prelude__List___58__58_("parallel"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$117));
    }
    
    let $cg$118 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$118 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$119 = null;
        if((((("!parallel".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$119 = true;
        } else {
            $cg$119 = false;
        }
        
        let $cg$120 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$119, true).type === 1)) {
            $cg$120 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$120 = new $HC_2_1$Prelude__Strings__StrCons("!parallel".slice(1)[0], "!parallel".slice(1).slice(1));
        }
        
        $cg$118 = new $HC_2_1$Prelude__List___58__58_("!parallel"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$120));
    }
    
    let $cg$121 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$121 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$122 = null;
        if((((("perp".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$122 = true;
        } else {
            $cg$122 = false;
        }
        
        let $cg$123 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$122, true).type === 1)) {
            $cg$123 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$123 = new $HC_2_1$Prelude__Strings__StrCons("perp".slice(1)[0], "perp".slice(1).slice(1));
        }
        
        $cg$121 = new $HC_2_1$Prelude__List___58__58_("perp"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$123));
    }
    
    let $cg$124 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$124 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$125 = null;
        if((((("deg".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$125 = true;
        } else {
            $cg$125 = false;
        }
        
        let $cg$126 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$125, true).type === 1)) {
            $cg$126 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$126 = new $HC_2_1$Prelude__Strings__StrCons("deg".slice(1)[0], "deg".slice(1).slice(1));
        }
        
        $cg$124 = new $HC_2_1$Prelude__List___58__58_("deg"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$126));
    }
    
    let $cg$127 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$127 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$128 = null;
        if((((("dotprod".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$128 = true;
        } else {
            $cg$128 = false;
        }
        
        let $cg$129 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$128, true).type === 1)) {
            $cg$129 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$129 = new $HC_2_1$Prelude__Strings__StrCons("dotprod".slice(1)[0], "dotprod".slice(1).slice(1));
        }
        
        $cg$127 = new $HC_2_1$Prelude__List___58__58_("dotprod"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$129));
    }
    
    let $cg$130 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$130 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$131 = null;
        if((((("crossprod".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$131 = true;
        } else {
            $cg$131 = false;
        }
        
        let $cg$132 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$131, true).type === 1)) {
            $cg$132 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$132 = new $HC_2_1$Prelude__Strings__StrCons("crossprod".slice(1)[0], "crossprod".slice(1).slice(1));
        }
        
        $cg$130 = new $HC_2_1$Prelude__List___58__58_("crossprod"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$132));
    }
    
    let $cg$133 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$133 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$134 = null;
        if((((("all".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$134 = true;
        } else {
            $cg$134 = false;
        }
        
        let $cg$135 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$134, true).type === 1)) {
            $cg$135 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$135 = new $HC_2_1$Prelude__Strings__StrCons("all".slice(1)[0], "all".slice(1).slice(1));
        }
        
        $cg$133 = new $HC_2_1$Prelude__List___58__58_("all"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$135));
    }
    
    let $cg$136 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$136 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$137 = null;
        if((((("any".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$137 = true;
        } else {
            $cg$137 = false;
        }
        
        let $cg$138 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$137, true).type === 1)) {
            $cg$138 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$138 = new $HC_2_1$Prelude__Strings__StrCons("any".slice(1)[0], "any".slice(1).slice(1));
        }
        
        $cg$136 = new $HC_2_1$Prelude__List___58__58_("any"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$138));
    }
    
    let $cg$139 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$139 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$140 = null;
        if((((("union1".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$140 = true;
        } else {
            $cg$140 = false;
        }
        
        let $cg$141 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$140, true).type === 1)) {
            $cg$141 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$141 = new $HC_2_1$Prelude__Strings__StrCons("union1".slice(1)[0], "union1".slice(1).slice(1));
        }
        
        $cg$139 = new $HC_2_1$Prelude__List___58__58_("union1"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$141));
    }
    
    let $cg$142 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$142 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$143 = null;
        if((((("intersect1".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$143 = true;
        } else {
            $cg$143 = false;
        }
        
        let $cg$144 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$143, true).type === 1)) {
            $cg$144 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$144 = new $HC_2_1$Prelude__Strings__StrCons("intersect1".slice(1)[0], "intersect1".slice(1).slice(1));
        }
        
        $cg$142 = new $HC_2_1$Prelude__List___58__58_("intersect1"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$144));
    }
    
    let $cg$145 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$145 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$146 = null;
        if((((("prod".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$146 = true;
        } else {
            $cg$146 = false;
        }
        
        let $cg$147 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$146, true).type === 1)) {
            $cg$147 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$147 = new $HC_2_1$Prelude__Strings__StrCons("prod".slice(1)[0], "prod".slice(1).slice(1));
        }
        
        $cg$145 = new $HC_2_1$Prelude__List___58__58_("prod"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$147));
    }
    
    let $cg$148 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$148 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$149 = null;
        if((((("sum".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$149 = true;
        } else {
            $cg$149 = false;
        }
        
        let $cg$150 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$149, true).type === 1)) {
            $cg$150 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$150 = new $HC_2_1$Prelude__Strings__StrCons("sum".slice(1)[0], "sum".slice(1).slice(1));
        }
        
        $cg$148 = new $HC_2_1$Prelude__List___58__58_("sum"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$150));
    }
    
    let $cg$151 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$151 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$152 = null;
        if((((("Alpha".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$152 = true;
        } else {
            $cg$152 = false;
        }
        
        let $cg$153 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$152, true).type === 1)) {
            $cg$153 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$153 = new $HC_2_1$Prelude__Strings__StrCons("Alpha".slice(1)[0], "Alpha".slice(1).slice(1));
        }
        
        $cg$151 = new $HC_2_1$Prelude__List___58__58_("Alpha"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$153));
    }
    
    let $cg$154 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$154 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$155 = null;
        if((((("Beta".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$155 = true;
        } else {
            $cg$155 = false;
        }
        
        let $cg$156 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$155, true).type === 1)) {
            $cg$156 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$156 = new $HC_2_1$Prelude__Strings__StrCons("Beta".slice(1)[0], "Beta".slice(1).slice(1));
        }
        
        $cg$154 = new $HC_2_1$Prelude__List___58__58_("Beta"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$156));
    }
    
    let $cg$157 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$157 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$158 = null;
        if((((("Gamma".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$158 = true;
        } else {
            $cg$158 = false;
        }
        
        let $cg$159 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$158, true).type === 1)) {
            $cg$159 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$159 = new $HC_2_1$Prelude__Strings__StrCons("Gamma".slice(1)[0], "Gamma".slice(1).slice(1));
        }
        
        $cg$157 = new $HC_2_1$Prelude__List___58__58_("Gamma"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$159));
    }
    
    let $cg$160 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$160 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$161 = null;
        if((((("Delta".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$161 = true;
        } else {
            $cg$161 = false;
        }
        
        let $cg$162 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$161, true).type === 1)) {
            $cg$162 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$162 = new $HC_2_1$Prelude__Strings__StrCons("Delta".slice(1)[0], "Delta".slice(1).slice(1));
        }
        
        $cg$160 = new $HC_2_1$Prelude__List___58__58_("Delta"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$162));
    }
    
    let $cg$163 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$163 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$164 = null;
        if((((("Epsilon".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$164 = true;
        } else {
            $cg$164 = false;
        }
        
        let $cg$165 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$164, true).type === 1)) {
            $cg$165 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$165 = new $HC_2_1$Prelude__Strings__StrCons("Epsilon".slice(1)[0], "Epsilon".slice(1).slice(1));
        }
        
        $cg$163 = new $HC_2_1$Prelude__List___58__58_("Epsilon"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$165));
    }
    
    let $cg$166 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$166 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$167 = null;
        if((((("Zeta".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$167 = true;
        } else {
            $cg$167 = false;
        }
        
        let $cg$168 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$167, true).type === 1)) {
            $cg$168 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$168 = new $HC_2_1$Prelude__Strings__StrCons("Zeta".slice(1)[0], "Zeta".slice(1).slice(1));
        }
        
        $cg$166 = new $HC_2_1$Prelude__List___58__58_("Zeta"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$168));
    }
    
    let $cg$169 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$169 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$170 = null;
        if((((("Eta".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$170 = true;
        } else {
            $cg$170 = false;
        }
        
        let $cg$171 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$170, true).type === 1)) {
            $cg$171 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$171 = new $HC_2_1$Prelude__Strings__StrCons("Eta".slice(1)[0], "Eta".slice(1).slice(1));
        }
        
        $cg$169 = new $HC_2_1$Prelude__List___58__58_("Eta"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$171));
    }
    
    let $cg$172 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$172 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$173 = null;
        if((((("Theta".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$173 = true;
        } else {
            $cg$173 = false;
        }
        
        let $cg$174 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$173, true).type === 1)) {
            $cg$174 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$174 = new $HC_2_1$Prelude__Strings__StrCons("Theta".slice(1)[0], "Theta".slice(1).slice(1));
        }
        
        $cg$172 = new $HC_2_1$Prelude__List___58__58_("Theta"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$174));
    }
    
    let $cg$175 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$175 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$176 = null;
        if((((("Iota".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$176 = true;
        } else {
            $cg$176 = false;
        }
        
        let $cg$177 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$176, true).type === 1)) {
            $cg$177 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$177 = new $HC_2_1$Prelude__Strings__StrCons("Iota".slice(1)[0], "Iota".slice(1).slice(1));
        }
        
        $cg$175 = new $HC_2_1$Prelude__List___58__58_("Iota"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$177));
    }
    
    let $cg$178 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$178 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$179 = null;
        if((((("Kappa".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$179 = true;
        } else {
            $cg$179 = false;
        }
        
        let $cg$180 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$179, true).type === 1)) {
            $cg$180 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$180 = new $HC_2_1$Prelude__Strings__StrCons("Kappa".slice(1)[0], "Kappa".slice(1).slice(1));
        }
        
        $cg$178 = new $HC_2_1$Prelude__List___58__58_("Kappa"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$180));
    }
    
    let $cg$181 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$181 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$182 = null;
        if((((("Lambda".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$182 = true;
        } else {
            $cg$182 = false;
        }
        
        let $cg$183 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$182, true).type === 1)) {
            $cg$183 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$183 = new $HC_2_1$Prelude__Strings__StrCons("Lambda".slice(1)[0], "Lambda".slice(1).slice(1));
        }
        
        $cg$181 = new $HC_2_1$Prelude__List___58__58_("Lambda"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$183));
    }
    
    let $cg$184 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$184 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$185 = null;
        if((((("Mu".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$185 = true;
        } else {
            $cg$185 = false;
        }
        
        let $cg$186 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$185, true).type === 1)) {
            $cg$186 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$186 = new $HC_2_1$Prelude__Strings__StrCons("Mu".slice(1)[0], "Mu".slice(1).slice(1));
        }
        
        $cg$184 = new $HC_2_1$Prelude__List___58__58_("Mu"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$186));
    }
    
    let $cg$187 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$187 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$188 = null;
        if((((("Nu".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$188 = true;
        } else {
            $cg$188 = false;
        }
        
        let $cg$189 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$188, true).type === 1)) {
            $cg$189 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$189 = new $HC_2_1$Prelude__Strings__StrCons("Nu".slice(1)[0], "Nu".slice(1).slice(1));
        }
        
        $cg$187 = new $HC_2_1$Prelude__List___58__58_("Nu"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$189));
    }
    
    let $cg$190 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$190 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$191 = null;
        if((((("Xi".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$191 = true;
        } else {
            $cg$191 = false;
        }
        
        let $cg$192 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$191, true).type === 1)) {
            $cg$192 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$192 = new $HC_2_1$Prelude__Strings__StrCons("Xi".slice(1)[0], "Xi".slice(1).slice(1));
        }
        
        $cg$190 = new $HC_2_1$Prelude__List___58__58_("Xi"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$192));
    }
    
    let $cg$193 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$193 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$194 = null;
        if((((("Omicron".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$194 = true;
        } else {
            $cg$194 = false;
        }
        
        let $cg$195 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$194, true).type === 1)) {
            $cg$195 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$195 = new $HC_2_1$Prelude__Strings__StrCons("Omicron".slice(1)[0], "Omicron".slice(1).slice(1));
        }
        
        $cg$193 = new $HC_2_1$Prelude__List___58__58_("Omicron"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$195));
    }
    
    let $cg$196 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$196 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$197 = null;
        if((((("Pi".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$197 = true;
        } else {
            $cg$197 = false;
        }
        
        let $cg$198 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$197, true).type === 1)) {
            $cg$198 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$198 = new $HC_2_1$Prelude__Strings__StrCons("Pi".slice(1)[0], "Pi".slice(1).slice(1));
        }
        
        $cg$196 = new $HC_2_1$Prelude__List___58__58_("Pi"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$198));
    }
    
    let $cg$199 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$199 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$200 = null;
        if((((("Rho".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$200 = true;
        } else {
            $cg$200 = false;
        }
        
        let $cg$201 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$200, true).type === 1)) {
            $cg$201 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$201 = new $HC_2_1$Prelude__Strings__StrCons("Rho".slice(1)[0], "Rho".slice(1).slice(1));
        }
        
        $cg$199 = new $HC_2_1$Prelude__List___58__58_("Rho"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$201));
    }
    
    let $cg$202 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$202 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$203 = null;
        if((((("Sigma".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$203 = true;
        } else {
            $cg$203 = false;
        }
        
        let $cg$204 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$203, true).type === 1)) {
            $cg$204 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$204 = new $HC_2_1$Prelude__Strings__StrCons("Sigma".slice(1)[0], "Sigma".slice(1).slice(1));
        }
        
        $cg$202 = new $HC_2_1$Prelude__List___58__58_("Sigma"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$204));
    }
    
    let $cg$205 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$205 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$206 = null;
        if((((("Tau".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$206 = true;
        } else {
            $cg$206 = false;
        }
        
        let $cg$207 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$206, true).type === 1)) {
            $cg$207 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$207 = new $HC_2_1$Prelude__Strings__StrCons("Tau".slice(1)[0], "Tau".slice(1).slice(1));
        }
        
        $cg$205 = new $HC_2_1$Prelude__List___58__58_("Tau"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$207));
    }
    
    let $cg$208 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$208 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$209 = null;
        if((((("Upsilon".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$209 = true;
        } else {
            $cg$209 = false;
        }
        
        let $cg$210 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$209, true).type === 1)) {
            $cg$210 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$210 = new $HC_2_1$Prelude__Strings__StrCons("Upsilon".slice(1)[0], "Upsilon".slice(1).slice(1));
        }
        
        $cg$208 = new $HC_2_1$Prelude__List___58__58_("Upsilon"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$210));
    }
    
    let $cg$211 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$211 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$212 = null;
        if((((("Phi".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$212 = true;
        } else {
            $cg$212 = false;
        }
        
        let $cg$213 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$212, true).type === 1)) {
            $cg$213 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$213 = new $HC_2_1$Prelude__Strings__StrCons("Phi".slice(1)[0], "Phi".slice(1).slice(1));
        }
        
        $cg$211 = new $HC_2_1$Prelude__List___58__58_("Phi"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$213));
    }
    
    let $cg$214 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$214 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$215 = null;
        if((((("Chi".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$215 = true;
        } else {
            $cg$215 = false;
        }
        
        let $cg$216 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$215, true).type === 1)) {
            $cg$216 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$216 = new $HC_2_1$Prelude__Strings__StrCons("Chi".slice(1)[0], "Chi".slice(1).slice(1));
        }
        
        $cg$214 = new $HC_2_1$Prelude__List___58__58_("Chi"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$216));
    }
    
    let $cg$217 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$217 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$218 = null;
        if((((("Psi".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$218 = true;
        } else {
            $cg$218 = false;
        }
        
        let $cg$219 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$218, true).type === 1)) {
            $cg$219 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$219 = new $HC_2_1$Prelude__Strings__StrCons("Psi".slice(1)[0], "Psi".slice(1).slice(1));
        }
        
        $cg$217 = new $HC_2_1$Prelude__List___58__58_("Psi"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$219));
    }
    
    let $cg$220 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$220 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$221 = null;
        if((((("Omega".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$221 = true;
        } else {
            $cg$221 = false;
        }
        
        let $cg$222 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$221, true).type === 1)) {
            $cg$222 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$222 = new $HC_2_1$Prelude__Strings__StrCons("Omega".slice(1)[0], "Omega".slice(1).slice(1));
        }
        
        $cg$220 = new $HC_2_1$Prelude__List___58__58_("Omega"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$222));
    }
    
    let $cg$223 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$223 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$224 = null;
        if((((("alpha".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$224 = true;
        } else {
            $cg$224 = false;
        }
        
        let $cg$225 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$224, true).type === 1)) {
            $cg$225 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$225 = new $HC_2_1$Prelude__Strings__StrCons("alpha".slice(1)[0], "alpha".slice(1).slice(1));
        }
        
        $cg$223 = new $HC_2_1$Prelude__List___58__58_("alpha"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$225));
    }
    
    let $cg$226 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$226 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$227 = null;
        if((((("beta".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$227 = true;
        } else {
            $cg$227 = false;
        }
        
        let $cg$228 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$227, true).type === 1)) {
            $cg$228 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$228 = new $HC_2_1$Prelude__Strings__StrCons("beta".slice(1)[0], "beta".slice(1).slice(1));
        }
        
        $cg$226 = new $HC_2_1$Prelude__List___58__58_("beta"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$228));
    }
    
    let $cg$229 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$229 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$230 = null;
        if((((("gamma".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$230 = true;
        } else {
            $cg$230 = false;
        }
        
        let $cg$231 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$230, true).type === 1)) {
            $cg$231 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$231 = new $HC_2_1$Prelude__Strings__StrCons("gamma".slice(1)[0], "gamma".slice(1).slice(1));
        }
        
        $cg$229 = new $HC_2_1$Prelude__List___58__58_("gamma"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$231));
    }
    
    let $cg$232 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$232 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$233 = null;
        if((((("delta".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$233 = true;
        } else {
            $cg$233 = false;
        }
        
        let $cg$234 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$233, true).type === 1)) {
            $cg$234 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$234 = new $HC_2_1$Prelude__Strings__StrCons("delta".slice(1)[0], "delta".slice(1).slice(1));
        }
        
        $cg$232 = new $HC_2_1$Prelude__List___58__58_("delta"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$234));
    }
    
    let $cg$235 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$235 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$236 = null;
        if((((("epsilon".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$236 = true;
        } else {
            $cg$236 = false;
        }
        
        let $cg$237 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$236, true).type === 1)) {
            $cg$237 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$237 = new $HC_2_1$Prelude__Strings__StrCons("epsilon".slice(1)[0], "epsilon".slice(1).slice(1));
        }
        
        $cg$235 = new $HC_2_1$Prelude__List___58__58_("epsilon"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$237));
    }
    
    let $cg$238 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$238 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$239 = null;
        if((((("zeta".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$239 = true;
        } else {
            $cg$239 = false;
        }
        
        let $cg$240 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$239, true).type === 1)) {
            $cg$240 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$240 = new $HC_2_1$Prelude__Strings__StrCons("zeta".slice(1)[0], "zeta".slice(1).slice(1));
        }
        
        $cg$238 = new $HC_2_1$Prelude__List___58__58_("zeta"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$240));
    }
    
    let $cg$241 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$241 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$242 = null;
        if((((("eta".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$242 = true;
        } else {
            $cg$242 = false;
        }
        
        let $cg$243 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$242, true).type === 1)) {
            $cg$243 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$243 = new $HC_2_1$Prelude__Strings__StrCons("eta".slice(1)[0], "eta".slice(1).slice(1));
        }
        
        $cg$241 = new $HC_2_1$Prelude__List___58__58_("eta"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$243));
    }
    
    let $cg$244 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$244 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$245 = null;
        if((((("theta".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$245 = true;
        } else {
            $cg$245 = false;
        }
        
        let $cg$246 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$245, true).type === 1)) {
            $cg$246 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$246 = new $HC_2_1$Prelude__Strings__StrCons("theta".slice(1)[0], "theta".slice(1).slice(1));
        }
        
        $cg$244 = new $HC_2_1$Prelude__List___58__58_("theta"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$246));
    }
    
    let $cg$247 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$247 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$248 = null;
        if((((("iota".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$248 = true;
        } else {
            $cg$248 = false;
        }
        
        let $cg$249 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$248, true).type === 1)) {
            $cg$249 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$249 = new $HC_2_1$Prelude__Strings__StrCons("iota".slice(1)[0], "iota".slice(1).slice(1));
        }
        
        $cg$247 = new $HC_2_1$Prelude__List___58__58_("iota"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$249));
    }
    
    let $cg$250 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$250 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$251 = null;
        if((((("kappa".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$251 = true;
        } else {
            $cg$251 = false;
        }
        
        let $cg$252 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$251, true).type === 1)) {
            $cg$252 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$252 = new $HC_2_1$Prelude__Strings__StrCons("kappa".slice(1)[0], "kappa".slice(1).slice(1));
        }
        
        $cg$250 = new $HC_2_1$Prelude__List___58__58_("kappa"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$252));
    }
    
    let $cg$253 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$253 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$254 = null;
        if((((("lambda".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$254 = true;
        } else {
            $cg$254 = false;
        }
        
        let $cg$255 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$254, true).type === 1)) {
            $cg$255 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$255 = new $HC_2_1$Prelude__Strings__StrCons("lambda".slice(1)[0], "lambda".slice(1).slice(1));
        }
        
        $cg$253 = new $HC_2_1$Prelude__List___58__58_("lambda"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$255));
    }
    
    let $cg$256 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$256 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$257 = null;
        if((((("mu".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$257 = true;
        } else {
            $cg$257 = false;
        }
        
        let $cg$258 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$257, true).type === 1)) {
            $cg$258 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$258 = new $HC_2_1$Prelude__Strings__StrCons("mu".slice(1)[0], "mu".slice(1).slice(1));
        }
        
        $cg$256 = new $HC_2_1$Prelude__List___58__58_("mu"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$258));
    }
    
    let $cg$259 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$259 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$260 = null;
        if((((("nu".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$260 = true;
        } else {
            $cg$260 = false;
        }
        
        let $cg$261 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$260, true).type === 1)) {
            $cg$261 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$261 = new $HC_2_1$Prelude__Strings__StrCons("nu".slice(1)[0], "nu".slice(1).slice(1));
        }
        
        $cg$259 = new $HC_2_1$Prelude__List___58__58_("nu"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$261));
    }
    
    let $cg$262 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$262 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$263 = null;
        if((((("xi".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$263 = true;
        } else {
            $cg$263 = false;
        }
        
        let $cg$264 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$263, true).type === 1)) {
            $cg$264 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$264 = new $HC_2_1$Prelude__Strings__StrCons("xi".slice(1)[0], "xi".slice(1).slice(1));
        }
        
        $cg$262 = new $HC_2_1$Prelude__List___58__58_("xi"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$264));
    }
    
    let $cg$265 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$265 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$266 = null;
        if((((("omicron".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$266 = true;
        } else {
            $cg$266 = false;
        }
        
        let $cg$267 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$266, true).type === 1)) {
            $cg$267 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$267 = new $HC_2_1$Prelude__Strings__StrCons("omicron".slice(1)[0], "omicron".slice(1).slice(1));
        }
        
        $cg$265 = new $HC_2_1$Prelude__List___58__58_("omicron"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$267));
    }
    
    let $cg$268 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$268 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$269 = null;
        if((((("pi".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$269 = true;
        } else {
            $cg$269 = false;
        }
        
        let $cg$270 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$269, true).type === 1)) {
            $cg$270 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$270 = new $HC_2_1$Prelude__Strings__StrCons("pi".slice(1)[0], "pi".slice(1).slice(1));
        }
        
        $cg$268 = new $HC_2_1$Prelude__List___58__58_("pi"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$270));
    }
    
    let $cg$271 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$271 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$272 = null;
        if((((("rho".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$272 = true;
        } else {
            $cg$272 = false;
        }
        
        let $cg$273 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$272, true).type === 1)) {
            $cg$273 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$273 = new $HC_2_1$Prelude__Strings__StrCons("rho".slice(1)[0], "rho".slice(1).slice(1));
        }
        
        $cg$271 = new $HC_2_1$Prelude__List___58__58_("rho"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$273));
    }
    
    let $cg$274 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$274 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$275 = null;
        if((((("sigma1".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$275 = true;
        } else {
            $cg$275 = false;
        }
        
        let $cg$276 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$275, true).type === 1)) {
            $cg$276 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$276 = new $HC_2_1$Prelude__Strings__StrCons("sigma1".slice(1)[0], "sigma1".slice(1).slice(1));
        }
        
        $cg$274 = new $HC_2_1$Prelude__List___58__58_("sigma1"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$276));
    }
    
    let $cg$277 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$277 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$278 = null;
        if((((("sigma".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$278 = true;
        } else {
            $cg$278 = false;
        }
        
        let $cg$279 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$278, true).type === 1)) {
            $cg$279 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$279 = new $HC_2_1$Prelude__Strings__StrCons("sigma".slice(1)[0], "sigma".slice(1).slice(1));
        }
        
        $cg$277 = new $HC_2_1$Prelude__List___58__58_("sigma"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$279));
    }
    
    let $cg$280 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$280 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$281 = null;
        if((((("tau".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$281 = true;
        } else {
            $cg$281 = false;
        }
        
        let $cg$282 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$281, true).type === 1)) {
            $cg$282 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$282 = new $HC_2_1$Prelude__Strings__StrCons("tau".slice(1)[0], "tau".slice(1).slice(1));
        }
        
        $cg$280 = new $HC_2_1$Prelude__List___58__58_("tau"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$282));
    }
    
    let $cg$283 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$283 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$284 = null;
        if((((("upsilon".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$284 = true;
        } else {
            $cg$284 = false;
        }
        
        let $cg$285 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$284, true).type === 1)) {
            $cg$285 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$285 = new $HC_2_1$Prelude__Strings__StrCons("upsilon".slice(1)[0], "upsilon".slice(1).slice(1));
        }
        
        $cg$283 = new $HC_2_1$Prelude__List___58__58_("upsilon"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$285));
    }
    
    let $cg$286 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$286 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$287 = null;
        if((((("phi".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$287 = true;
        } else {
            $cg$287 = false;
        }
        
        let $cg$288 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$287, true).type === 1)) {
            $cg$288 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$288 = new $HC_2_1$Prelude__Strings__StrCons("phi".slice(1)[0], "phi".slice(1).slice(1));
        }
        
        $cg$286 = new $HC_2_1$Prelude__List___58__58_("phi"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$288));
    }
    
    let $cg$289 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$289 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$290 = null;
        if((((("chi".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$290 = true;
        } else {
            $cg$290 = false;
        }
        
        let $cg$291 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$290, true).type === 1)) {
            $cg$291 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$291 = new $HC_2_1$Prelude__Strings__StrCons("chi".slice(1)[0], "chi".slice(1).slice(1));
        }
        
        $cg$289 = new $HC_2_1$Prelude__List___58__58_("chi"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$291));
    }
    
    let $cg$292 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$292 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$293 = null;
        if((((("psi".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$293 = true;
        } else {
            $cg$293 = false;
        }
        
        let $cg$294 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$293, true).type === 1)) {
            $cg$294 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$294 = new $HC_2_1$Prelude__Strings__StrCons("psi".slice(1)[0], "psi".slice(1).slice(1));
        }
        
        $cg$292 = new $HC_2_1$Prelude__List___58__58_("psi"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$294));
    }
    
    let $cg$295 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$295 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$296 = null;
        if((((("omega".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$296 = true;
        } else {
            $cg$296 = false;
        }
        
        let $cg$297 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$296, true).type === 1)) {
            $cg$297 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$297 = new $HC_2_1$Prelude__Strings__StrCons("omega".slice(1)[0], "omega".slice(1).slice(1));
        }
        
        $cg$295 = new $HC_2_1$Prelude__List___58__58_("omega"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$297));
    }
    
    let $cg$298 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$298 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$299 = null;
        if((((("P".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$299 = true;
        } else {
            $cg$299 = false;
        }
        
        let $cg$300 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$299, true).type === 1)) {
            $cg$300 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$300 = new $HC_2_1$Prelude__Strings__StrCons("P".slice(1)[0], "P".slice(1).slice(1));
        }
        
        $cg$298 = new $HC_2_1$Prelude__List___58__58_("P"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$300));
    }
    
    let $cg$301 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$301 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$302 = null;
        if((((("S".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$302 = true;
        } else {
            $cg$302 = false;
        }
        
        let $cg$303 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$302, true).type === 1)) {
            $cg$303 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$303 = new $HC_2_1$Prelude__Strings__StrCons("S".slice(1)[0], "S".slice(1).slice(1));
        }
        
        $cg$301 = new $HC_2_1$Prelude__List___58__58_("S"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$303));
    }
    
    let $cg$304 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$304 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$305 = null;
        if((((("C".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$305 = true;
        } else {
            $cg$305 = false;
        }
        
        let $cg$306 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$305, true).type === 1)) {
            $cg$306 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$306 = new $HC_2_1$Prelude__Strings__StrCons("C".slice(1)[0], "C".slice(1).slice(1));
        }
        
        $cg$304 = new $HC_2_1$Prelude__List___58__58_("C"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$306));
    }
    
    let $cg$307 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$307 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$308 = null;
        if((((("CL".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$308 = true;
        } else {
            $cg$308 = false;
        }
        
        let $cg$309 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$308, true).type === 1)) {
            $cg$309 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$309 = new $HC_2_1$Prelude__Strings__StrCons("CL".slice(1)[0], "CL".slice(1).slice(1));
        }
        
        $cg$307 = new $HC_2_1$Prelude__List___58__58_("CL"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$309));
    }
    
    let $cg$310 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$310 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$311 = null;
        if((((("R".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$311 = true;
        } else {
            $cg$311 = false;
        }
        
        let $cg$312 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$311, true).type === 1)) {
            $cg$312 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$312 = new $HC_2_1$Prelude__Strings__StrCons("R".slice(1)[0], "R".slice(1).slice(1));
        }
        
        $cg$310 = new $HC_2_1$Prelude__List___58__58_("R"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$312));
    }
    
    let $cg$313 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$313 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$314 = null;
        if((((("TM".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$314 = true;
        } else {
            $cg$314 = false;
        }
        
        let $cg$315 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$314, true).type === 1)) {
            $cg$315 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$315 = new $HC_2_1$Prelude__Strings__StrCons("TM".slice(1)[0], "TM".slice(1).slice(1));
        }
        
        $cg$313 = new $HC_2_1$Prelude__List___58__58_("TM"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$315));
    }
    
    let $cg$316 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$316 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$317 = null;
        if((((("cent".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$317 = true;
        } else {
            $cg$317 = false;
        }
        
        let $cg$318 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$317, true).type === 1)) {
            $cg$318 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$318 = new $HC_2_1$Prelude__Strings__StrCons("cent".slice(1)[0], "cent".slice(1).slice(1));
        }
        
        $cg$316 = new $HC_2_1$Prelude__List___58__58_("cent"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$318));
    }
    
    let $cg$319 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$319 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$320 = null;
        if((((("yen".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$320 = true;
        } else {
            $cg$320 = false;
        }
        
        let $cg$321 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$320, true).type === 1)) {
            $cg$321 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$321 = new $HC_2_1$Prelude__Strings__StrCons("yen".slice(1)[0], "yen".slice(1).slice(1));
        }
        
        $cg$319 = new $HC_2_1$Prelude__List___58__58_("yen"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$321));
    }
    
    let $cg$322 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$322 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$323 = null;
        if((((("dagger".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$323 = true;
        } else {
            $cg$323 = false;
        }
        
        let $cg$324 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$323, true).type === 1)) {
            $cg$324 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$324 = new $HC_2_1$Prelude__Strings__StrCons("dagger".slice(1)[0], "dagger".slice(1).slice(1));
        }
        
        $cg$322 = new $HC_2_1$Prelude__List___58__58_("dagger"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$324));
    }
    
    let $cg$325 = null;
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0(true, true).type === 1)) {
        $cg$325 = $HC_0_0$Prelude__List__Nil;
    } else {
        let $cg$326 = null;
        if((((("dagger2".slice(1) == "")) ? 1|0 : 0|0) === 0)) {
            $cg$326 = true;
        } else {
            $cg$326 = false;
        }
        
        let $cg$327 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$326, true).type === 1)) {
            $cg$327 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$327 = new $HC_2_1$Prelude__Strings__StrCons("dagger2".slice(1)[0], "dagger2".slice(1).slice(1));
        }
        
        $cg$325 = new $HC_2_1$Prelude__List___58__58_("dagger2"[0], _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$327));
    }
    
    return Data__SortedMap__fromList(null, null, new $HC_3_0$Prelude__Interfaces__Ord_95_ictor(new $HC_2_0$Prelude__Interfaces__Eq_95_ictor($partial_0_2$Main___123_symbolTable_95_13_125_(), $partial_0_2$Main___123_symbolTable_95_16_125_()), $partial_0_2$Main___123_symbolTable_95_21_125_(), $partial_0_2$Main___123_symbolTable_95_26_125_()), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$1, 92), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$4, 8704), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$7, 8707), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$10, 8708), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$13, 8709), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$16, 8712), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$19, 8713), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$22, 8715), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$25, 8716), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$28, 8718), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$31, 8745), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$34, 8746), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$37, 8756), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$40, 8757), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$43, 8834), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$46, 8835), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$49, 8838), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$52, 8839), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$55, 8855), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$58, 8730), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$61, 8731), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$64, 8732), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$67, 8739), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$70, 8740), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$73, 8733), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$76, 8734), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$79, 8970), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$82, 8971), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$85, 8968), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$88, 8969), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$91, 8747), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$94, 8748), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$97, 8749), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$100, 8750), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$103, 8751), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$106, 8752), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$109, 8706), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$112, 8711), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$115, 8741), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$118, 8742), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$121, 10178), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$124, 176), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$127, 183), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$130, 215), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$133, 8896), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$136, 8897), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$139, 8899), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$142, 8898), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$145, 8719), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$148, 8721), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$151, 913), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$154, 914), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$157, 915), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$160, 916), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$163, 917), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$166, 918), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$169, 919), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$172, 920), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$175, 921), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$178, 922), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$181, 923), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$184, 924), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$187, 925), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$190, 926), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$193, 927), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$196, 928), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$199, 929), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$202, 931), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$205, 932), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$208, 933), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$211, 934), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$214, 935), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$217, 936), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$220, 937), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$223, 945), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$226, 946), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$229, 947), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$232, 948), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$235, 949), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$238, 950), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$241, 951), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$244, 952), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$247, 953), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$250, 954), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$253, 955), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$256, 956), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$259, 957), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$262, 958), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$265, 959), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$268, 960), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$271, 961), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$274, 962), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$277, 963), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$280, 964), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$283, 965), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$286, 966), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$289, 967), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$292, 968), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$295, 969), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$298, 182), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$301, 167), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$304, 169), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$307, 127279), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$310, 174), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$313, 8482), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$316, 162), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$319, 165), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$322, 8224), new $HC_2_1$Prelude__List___58__58_(new $HC_2_0$Builtins__MkPair($cg$325, 8225), $HC_0_0$Prelude__List__Nil))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
}

// Prelude.List.takeWhile

function Prelude__List__takeWhile($_0_arg, $_1_arg, $_2_arg){
    
    if(($_2_arg.type === 1)) {
        
        if($_1_arg($_2_arg.$1)) {
            return new $HC_2_1$Prelude__List___58__58_($_2_arg.$1, Prelude__List__takeWhile(null, $_1_arg, $_2_arg.$2));
        } else {
            return $HC_0_0$Prelude__List__Nil;
        }
    } else {
        return $_2_arg;
    }
}

// Data.SortedMap.treeInsert

function Data__SortedMap__treeInsert($_0_arg, $_1_arg, $_2_arg, $_3_arg, $_4_arg, $_5_arg, $_6_arg){
    const $cg$2 = Data__SortedMap__treeInsert_39_(null, null, $_2_arg, null, $_4_arg, $_5_arg, $_6_arg);
    if(($cg$2.type === 0)) {
        return new $HC_1_0$Prelude__Either__Left($cg$2.$1);
    } else {
        const $cg$4 = $cg$2.$1;
        const $cg$6 = $cg$4.$2;
        return new $HC_1_1$Prelude__Either__Right(new $HC_3_1$Data__SortedMap__Branch2($cg$4.$1, $cg$6.$1, $cg$6.$2));
    }
}

// Data.SortedMap.treeInsert'

function Data__SortedMap__treeInsert_39_($_0_arg, $_1_arg, $_2_arg, $_3_arg, $_4_arg, $_5_arg, $_6_arg){
    
    if(($_6_arg.type === 1)) {
        
        
        if($_2_arg.$3($_4_arg)($_6_arg.$2)) {
            const $cg$36 = Data__SortedMap__treeInsert_39_(null, null, $_2_arg, null, $_4_arg, $_5_arg, $_6_arg.$1);
            if(($cg$36.type === 0)) {
                return new $HC_1_0$Prelude__Either__Left(new $HC_3_1$Data__SortedMap__Branch2($cg$36.$1, $_6_arg.$2, $_6_arg.$3));
            } else {
                const $cg$38 = $cg$36.$1;
                const $cg$40 = $cg$38.$2;
                return new $HC_1_0$Prelude__Either__Left(new $HC_5_2$Data__SortedMap__Branch3($cg$38.$1, $cg$40.$1, $cg$40.$2, $_6_arg.$2, $_6_arg.$3));
            }
        } else {
            const $cg$30 = Data__SortedMap__treeInsert_39_(null, null, $_2_arg, null, $_4_arg, $_5_arg, $_6_arg.$3);
            if(($cg$30.type === 0)) {
                return new $HC_1_0$Prelude__Either__Left(new $HC_3_1$Data__SortedMap__Branch2($_6_arg.$1, $_6_arg.$2, $cg$30.$1));
            } else {
                const $cg$32 = $cg$30.$1;
                const $cg$34 = $cg$32.$2;
                return new $HC_1_0$Prelude__Either__Left(new $HC_5_2$Data__SortedMap__Branch3($_6_arg.$1, $_6_arg.$2, $cg$32.$1, $cg$34.$1, $cg$34.$2));
            }
        }
    } else if(($_6_arg.type === 2)) {
        
        
        if($_2_arg.$3($_4_arg)($_6_arg.$2)) {
            const $cg$22 = Data__SortedMap__treeInsert_39_(null, null, $_2_arg, null, $_4_arg, $_5_arg, $_6_arg.$1);
            if(($cg$22.type === 0)) {
                return new $HC_1_0$Prelude__Either__Left(new $HC_5_2$Data__SortedMap__Branch3($cg$22.$1, $_6_arg.$2, $_6_arg.$3, $_6_arg.$4, $_6_arg.$5));
            } else {
                const $cg$24 = $cg$22.$1;
                const $cg$26 = $cg$24.$2;
                return new $HC_1_1$Prelude__Either__Right(new $HC_2_0$Builtins__MkPair(new $HC_3_1$Data__SortedMap__Branch2($cg$24.$1, $cg$26.$1, $cg$26.$2), new $HC_2_0$Builtins__MkPair($_6_arg.$2, new $HC_3_1$Data__SortedMap__Branch2($_6_arg.$3, $_6_arg.$4, $_6_arg.$5))));
            }
        } else {
            
            
            if($_2_arg.$3($_4_arg)($_6_arg.$4)) {
                const $cg$16 = Data__SortedMap__treeInsert_39_(null, null, $_2_arg, null, $_4_arg, $_5_arg, $_6_arg.$3);
                if(($cg$16.type === 0)) {
                    return new $HC_1_0$Prelude__Either__Left(new $HC_5_2$Data__SortedMap__Branch3($_6_arg.$1, $_6_arg.$2, $cg$16.$1, $_6_arg.$4, $_6_arg.$5));
                } else {
                    const $cg$18 = $cg$16.$1;
                    const $cg$20 = $cg$18.$2;
                    return new $HC_1_1$Prelude__Either__Right(new $HC_2_0$Builtins__MkPair(new $HC_3_1$Data__SortedMap__Branch2($_6_arg.$1, $_6_arg.$2, $cg$18.$1), new $HC_2_0$Builtins__MkPair($cg$20.$1, new $HC_3_1$Data__SortedMap__Branch2($cg$20.$2, $_6_arg.$4, $_6_arg.$5))));
                }
            } else {
                const $cg$10 = Data__SortedMap__treeInsert_39_(null, null, $_2_arg, null, $_4_arg, $_5_arg, $_6_arg.$5);
                if(($cg$10.type === 0)) {
                    return new $HC_1_0$Prelude__Either__Left(new $HC_5_2$Data__SortedMap__Branch3($_6_arg.$1, $_6_arg.$2, $_6_arg.$3, $_6_arg.$4, $cg$10.$1));
                } else {
                    const $cg$12 = $cg$10.$1;
                    const $cg$14 = $cg$12.$2;
                    return new $HC_1_1$Prelude__Either__Right(new $HC_2_0$Builtins__MkPair(new $HC_3_1$Data__SortedMap__Branch2($_6_arg.$1, $_6_arg.$2, $_6_arg.$3), new $HC_2_0$Builtins__MkPair($_6_arg.$4, new $HC_3_1$Data__SortedMap__Branch2($cg$12.$1, $cg$14.$1, $cg$14.$2))));
                }
            }
        }
    } else {
        
        const $cg$4 = $_2_arg.$2($_4_arg)($_6_arg.$1);
        if(($cg$4 === 0)) {
            return new $HC_1_0$Prelude__Either__Left(new $HC_2_0$Data__SortedMap__Leaf($_4_arg, $_5_arg));
        } else if(($cg$4 > 0)) {
            return new $HC_1_1$Prelude__Either__Right(new $HC_2_0$Builtins__MkPair(new $HC_2_0$Data__SortedMap__Leaf($_6_arg.$1, $_6_arg.$2), new $HC_2_0$Builtins__MkPair($_6_arg.$1, new $HC_2_0$Data__SortedMap__Leaf($_4_arg, $_5_arg))));
        } else {
            return new $HC_1_1$Prelude__Either__Right(new $HC_2_0$Builtins__MkPair(new $HC_2_0$Data__SortedMap__Leaf($_4_arg, $_5_arg), new $HC_2_0$Builtins__MkPair($_4_arg, new $HC_2_0$Data__SortedMap__Leaf($_6_arg.$1, $_6_arg.$2))));
        }
    }
}

// Data.SortedMap.treeLookup

function Data__SortedMap__treeLookup($_0_arg, $_1_arg, $_2_arg, $_3_arg, $_4_arg, $_5_arg){
    for(;;) {
        
        if(($_5_arg.type === 1)) {
            
            
            if($_2_arg.$3($_4_arg)($_5_arg.$2)) {
                $_0_arg = null;
                $_1_arg = null;
                $_2_arg = $_2_arg;
                $_3_arg = null;
                $_4_arg = $_4_arg;
                $_5_arg = $_5_arg.$1;
            } else {
                $_0_arg = null;
                $_1_arg = null;
                $_2_arg = $_2_arg;
                $_3_arg = null;
                $_4_arg = $_4_arg;
                $_5_arg = $_5_arg.$3;
            }
        } else if(($_5_arg.type === 2)) {
            
            
            if($_2_arg.$3($_4_arg)($_5_arg.$2)) {
                $_0_arg = null;
                $_1_arg = null;
                $_2_arg = $_2_arg;
                $_3_arg = null;
                $_4_arg = $_4_arg;
                $_5_arg = $_5_arg.$1;
            } else {
                
                
                if($_2_arg.$3($_4_arg)($_5_arg.$4)) {
                    $_0_arg = null;
                    $_1_arg = null;
                    $_2_arg = $_2_arg;
                    $_3_arg = null;
                    $_4_arg = $_4_arg;
                    $_5_arg = $_5_arg.$3;
                } else {
                    $_0_arg = null;
                    $_1_arg = null;
                    $_2_arg = $_2_arg;
                    $_3_arg = null;
                    $_4_arg = $_4_arg;
                    $_5_arg = $_5_arg.$5;
                }
            }
        } else {
            
            const $cg$4 = $_2_arg.$1;
            
            if($cg$4.$1($_4_arg)($_5_arg.$1)) {
                return new $HC_1_1$Prelude__Maybe__Just($_5_arg.$2);
            } else {
                return $HC_0_0$Prelude__Maybe__Nothing;
            }
        }
    }
}

// Prelude.Strings.unpack

function Prelude__Strings__unpack($_0_arg){
    let $cg$1 = null;
    if((((($_0_arg == "")) ? 1|0 : 0|0) === 0)) {
        $cg$1 = true;
    } else {
        $cg$1 = false;
    }
    
    
    if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$1, true).type === 1)) {
        return $HC_0_0$Prelude__List__Nil;
    } else {
        return new $HC_2_1$Prelude__List___58__58_($_0_arg[0], Prelude__Strings__unpack($_0_arg.slice(1)));
    }
}

// Data.SortedMap.{fromList_0}

function Data__SortedMap___123_fromList_95_0_125_($_0_lift, $_1_lift){
    
    return Data__SortedMap__insert(null, null, $_1_lift.$1, $_1_lift.$2, $_0_lift);
}

// Main.{lookupSymbol_1}

function Main___123_lookupSymbol_95_1_125_($_0_lift){
    
    if((((($_0_lift === " ")) ? 1|0 : 0|0) === 0)) {
        return true;
    } else {
        return false;
    }
}

// Main.{subTable_3}

function Main___123_subTable_95_3_125_($_0_lift, $_1_lift){
    return ($_0_lift === $_1_lift);
}

// Main.{subTable_4}

function Main___123_subTable_95_4_125_($_0_lift, $_1_lift){
    
    if((((($_0_lift === $_1_lift)) ? 1|0 : 0|0) === 0)) {
        return true;
    } else {
        return false;
    }
}

// Main.{subTable_5}

function Main___123_subTable_95_5_125_($_0_lift, $_1_lift){
    return Prelude__Interfaces__Prelude__Interfaces___64_Prelude__Interfaces__Ord_36_Char_58__33_compare_58_0($_0_lift, $_1_lift);
}

// Main.{subTable_6}

function Main___123_subTable_95_6_125_($_0_lift, $_1_lift){
    
    if((Prelude__Interfaces__Prelude__Interfaces___64_Prelude__Interfaces__Ord_36_Char_58__33_compare_58_0($_0_lift, $_1_lift) < 0)) {
        return true;
    } else {
        return ($_0_lift === $_1_lift);
    }
}

// Main.{symbolTable_13}

function Main___123_symbolTable_95_13_125_($_0_lift, $_1_lift){
    return Prelude__Interfaces__Prelude__List___64_Prelude__Interfaces__Eq_36_List_32_a_58__33__61__61__58_0(null, new $HC_2_0$Prelude__Interfaces__Eq_95_ictor($partial_0_2$Main___123_subTable_95_3_125_(), $partial_0_2$Main___123_subTable_95_4_125_()), $_0_lift, $_1_lift);
}

// Main.{symbolTable_16}

function Main___123_symbolTable_95_16_125_($_0_lift, $_1_lift){
    return (!(!(!Prelude__Interfaces__Prelude__List___64_Prelude__Interfaces__Eq_36_List_32_a_58__33__61__61__58_0(null, new $HC_2_0$Prelude__Interfaces__Eq_95_ictor($partial_0_2$Main___123_subTable_95_3_125_(), $partial_0_2$Main___123_subTable_95_4_125_()), $_0_lift, $_1_lift))));
}

// Main.{symbolTable_21}

function Main___123_symbolTable_95_21_125_($_0_lift, $_1_lift){
    return Prelude__Interfaces__Prelude__List___64_Prelude__Interfaces__Ord_36_List_32_a_58__33_compare_58_0(null, new $HC_3_0$Prelude__Interfaces__Ord_95_ictor(new $HC_2_0$Prelude__Interfaces__Eq_95_ictor($partial_0_2$Main___123_subTable_95_3_125_(), $partial_0_2$Main___123_subTable_95_4_125_()), $partial_0_2$Main___123_subTable_95_5_125_(), $partial_0_2$Main___123_subTable_95_6_125_()), $_0_lift, $_1_lift);
}

// Main.{symbolTable_26}

function Main___123_symbolTable_95_26_125_($_0_lift, $_1_lift){
    return Prelude__Interfaces__Prelude__List___64_Prelude__Interfaces__Ord_36_List_32_a_58__33__60__61__58_0(null, new $HC_3_0$Prelude__Interfaces__Ord_95_ictor(new $HC_2_0$Prelude__Interfaces__Eq_95_ictor($partial_0_2$Main___123_subTable_95_3_125_(), $partial_0_2$Main___123_subTable_95_4_125_()), $partial_0_2$Main___123_subTable_95_5_125_(), $partial_0_2$Main___123_subTable_95_6_125_()), $_0_lift, $_1_lift);
}

// Decidable.Equality.Decidable.Equality.Bool implementation of Decidable.Equality.DecEq, method decEq

function Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($_0_arg, $_1_arg){
    
    if($_1_arg) {
        
        if($_0_arg) {
            return $HC_0_0$Prelude__Basics__Yes;
        } else {
            return $HC_0_1$Prelude__Basics__No;
        }
    } else {
        
        if($_0_arg) {
            return $HC_0_1$Prelude__Basics__No;
        } else {
            return $HC_0_0$Prelude__Basics__Yes;
        }
    }
}

// Prelude.Interfaces.Prelude.List.List a implementation of Prelude.Interfaces.Eq, method ==

function Prelude__Interfaces__Prelude__List___64_Prelude__Interfaces__Eq_36_List_32_a_58__33__61__61__58_0($_0_arg, $_1_arg, $_2_arg, $_3_arg){
    for(;;) {
        
        if(($_3_arg.type === 1)) {
            
            if(($_2_arg.type === 1)) {
                
                
                if($_1_arg.$1($_2_arg.$1)($_3_arg.$1)) {
                    $_0_arg = null;
                    $_1_arg = $_1_arg;
                    $_2_arg = $_2_arg.$2;
                    $_3_arg = $_3_arg.$2;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else if(($_3_arg.type === 0)) {
            return (!(!($_2_arg.type === 0)));
        } else {
            return false;
        }
    }
}

// Prelude.Foldable.Prelude.List.List implementation of Prelude.Foldable.Foldable, method foldl

function Prelude__Foldable__Prelude__List___64_Prelude__Foldable__Foldable_36_List_58__33_foldl_58_0($_0_arg, $_1_arg, $_2_arg, $_3_arg, $_4_arg){
    let $tco$$_3_arg = $_3_arg;
    for(;;) {
        
        if(($_4_arg.type === 1)) {
            $tco$$_3_arg = $_2_arg($_3_arg)($_4_arg.$1);
            $_0_arg = null;
            $_1_arg = null;
            $_2_arg = $_2_arg;
            $_3_arg = $tco$$_3_arg;
            $_4_arg = $_4_arg.$2;
        } else {
            return $_3_arg;
        }
    }
}

// Prelude.Foldable.Prelude.List.List implementation of Prelude.Foldable.Foldable, method foldr

function Prelude__Foldable__Prelude__List___64_Prelude__Foldable__Foldable_36_List_58__33_foldr_58_0($_0_arg, $_1_arg, $_2_arg, $_3_arg, $_4_arg){
    
    if(($_4_arg.type === 1)) {
        return $_2_arg($_4_arg.$1)(Prelude__Foldable__Prelude__List___64_Prelude__Foldable__Foldable_36_List_58__33_foldr_58_0(null, null, $_2_arg, $_3_arg, $_4_arg.$2));
    } else {
        return $_3_arg;
    }
}

// Prelude.Functor.Prelude.List.List implementation of Prelude.Functor.Functor, method map

function Prelude__Functor__Prelude__List___64_Prelude__Functor__Functor_36_List_58__33_map_58_0($_0_arg, $_1_arg, $_2_arg, $_3_arg){
    
    if(($_3_arg.type === 1)) {
        return new $HC_2_1$Prelude__List___58__58_($_2_arg($_3_arg.$1), Prelude__Functor__Prelude__List___64_Prelude__Functor__Functor_36_List_58__33_map_58_0(null, null, $_2_arg, $_3_arg.$2));
    } else {
        return $_3_arg;
    }
}

// Prelude.Interfaces.Prelude.Interfaces.Char implementation of Prelude.Interfaces.Ord, method compare

function Prelude__Interfaces__Prelude__Interfaces___64_Prelude__Interfaces__Ord_36_Char_58__33_compare_58_0($_0_arg, $_1_arg){
    
    if((((($_0_arg === $_1_arg)) ? 1|0 : 0|0) === 0)) {
        
        if((((($_0_arg < $_1_arg)) ? 1|0 : 0|0) === 0)) {
            return 1;
        } else {
            return -1;
        }
    } else {
        return 0;
    }
}

// Prelude.Interfaces.Prelude.List.List a implementation of Prelude.Interfaces.Ord, method <=

function Prelude__Interfaces__Prelude__List___64_Prelude__Interfaces__Ord_36_List_32_a_58__33__60__61__58_0($_0_arg, $_1_arg, $_2_arg, $_3_arg){
    
    if((Prelude__Interfaces__Prelude__List___64_Prelude__Interfaces__Ord_36_List_32_a_58__33_compare_58_0(null, $_1_arg, $_2_arg, $_3_arg) < 0)) {
        return true;
    } else {
        let $cg$2 = null;
        $cg$2 = $_1_arg.$1;
        return Prelude__Interfaces__Prelude__List___64_Prelude__Interfaces__Eq_36_List_32_a_58__33__61__61__58_0(null, $cg$2, $_2_arg, $_3_arg);
    }
}

// Prelude.Interfaces.Prelude.List.List a implementation of Prelude.Interfaces.Ord, method compare

function Prelude__Interfaces__Prelude__List___64_Prelude__Interfaces__Ord_36_List_32_a_58__33_compare_58_0($_0_arg, $_1_arg, $_2_arg, $_3_arg){
    for(;;) {
        
        if(($_3_arg.type === 0)) {
            
            if(($_2_arg.type === 0)) {
                return 0;
            } else {
                return 1;
            }
        } else {
            
            if(($_2_arg.type === 0)) {
                return -1;
            } else {
                
                if(($_3_arg.type === 1)) {
                    
                    
                    const $cg$7 = $_1_arg.$1;
                    
                    if($cg$7.$2($_2_arg.$1)($_3_arg.$1)) {
                        
                        return $_1_arg.$2($_2_arg.$1)($_3_arg.$1);
                    } else {
                        $_0_arg = null;
                        $_1_arg = $_1_arg;
                        $_2_arg = $_2_arg.$2;
                        $_3_arg = $_3_arg.$2;
                    }
                } else {
                    return 1;
                }
            }
        }
    }
}

// {runMain_0}

function $_0_runMain(){
    return $JSRTS.force(Main__main(null));
}

// with block in Prelude.Strings.unpack

function _95_Prelude__Strings__unpack_95_with_95_36($_0_arg, $_1_arg){
    
    if(($_1_arg.type === 1)) {
        let $cg$2 = null;
        if((((($_1_arg.$2 == "")) ? 1|0 : 0|0) === 0)) {
            $cg$2 = true;
        } else {
            $cg$2 = false;
        }
        
        let $cg$3 = null;
        if((Decidable__Equality__Decidable__Equality___64_Decidable__Equality__DecEq_36_Bool_58__33_decEq_58_0($cg$2, true).type === 1)) {
            $cg$3 = $HC_0_0$Prelude__Strings__StrNil;
        } else {
            $cg$3 = new $HC_2_1$Prelude__Strings__StrCons($_1_arg.$2[0], $_1_arg.$2.slice(1));
        }
        
        return new $HC_2_1$Prelude__List___58__58_($_1_arg.$1, _95_Prelude__Strings__unpack_95_with_95_36(null, $cg$3));
    } else {
        return $HC_0_0$Prelude__List__Nil;
    }
}


$_0_runMain();
}.call(this))
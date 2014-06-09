
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$("body").append(sym.$("main_back_02").css({margin:"0 0%",left:"0px",position:"fixed","z-index":"-1"}));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn1}","click",function(sym,e){var mySymbolObject=sym.getSymbol("btn1");mySymbolObject.play();var mySymbolObject2=sym.getSymbol("touch");mySymbolObject2.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn2}","click",function(sym,e){var mySymbolObject3=sym.getSymbol("btn2");mySymbolObject3.play();var mySymbolObject4=sym.getSymbol("touch2");mySymbolObject4.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn3}","click",function(sym,e){var mySymbolObject5=sym.getSymbol("btn3");mySymbolObject5.play();var mySymbolObject6=sym.getSymbol("touch3");mySymbolObject6.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn3Copy}","click",function(sym,e){var mySymbolObject5=sym.getSymbol("btn3");mySymbolObject5.play();var mySymbolObject6=sym.getSymbol("touch3");mySymbolObject6.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn3Copy2}","click",function(sym,e){var mySymbolObject5=sym.getSymbol("btn3");mySymbolObject5.play();var mySymbolObject6=sym.getSymbol("touch3");mySymbolObject6.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn3Copy3}","click",function(sym,e){var mySymbolObject5=sym.getSymbol("btn3");mySymbolObject5.play();var mySymbolObject6=sym.getSymbol("touch3");mySymbolObject6.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn3}","mouseover",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn3}","mouseout",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","mouseover",function(sym,e){var mySymbolObject5=sym.getSymbol("btn3");mySymbolObject5.play();var mySymbolObject6=sym.getSymbol("touch3");mySymbolObject6.play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'btn1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.playReverse();});
//Edge binding end
})("btn1");
//Edge symbol end:'btn1'

//=========================================================

//Edge symbol: 'touch'
(function(symbolName){})("touch");
//Edge symbol end:'touch'

//=========================================================

//Edge symbol: 'btn2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.playReverse();});
//Edge binding end
})("btn2");
//Edge symbol end:'btn2'

//=========================================================

//Edge symbol: 'btn1_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
})("btn3");
//Edge symbol end:'btn3'
})(jQuery,AdobeEdge,"EDGE-88295794");
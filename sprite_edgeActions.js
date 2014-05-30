
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","keydown",function(sym,e){if(e.which==37){var mySymbolObject=sym.getSymbol("character");mySymbolObject.play();sym.play();}
if(e.which==39){var mySymbolObject=sym.getSymbol("character");mySymbolObject.play("reverse");sym.playReverse();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","keyup",function(sym,e){if(e.which==37){var mySymbolObject=sym.getSymbol("character");mySymbolObject.stop();sym.stop();}
if(e.which==39){var mySymbolObject=sym.getSymbol("character");mySymbolObject.stop();sym.stop();}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'character'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",400,function(sym,e){sym.play("walk");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",900,function(sym,e){sym.play("reverse");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",100,function(sym,e){sym.play("walk");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.play();});
//Edge binding end
})("character");
//Edge symbol end:'character'

//=========================================================

//Edge symbol: 'CITY'
(function(symbolName){})("CITY");
//Edge symbol end:'CITY'
})(jQuery,AdobeEdge,"EDGE-98363925");
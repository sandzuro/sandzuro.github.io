
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var container=sym.$("Rectangle");container.append('<iframe width="800" height="450" src="https://create.goocreate.com/api/resource/2aa56f3a9bff404280bc47f388b17137.project/latest" title="varg"></iframe>');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-642698712");
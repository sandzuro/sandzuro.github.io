
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){yepnope({load:"http://cdn.edgecommons.org/an/1.0.2/js/min/EdgeCommons.js",callback:function(){EC.centerStage(sym);EC.Parallax.setup(sym);}});sym.$('body').css({"background-image":"url(images/main_back_01.jpg)","background-attachment":"fixed","background-position":"center top","background-size":"cover"});var container=sym.$("Rectangle3");container.append('<iframe src="http://coub.com/embed/615laet9?muted=false&amp;autostart=false&originalSize=false&hideTopBar=false&noSiteButtons=false&startWithHD=false" allowfullscreen="true" frameborder="0" width="330" height="185"></iframe>');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-733169868");
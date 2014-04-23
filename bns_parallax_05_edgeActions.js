
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){$('body').css({"background-image":"url(images/main_back_01.jpg)","background-attachment":"fixed","background-position":"center top","background-size":"cover"});$(window).scroll(function(e){var scrollTop=$(window).scrollTop();var docHeight=$(document).height();var winHeight=$(window).height();var scrollPercent=(scrollTop)/(docHeight-winHeight);var percentageScrolled=(scrollPercent*100)/100;var pos=Math.round(percentageScrolled*sym.getDuration());if(pos>1000&&pos<1100){$('body').css({"background-image":"url(images/main_back_02.jpg)","background-attachment":"fixed","background-position":"center top","background-size":"cover"});}
sym.stop(pos);});var container=sym.$("Rectangle3");container.append('<iframe src="http://coub.com/embed/615laet9?muted=false&amp;autostart=false&originalSize=false&hideTopBar=false&noSiteButtons=false&startWithHD=false" allowfullscreen="true" frameborder="0" width="330" height="185"></iframe>');sym.getSymbol("fly_girl").onMove=function(posX,posY){var girl=sym.getSymbol("fly_girl");timelineControl=Number(posX)*0.5;console.log(timelineControl);sym.getSymbol("fly_girl").stop(timelineControl);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","mousemove",function(sym,e){var girl=sym.getSymbol("fly_girl");sym.getSymbol("fly_girl").onMove(e.pageX,e.pageY);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'fly_girl'
(function(symbolName){})("fly_girl");
//Edge symbol end:'fly_girl'
})(jQuery,AdobeEdge,"EDGE-733169868");
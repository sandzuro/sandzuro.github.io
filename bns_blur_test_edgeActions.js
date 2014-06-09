
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){videolink_1_webm="BNS_Non-interactive_part01.webm"
videolink_2_webm="BNS_Non-interactive_part01.webm"
sym.setVariable("numLoops",0);sym.$("body").append(sym.$("main_back_01").css({margin:"0 0%",left:"0px",position:"fixed","z-index":"-1"}));sym.$("body").append(sym.$("main_back_02").css({margin:"0 0%",left:"0px",position:"fixed","z-index":"-1"}));$('body').css({"background-color":"black"});var container=sym.$("Rectangle3");container.append('<iframe src="http://coub.com/embed/615laet9?muted=false&amp;autostart=false&originalSize=false&hideTopBar=false&noSiteButtons=false&startWithHD=false" allowfullscreen="true" frameborder="0" width="330" height="185"></iframe>');sym.getSymbol("fly_girl").onMove=function(posX,posY){var girl=sym.getSymbol("fly_girl");timelineControl=Number(posX)*0.5;sym.getSymbol("fly_girl").stop(timelineControl);}
sym.getSymbol("target_back").onMove=function(posX,posY){var girl=sym.getSymbol("target_back");timelineControl=Number(posX)*0.5;sym.getSymbol("target_back").stop(timelineControl);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){var video=document.getElementById("Stage_kvingon_backscreen");var video2=document.getElementById("Stage_kvingon_backscreen2");var numLoopsHolder=sym.getVariable("numLoops");numLoopsHolder=numLoopsHolder+1;sym.setVariable("numLoops",numLoopsHolder);if(numLoopsHolder%2==0){sym.$("Rectangle").animate({opacity:0.4},500);sym.$("kvin").animate({opacity:1},500);sym.$("kvingon_backscreen2").animate({opacity:0},500);video.pause();video2.pause();}
else
{sym.$("Rectangle").animate({opacity:0},500);sym.$("kvin").animate({opacity:0},500);sym.$("kvingon_backscreen2").animate({opacity:1},500);video.play();video2.play();}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'fly_girl'
(function(symbolName){})("fly_girl");
//Edge symbol end:'fly_girl'

//=========================================================

//Edge symbol: 'target_back'
(function(symbolName){})("target_back");
//Edge symbol end:'target_back'
})(jQuery,AdobeEdge,"EDGE-733169868");
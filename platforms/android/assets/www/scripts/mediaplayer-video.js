!function(){function e(e){function t(e){var t="";t+='<div class="nowPlayingTabButtons">',t+='<a href="#" class="nowPlayingTabButton selectedNowPlayingTabButton" data-tab="tabInfo">'+Globalize.translate("TabInfo")+"</a>",e.Chapters&&e.Chapters.length&&(t+='<a href="#" class="nowPlayingTabButton" data-tab="tabScenes">'+Globalize.translate("TabScenes")+"</a>"),e.People&&e.People.length&&(t+='<a href="#" class="nowPlayingTabButton" data-tab="tabCast">'+Globalize.translate("TabCast")+"</a>"),t+="</div>",t+='<div class="tabInfo nowPlayingTab">';var n=MediaController.getNowPlayingNameHtml(e,!1);n='<div class="videoNowPlayingName">'+n+"</div>";var i=LibraryBrowser.getMiscInfoHtml(e);i&&(n+='<div class="videoNowPlayingRating">'+i+"</div>");var a=LibraryBrowser.getRatingHtml(e);if(a&&(n+='<div class="videoNowPlayingRating">'+a+"</div>"),e.Overview&&(n+='<div class="videoNowPlayingOverview">'+e.Overview+"</div>"),t+=n,t+="</div>",e.Chapters&&e.Chapters.length){t+='<div class="tabScenes nowPlayingTab hiddenScrollX" style="display:none;white-space:nowrap;margin-bottom:2em;">';var o=0;t+=e.Chapters.map(function(t){var n=240,i='<a class="card backdropCard chapterCard" href="#" style="margin-right:1em;width:'+n+'px;" data-position="'+t.StartPositionTicks+'">';if(i+='<div class="cardBox">',i+='<div class="cardScalable">',i+='<div class="cardPadder"></div>',i+='<div class="cardContent">',t.ImageTag){var a=ApiClient.getScaledImageUrl(e.Id,{width:n,tag:t.ImageTag,type:"Chapter",index:o});i+='<div class="cardImage lazy" data-src="'+a+'"></div>'}else i+='<div class="cardImage" style="background:#444;"></div>';return i+='<div class="cardFooter">',t.Name&&(i+='<div class="cardText">'+t.Name+"</div>"),i+='<div class="cardText">'+Dashboard.getDisplayTime(t.StartPositionTicks)+"</div>",i+="</div>",i+="</div>",i+="</div>",i+="</div>",i+="</a>",o++,i}).join(""),t+="</div>"}return e.People&&e.People.length&&(t+='<div class="tabCast nowPlayingTab hiddenScrollX" style="display:none;white-space:nowrap;">',t+=e.People.map(function(e){var t,n='<div class="tileItem smallPosterTileItem" style="width:300px;">',i=150;e.PrimaryImageTag?(t=ApiClient.getScaledImageUrl(e.Id,{height:i,tag:e.PrimaryImageTag,type:"primary",minScale:2}),n+='<div class="tileImage lazy" data-src="'+t+'" style="height:'+i+'px;"></div>'):(t="css/images/items/list/person.png",n+='<div class="tileImage" style="background-image:url(\''+t+"');height:"+i+'px;"></div>'),n+='<div class="tileContent">',n+="<p>"+e.Name+"</p>";var a=e.Role?Globalize.translate("ValueAsRole",e.Role):e.Type;"GuestStar"==a&&(a=Globalize.translate("ValueGuestStar")),a=a||"";var o=40;return a.length>o&&(a=a.substring(0,o-3)+"..."),n+="<p>"+a+"</p>",n+="</div>",n+="</div>"}).join(""),t+="</div>"),t}function n(){return e.currentMediaSource&&e.currentMediaSource.RunTimeTicks?e.currentMediaSource.RunTimeTicks:e.currentMediaRenderer?e.getCurrentTicks(e.currentMediaRenderer):null}function i(){var t=parseInt(this.value),i=t/100*n();e.changeStream(Math.floor(i))}function a(e){var t=[{transform:"translate3d(0, 100%, 0)",offset:0},{transform:"none",offset:1}],n={duration:300,iterations:1};e.animate(t,n)}function o(e){var t=[{transform:"none",offset:0},{transform:"translate3d(0, 100%, 0)",offset:1}],n={duration:300,iterations:1};e.animate(t,n).onfinish=function(){e.classList.add("hide")}}function r(){var e="";e+='<div id="videoPlayer" class="hide">',e+='<div id="videoElement">',e+='<div id="play" class="status"></div>',e+='<div id="pause" class="status"></div>',e+="</div>",e+='<div class="videoTopControls hiddenOnIdle">',e+='<div class="videoTopControlsLogo"></div>',e+='<div class="videoAdvancedControls">',e+='<paper-icon-button icon="skip-previous" class="previousTrackButton mediaButton videoTrackControl hide" onclick="MediaPlayer.previousTrack();"></paper-icon-button>',e+='<paper-icon-button icon="skip-next" class="nextTrackButton mediaButton videoTrackControl hide" onclick="MediaPlayer.nextTrack();"></paper-icon-button>',e+='<paper-icon-button icon="audiotrack" class="mediaButton videoAudioButton" onclick="MediaPlayer.showAudioTracksFlyout();"></paper-icon-button>',e+='<paper-icon-button icon="closed-caption" class="mediaButton videoSubtitleButton" onclick="MediaPlayer.showSubtitleMenu();"></paper-icon-button>',e+='<paper-icon-button icon="settings" class="mediaButton videoQualityButton" onclick="MediaPlayer.showQualityFlyout();"></paper-icon-button>',e+='<paper-icon-button icon="close" class="mediaButton" onclick="MediaPlayer.stop();"></paper-icon-button>',e+="</div>",e+="</div>",e+='<div class="videoControls hiddenOnIdle">',e+='<div class="nowPlayingInfo hide">',e+='<div class="nowPlayingImage"></div>',e+='<div class="nowPlayingTabs"></div>',e+="</div>",e+='<div class="guide hide">',e+="</div>",e+='<div class="videoControlButtons">',e+='<paper-icon-button icon="skip-previous" class="previousTrackButton mediaButton videoTrackControl hide" onclick="MediaPlayer.previousTrack();"></paper-icon-button>',e+='<paper-icon-button id="video-playButton" icon="play-arrow" class="mediaButton unpauseButton" onclick="MediaPlayer.unpause();"></paper-icon-button>',e+='<paper-icon-button id="video-pauseButton" icon="pause" class="mediaButton pauseButton" onclick="MediaPlayer.pause();"></paper-icon-button>',e+='<paper-icon-button icon="skip-next" class="nextTrackButton mediaButton videoTrackControl hide" onclick="MediaPlayer.nextTrack();"></paper-icon-button>',e+='<paper-slider pin step=".1" min="0" max="100" value="0" class="videoPositionSlider" style="display:inline-block;margin-right:2em;"></paper-slider>',e+='<div class="currentTime">--:--</div>',e+='<paper-icon-button icon="volume-up" class="muteButton mediaButton" onclick="MediaPlayer.mute();"></paper-icon-button>',e+='<paper-icon-button icon="volume-off" class="unmuteButton mediaButton" onclick="MediaPlayer.unMute();"></paper-icon-button>',e+='<paper-slider pin step="1" min="0" max="100" value="0" class="videoVolumeSlider" style="width:100px;vertical-align:middle;margin-left:-1em;margin-right:2em;display:inline-block;"></paper-slider>',e+='<paper-icon-button icon="fullscreen" class="mediaButton fullscreenButton" onclick="MediaPlayer.toggleFullscreen();" id="video-fullscreenButton"></paper-icon-button>',e+='<paper-icon-button icon="info" class="mediaButton infoButton" onclick="MediaPlayer.toggleInfo();"></paper-icon-button>',e+="</div>",e+="</div>",e+="</div>";var t=document.createElement("div");t.innerHTML=e,document.body.appendChild(t)}function l(){if(!O){O=!0,r();var t=$("#videoPlayer");A=$(".muteButton",t),N=$(".unmuteButton",t),E=$(".currentTime",t),M=$(".videoPositionSlider",t).on("change",i)[0],M._setPinValue=function(t){var i=n();if(!e.currentMediaSource||!i)return void(this.pinValue="--:--");var a=i;a/=100,a*=t,this.pinValue=Dashboard.getDisplayTime(a)},F=$(".videoVolumeSlider",t).on("change",function(){var t=this.value;d(t),e.setVolume(t)})[0]}}function s(){q&&window.clearTimeout(q),1==L&&($(".hiddenOnIdle").removeClass("inactive"),$("#videoPlayer").removeClass("idlePlayer")),L=!1,q=window.setTimeout(function(){L=!0,$(".hiddenOnIdle").addClass("inactive"),$("#videoPlayer").addClass("idlePlayer")},3500)}function d(e){e?(A.show(),N.hide()):(A.hide(),N.show())}function u(e){var t=e.requestFullscreen||e.webkitRequestFullscreen||e.mozRequestFullScreen||e.msRequestFullscreen;t?t.call(e):c()}function c(){var e=$("#videoPlayer");e.addClass("fullscreenVideo")}function m(){var e=$("#videoPlayer");e.removeClass("fullscreenVideo")}function v(){e.stop()}function p(){e.isFullScreen()?(c(),L=!0):m()}function g(e){(e.clientX!=R.x||e.clientY!=R.y)&&(R.x=e.clientX,R.y=e.clientY,s())}function f(e){Events.on(e,"playing",S),Events.on(e,"playing",I),Events.on(e,"volumechange",C),Events.on(e,"pause",T),Events.on(e,"timeupdate",w),Events.on(e,"error",P),Events.on(e,"click",k),Events.on(e,"dblclick",B);var t=!0;if(t){var n=document.querySelector(".itemVideo");n&&(n.addEventListener("keydown",s),n.addEventListener("scroll",s),n.addEventListener("mousedown",s),s())}$(document).on("webkitfullscreenchange",p),$(document).on("mozfullscreenchange",p),$(document).on("msfullscreenchange",p),$(document).on("fullscreenchange",p),$(window).one("popstate",v),t&&$(document.body).on("mousemove",g)}function h(e){Events.off(e,"playing",S),Events.off(e,"playing",I),Events.off(e,"volumechange",C),Events.off(e,"pause",T),Events.off(e,"timeupdate",w),Events.off(e,"error",P),Events.off(e,"click",k),Events.off(e,"dblclick",B),$(document).off("webkitfullscreenchange",p),$(document).off("mozfullscreenchange",p),$(document).off("msfullscreenchange",p),$(document).off("fullscreenchange",p),$(window).off("popstate",v),$(document.body).off("mousemove",g);var t=document.querySelector(".itemVideo");t&&(t.removeEventListener("keydown",s),t.removeEventListener("scroll",s),t.removeEventListener("mousedown",s))}function y(e){if(!e.classList.contains("hide")){var t=function(){e.classList.add("hide")};t()}}function b(e){e.classList.contains("hide")&&(e.classList.remove("hide"),browserInfo.animate&&!browserInfo.mobile&&requestAnimationFrame(function(){var t=[{transform:"scale3d(.2, .2, .2)  ",opacity:".6",offset:0},{transform:"none",opacity:"1",offset:1}],n={duration:200,iterations:1,easing:"ease-out"};e.animate(t,n)}))}function S(){Events.off(this,"playing",S),Events.on(this,"ended",e.onPlaybackStopped),Events.on(this,"ended",e.playNextAfterEnded),e.onPlaybackStart(this,e.currentItem,e.currentMediaSource)}function I(){var e=document.querySelector("#videoPlayer .videoControls"),t=document.querySelector("#videoPlayer #videoElement");$("#video-playButton",e).hide(),$("#video-pauseButton",e).show(),$("#play",t).show().addClass("fadeOut"),setTimeout(function(){$("#play",t).hide().removeClass("fadeOut")},300)}function C(){d(this.volume())}function T(){var e=document.querySelector("#videoPlayer .videoControls"),t=document.querySelector("#videoPlayer #videoElement");$("#video-playButton",e).show(),$("#video-pauseButton",e).hide(),$("#pause",t).show().addClass("fadeOut"),setTimeout(function(){$("#pause",t).hide().removeClass("fadeOut")},300)}function w(){M.dragging||e.setCurrentTime(e.getCurrentTicks(this),M,E)}function P(){var t=Globalize.translate("MessageErrorPlayingVideo"),n=e.currentItem;n&&"TvChannel"==n.Type&&(t+="<p>",t+=Globalize.translate("MessageEnsureOpenTuner"),t+="</p>"),Dashboard.alert({title:Globalize.translate("HeaderVideoError"),message:t});var i=e.currentMediaRenderer;i&&e.onPlaybackStopped.call(i),e.nextTrack()}function k(){browserInfo.mobile||(this.paused()?e.unpause():e.pause())}function B(){browserInfo.mobile||e.toggleFullscreen()}var x,M,E,L=!0,A=null,N=null,F=null;e.currentSubtitleStreamIndex=null,e.getCurrentSubtitleStream=function(){return e.getSubtitleStream(e.currentSubtitleStreamIndex)},e.getSubtitleStream=function(t){return e.currentMediaSource.MediaStreams.filter(function(e){return"Subtitle"==e.Type&&e.Index==t})[0]},e.toggleFullscreen=function(){e.isFullScreen()?e.exitFullScreen():u(document.body)},e.resetEnhancements=function(){O&&(e.isFullScreen()&&e.exitFullScreen(),y(document.querySelector("#videoPlayer")),$("#videoPlayer").removeClass("fullscreenVideo").removeClass("idlePlayer"),$(".hiddenOnIdle").removeClass("inactive"),$("video").remove(),document.querySelector(".mediaButton.infoButton").classList.remove("active"),document.querySelector(".videoControls .nowPlayingInfo").classList.add("hide"),document.querySelector(".videoControls").classList.add("hiddenOnIdle"))},e.exitFullScreen=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),$("#videoPlayer").removeClass("fullscreenVideo")},e.isFullScreen=function(){return document.fullscreen||document.mozFullScreen||document.webkitIsFullScreen||document.msFullscreenElement?!0:!1},e.showSubtitleMenu=function(){var t=e.currentMediaSource.MediaStreams.filter(function(e){return"Subtitle"==e.Type}),n=e.currentSubtitleStreamIndex;null==n&&(n=-1),t.unshift({Index:-1,Language:Globalize.translate("ButtonOff")});var i=t.map(function(e){var t=[];t.push(e.Language||Globalize.translate("LabelUnknownLanguage")),e.Codec&&t.push(e.Codec);var i=t.join(" - ");e.IsDefault&&(i+=" (D)"),e.IsForced&&(i+=" (F)"),e.External&&(i+=" (EXT)");var a={name:i,id:e.Index};return e.Index==n&&(a.ironIcon="check"),a});require(["actionsheet"],function(){ActionSheetElement.show({items:i,positionTo:$(".videoSubtitleButton")[0],callback:function(t){var i=parseInt(t);i!=n&&e.onSubtitleOptionSelected(i)}})})},e.showQualityFlyout=function(){require(["qualityoptions","actionsheet"],function(t){var n=e.getCurrentSrc(e.currentMediaRenderer).toLowerCase(),i=-1!=n.indexOf("static=true"),a=e.currentMediaSource.MediaStreams.filter(function(e){return"Video"==e.Type})[0],o=a?a.Width:null,r=t.getVideoQualityOptions(AppSettings.maxStreamingBitrate(),o);i&&(r[0].name="Direct");var l=r.map(function(e){var t={name:e.name,id:e.bitrate};return e.selected&&(t.ironIcon="check"),t}),s=r.filter(function(e){return e.selected});s=s.length?s[0].bitrate:null,ActionSheetElement.show({items:l,positionTo:$(".videoQualityButton")[0],callback:function(t){var n=parseInt(t);n!=s&&e.onQualityOptionSelected(n)}})})},e.showAudioTracksFlyout=function(){var t=e.currentMediaSource.MediaStreams.filter(function(e){return"Audio"==e.Type}),n=getParameterByName("AudioStreamIndex",e.getCurrentSrc(e.currentMediaRenderer)),i=t.map(function(e){var t=[];t.push(e.Language||Globalize.translate("LabelUnknownLanguage")),e.Codec&&t.push(e.Codec),e.Profile&&t.push(e.Profile),e.BitRate&&t.push(Math.floor(e.BitRate/1e3)+" kbps"),e.Channels&&t.push(e.Channels+" ch");var i=t.join(" - ");e.IsDefault&&(i+=" (D)");var a={name:i,id:e.Index};return e.Index==n&&(a.ironIcon="check"),a});require(["actionsheet"],function(){ActionSheetElement.show({items:i,positionTo:$(".videoAudioButton")[0],callback:function(t){var i=parseInt(t);i!=n&&e.onAudioOptionSelected(i)}})})},e.setAudioStreamIndex=function(t){e.changeStream(e.getCurrentTicks(),{AudioStreamIndex:t})},e.setSubtitleStreamIndex=function(t){if(!e.currentMediaRenderer.supportsTextTracks())return e.changeStream(e.getCurrentTicks(),{SubtitleStreamIndex:t}),void(e.currentSubtitleStreamIndex=t);var n=e.getCurrentSubtitleStream(),i=e.getSubtitleStream(t);if(n||i){var a=-1;n&&!i?"External"!=n.DeliveryMethod&&e.changeStream(e.getCurrentTicks(),{SubtitleStreamIndex:-1}):!n&&i?"External"==i.DeliveryMethod?a=t:e.changeStream(e.getCurrentTicks(),{SubtitleStreamIndex:t}):n&&i&&("External"==i.DeliveryMethod?(a=t,"External"!=n.DeliveryMethod&&e.changeStream(e.getCurrentTicks(),{SubtitleStreamIndex:-1})):e.changeStream(e.getCurrentTicks(),{SubtitleStreamIndex:t})),e.setCurrentTrackElement(a),e.currentSubtitleStreamIndex=t}},e.setCurrentTrackElement=function(t){var n=e.currentMediaSource.MediaStreams.filter(function(e){return"External"==e.DeliveryMethod}),i=n.filter(function(e){return e.Index==t})[0],a=i?n.indexOf(i):-1;e.currentMediaRenderer.setCurrentTrackElement(a)},e.updateTextStreamUrls=function(t){e.currentMediaRenderer.updateTextStreamUrls(t)},e.updateNowPlayingInfo=function(n){if(!n)throw new Error("item cannot be null");var i=$("#videoPlayer"),a=e.getPlayerStateInternal(e.currentMediaRenderer,n.CurrentProgram||n,e.currentMediaSource),o="",r=400,l=300;a.NowPlayingItem.PrimaryImageTag?o=ApiClient.getScaledImageUrl(a.NowPlayingItem.PrimaryImageItemId,{type:"Primary",width:r,tag:a.NowPlayingItem.PrimaryImageTag}):a.NowPlayingItem.PrimaryImageTag?o=ApiClient.getScaledImageUrl(a.NowPlayingItem.PrimaryImageItemId,{type:"Primary",width:r,tag:a.NowPlayingItem.PrimaryImageTag}):a.NowPlayingItem.BackdropImageTag?o=ApiClient.getScaledImageUrl(a.NowPlayingItem.BackdropItemId,{type:"Backdrop",height:l,tag:a.NowPlayingItem.BackdropImageTag,index:0}):a.NowPlayingItem.ThumbImageTag&&(o=ApiClient.getScaledImageUrl(a.NowPlayingItem.ThumbImageItemId,{type:"Thumb",height:l,tag:a.NowPlayingItem.ThumbImageTag})),$(".nowPlayingImage",i).html(o?'<img src="'+o+'" />':""),a.NowPlayingItem.LogoItemId?(o=ApiClient.getScaledImageUrl(a.NowPlayingItem.LogoItemId,{type:"Logo",height:42,tag:a.NowPlayingItem.LogoImageTag}),$(".videoTopControlsLogo",i).html('<img src="'+o+'" />')):$(".videoTopControlsLogo",i).html("");var s=$(".nowPlayingTabs",i).html(t(n.CurrentProgram||n)).lazyChildren();$(".nowPlayingTabButton",s).on("click",function(){$(this).hasClass("selectedNowPlayingTabButton")||($(".selectedNowPlayingTabButton").removeClass("selectedNowPlayingTabButton"),$(this).addClass("selectedNowPlayingTabButton"),$(".nowPlayingTab").hide(),$("."+this.getAttribute("data-tab")).show().trigger("scroll"))}),$(".chapterCard",s).on("click",function(){e.seek(parseInt(this.getAttribute("data-position")))})},$.fn.lazyChildren=function(){for(var e=0,t=this.length;t>e;e++)ImageLoader.lazyChildren(this[e]);return this},e.onAudioOptionSelected=function(t){e.setAudioStreamIndex(t)},e.onSubtitleOptionSelected=function(t){e.setSubtitleStreamIndex(t)},e.onQualityOptionSelected=function(t){AppSettings.maxStreamingBitrate(t),e.changeStream(e.getCurrentTicks(),{Bitrate:t})},e.toggleInfo=function(){var e=document.querySelector(".mediaButton.infoButton"),t=document.querySelector(".videoControls .nowPlayingInfo");e.classList.contains("active")?(e.classList.remove("active"),document.querySelector(".videoControls").classList.add("hiddenOnIdle"),o(t)):(e.classList.add("active"),document.querySelector(".videoControls").classList.remove("hiddenOnIdle"),t.classList.remove("hide"),a(t))},e.toggleGuide=function(){var t=document.querySelector(".mediaButton.guideButton"),n=document.querySelector(".videoControls .guide");t.classList.contains("active")?(t.classList.remove("active"),document.querySelector(".videoControls").classList.add("hiddenOnIdle"),o(n)):(t.classList.add("active"),document.querySelector(".videoControls").classList.remove("hiddenOnIdle"),n.classList.remove("hide"),a(n),e.guideInstance||require(["tvguide"],function(t){e.guideInstance=new t({element:n,enablePaging:!1})}))};var O,q,R={};e.cleanup=function(e){E&&E.html("--:--"),h(e)},e.playVideo=function(t,n,i,a){requirejs(["videorenderer","css!css/nowplayingbar.css","css!css/mediaplayer-video.css","paper-slider"],function(){l(),e.createStreamInfo("Video",t,n,i).then(function(o){var r=-1!=o.url.toLowerCase().indexOf(".m3u8");if((browserInfo.safari||browserInfo.msie||browserInfo.firefox)&&!n.RunTimeTicks&&r){Dashboard.showLoadingMsg();var l=o.url.replace("master.m3u8","live.m3u8");ApiClient.ajax({type:"GET",url:l}).then(function(){Dashboard.hideLoadingMsg(),o.url=l,e.playVideoInternal(t,n,i,o,a)},function(){Dashboard.hideLoadingMsg()})}else e.playVideoInternal(t,n,i,o,a)})})},e.playVideoInternal=function(t,n,i,a,o){e.startTimeTicksOffset=a.startTimeTicksOffset;var r=n.MediaStreams||[],l=r.filter(function(e){return"Subtitle"==e.Type}),s=document.querySelector("#videoPlayer");b(s);var u=$(".videoControls",s);$("#video-playButton",u).hide(),$("#video-pauseButton",u).show(),$(".videoTrackControl").addClass("hide");$("#videoElement",s);$(".videoQualityButton",u).show(),r.filter(function(e){return"Audio"==e.Type}).length?$(".videoAudioButton").show():$(".videoAudioButton").hide(),l.length?$(".videoSubtitleButton").show():$(".videoSubtitleButton").hide();var c=new VideoRenderer({poster:e.getPosterUrl(t)}),m=!c.enableCustomVideoControls();m||AppInfo.isNativeApp?$("#video-fullscreenButton",u).hide():$("#video-fullscreenButton",u).show(),AppInfo.hasPhysicalVolumeButtons?($(F).addClass("hide"),$(".muteButton",u).addClass("hide"),$(".unmuteButton",u).addClass("hide")):($(F).removeClass("hide"),$(".muteButton",u).removeClass("hide"),$(".unmuteButton",u).removeClass("hide")),m?u.addClass("hide"):u.removeClass("hide"),x=e.getSavedVolume(),c.volume(x),F.value=100*x,d(x),f(c),e.currentSubtitleStreamIndex=n.DefaultSubtitleStreamIndex,$(document.body).addClass("bodyWithPopupOpen"),e.currentMediaRenderer=c,e.currentDurationTicks=e.currentMediaSource.RunTimeTicks,e.updateNowPlayingInfo(t),c.init().then(function(){e.onBeforePlaybackStart(c,t,n),e.setSrcIntoRenderer(c,a,t,e.currentMediaSource),e.streamInfo=a,o&&o()})},e.updatePlaylistUi=function(){if(O){var t=e.currentPlaylistIndex(null),n=e.playlist.length,i=!1;if(e.currentMediaRenderer&&e.currentMediaRenderer.enableCustomVideoControls&&(i=e.currentMediaRenderer.enableCustomVideoControls()),2>n)return void $(".videoTrackControl").addClass("hide");var a=i?".videoAdvancedControls":".videoControls";a=document.querySelector(a);var o=a.getElementsByClassName("previousTrackButton")[0],r=a.getElementsByClassName("nextTrackButton")[0];0===t?o.setAttribute("disabled","disabled"):o.removeAttribute("disabled"),t+1>=n?r.setAttribute("disabled","disabled"):r.removeAttribute("disabled"),$(o).removeClass("hide"),$(r).removeClass("hide")}}}e(MediaPlayer)}();
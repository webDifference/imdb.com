!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";a(3),a(4),a(2)},{2:2,3:3,4:4}],2:[function(a,b,c){"use strict";!function(a){"_gaq"in window||(window._gaq=[]),a(document).delegate(".rating","change.rating",function(b,c){var d=a(this).attr("data-ga-identifier");"your"===c.state&&(_gaq.push(["_trackEvent","rating","add_from_"+d,c.tconst]),_gaq.push(function(){"consoleLog"in window&&consoleLog("rating add from "+d+" "+c.tconst,"gaq")}))})}(jQuery)},{}],3:[function(a,b,c){"use strict";jQuery(document).ready(function(){var a=".rating";jQuery(a).each(function(a){null!=jQuery(this).attr("data-starbar-class")&&jQuery(this).rating({uconst:jQuery(this).attr("data-user"),widgetClass:jQuery(this).attr("data-starbar-class"),ajaxURL:"/ratings/_ajax/title",errorMessage:"Oops! Please try again later."})})})},{}],4:[function(a,b,c){"use strict";!function(a){jQuery.widget("ui.rating",{options:{widgetClass:"rating",errorMessage:"Oops! Please try again later.",ajaxURL:"/ratings/_ajax/title",uconst:void 0,redirectURL:"/register/?why=vote"},_create:function(){function b(b){if(!h.options.uconst){var d=a("#nblogin");return void(0==d.size()?document.location=h.options.redirectURL:a(window).trigger("initiate_login"))}f(),h.$cancel.removeClass("rating-hover").addClass("rating-pending"),h.pendingRating=b,a.ajax({url:h.options.ajaxURL,type:"POST",dataType:"json",beforeSend:window.addClickstreamHeadersToAjax,data:{tconst:h.tconst,rating:h.pendingRating,auth:h.authKey,tracking_tag:h.trackingTag,pageId:h.pageId,pageType:h.pageType,subpageType:h.subpageType},error:function(){return e()},success:function(b){if(200!=b.status)return e();0==h.pendingRating?(h.originalRating=h.imdbRating,h.state="imdb"):(h.originalRating=h.pendingRating,h.state="your");var d=h.pendingRating;h.pendingRating=void 0,h.$stars.removeClass("rating-hover"),h.$caption.removeClass("rating-hover"),h.$cancel.removeClass("rating-pending"),c(),g(),a(h.element).trigger("change.rating",{state:h.state,rating:d,imdbRating:h.imdbRating,tconst:h.tconst})}})}function c(){h.$stars.removeClass("rating-hover"),h.$caption.removeClass("rating-hover"),h.$cancel.removeClass("rating-hover"),"your"==h.state?(h.$stars.slice(0,h.originalRating).addClass("rating-your"),h.$caption.addClass("rating-your"),h.$cancel.addClass("rating-your"),h.$lowerUserCaption.show()):(h.$stars.removeClass("rating-your"),h.$caption.removeClass("rating-your"),h.$cancel.removeClass("rating-your"),h.$imdb.show(),h.$lowerUserCaption.hide()),d(h.originalRating)}function d(a){a=a?a.toLocaleString(window.navigator.languages||[window.navigator.language||window.navigator.userLanguage]):"-",h.$caption.children(":first").text(a)}function e(){return h.element.addClass("rating-error"),h.element.html('<span class="rating-error-icon">&nbsp;</span><span class="rating-error-text">'+h.options.errorMessage+"</span>"),!1}function f(){h.disabled=!0}function g(){h.disabled=!1}var h=this,i=h.element[0].id,j=i.split("|");h.tconst=j[0],h.state=h.originalState=j[1],h.originalRating=parseFloat(j[2]),h.imdbRating=parseFloat(j[3]),h.trackingTag=j[4]||"",h.pageId=j[5]||"",h.pageType=j[6]||"",h.subpageType=j[7]||"",h.disabled=!1,h.$stars=a(".rating-stars a",h.element),h.$imdb=a(".rating-imdb",h.element),h.$cancel=a(".rating-cancel",h.element),h.$caption=a(".rating-rating",h.element),h.$lowerUserCaption=a(".star-bar-user-rate",h.siblings),h.$stars.removeAttr("href"),a("a",h.$cancel).removeAttr("href"),h.authKey=a(h.element).attr("data-auth"),a(h.element).trigger("ready.rating",{state:h.state,rating:h.originalRating,imdbRating:h.imdbRating,tconst:h.tconst}),h.$stars.bind("mouseover.rating",function(){if(h.disabled)return!1;var a=h.$stars.index(this)+1;"your"==h.state?h.$stars.removeClass("rating-your"):h.$imdb.hide(),h.$stars.slice(0,a).addClass("rating-hover"),h.$stars.slice(a+1).removeClass("rating-hover"),h.$caption.addClass("rating-hover"),h.$cancel.addClass("rating-hover"),d(a)}).bind("mouseout.rating",function(){return h.disabled?!1:void c()}).bind("click.rating",function(){return h.disabled?!1:void b(h.$stars.index(this)+1)}),h.$cancel.bind("click.rating",function(){return h.disabled?!1:void b(0)})}});var b={};a.fn.rating_animation=function(){var c=a(this).find("span.userRatingValue");c.click(function(b){if(CS.hasAccount()){var c=b.delegateTarget,d=a(c).attr("data-tconst");a(c).fadeTo(100,0),a("div.starBarWidget#sb_"+d).fadeIn(100)}else CS.activate_login_lightbox()}),a(this).find("div.starBarWidget").hover(function(a){var c=a.delegateTarget;b[c.id]&&(clearTimeout(b[c.id]),delete b[c.id])},function(c){var d=c.delegateTarget,e=function(){a(d).parent().find("span.userRatingValue").fadeTo(100,1),a(d).fadeOut(),delete b[d.id]};b[d.id]=setTimeout(e,5)}),a(this).find("div.rating").on("change.rating",function(c,d){var e=a("#urv_"+d.tconst+" > span[name=ur]"),f=e.data("no-rating")||"Rate",g=0!==d.rating?d.rating:f;e.data("value",d.rating).text(g).addClass("has-changed"),g===f?(e.addClass("rate"),e.siblings(".global-sprite.rating-star.user-rating").removeClass("user-rating").addClass("no-rating")):(e.removeClass("rate"),e.siblings(".global-sprite.rating-star.no-rating").removeClass("no-rating").addClass("user-rating"));var h=a(c.delegateTarget).parent();a(h).fadeOut(),delete b[h.id]})},a.extend(a.ui.rating,{version:"2.0"})}(jQuery)},{}]},{},[1]);
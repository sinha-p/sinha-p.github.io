function changecss(e,s,t){e.forEach(function(e,c){$(e).css(s[c],t[c]+"%")})}function toggleActiveClass(e,s){$(e).addClass("active"),s.forEach(function(e){$(e).removeClass("active")})}$(document).ready(function(){var e=$(window).height();$(".custom-container").css("padding-top",6*e*.28+"px").css("padding-bottom",6*e*.72+"px"),$("#about").click(function(e){e.preventDefault(),toggleActiveClass("#about",["#skills","#edu"]),$("body, html").animate({scrollTop:0},600)}),$("#skills").click(function(s){s.preventDefault(),toggleActiveClass("#skills",["#about","#edu"]),$("body, html").animate({scrollTop:2*e},600)}),$("#edu").click(function(s){s.preventDefault(),toggleActiveClass("#edu",["#about","#skills"]),$("body, html").animate({scrollTop:4*e},600)})}),$(window).on("scroll",function(){var e=$(window).height(),s=$(window).scrollTop(),t=e/50;if(s<=5&&changecss([".image-div",".image-div"],["left","right"],[0,0]),s<=e){var c=Math.ceil(s/t);changecss([".two",".three",".image-div",".one"],["width","width","width","width"],[0,0,50+c,50-c]),50-c>35?($(".one .desc").css("display","block"),50-c>=35&&$(".one .desc").css("opacity",1)):50-c==35?$(".one .desc").css("opacity",0):50-c<=35&&50-c>=20&&$(".one .desc").css("display","none")}else if(s>e&&s<=2*e){var i=Math.ceil(s/t)-50;changecss([".one",".three",".image-div",".image-div",".two"],["width","width","width","left","width"],[0,0,100-i,i,i]),i>25?($(".two .desc").css("display","block"),i>=30&&$(".two .desc").css("opacity",1)):25==i?$(".two .desc").css("opacity",0):i<=20&&i>=10&&$(".two .desc").css("display","none")}else if(s>2*e&&s<=3*e){var i=150-Math.ceil(s/t);changecss([".one",".three",".image-div",".image-div",".two"],["width","width","width","left","width"],[0,0,100-i,i,i]),i>25?($(".two .desc").css("display","block"),i>=35&&$(".two .desc").css("opacity",1)):30==i?$(".two .desc").css("opacity",0):i<=29&&i>=19&&$(".two .desc").css("display","none")}else if(s>3*e&&s<=4*e){var c=Math.ceil(s/t)-150;changecss([".one",".two",".image-div",".image-div",".three"],["width","width","width","right","width"],[0,0,100-c,c,c]),c>25?($(".three .desc").css("display","block"),c>=30&&$(".three .desc").css("opacity",1)):25==c?$(".three .desc").css("opacity",0):c<=20&&c>=10&&$(".three .desc").css("display","none")}});

// ==UserScript==
// @name         gxb
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto click the fucking video player
// @author       BlackApodidae
// @match        https://*.class.gaoxiaobang.com/*
// @supportURL   https://github.com/blackapodidae/Gaoxiaobang-Script/issues
// @grant        none
// ==/UserScript==



function autoclick() {
    //继续观看
    var oBtn2 = document.getElementsByClassName('vjs-play-control vjs-control vjs-button vjs-paused')
    for (var i = 0; i < oBtn2.length; i++) {
        var click = oBtn2[i]
        click.click()
    }

    oBtn2 = document.getElementsByClassName('vjs-big-play-button')
    for (var i = 0; i < oBtn2.length; i++) {
        var click = oBtn2[i]
        click.click()
    }

}

window.setInterval(function () {
    autoclick()
}, 1000)
})();

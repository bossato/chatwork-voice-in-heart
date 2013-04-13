// ==UserScript==
// @name    chatwork voice in heart
// @match   https://www.chatwork.com/*
// @version 0.1
// ==/UserScript==

function addVoiceInHeart() {
    document.getElementById('cw_chattext').value = ".｡oO（";
}

(function(){
    document.getElementById('cw_chattext').addEventListener('focus', function(e) {
        addVoiceInHeart();
    });
    document.getElementById('cw_send_button').addEventListener('click', function(e) {
        addVoiceInHeart();
    });
})();

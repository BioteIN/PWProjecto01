var promptId;
var promptReset;

function cssInject(cssChunk) {
    var css = document.createElement('style');
    css.type = 'text/css';
    if (css.styleSheet) {
        css.styleSheet.cssText = cssChunk;
    } else {
        css.appendChild(document.createTextNode(cssChunk));
    }
    document.getElementsByTagName("head")[0].appendChild(css);
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}

function writeCookie(name, value, hours) {
    var expires = "";
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function deleteCookie(name) {
    document.cookie = name + "=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0; path=/; domain=.photobucket.com"
}

function getPrompt() {
    var url = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/web-api/getprompt.php';
    $.get(
        url, 
        {},
        function(response) {
            if (response.status === true && response.code === 200) {
                promptId = response.data.id;
                promptReset = response.data.reset;
                buildPrompt(promptId, response.data.html, response.data.css);
            }
        });
}

function buildPrompt(id, html, css) {
    cssInject(css);
    var backdrop = '<div class="modal-backdrop"></div>';
    $("body").append(html);
    $("body").append(backdrop);
    launchModal();
}

function acceptBeta() {
    writeCookie("pb_beta_modal", "accepted", 1);
    hideModal();
}

function disableModal() {
    writeCookie(promptId, "1", 60 * 60 * 24 * 365);
    hideModal();
}

function postponeModal() {
    writeCookie(promptId, "1", 60 * 60);
    hideModal();
}

function postponeModal1d() {
    writeCookie(promptId, "1", 60 * 60 * 24);
    hideModal();
}

function launchModal() {
    $("#" + promptId).fadeIn();
    $(".modal-backdrop").fadeIn();
}

function hideModal() {
    $("#" + promptId).fadeOut();
    $(".modal-backdrop").fadeOut();
}

function init() {
    if (readCookie("pbauth")) {
        getPrompt();
    }
}

$(document).ready(function() {
    init();
});

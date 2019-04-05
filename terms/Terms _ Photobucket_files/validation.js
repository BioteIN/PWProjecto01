var un = window.navigator;
var ua = un.userAgent;
var isIE = (un.appName == 'Microsoft Internet Explorer' || !!(ua.match(/Trident/) || ua.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1));
var isIOSSafari = (!!ua.match(/iPad/i) || !!ua.match(/iPhone/i) || !!ua.match(/iPod/i)) && (!!ua.match(/WebKit/i)) && !ua.match(/CriOS/i) && !ua.match(/OPiOS/i) && !ua.match(/EdgiOS/i);

String.prototype.format = function() {
    a = this;
    for (k in arguments) {
        a = a.replace("{" + k + "}", arguments[k])
    }
    return a
}

var validatePrompt = (function() {
    var cssChunk = '#nModal{ width:600px; max-width: 100%; min-width: 300px; position: absolute; top:50%; left:50%; transform: translate(-50%, -50%); box-shadow: 0 5px 15px rgba(0,0,0,.7); background-color:white; border-radius :6px; z-index:3147483647; line-height:1.4; font-size:14px; font-family:"Helvetica Neue",Helvetica,Arial,sans-serif; } #nModal .modal-dialog{ border-color: #e0e0e0; border-style:double; border-width:4px; border-radius :6px; text-align:center; } #nModal #ecModalLogo{ position:absolute; left:20px; top:20px; } #nModal #ecModalLogo img{ width:140px; } #nModal .modal-header{ border-bottom:0px; } #nModal .modal-body{ padding:20px; } #nModal h4{ font-size:24px; margin-bottom:10px; margin-top:70px; line-height:30px; } #nModal label{ width:180px !important; display:inline-block; } #nModal #subHeaderText{ text-align:center; min-width:235px; margin:0px auto 20px; } #nModal #subHeaderText span{ vertical-align:top; } # nModal #subHeaderText a{ color : #0ea0bd; } #nModal .form-group{ display:block; margin:0px auto; } #nModal .form-group input{ display: inline-block; width:235px !important; line-height:20px; padding:0px 5px; } #nModal .form-group-one{ margin-bottom:30px; } #nModal .form-group-two{ margin-bottom:30px; } #nModal .btn-primary{ width: 120px; border-radius: 2px; margin-bottom:0px; background-color:#0ea0bd; color:white; text-transform:uppercase; border:none; line-height:25px; cursor:pointer; }#nModal .btn-primary:hover{ background-color:#286090; } #nModal .dark-muted{ color:#686868; } #nModal .light-muted{ color:#cccccc; } #nModal .wide-letter-spacing{ letter-spacing: 2px; } .modal-backdrop{ position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1040; background-color: rgba(0,0,0,.8); } #nModal .hide{ display:none; } #nModal #bottomText{ margin-bottom:10px; }';
    var user;
    var validEmailMinRequirement = 2;
    var betaInvited  = 12;
    var betaAccepted = 22;
    var betaRejected = 32;
    var betaMigrated = 42;
    var betaFailed   = 52;
    var betaPrepared = 62;
    var betaReverted = 72;
    var betaSynced   = 82;
    return {
        /* Used for adding the custom CSS of the modal to the page */
        cssInjector: function() {
            var css = document.createElement('style');
            css.type = 'text/css';
            if (css.styleSheet) {
                css.styleSheet.cssText = cssChunk;
            } /* Support for IE */
            else {
                css.appendChild(document.createTextNode(cssChunk));
            } /* Support for the rest */
            document.getElementsByTagName("head")[0].appendChild(css);
        },
        /* Read Cookie */
        readCookie: function(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },
        createCookie: function(name, value, hours) {
            var expires = "";
            if (hours) {
                var date = new Date();
                date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        },
        deleteCookie: function(name) {
            document.cookie = name + "=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0; path=/; domain=.photobucket.com"
        },
        /* Get User Details AJAX call */
        getUserDetails: function() {
            var thisContext = this;
            var current = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
            $.get(
                current + "/checkout/getUserInfo.php", {},
                function(response) {
                    if (response.status == true) {
                        /* If invalid email code, launch prompt */
                        if (response.validEmail < validEmailMinRequirement) {
                            console.log(response.validEmail);
                            thisContext.buildEmailPrompt(response);
                        } else {
                            /* Valid email - check for beta invite status */
                            if (response.validEmail == betaSynced && !isIE && !isIOSSafari) {
                                // var betaCookie = thisContext.readCookie("pb_beta_modal");
                                // if (!betaCookie || (betaCookie != "postponed" && betaCookie != "accepted")) {
                                // thisContext.buildInvitePrompt(response);
                                // }
                            } else if (response.validEmail == betaMigrated) {
                                if (thisContext.readCookie("pbauth")) {
                                    thisContext.deleteCookie("pbauth");
                                }
                                if (thisContext.readCookie("pb_un")) {
                                    thisContext.deleteCookie("pb_un");
                                }
                                if (thisContext.readCookie("pb_t")) {
                                    thisContext.deleteCookie("pb_t");
                                }
                                if (thisContext.readCookie("pb_rt")) {
                                    thisContext.deleteCookie("pb_rt");
                                }
                                if (thisContext.readCookie("pb_beta")) {
                                    thisContext.deleteCookie("pb_beta");
                                }
                            }
                        }
                    }
                }
            );
        },
        /* Build Email Modal */
        buildEmailPrompt: function(data) {
            this.cssInjector();
            var nModal = '<div id="nModal"><div id="ecModal"> <div class="modal-dialog"> <div class="modal-content"> <div id="ecModalLogo"> <img alt="Photobucket Logo"src=http://pic2.pbsrc.com/footer/footer-logo.png> </div> <div class="modal-header"> <h4 class="dark-muted modal-title text-center wide-letter-spacing">Hello!</h4> </div> <div class="modal-body"> <div id="subHeaderText"> <span class="dark-muted">For your security, please confirm your email address below. A confirmation link will be sent to your inbox to ensure accuracy.</span> <br> <a href="http://support.photobucket.com/hc/en-us" id="ecModalLearnMore">Learn More</a> </div> <br> <form class="form-inline" id="emailPromptForm" onsubmit="validatePrompt.formSubmission(event)"> <div class="form-group form-group-one"> <label class="dark-muted" for="mUpdateEmail">Email Address:</label> <input class="form-control" id="mUpdateEmail" required type=email> </div> <div class="form-group form-group-two"> <label class="dark-muted" for="mUpdateEmail2">Confirm Email:</label> <input class="form-control" id="mUpdateEmail2" required type="email"> </div> <div class="text-center" id="submitButtonWrapper"> <button class="btn btn-primary wide-letter-spacing" type="submit">Submit</button> </div> </form> </div> <div class="dark-muted" id="bottomText"> <span>This email address will become the new email attached to this account.</span> </div> </div> </div> </div> </div>';
            var backdrop = '<div class="modal-backdrop"></div>';
            $("body").append(nModal);
            $("body").append(backdrop);
            $("#mUpdateEmail").val(data.email || "");
            this.launchModal();
        },
        /* Build Invite Modal */
        buildInvitePrompt: function(data) {
            this.cssInjector();
            var nModal = '<div id="nModal"> <div id="biModal"> <div class="modal-dialog"> <div class="modal-content"> <div id="ecModalLogo"> <img alt="Photobucket Logo" src="http://pic2.pbsrc.com/footer/footer-logo.png"> </div> <div class="modal-header"> <h4 class="dark-muted modal-title text-center">You’re one step away from the new Photobucket!</h4> </div> <div class="modal-body"> <div id="subHeaderText"><span class="dark-muted"> You have exclusive early access to the next evolution of Photobucket, including faster load times, bulk tools and more. </span></div> <table style="border-collapse: collapse; width: 100%;"> <tr> <td style="border-collapse: collapse;text-align: center;"> <a id="accept" onclick="validatePrompt.acceptBeta();" href="https://beta.photobucket.com/new-experience?username={0}" style="white-space:nowrap;margin:5px 10px;-webkit-text-size-adjust: none;padding:15px 5px;display: inline-block;text-decoration: none;width: 140px;border-radius: 4px;color: #ffffff;font-size: 13px;font-weight: bold;line-height: 13px;font-family: Roboto, sans-serif;background-color: #00557F;box-shadow: 3px 3px 10px 0 rgba(18,25,48,0.28);"> Let’s Do This! </a> </td> </tr> <tr> <td style="display:table;height: 20px;font-size: 0;border-collapse: collapse;text-align: left;"> <span>&nbsp;</span> </td> </tr> <tr> <td style="font-family: Roboto, sans-serif;color: #979797;font-size: 13px;font-weight: 300;line-height: 20px;text-align: center;"> If you have any questions <a href="https://support.photobucket.com/hc/en-us/requests/new" target="_blank" style="font-family: Roboto, sans-serif;color: #676767;text-decoration: underline;font-size: 13px;font-weight: 300">Contact Support</a> </td> </tr> <tr> <td style="font-family: Roboto, sans-serif;color: #979797;font-size: 13px;font-weight: 300;line-height: 20px;text-align: center;"> or check out <a href="https://beta.photobucket.com/faq" target="_blank" style="font-family: Roboto, sans-serif;color: #676767;text-decoration: underline;font-size: 13px;font-weight: 300">Frequently Asked Questions</a>. </td> </tr> </table> </div> </div> </div> </div> </div>'.format(data.userName);
            var backdrop = '<div class="modal-backdrop"></div>';
            $("body").append(nModal);
            $("body").append(backdrop);
            this.launchModal();
        },
        /* Launch Modal */
        launchModal: function() {
            $("#nModal").fadeIn();
            $(".modal-backdrop").fadeIn();
        },
        /* Hide Modal */
        hideModal: function() {
            $("#nModal").fadeOut();
            $(".modal-backdrop").fadeOut();
        },
        /* Display email mismatch message in modal */
        formError: function(err) {
            $("#nModal h4").html("Uh oh!");
            $("#nModal #subHeaderText span").html(err);
            $("#nModal #mUpdateEmail").addClass("alert-danger");
            $("#ecModalLearnMore").hide();
        },
        acceptBeta: function() {
            this.createCookie("pb_beta_modal", "accepted", 1);
            this.hideModal();
        },
        postponeBeta: function() {
            this.createCookie("pb_beta_modal", "postponed", 24);
            this.hideModal();
        },
        /* Show the email confirmation message in modal */
        formConfirm: function() {
            $("#emailPromptForm, #ecModalLearnMore, #bottomText").hide();
            $("#nModal h4").html("Success!");
            $("#nModal #subHeaderText span").html('<div>Your confirmation link has been sent.</div><div>Not seeing your confirmation email? Please check your spam folder.<br /><br /> For additional help, email <a href="mailto:support@photobucket.com">support@photobucket.com</a></div>');
            var context = this;
            /* Hide modal after 5 seconds. During this time, the user still can't close the modal */
            /* This is to push the user to check their email right away. Not sure if we want to keep this delay or not. */
            setTimeout(function() {
                context.hideModal();
            }, 5000);
        },
        /**/
        formSubmission: function(e) {
            e.preventDefault();
            var email = e.target[0].value;
            var emailConfirm = e.target[1].value;
            if (email === emailConfirm) {
                this.updateUserSettings(email);
            } else {
                this.formError('Looks like there is an email address entry mismatch. Please re-enter and confirm your email address below. A confirmation link will be sent to your inbox.');
            }
            return false;
        },
        /* AJAX call for updating the user settings */
        updateUserSettings: function(email) {
            var url = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+"/checkout/updateUserSettings.php";
            var context = this;
            $.ajax({
                    url: url,
                    type: "POST",
                    data: {
                        "email": email
                    }
                })
                /* Launch confirmation modal if successfull */
                .done(function(response) {
                    if (response.status === true) {
                        context.formConfirm();
                        return;
                    } else {
                        context.formError(response.message);
                    }
                })
                /* Not currently handling this very well. Maybe improve? */
                .fail(function(error) {
                    context.formError('There was a problem connecting to the server. Please try again later.');
                    setTimeout(function() {
                        context.hideModal();
                    }, 4000);
                });
        },
        /* Initialize Script */
        init: function() {
            /* Read user cookie */
            var userCookie = decodeURIComponent(this.readCookie("pbauth"));
            if (userCookie) {
                this.getUserDetails();
            }
        }
    }
})();

$(document).ready(function() {
    validatePrompt.init();
});

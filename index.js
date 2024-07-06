var Head = document.getElementById("Head");
var Drag = document.getElementById("DragHolder");
var BGFouc = document.getElementById("Filter");
var Gift = document.getElementById("Gift");
var Navbar = document.querySelector("nav");
var GiftContent = document.getElementById("GitfConn");
var Reason = document.getElementById('Reason');
var ContentH = document.getElementById('homeContent');
var ReasonContent = document.getElementById("ReasonContent");
var BgExitReason = document.getElementById("BackgroundForExitResson");
var ReasonClose = document.getElementById("ReasonClose");
// start
Drag.addEventListener('touchstart', function (e) {
    Head.style.background = "rgba(14, 14, 14, 0.895)";
});

//proces
Drag.addEventListener('touchmove', function (e) {
    Head.style.transform = "translateY(-100%)";
    setTimeout(function () {
        BGFouc.style.opacity = "0";
        setTimeout(function () {
            BGFouc.style.display = "none";
        }, 500);
    }, 300);
});

//end
Drag.addEventListener('touchend', function (e) {
    setTimeout(function () {
        document.body.style.overflow = "scroll";
    }, 500);
    Head.style.background = "rgb(14, 14, 14)";
});

// For Desktop user

//proces
Drag.addEventListener('mousedown', onMouseDown);

function onMouseDown() {
    Head.style.transform = "translateY(-100%)";
    document.body.style.overflow = "scroll";
    setTimeout(function () {
        BGFouc.style.opacity = "0";
        setTimeout(function () {
            BGFouc.style.display = "none";
        }, 500);
    }, 300);
    document.removeEventListener('mousemove', onMouseDown);
}

// Gift Click 

Gift.addEventListener("click", GiftFunc);

function GiftFunc() {
    setTimeout(function () {
        Navbar.style.opacity = "0%";
        Navbar.style.transform = "translateY(-100px)";
        Drag.style.opacity = "0%";
        Drag.style.transform = "translateY(100px)";
    }, 200);
    setTimeout(function () {
        Gift.style.scale = "5500%";
        setTimeout(function () {
            Head.style.transform = "translateY(-100%)";
            GiftContent.style.display = "block";
            setTimeout(function () {
                GiftContent.style.opacity = "0";
                Head.style.transform = "translateY(0px)";
                Navbar.style.opacity = "100%";
                Navbar.style.transform = "translateY(0px)";
                Drag.style.opacity = "100%";
                Drag.style.transform = "translateY(0px)";
                setTimeout(function () {
                    GiftContent.style.opacity = "0";
                    GiftContent.style.display = "none";
                }, 600);
            }, 5500);
        }, 340);
    }, 500);
    setTimeout(function () {
        BGFouc.style.opacity = "0";
        setTimeout(function () {
            BGFouc.style.display = "none";
            Gift.style.opacity = "0";
            setTimeout(function () {
                Gift.style.display = "none";
            }, 50);
        }, 700);
    }, 1300);
}

Reason.addEventListener("click", ReasonOption);

function ReasonOption() {
    // document.body.style.overflow = "hidden";
    ContentH.style.cssText = "filter: blur(10px); scale: 93%;";
    ReasonContent.style.transform = "translateY(0px)";
    BgExitReason.style.display = "block"
}

ReasonContent.addEventListener ("scroll",() => {
    ReasonContent.style.height = "100%";
    BgExitReason.style.display = "none";
    setTimeout(function () {
        ReasonContent.style.background = "rgba(0, 0, 0, 0.905)";
        ReasonContent.style.borderRadius = "0px";
    }, 350);
})

BgExitReason.addEventListener ("click",() => {
    ContentH.style.cssText = "filter: blur(0px); scale: 100%;";
    ReasonContent.style.transform = "translateY(540px)";
    setTimeout(function () {
        BgExitReason.style.display = "none";
    }, 400);
})

ReasonClose.addEventListener ("click",() => {
    ContentH.style.cssText = "filter: blur(0px); scale: 100%;";
    ReasonContent.style.transform = "translateY(1000px)";
    setTimeout(function () {
        BgExitReason.style.display = "none";
    }, 400);
}) 
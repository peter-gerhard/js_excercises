var headlines = document.getElementById("headlines");
var links = document.getElementsByTagName("a");
var firstLink = links[0];
var position = headlines.offsetLeft;
var reqId;

function moveHeadlines() {
    position--;
    headlines.style.left = position + "px";
}

function isOutOfView(link) {
    return (position == -link.offsetWidth);
}

function resetPosition() {
    position = 0;
}

function appendFirstLinkAtTheEnd() {
    headlines.removeChild(firstLink);
    headlines.appendChild(firstLink);
}

function determineNewFirstLink() {
    firstLink = links[0];
}

function continueAnimation() {
    reqId = requestAnimationFrame(animate);
}

/*
 * function for the animation
 */
function animate() {
    if (isOutOfView(firstLink)) {
        resetPosition();
        appendFirstLinkAtTheEnd();
        determineNewFirstLink();
    }
    moveHeadlines();
    continueAnimation();
}

/*
 * function to add the mouse over listeners
 */
function addMouseOverListeners() {
    for (var i = 0; i < links.length; i++) {
        const link = links[i];

        link.addEventListener("mouseover", function (e) {
            e.target.style.color = "blue";
            e.target.style.textDecoration = "none";
            cancelAnimationFrame(reqId);
        });

        link.addEventListener("mouseout", function (e) {
            e.target.style.color = "purple";
            e.target.style.textDecoration = "underline";
            continueAnimation();
        });
    }
}

animate();
addMouseOverListeners();

var box = document.getElementById("headlines");
var links = document.getElementsByTagName("a");
var left = box.offsetLeft;
var reqId;
var stop;

function animate() {
    left--;
    reqId = requestAnimationFrame(animate);
    if (left <= -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        box.appendChild(links[0]);
    }

    box.style.left = left + "px";
}

animate();

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function sty(e) {
        // console.log("anything",links);
        e.target.style.color = "blue";
        e.target.style.fontStyle = "underline";

        cancelAnimationFrame(reqId);
    });

    links[i].addEventListener("mouseout", function() {
        animate();
    });
}

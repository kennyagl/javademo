function readOS() {
    var txt = "";
    txt += "<p>Platform: " + navigator.platform + "</p>";
    txt += "<p>User-agent header: " + navigator.userAgent + "</p>";
    console.info("OS properties: \n" + txt);
    document.getElementById("osProperties").innerHTML = txt;
}
readOS();
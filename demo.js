if (location.hash.match(/demo1=([^;&]*)/)) {
    document.getElementById("demo1").innerHTML = unescape(location.hash.match(/demo1=([^;&]*)/)[1]);
}
document.getElementById("demo3").innerHTML = 5;
document.getElementById("demo4").innerHTML = "<a href='/about.html'>About</a>";









































































if (location.hash.match(/demo2=([^;&]*)/)) {
    location.href = location.hash.match(/demo2=([^;&]*)/)[1];
}

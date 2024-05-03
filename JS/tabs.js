function toggletabs() {
    var tabs = document.getElementsByClassName("tab");
    if (tabs[0].style.display === "block") {
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none";
        }
    } else {
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "block";
        }
    }
}
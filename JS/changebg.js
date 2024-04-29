var color = JSON.parse(localStorage.getItem('color'));
var div = document.getElementsByTagName('body');
for (let i = 0; i < div.length; i++) {
    div[i].setAttribute("style", `background: linear-gradient(135deg, ${color}, #9b59b6)`);
} 
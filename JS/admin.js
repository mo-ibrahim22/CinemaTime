function setcolor() {
    var color = document.getElementById("color").value;
    var c = document.getElementsByTagName('body');
    localStorage.setItem('color', JSON.stringify(color))
    SHOW_LOCALSTORAGE();
}

function SHOW_LOCALSTORAGE() {
    document.getElementById('usersTable').innerHTML = ` <thead>
    <th>Email</th>
</thead>`
    var retrievedArray = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < retrievedArray.length; i++) {
        document.getElementById('usersTable').innerHTML += `<tr><td>${retrievedArray[i].email}</td>
            </tr>`
    }

    var lastColor = JSON.parse(localStorage.getItem('color'));
    var lastColorSpan = document.getElementById('lastColor');
    lastColorSpan.innerHTML = lastColor;
    lastColorSpan.style.color = lastColor;
}

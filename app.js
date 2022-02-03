function changeText() {
    var name = document.getElementById("welcomeForm").fname.value;
    var welcome = "Welcome, " + name;
    document.getElementById("welcomeText").innerHTML = name;
    }
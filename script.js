function greetUser() {

    let userName = document.getElementById("nameInput").value;

    if (userName === "") {
        alert("Please enter your name");
    } else {
        document.getElementById("greeting").innerText =
            "Hello, " + userName;
    }
}

function changeColor(box) {

    let color = box.innerText.toLowerCase();

    box.style.backgroundColor = color;

    if (color === "yellow") {
        box.style.color = "black";
    } else {
        box.style.color = "white";
    }
}
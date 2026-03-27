const mainForm = document.querySelector("#contactForm");

const processSubmission = (event) => {
    event.preventDefault();
    
    const ui = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        content: document.getElementById("message").value.trim(),
        errDisplay: document.getElementById("error")
    };

    const mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!ui.name || !ui.email || !ui.content) {
        renderNotice("Please complete all fields.");
        return;
    }

    if (!mailFormat.test(ui.email)) {
        renderNotice("The email address is not valid.");
        return;
    }

    ui.errDisplay.style.display = "none";
    alert(`Message received from ${ui.name}.`);
    mainForm.reset();
};

const renderNotice = (str) => {
    const box = document.getElementById("error");
    box.innerText = str;
    box.style.display = "block";
};

mainForm.addEventListener("submit", processSubmission);
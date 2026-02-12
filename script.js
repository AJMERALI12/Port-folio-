let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menuIcon.onclick = () => {
    navlist.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
};









emailjs.init("XjuqA_t8kNPlxfIIS");

document.getElementById("form-data").addEventListener("submit",function(e){
    e.preventDefault();
    emailjs.sendform();
    emailjs.sendForm(
        "service_txdlcdm",
        "template_9q79t9e",
        this
    ).then(
        function(error){
            alert("Failed ❌" + error);
        }
    );
});


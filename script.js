let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menuIcon.onclick = () => {
    navlist.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
};











(function(){
emailjs.init("XjuqA_t8kNPlxfIIS"); // EmailJS public key
})();

document.getElementById("form-data")
.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_txdlcdm",
 "template_9q79t9e",
this
).then(
function(){
alert("Message Sent Successfully");
document.getElementById("form-data").reset();
},
function(error){
alert("Failed to send message");
console.log(error);
}
);

});


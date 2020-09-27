var cta = document.querySelector(".cta");
var check = 0;
var arrowUp = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M 0.26899589,10.327634 1.9684684,12.027707 7.48019,6.4174652 12.987106,12.027707 14.686578,10.327634 7.48019,3.0167177 Z"/></svg>'
var arrowDown = '<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M 0.26899589,4.716791 1.9684684,3.0167177 7.48019,8.6269595 12.987106,3.0167177 14.686578,4.716791 7.48019,12.027707 Z"/></svg>'
cta.addEventListener('click', function(e){
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('show-hide');
    loginText.classList.toggle('expand');
    if(check == 0)
    {
        cta.innerHTML = arrowUp;
        check++;
        document.querySelector('.call-text').style.filter = 'blur(10px)';
    }
    else
    {
        cta.innerHTML = arrowDown;
        check = 0;
        document.querySelector('.call-text').setAttribute('style', 'filter: blur(0px)');
    }
})

/* Modal*/
var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#signup-btn");

closeButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});


openButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});
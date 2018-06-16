var dropdownPolo = document.querySelector('.poloDropdown');
var dropdownLifestyle = document.querySelector('.lifestyleDropdown');

var polo = document.getElementById('polo');
var lifestyle = document.getElementById('lifestyle');

var dropdownMenuPolo= document.querySelector('.poloHide');
var dropdownMenuLifestyle = document.querySelector('.lifestyleHide');


polo.addEventListener('mouseenter',displayPolo);
polo.addEventListener('mouseleave',removePolo);
lifestyle.addEventListener('mouseenter',displayLifestyle);
lifestyle.addEventListener('mouseleave',removeLifestyle);


function displayPolo(){
  if(window.innerWidth > 766){
    dropdownPolo.style.display='block';
    polo.parentNode.removeChild(dropdownMenuPolo);
}else{
    polo.parentNode.appendChild(dropdownMenuPolo);
}
}

function removePolo(){
    dropdownPolo.style.display='none';
  }

  function displayLifestyle(){
    if(window.innerWidth > 766){
      dropdownLifestyle.style.display='block';
      lifestyle.parentNode.removeChild(dropdownMenuLifestyle);
  }else{
      lifestyle.parentNode.appendChild(dropdownMenuLifestyle);
  }
  }

  function removeLifestyle(){
      dropdownLifestyle.style.display='none';
    }

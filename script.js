var menulist = document.getElementById('menulist');
menulist.style.maxHeight = "0px";

function menuBar(){
  if (menulist.style.maxHeight == "0px"){
    menulist.style.maxHeight = "100vh";
  }
  else{
    menulist.style.maxHeight= "0px";
  }
}
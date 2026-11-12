var span = document.getElementById("num");
var count = +(span.innerText);

function incres(){
    count = count + 1;
    console.log(count);
    span.innerText=count
    
}

function decres(){
    if (count > 0) {
        count = count - 1;
        console.log(count);
        span.innerText=count
    }
}

function restart(){
    count = 0;
    console.log(count);
    span.innerText=count
    
}

var savedValue = 0;
function save() {
    savedValue = count;
    console.log("Saved Value:" , savedValue);
    alert("Count saved successfully! " + savedValue);
}

function dark(e) {

   var isDark = document.body.classList.contains("dark-mode")

    if(!isDark){
      e.innerHTML = '<i class="fa-solid fa-sun chng-clr"></i>';
   
         var icons = document.getElementsByTagName("i")
         for (let j = 0; j <icons.length; j++) {
         icons[j].classList.add("fontLight")
    }
    document.body.classList.add("dark-mode")
    
    
     var buttons = document.getElementsByTagName("button")
      for (let j = 0; j <buttons.length; j++) {
      buttons[j].classList.add("bttn")
    }
    
     var span = document.getElementsByClassName("sec-div")
      for (let j = 0; j <span.length; j++) {
      span[j].classList.add("span-back")
    }

     var spanclr = document.getElementsByTagName("span")
      for (let j = 0; j <spanclr.length; j++) {
      spanclr[j].classList.add("fontLight")
    }

     var mainDiv = document.getElementsByClassName("main-div")
      for (let j = 0; j <mainDiv.length; j++) {
      mainDiv[j].classList.add("mainDivClr")
    }

        
   }else{
   
      e.innerHTML = '<i class="fa-solid fa-moon chng-clr"></i>';

      document.body.classList.remove("dark-mode")
        
      var icons = document.getElementsByTagName("i")
      for (let j = 0; j <icons.length; j++) {
      icons[j].classList.remove("fontLight")
    }
    document.body.classList.remove("dark-mode")
    
    
     var buttons = document.getElementsByTagName("button")
      for (let j = 0; j <buttons.length; j++) {
      buttons[j].classList.remove("bttn")
    }
    
     var span = document.getElementsByClassName("sec-div")
      for (let j = 0; j <span.length; j++) {
      span[j].classList.remove("span-back")
    }

     var spanclr = document.getElementsByTagName("span")
      for (let j = 0; j <spanclr.length; j++) {
      spanclr[j].classList.remove("fontLight")
    }

     var mainDiv = document.getElementsByClassName("main-div")
      for (let j = 0; j <mainDiv.length; j++) {
      mainDiv[j].classList.remove("mainDivClr")
    }
   }
   
}
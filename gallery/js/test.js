 /*filters*/
 filterSelection("all")
 function filterSelection(c) {
   var x, i;
   x = document.getElementsByClassName("filterDiv");
   if (c == "all") c = "";
   for (i = 0; i < x.length; i++) {
     RemoveIMG(x[i], "show");
     if (x[i].className.indexOf(c) > -1) AddIMG(x[i], "show");
   }
 }
 function AddIMG(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
   }
 }
function RemoveIMG(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
     while (arr1.indexOf(arr2[i]) > -1) {
       arr1.splice(arr1.indexOf(arr2[i]), 1);     
     }
   }
   element.className = arr1.join(" ");
 }
 var btnContainer = document.getElementById("Btnc");
 var btns = btnContainer.getElementsByClassName("btn");
   for (var i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", function(){
         var current = document.getElementsByClassName("active");
         current[0].className = current[0].className.replace(" active", "");
         this.className += " active";
     });
   }
   /*image modal viewer*/
   function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    document.getElementById("caption").innerHTML=element.alt;
   }
var item_a= 0
var item_b= 0
var helice= 0
var base=0

  <!------ HELICE  ----->
document.querySelector("#helice").addEventListener("click", function (){
  helice += 1;
  if (helice <= 1){
    var el= document.querySelector("#helice"); 
    el.object3D.position.x -= 5.1;
    el.object3D.position.z += 0.92;
    el.object3D.position.y += 0.49;
  }
});
<!-- ITEM A-->
document.querySelector("#item_a").addEventListener("click", function (){
  item_a += 1;
  if (item_a <= 1){
    var el= document.querySelector("#item_a"); 
    el.object3D.position.x -= 6.45;
    el.object3D.position.z -= 0.1;
    el.object3D.position.y += 0.49;
   }
  });
  
  <!-- ITEM B-->
document.querySelector("#item_b").addEventListener("click", function (){
  item_b += 1;
  if (item_b <= 1){
    var el= document.querySelector("#item_b"); 
    el.object3D.position.x -= 5.53;
    el.object3D.position.z -= 0.1;
    el.object3D.position.y += 0.49;
  }
});
 <!------  BASE  ----->
document.querySelector("#helice").addEventListener("click", function (){
  helice += 1;
  if (helice <= 1){
    var el= document.querySelector("#helice"); 
    el.object3D.position.x -= 5.1;
    el.object3D.position.z += 0.92;
    el.object3D.position.y += 0.49;
  }
});

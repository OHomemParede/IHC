document.querySelector("#base").addEventListener("click", function (){

  console.log("a");
  var el= document.querySelector("#base"); 
  el.object3D.rotation.y += 0.9;
});

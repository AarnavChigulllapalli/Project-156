// Registering component in Target.js

AFRAME.registerComponent("targets", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        var id = `target${i}`;
  
        //position variables     
        var posX =(Math.random() * 100 + -50);      
        var posY = (Math.random() * 5 + 5);
        var posZ = (Math.random() * 60 + -40);
  
        var position = { x: posX, y: posY, z: 5 };
  
        //call the function
        this.createTarget(id, position);
      }
    } ,
  
    createTarget: function(id, position) { 
      
      var terrainEl = document.querySelector("#island");
  
      var targetEl = document.createElement("a-entity");
  
      targetEl.setAttribute("id",id);
      targetEl.setAttribute("position",position);

      targetEl.setAttribute("scale", { x: 0.5, y: 0.5, z: 0.5 });
      
      targetEl.setAttribute("gltf-model","./assets/fish/scene.gltf");
      
      targetEl.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius:100
      })

      targetEl.setAttribute("animation-mixer", {});
  
      terrainEl.appendChild(targetEl);
    }
  });
  
  
// Registering component in Target.js

AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var posX =(Math.random() * 100 + -50);      
        var posY = (Math.random() * 5 + 5);
        var posZ = (Math.random() * 60 + -40);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
      const treasureEntity = document.querySelector("#island");
  
      var targetEl = document.createElement("a-entity");
  
      targetEl.setAttribute("id",id);
      targetEl.setAttribute("position",position);
      
      targetEl.setAttribute("material","color","#ff9100");
      
      targetEl.setAttribute("geometry",{primitive:"circle",radius:1})

      targetEl.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius:10
      })

      targetEl.setAttribute("animation",{
        property:"rotation",
        to:"0 360 0",
        loop:"true",
        dur:1000
      })
  
      treasureEntity.appendChild(targetEl);
    }
  });
  
  
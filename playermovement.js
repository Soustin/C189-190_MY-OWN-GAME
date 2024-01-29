AFRAME.registerComponent("terrain-rotation", {
    schema: {
        speedOfRotation:{type: "number", default: 0}
    },
    init: function() {
        window.addEventListener("keydown", (e)=>{
            if(e.key = "ArrowRight") {
                if(this.data.speedOfRotation < 0.1) {
                    this.data.speedOfRotation += 0.1
                }
            }
            if(e.key = "ArrowLeft") {
                if(this.data.speedOfRotation < -0.1) {
                    this.data.speedOfRotation -= 0.1
                }
            }  
        })
    }
})

//Plane rotation component
AFRAME.registerComponent("jet-movement-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var planeRotation = this.data.speedOfRotation;      
        var planePosition = this.data.speedOfAscent;
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (planePosition.x < 10) {
            planePosition.x += 0.5;
            this.el.setAttribute("rotation", planeRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (planePosition.x > -10) {
            planePosition.x -= 0.5;
            this.el.setAttribute("rotation", planeRotation);
          }
        }
      })
    }
})
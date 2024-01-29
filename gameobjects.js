AFRAME.registerComponent("towers", {

    init: function(){
        this.createTowers();
    },

    createTowers: function() {
        var posX = [-2.5, -1, -3.5, 4, 8];
        var posZ = [-15, -10, -8.76, -9, -7.876];

        for(var i = 0; i<5; i++){
            var elem = document.createElement("a-box");
            elem.setAttribute("position",{
                x: posX[i],
                y: 0,
                z: posZ[i]
            });
           // elem.setAttribute("rotation", "90 0 0")
            elem.setAttribute("open-ended", true);
            elem.setAttribute("material",{
                "side": "double",
                "color":"#36454F"
            } );
            elem.setAttribute("geometry",{
                primitive: "cylinder",
                radius: 0.5,
                height: 10.5,
                //segments-radial: 15,
                // innerRadius: 6,
                //segments-height: 25,
                //segments-width: ,
                // depth:
            })
            var scene = document.querySelector("#scene");
            scene.appendChild(elem);

        }
        
    }
})
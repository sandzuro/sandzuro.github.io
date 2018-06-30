/*
 * The GUI Code is based on dat.gui.js for more information look at: http://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage
 *  
 */

var FizzyText = function() {

  this.Text = 'myText'; // text string
  this.Color = '#ffae23'; // RGB value
  this.Update = function (){
        console.log("click");
 
        function reqListener () {
            console.log(this.responseText);
            
            // Get Color 
            var color = mesh.material.color;
            // Delete Mesh
            scene.remove(mesh);
            // Load Geo
            var loader = new THREE.PLYLoader();
                loader.load( './test.ply', function ( geometry ) {
                    geometry.computeFaceNormals();
                    var material = new THREE.MeshPhongMaterial( { color: color, specular: 0x111111, shininess: 200 } );
                    material.side = THREE.BackSide;
                    mesh = new THREE.Mesh( geometry, material );

                    mesh.castShadow = true;
                    mesh.receiveShadow = true;

                    scene.add( mesh );
                });
        }

        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", reqListener);
        xhr.open('GET', 'hou/' + this.Text);
        xhr.send();
    }
};

window.onload = function() {

  var text = new FizzyText();
  var gui = new dat.GUI();

  gui.add(text, 'Text');
  var controller = gui.addColor(text, 'Color');
  gui.add(text, 'Update');

  controller.onChange(function(value) {
  var str = value.toString(); 
  //console.log(value);
  mesh.material.color.setHex('0x' + str.slice(1,7));
  }); 
};


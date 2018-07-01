// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------
var spline2 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 271, 0),
    new THREE.Vector3(0, 50, 0),
    new THREE.Vector3(2.15, 1, -0.5),
	new THREE.Vector3(0.38, 1, -0.40),
	new THREE.Vector3(0.38, 1, -0.83),
	new THREE.Vector3(0, 10, -3),
]);

var points = spline2.getPoints( 50 );
var geometry = new THREE.BufferGeometry().setFromPoints( points );

var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

// Create the final object to add to the scene
var curveObject = new THREE.Line( geometry, material );
scene.add( curveObject );
// instantiate a loader

// Instantiate a loader
var loader = new THREE.GLTFLoader();

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
THREE.DRACOLoader.setDecoderPath( '/examples/js/libs/draco' );
loader.setDRACOLoader( new THREE.DRACOLoader() );

// Load a glTF resource
// instantiate a loader
var loader = new THREE.JSONLoader();

// load a resource
loader.load(
	// resource URL
	'assets/geometry.json',

	// onLoad callback
	function ( geometry, materials ) {
		var material = materials[ 0 ];
		var object = new THREE.Mesh( geometry, material );
		scene.add( object );
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function( err ) {
		console.log( 'An error happened' );
	}
);


var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

// Render Loop
var render = function () {
  requestAnimationFrame( render );
  // Render the scene
  renderer.render(scene, camera);
};

render();

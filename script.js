import * as THREE from 'https://cdn.skypack.dev/three'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


var target = new THREE.Vector3();

var mouseX = 0, mouseY = 0;
var clock = new THREE.Clock;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);



renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10,3,16,100);
// const geometry = new THREE.OctahedronGeometry(10,0);
// const geometry = new THREE.TorusKnotGeometry( 10, 3, 19, 8, 6, 1 );
const material = new THREE.MeshBasicMaterial({ color: 0x840032, wireframe: true});
const torus = new THREE.Mesh(geometry, material);
torus.translateX(20)
// torus.lookAt(new THREE.Vector3(0, 1, 0));
scene.add(torus);



window.addEventListener("mousemove", onmousemove, false);

function onmousemove( event ) {

    mouseX = (( event.clientX / window.innerWidth ) * 2 - 1)*10;
    mouseY = (( event.clientY / window.innerHeight ) * 2 - 1)*10

}

function animate(){
    requestAnimationFrame(animate);
    target.x += ( mouseX - target.x ) * .05;
    target.y += ( - mouseY - target.y ) * .05;
    target.z = camera.position.z; // assuming the camera is located at ( 0, 0, z );
    torus.lookAt( target );
    renderer.render(scene, camera);

    var t = clock.getElapsedTime();
    if (t <= 0.2)
    {
        torus.scale.x = 0+(t/.2);
    	torus.scale.y = 0+(t/.2);
		torus.scale.z = 0+(t/.2);
       }
}

animate();

var tl = gsap.timeline({});

tl.fromTo("#photoContainer", .5, {autoAlpha: 0, x: -100}, {autoAlpha: 1, x:0});
tl.fromTo("#infos>h1", .5, {autoAlpha: 0}, {autoAlpha: 1});
tl.fromTo("#infos>h2", .5, {autoAlpha: 0}, {autoAlpha: 1}, "-=.3");
tl.fromTo("#infos>p:first-of-type", .5, {autoAlpha: 0}, {autoAlpha: 1}, "-=.2");

tl.fromTo("#project-list", .5, {autoAlpha: 0, x: -10}, {autoAlpha: 1, x:0}, "-=.3");

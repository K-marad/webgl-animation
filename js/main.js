class Animation {
  constructor(){
    this.camera   = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    this.scene    = new THREE.Scene();
    this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    this.material = new THREE.MeshNormalMaterial();
    this.mesh     = new THREE.Mesh(this.geometry, this.material);
    this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    this.renderer = new THREE.WebGLRenderer({antialias: true});
   
    this.camera.position.z = 1;
    this.scene.add(this.mesh);

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
  }

  animate(){
    let self = this
    var animate = function(){
      self.renderer.render(self.scene, self.camera);
      requestAnimationFrame(animate);
    }

    var tl = new TimelineMax({
      repeat:10,
      yoyo:true
    });

    // tl.to : target, duration, vars, timeline position
    tl.to(this.mesh.rotation, 1, {x:'1'}, 0)
    .to(this.mesh.rotation, 1, {y:'2'}, 0)

    animate()   
  }
}

window.onload = function(){
  let animation = new Animation();
  animation.animate();
}
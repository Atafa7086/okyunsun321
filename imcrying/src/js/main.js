// 初始化全景图和热点
const panoImage = document.querySelector('.image-container');


// 創建全景圖像
const panorama1 = new PANOLENS.ImagePanorama('../images/01.jpg');
const panorama2 = new PANOLENS.ImagePanorama('../images/02.jpg');
const panorama3 = new PANOLENS.ImagePanorama('../images/03.jpg');
const panorama4 = new PANOLENS.ImagePanorama('../images/04.jpg');
const panorama5 = new PANOLENS.ImagePanorama('../images/05.jpg');

// 全景圖裡的熱點 (為點的代號)
var infospotPositions = [
  // 進入(0)
  new THREE.Vector3(-500, -300, -2000),
  // 出口(1)
  new THREE.Vector3(-1000, -300, -3000),
  // 販賣部(2)
  new THREE.Vector3(-1000, -300, 500),
  // 徃04(3)
  new THREE.Vector3(400, -300, 1800),
  // 徃04(4)
  new THREE.Vector3(700, -300, -2000),

];

// 初始化 PANOLENS Viewer
const viewer = new PANOLENS.Viewer({
  container: panoImage,
  autoRotate: true,
  autoRotateSpeed: 0.2,
  controlBar: true,
  controlButtons: ['fullscreen', 'setting', 'video']

});

// 全景圖像中的點

// panorama1 //
panorama1.link(panorama2, infospotPositions[0]);
// panorama2 //
panorama2.link(panorama1, infospotPositions[1]);
panorama2.link(panorama5, infospotPositions[2]);
panorama2.link(panorama4, infospotPositions[3]);
panorama2.link(panorama3, infospotPositions[4]);
// panrama3 //

// 添加全景图到 Viewer
viewer.add(panorama1, panorama2, panorama3, panorama4, panorama5);



// 創建並添加信息點（Infospot）
const infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
infospot.position.set(-2000, -200, -3500);

// 創建自定義DOM元素
const infospotElement = document.createElement('div');
infospotElement.className = 'infospot-element';
infospotElement.innerHTML = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/wNE6JVsBBwo?si=pQOmhPP-NsGhmhiD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <h3>源順故事</h3>
  <p>害大家好</p>
`;

// 添加自定義DOM元素到信息點
infospot.addHoverElement(infospotElement, 200);
panorama1.add(infospot);



panorama2.lookAt(new THREE.Vector3(0, 0, -1000));


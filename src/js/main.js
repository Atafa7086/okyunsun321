// 初始化全景图和热点
const panoImage = document.querySelector('.image-container');

// 創建全景圖像
const panorama1 = new PANOLENS.ImagePanorama('https://i.imgur.com/tsLeyvF.jpeg');
const panorama2 = new PANOLENS.ImagePanorama('https://i.imgur.com/Wv7Zzen.jpeg');
const panorama3 = new PANOLENS.ImagePanorama('https://i.imgur.com/027oPhF.jpeg');
const panorama4 = new PANOLENS.ImagePanorama('https://i.imgur.com/s6Lb3wp.jpeg');
const panorama5 = new PANOLENS.ImagePanorama('https://i.imgur.com/PRy4bLc.jpeg');
const panorama6 = new PANOLENS.ImagePanorama('https://i.imgur.com/HCvJ1zN.jpeg');
const panorama7 = new PANOLENS.ImagePanorama('https://i.imgur.com/oY36ZaM.jpeg');

// const panorama1 = new PANOLENS.ImagePanorama('./images/01.jpg');
// const panorama2 = new PANOLENS.ImagePanorama('./images/02.jpg');
// const panorama3 = new PANOLENS.ImagePanorama('./images/03.jpg');
// const panorama4 = new PANOLENS.ImagePanorama('./images/04.jpg');
// const panorama5 = new PANOLENS.ImagePanorama('./images/05.jpg');
// const panorama6 = new PANOLENS.ImagePanorama('./images/06.jpg');
// const panorama7 = new PANOLENS.ImagePanorama('./images/07.jpg');

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
  // 徃03(4)
  new THREE.Vector3(700, -300, -2000),
  // 販賣部往回走(5)
  new THREE.Vector3(800, -300, -1000),
  // 販賣部往6(6)
  new THREE.Vector3(-1700, -300, 300),
  // 往5(7)
  new THREE.Vector3(500, -300, -2000),
  // 往2(8)
  new THREE.Vector3(-1000, -200, 2000),
  // 往2(9)
  new THREE.Vector3(-300, -400, -2600),
  // 出口(10)
  new THREE.Vector3(-1000, -300, -3000),
  // 往4(11)
  new THREE.Vector3(-1000, -300, 3000),
  // 第四章回頭2(12)
  new THREE.Vector3(-100, -300, -2000),
  // 第四章回頭3(13)
  new THREE.Vector3(700, -300, -2400),
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
panorama3.link(panorama1, infospotPositions[10]);
panorama3.link(panorama4, infospotPositions[11]);
// panorama4 //
panorama4.link(panorama2, infospotPositions[12]);
panorama4.link(panorama3, infospotPositions[13]);
// panorama5 //
panorama5.link(panorama2, infospotPositions[5]);
panorama5.link(panorama6, infospotPositions[6]);

// panorama6 //
panorama6.link(panorama5, infospotPositions[7]);
panorama6.link(panorama2, infospotPositions[8]);
panorama6.link(panorama2, infospotPositions[9]);


// 添加全景图到 Viewer
viewer.add(panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7);

/////// ****源順故事影片**** ///////
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



/////// ****商品資訊**** ///////
// 另一個信息點
const infospot2 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
infospot2.position.set(-100, -300, 2200);

// 創建自定義DOM元素
const infospotElement2 = document.createElement('div');
infospotElement2.className = 'infospot-element';
infospotElement2.innerHTML = `
  <div class="infospot-image-container">
    <img src="https://www.god-bene.com.tw/storenew/image/cache/catalog/SQA022-640x640.jpg" alt="Example Image" class="infospot-image">
  </div>
  <h3>已催芽黑芝麻核桃軟糖</h3>
  <a href="https://www.god-bene.com.tw/storenew/index.php?route=product/product&path=20&product_id=193" target="_blank" class="product-link">更多信息</a>
`;

// 防止點擊事件穿透到Panolens視圖
infospotElement2.querySelector('.product-link').addEventListener('click', function (event) {
  event.stopPropagation();
  event.preventDefault();
  window.open(this.href, '_blank');
});

// 添加自定義DOM元素到信息點
infospot2.addHoverElement(infospotElement2, 200);
panorama5.add(infospot2);
/////// ****油品小知識**** ///////
// 創建自定義音樂圖示的 Infospot
const musicInfospot = new PANOLENS.Infospot(300, 'https://cdn-icons-png.flaticon.com/512/27/27002.png');
musicInfospot.position.set(-3000, 400, -100);

// 獲取音頻元素
const sound = document.getElementById('sound');

// 添加點擊事件監聽器來播放音樂
musicInfospot.addEventListener('click', function () {
  if (sound.paused) {
    sound.play();
  } else {
    sound.pause();
  }
});

// 添加自定義DOM元素到信息點
panorama3.add(musicInfospot);






// 調整看的方向 //
panorama2.lookAt(new THREE.Vector3(0, 0, -1000));




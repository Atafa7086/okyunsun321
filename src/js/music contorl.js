// 獲取按鈕和音樂元素
const musicButton = document.getElementById('musicButton');
const backgroundMusic = document.getElementById('backgroundMusic');

// 設置初始狀態
let isPlaying = false;

// 按鈕點擊事件
musicButton.addEventListener('click', function () {
  if (isPlaying) {
    backgroundMusic.pause();
    musicButton.textContent = 'Play Music';
  } else {
    backgroundMusic.play();
    musicButton.textContent = 'Pause Music';
  }
  isPlaying = !isPlaying;
});

// 第一次用戶交互後播放音樂
function playMusicOnInteraction() {
  backgroundMusic.play().then(() => {
    isPlaying = true;
    musicButton.textContent = 'Pause Music';
  }).catch((error) => {
    console.log('Autoplay was prevented:', error);
  });

  // 移除事件監聽器
  document.removeEventListener('click', playMusicOnInteraction);
}

// 添加點擊事件監聽器
document.addEventListener('click', playMusicOnInteraction);
const resetSound = (sound) => {
  sound.pause();
  sound.currentTime = 0;
};

const playSound = (sound) => {
  if (!sound.paused) {
    resetSound();
  }
  return sound.play();
}

export {
  resetSound,
  playSound
}
const formatTimeString = (seconds) => {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);

  return `${(min > 9) ? min : '0' + min}:${(sec > 9) ? sec : '0' + sec}`;
};

export default formatTimeString;
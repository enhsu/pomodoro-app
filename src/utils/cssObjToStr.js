const cssObjToStr = (obj) => {
  if (!obj) return null;
  const styles = Object.keys(obj).map(prop => {
    return `${prop}:${obj[prop]}`;
  }).join(';');

  return `${styles};`
}

export default cssObjToStr;
function findScreenHeight(width, ratio) {
  let setUp = ratio.split(":");
  let ratioP = Number(setUp[1]) / Number(setUp[0]);
  let result = width + "x" + (width * ratioP);
  return result;
}

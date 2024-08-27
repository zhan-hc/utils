/**
 * 判断是否支持webp格式
 * @returns {boolean}
 */
export const isSupportWebp = ():boolean => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  const toDataURL = canvas.toDataURL('image/webp');
  return /^data:image\/webp;base64,/i.test(toDataURL);
}
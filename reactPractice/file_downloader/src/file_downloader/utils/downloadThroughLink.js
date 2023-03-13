export const downloadThroughLink = (blob, fileName) => {
  const file = URL.createObjectURL(blob);
  let aTag = document.createElement("a");
  aTag.href = file;
  aTag.download = fileName;
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

const picker = document.querySelector(".picker--btn");
const colorList = document.querySelector(".picker--colorList");
const pickedColors = JSON.parse(localStorage.getItem("picked-colors") || "[]");
const clearAll = document.querySelector(".picker--headers span");
const copyColor = (elem) => {
  navigator.clipboard.writeText(elem.dataset.color);
  elem.innerText = "Coppied";
  setTimeout(() => (elem.innerText = elem.dataset.color), 1000);
};

const showColors = () => {
  colorList.innerHTML = pickedColors
    .map(
      (color) => `
    <li class="picker--ListItem">
    <span class="rect" style="background: ${color}; border: 1px solid ${
        color == "#ffffff" ? "black" : color
      };"></span>
    <span class="value" data-color="${color}">${color}</span>
    </li>
    `
    )
    .join("");

  document.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", (e) =>
      copyColor(e.currentTarget.lastElementChild)
    );
  });
};

const activatedEyeDropped = async () => {
  try {
    const eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();
    if (!pickedColors.includes(sRGBHex)) {
      pickedColors.push(sRGBHex);
      localStorage.setItem("picked-colors", JSON.stringify(pickedColors));
      showColors();
    }
  } catch (error) {
    console.log(error);
  }
};

clearAll.addEventListener('click', () => {
    pickedColors.length = 0;
    localStorage.setItem('picked-colors', JSON.stringify(pickedColors))
    showColors();
})
picker.addEventListener("click", activatedEyeDropped);

const downBox = document.querySelector(".imageBox");
const downInp = document.querySelector(".downloadInp");
const imgDown = downBox.querySelector("img");
const width = document.querySelector('.Characters--widht input');
const heigth = document.querySelector('.Characters--height input');
const imgDownBox = document.querySelector('.imgDownBox img');
const btn = document.querySelector('button');
let imgSize = 0;

const loadFile = (e) => {
  const img = e.target.files[0];
  if (!img) return;
  imgDown.src = URL.createObjectURL(img);
  imgDown.addEventListener("load", () => {
    imgDown.classList = "imgActive";
    if (downBox.querySelector("p")) {
      downBox.querySelector("p").remove();
    }
  });
  width.value = imgDown.naturalWidth;
  heigth.value = imgDown.naturalHeight;
  imgSize = imgDown.naturalWidth / imgDown.naturalHeight;
  downBox.style = "border: none;";
  console.log(img);
};

const DownloadFile = () => {
    imgDownBox.src ="./" + downInp.files[0].name;
    imgDownBox.width = width.value;
    imgDownBox.heigth = heigth.value;
}


btn.addEventListener('click', () => DownloadFile())
downInp.addEventListener("change", (e) => loadFile(e));
downBox.addEventListener("click", () => downInp.click());

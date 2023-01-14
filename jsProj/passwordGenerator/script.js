const lengthSlider = document.querySelector(".paswGenerator--paswLenSlider");
const lengthCountShower = document.querySelector(".paswSymbCount");
const settings = document.querySelectorAll(".ch");
const paswLine = document.querySelector(".wrapper--paswLine");
const generateBtn = document.querySelector(".paswGenerator--paswGenerateBtn");
const paswStrongLine = document.querySelector("#colorRangePaswStrength");
const bufferImg = document.querySelector(".paswGenerator--bufferPasw");
let global = '';
let strongest = 0;

const characters = {
  lowercase: "qwertyuiopasdfghjklzxcvbnm",
  uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
  numbers: "1234567890",
  symbols: "!@#$%^&*+_-?{}[]<>/`;:",
};

const countOfSymbols = (e) => {
  lengthCountShower.innerText = e.target.value;
};

const PasswordGenerator = () => {
  let template = "";
  let generatedPassword = "";

  settings.forEach((option) => {
    if (option.checked) {
      option.id !== "includespaces" && option.id !== "excludeduplicate"
        ? strongest++
        : strongest;
      template += characters[option.id] ? characters[option.id] : "";
      template += option.id === "includespaces" ? `   ${template}   ` : "";
    }
  });

  for (let i = 0; i < +lengthSlider.value; i++) {
    let randomChar = template[Math.floor(Math.random() * template.length)];
    if (document.querySelector("#excludeduplicate").checked) {
      generatedPassword +=
        !generatedPassword.includes(randomChar) || randomChar === " "
          ? randomChar
          : "";
    } else {
      generatedPassword += randomChar;
    }
  }

  if (
    document.querySelector("#includespaces").checked &&
    !generatedPassword.includes(" ")
  ) {
    PasswordGenerator();
  } else {
    global = generatedPassword;
    paswLine.value = generatedPassword;
    paswStrongCheck(generatedPassword);
  }
};

const paswStrongCheck = (password) => {
  if (password.length <= 5) strongest = 1;
  paswStrongLine.classList.remove("red", "yellow", "orange", "green");
  switch (strongest) {
    case 1:
      paswStrongLine.classList.add("red");
      break;
    case 2:
      paswStrongLine.classList.add("yellow");
      break;
    case 3:
      paswStrongLine.classList.add("orange");
      break;
    case 4:
      paswStrongLine.classList.add("green");
      break;
  }

  strongest = 0;
};

lengthSlider.addEventListener("input", countOfSymbols);
generateBtn.addEventListener("click", PasswordGenerator);
bufferImg.addEventListener("click", () => {
  navigator.clipboard.writeText(paswLine.value);
  paswLine.value = 'COPIED!';
  setTimeout(() => paswLine.value = global, 2000);
});

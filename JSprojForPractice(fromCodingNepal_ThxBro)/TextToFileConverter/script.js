const textarea = document.querySelector("textarea");
textarea.value = "";
const fileName = document.querySelector("input");
const selectMenu = document.querySelector("select");
const saveAsBtn = document.querySelector("button");
const clearBtn = document.querySelector("button:last-child");

saveAsBtn.addEventListener("click", () => {
  if (textarea.value === "" || fileName.value === "") {
    if (fileName.value === "") {
      fileName.style.border = "1px solid red";
      setTimeout(() => {
        fileName.style.border = "1px solid black";
      }, 2000);
    } 
    if (textarea.value === "") {
      textarea.style.border = "1px solid red";
      setTimeout(() => {
        textarea.style.border = "1px solid black";
      }, 2000);
    }
  } else {
    const blob = new Blob([textarea.value], { type: selectMenu.value });
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName.value;
    link.href = fileUrl;
    link.click();
    fileName.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  textarea.value = "";
});

fileName.addEventListener("focus", () => {
  fileName.placeholder = "";
});

fileName.addEventListener("focusout", () => {
  fileName.placeholder = "FILE_NAME";
});

textarea.addEventListener("focus", () => {
  textarea.style.border = "1px solid black";
});

textarea.addEventListener("focusout", () => {
  textarea.style.border = "none";
});

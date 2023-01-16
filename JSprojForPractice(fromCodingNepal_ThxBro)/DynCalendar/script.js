const calendarDays = document.querySelector(".calendar--days");
const icons = document.querySelectorAll("header span");
const year = document.querySelectorAll("h1 span");
const notes = [
  {
    day: 1,
    monthAndYear: "February 2023",
  },
];
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const createCalendar = () => {
  document.querySelector("h1").innerHTML = `${months[currMonth]} ${currYear}`;
  let lastDayofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let daysForRender = "";

  for (let i = 0; i < lastDayofMonth; i++) {
    daysForRender += `<li><span class='day'>${i + 1}</span></li>\n`;
  }

  if (months[currMonth] === "February") {
    daysForRender += `<li><span class='day'> </span></li>\n`;
  }

  calendarDays.innerHTML = daysForRender;

  if (
    `${months[date.getMonth()]} ${date.getFullYear()}` ===
    document.querySelector("h1").innerHTML
  ) {
    calendarDays
      .querySelectorAll("li span")
      [date.getDate() - 1].classList.add("active");
  }

  calendarDays.querySelectorAll("li span").forEach((day) => {
    day.addEventListener("click", (e) => {
      if (day.className.includes('note')) {
        day.classList.remove('note');
      }else {
        day.classList.add('note');
      }
    });
  });

  presentNote(notes);
};
createCalendar();

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth += icon.className === "right" ? 1 : -1;
    if (currMonth > 11) {
      currMonth = 0;
      currYear++;
    }
    if (currMonth < 0) {
      currMonth = 11;
      currYear--;
    }
    createCalendar();
  });
});

document.querySelector("button").addEventListener("click", () => {
  currYear = date.getFullYear();
  currMonth = date.getMonth();
  createCalendar();
});

function presentNote(notes) {
  notes.forEach((note) => {
    if (`${note.monthAndYear}` === document.querySelector("h1").innerHTML) {
      calendarDays.querySelectorAll("li span")[note.day-1].classList.add("note");
    }
  });
}


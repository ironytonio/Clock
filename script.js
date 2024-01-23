const hourEl = document.querySelector(".needle.hour");
const minuteEl = document.querySelector(".needle.minute");
const secondEl = document.querySelector(".needle.second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

//якщо на даний момент на елементі <html> вже є клас "dark", то він видаляється, щоб перейти до світлого режиму, і навпаки.
toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Now",
  "Dec",
];

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${
    30 * hours + 0.5 * minutes
  }deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${6 * minutes}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${6 * seconds}deg)`;

  timeEl.innerHTML = `${hours}:${minutes}`;

  dateEl.innerHTML = `${days[day]} ,${months[month]} <span class="circle">${date}</span>`;
}

setInterval(setTime, 1000);

setTime();

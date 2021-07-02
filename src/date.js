const date__time = document.querySelector(".date__time");

export function getTime() {
  const time = new Date().toLocaleString();
  date__time.innerText = time;
}

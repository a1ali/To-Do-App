let date__time = document.querySelector('.date__time');

export function getTime() {
    let time = new Date().toLocaleString();
    date__time.innerText = time;
}
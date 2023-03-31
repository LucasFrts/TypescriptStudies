"use strict";
const video = document.querySelector('#video-principal');
if (video instanceof HTMLVideoElement) {
    console.log(video.volume);
}
const links = document.querySelectorAll('.link');
console.log(links instanceof NodeList);
const changeLink = (link) => {
    link.style.border = "1px solid red";
    link.style.color = "green";
};
links.forEach((link) => link instanceof HTMLElement ? changeLink(link) : null);

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog"
];

function disorganize() {
  document.querySelector(".bands").innerHTML = bands
    .map(band => `<li>${band}</li>`)
    .join("");
}
disorganize();
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}
let sortedBands = [...bands].sort();
let connectorSortedBands = [...bands].sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
// if (strip(a) > strip(b)) {
//     return 1;
// } else {
//     return -1;
//}
document.getElementById('unsorted').addEventListener("click", () => disorganize());

document.getElementById('sort').addEventListener("click", () => {
  document.querySelector(".bands").innerHTML = sortedBands
    .map(band => `<li>${band}</li>`)
    .join("");
});

document.getElementById('sortWithout').addEventListener("click", () => {
  document.querySelector(".bands").innerHTML = connectorSortedBands
    .map(band => `<li>${band}</li>`)
    .join("");
});

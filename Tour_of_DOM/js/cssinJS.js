// const sections = document.getElementsByTagName("section");
const sections = document.querySelectorAll("section");
// console.log(sections);

for (const section of sections) {
  console.log(section);
  section.style.backgroundColor = "lightblue";
  section.style.border = "3px solid green";
  section.style.marginBottom = "20px";
  section.style.borderRadius = "20px";
  section.style.padding = "10px";
}

//Dynamic Class
// for (const section of sections) {
//   section.classList.add("section-card");
// }

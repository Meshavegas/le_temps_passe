const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      //       entry.target.classList.remove("hidden");
    }
  });
});

const hiddentElemtsL = document.querySelectorAll(".hidden");
const hiddentElemtsR = document.querySelectorAll(".hidden-right");
const hiddentElemtsU = document.querySelectorAll(".hidden-up");
const hiddentElemtsB = document.querySelectorAll(".hidden-botom");
hiddentElemtsL.forEach((e) => observer.observe(e));
hiddentElemtsR.forEach((e) => observer.observe(e));
hiddentElemtsU.forEach((e) => observer.observe(e));
hiddentElemtsB.forEach((e) => observer.observe(e));

let main = document.querySelector(".container");
let div = document.querySelector(".div1");
let but = document.querySelector(".button");

but.addEventListener("click", function () {
  div.remove();
  for (let i = 0; i <= 1000; i++) {
    let a = document.createElement("div");
    main.appendChild(a);
    a.classList.add("style");

    function randomColor() {
      let color = [];
      for (let x = 0; x < 3; x++) {
        color.push(Math.floor(Math.random() * 256));
      }
      return "rgb(" + color.join(", ") + ")";
    }

    a.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = randomColor();
    });
    a.addEventListener("mouseout", (event2) => {
      event2.target.style.backgroundColor = "black";
    });
  }
});

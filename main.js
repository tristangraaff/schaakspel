const boardVisualisation = [
  11, 12, 13, 14 ,15, 16, 17, 18,
  21, 22, 23, 24, 25, 26, 27, 28,
  31, 32, 33, 34, 35, 36, 37, 38,
  41, 42, 43, 44, 45, 46, 47, 48,
  51, 52, 53, 54, 55, 56, 57, 58,
  61, 62, 63, 64, 65, 66, 67, 68,
  71, 72, 73, 74, 75, 76, 77, 78,
  81, 82, 83, 84, 85, 86, 87, 88
]

const IndividualBoxClasses = {
  counter: 1,
  allBoxes: document.querySelectorAll(".box"),
  addClassesToElements: function() {
    console.log(this.allBoxes);
    for (element of this.allBoxes) {
      const className = element.className.split(" ");
      element.classList.add(className[1] + this.counter);
      this.counter++;
      if (this.counter === 9) this.counter = 1;
    }
  }
}

IndividualBoxClasses.addClassesToElements();
console.log(IndividualBoxClasses.allBoxes);

// let pieceIsSelected = false; <--- werken met state

const allBoxes = document.querySelectorAll(".box")
let pieceToBeMoved = null;
let pieceClassArray;

for (let item of allBoxes) {
  item.addEventListener("click", (event) => {
    if (event.target.textContent === "♙") {
      pieceClassArray = event.target.className.split(" ");
      console.log(pieceClassArray);
      pieceToBeMoved = "♙";
    }
    if (event.target.textContent === "") {
      if (pieceToBeMoved === null) return;
      event.target.innerText = pieceToBeMoved;
      const oldPieceLocation = document.querySelector("." + pieceClassArray[pieceClassArray.length - 1]);
      console.log(oldPieceLocation);
      oldPieceLocation.innerHTML = "";
      pieceToBeMoved = null;
    }
  })
}
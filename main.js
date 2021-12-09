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
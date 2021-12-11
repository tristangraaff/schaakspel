const boardVisualisation = [
  10, 11, 12, 13 ,14, 15, 16, 17,
  21, 22, 23, 24, 25, 26, 27, 28,
  31, 32, 33, 34, 35, 36, 37, 38,
  41, 42, 43, 44, 45, 46, 47, 48,
  51, 52, 53, 54, 55, 56, 57, 58,
  61, 62, 63, 64, 65, 66, 67, 68,
  71, 72, 73, 74, 75, 76, 77, 78,
  81, 82, 83, 84, 85, 86, 87, 88                                                                                                                                                                                                       
]

//dit mag niet dynamisch worden toegevoegd omdat het permanent is
const IndividualBoxClasses = {
  counter: 0,
  allBoxes: document.querySelectorAll(".box"),
  addClassesToElements: function() {
    console.log(this.allBoxes);
    for (element of this.allBoxes) {
      const className = element.className.split(" ");
      element.classList.add(className[1] + this.counter);
      this.counter++;
      if (this.counter === 8) this.counter = 0;
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

class Game {
  constructor(pieces) {
    for (let piece of pieces) {
      console.log(piece.position);
      console.log(piece.name);
      console.log(piece.color);
      console.log(piece.rank);
      console.log(piece.img)

      // piece.addEventListener("click", () => {
      
      // })
    }

  }
}

class Piece {
  constructor(position, name, color, rank, img) {
    this.position = position;
    this.name = name;
    this.color = color;
    this.rank = rank;
    this.img = document.querySelector(".pawn_white_1");
  }

  getAllowedPawnMoves() {
    const position = this.position;
    console.log(position);
    let allowMoves = [];
    if (this.color === "white") {
      allowMoves.push(position - 10);
      if (position >= 70 && position <= 77) {
        allowMoves.push(position - 20);
      } 
    }
    if (this.color === "black") {
      allowMoves.push(position + 10);
      if (position >= 20 && position <= 27) {
        allowMoves.push(position + 20);
      } 
    }
    console.log(allowMoves);
  }
}

const pawn1 = new Piece(71, "pawn_white", "white", 1, "img");
console.log(pawn1.valueOf());
console.log(pawn1.img);
console.log(pawn1.getAllowedPawnMoves());



// const pawnLegalMoves = () => {
//   if (pawn1.color === "white") {
//     if (divElement.classList === box_71) const legalMoves = [position - 10, position - 20]; 
//     else const legalMoves = [position - 10];
//   }
// }

const startNewGame = new Game([pawn1]);
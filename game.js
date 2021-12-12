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

// let pieceClassArray;

class Game {
  constructor(pieces) {
    this.clickedPiece = null;
    this.boxes = document.querySelectorAll(".box");
    for (let piece of pieces) {
      console.log(piece.position);
      console.log(piece.name);
      console.log(piece.color);
      console.log(piece.rank);
      console.log(piece.img)
      console.log(piece)

      piece.img.addEventListener("click", () => {
        this.clickedPiece = piece;
        console.log(this.clickedPiece);
        piece.getAllowedPawnMoves();
      })
    }
    for (let box of this.boxes) {
      box.addEventListener("click", () => {
        if (box.childNodes === []) {
          // add this.clickedPiece here
        }
      })
    }
  }
}

class Piece {
  constructor(position, name, color, rank) {
    this.position = position;
    this.name = name;
    this.color = color;
    this.rank = rank;
    this.img = document.querySelector(".pawn_white_1");
  }

  getAllowedPawnMoves() {
    let allowedMoves = [];
    if (this.color === "white") {
      allowedMoves.push(this.position - 10);
      if (this.position >= 70 && this.position <= 77) {
        allowedMoves.push(this.position - 20);
      } 
    }
    if (this.color === "black") {
      allowedMoves.push(this.position + 10);
      if (this.position >= 20 && this.position <= 27) {
        allowedMoves.push(this.position + 20);
      } 
    }
    console.log(allowedMoves)
    return allowedMoves;
  }
}

const pawn1 = new Piece(70, "pawn_white", "white", 1);

console.log(pawn1.valueOf());
console.log(pawn1.img);
console.log(pawn1.getAllowedPawnMoves());

const startNewGame = new Game([pawn1]);
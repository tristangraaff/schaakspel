class Piece {
  constructor(position, name, color, rank, img) {
    this.position = position;
    this.name = name;
    this.color = color;
    this.rank = rank;
    this.img = document.querySelector(this.img);
  }
}

const pawn = new Piece();

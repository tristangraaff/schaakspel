class Draggable {

  constructor() {
      this.figure = document.querySelectorAll('.pawn');
      this.box = document.querySelectorAll('.box');
      
      this._addEventListener();
  }

  _addEventListener() {
      this.box.forEach(element => {
          element.addEventListener('dragenter', this.dragenter)
          element.addEventListener('dragleave', this.dragleave)
          element.addEventListener('dragover', this.dragover)
          element.addEventListener('drop', this.drop)
      });

      this.figure.forEach(element => {
        element.addEventListener('dragstart', this.dragstart);
        element.addEventListener('dragend', this.dragend);
      })
      
  }

  dragstart(e) {
      this.classList.add('drag_start');
     setTimeout(() => {
        this.classList.add('invisible');
     }, 0);
  }

  dragend(e) {
      console.log('dragend')
      this.classList.remove('invisible');
      this.classList.remove('drag_start');
  }

  dragenter(e) {
      e.preventDefault();
      
      console.log('dragenter')
       this.classList.add('drag_enter');
  }

  dragleave(e) {
      console.log('dragleave')
      this.classList.remove('drag_enter');
  }

  dragover(e) {
      e.preventDefault();
      console.log('dragover')
  }

  drop() {
       let figure = document.querySelector('.figure');
       this.classList.remove('drag_enter')
      this.append(figure)
  }

  static init() {
      return new this();
  }
}


document
   .addEventListener('load', Draggable.init());


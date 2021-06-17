import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {
  currentSnake: number[] | undefined;
  direction: number | undefined;
  grid: any;
  score: any;
  startButton: any;
  square: any;
  squares: number[] | undefined;
  width: number | undefined;
  appleIndex: number | undefined;
  intervalTime: number | undefined
  speed: number | undefined;
  tail: number[] | undefined;
  timerId: any;

  constructor() { }

  ngOnInit(): void {
    this.grid = document.querySelector('.grid')
    this.startButton = document.getElementById('start')
    this.score = document.getElementById('score')
    this.squares = []
    this.currentSnake = [2,1,0]
    this.direction = 1
    this.width = 10
    this.appleIndex = 0
    this.intervalTime = 1000
    this.speed = 1
    this.tail = []
    this.timerId = setInterval(move, this.intervalTime)

    function createGrid(this: any) {
      for (let i=0; i < 100; i++) {
        this.square = document.createElement('div')
        this.square.classList.add('square')
        this.grid.appendChild(this.square)
        this.squares.push(this.square)
      }
    }
    createGrid()

    // @ts-ignore
    this.currentSnake.forEach(index => this.squares[index].classList.add('snake'))

    function startGame(this: any) {
      // this.currentSnake.forEach(this.index => this.squares[this.index].classList.remove('snake'))
      this.squares[this.appleIndex].classList.remove('apple')
      clearInterval(this.timerId)
      this.currentSnake = [2,1,0]
      this.score = 0
      this.scoreDisplay.textContent = this.score
      this.direction = 1
      this.intervalTime = 1000
      generateApples()
      // this.currentSnake.forEach(this.index => this.squares[this.index].classList.add('snake'))
      this.timerId = setInterval(move, this.intervalTime)
    }

    function move(this: any) {
      if (
        (this.currentSnake[0] + this.width >= this.width*this.width && this.direction === this.width) ||
        (this.currentSnake[0] % this.width === this.width-1 && this.direction === 1) ||
        (this.currentSnake[0] % this.width === 0 && this.direction === -1) ||
        (this.currentSnake[0] - this.width < 0 && this.direction === -this.width) ||
        this.squares[this.currentSnake[0] +this.direction].classList.contains('snake')
      )
      return clearInterval(this.timerId)
      this.tail = this.currentSnake.pop()
      this.squares[this.tail].classList.remove('snake')
      this.currentSnake.unshift(this.currentSnake[0] + this.direction)
      if (this.squares[this.currentSnake[0]].classList.contains('apple')) {
        this.squares[this.currentSnake[0]].classList.remove('apple')
        this.squares[this.tail].classList.add('snake')
        console.log(this.tail)
        this.currentSnake.push(this.tail)
        console.log(this.currentSnake)
        generateApples()
        this.score++
        this.scoreDisplay.textContent = this.score
        clearInterval(this.timerId)
        console.log(this.intervalTime)
        this.intervalTime = this.intervalTime * this.speed
        console.log(this.intervalTime)
        this.timerId = setInterval(move, this.intervalTime)
      }
      const tail = this.currentSnake.pop()
      this.squares[tail].classList.remove('snake')
      this.currentSnake.unshift(this.currentSnake[0] + this.direction)
      this.squares[this.currentSnake[0]].classList.add('snake')
    }
    move()

    function generateApples(this: any) {
      do {
        this.appleIndex = Math.floor(Math.random() * this.squares.length)
      } while (this.squares[this.appleIndex].classList.contains('snake'))
      this.squares[this.appleIndex].classList.add('apple')
    }
    generateApples()

    function control(e: { keyCode: number; }) {
      if (e.keyCode === 39) {
        console.log('right pressed')
      } else if (e.keyCode === 38) {
        console.log('up pressed')
      } else if (e.keyCode === 37) {
        console.log('left pressed')
      } else if (e.keyCode === 40) {
        console.log('down pressed')
      }
    }

    document.addEventListener('keyup', control)
    this.startButton.addEventListener('click', startGame())
  }
}

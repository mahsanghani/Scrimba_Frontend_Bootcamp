import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacman',
  templateUrl: './pacman.component.html',
  styleUrls: ['./pacman.component.css']
})
export class PacmanComponent implements OnInit {
  width: number = 28;
  grid: any = document.querySelector('.grid');
  scoreDisplay: any = document.getElementById('score');
  squares: string[] = [];
  score: number = 0;

  layout: number[] = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]

  constructor() { }

  ngOnInit(): void {
    //create board
    function createBoard(this: any) {
      //for loop
      for (let i = 0; i < this.layout.length; i++) {
        //create a square
        const square = document.createElement('div')
        //put square in grid
        this.grid.appendChild(square)
        //put square in squares array
        this.squares.push(square)

        if (this.layout[i] === 0) {
          this.squares[i].classList.add('pac-dot')
        } else if (this.layout[i] === 1) {
          this.squares[i].classList.add('wall')
        } else if (this.layout[i] === 2) {
          this.squares[i].classList.add('ghost-lair')
        } else if (this.layout[i] === 3) {
          this.squares[i].classList.add('power-pellet')
        }
      }
    }
    createBoard()

    // down - 40
    // up key - 38
    // left - 37
    // right - 39

    //starting position of pacman
    let pacmanCurrentIndex = 490
    // this.squares[pacmanCurrentIndex].classList.add('pacman')

    function control(this: any, e: any) {
      this.squares[pacmanCurrentIndex].classList.remove('pacman')
      switch(e.keyCode) {
        case 40:
          console.log('pressed down')
          if (
            !this.squares[pacmanCurrentIndex + this.width].classList.contains('ghost-lair') &&
            !this.squares[pacmanCurrentIndex + this.width].classList.contains('wall') &&
            pacmanCurrentIndex + this.width < this.width * this.width
          )
            pacmanCurrentIndex += this.width
          break
        case 38:
          console.log('pressed up')
          if (
            !this.squares[pacmanCurrentIndex - this.width].classList.contains('ghost-lair') &&
            !this.squares[pacmanCurrentIndex - this.width].classList.contains('wall') &&
            pacmanCurrentIndex - this.width >=0
          )
            pacmanCurrentIndex -= this.width
          break
        case 37:
          console.log('pressed left')
          if(
            !this.squares[pacmanCurrentIndex -1].classList.contains('ghost-lair') &&
            !this.squares[pacmanCurrentIndex -1].classList.contains('wall') &&
            pacmanCurrentIndex % this.width !==0
          )
            pacmanCurrentIndex -=1
          if (pacmanCurrentIndex === 364) {
            pacmanCurrentIndex = 391
          }
          break
        case 39:
          console.log('pressed right')
          if(
            !this.squares[pacmanCurrentIndex +1].classList.contains('ghost-lair') &&
            !this.squares[pacmanCurrentIndex +1].classList.contains('wall') &&
            pacmanCurrentIndex % this.width < this.width -1
          )
            pacmanCurrentIndex +=1
          if (pacmanCurrentIndex === 391) {
            pacmanCurrentIndex = 364
          }
          break
      }
      this.squares[pacmanCurrentIndex].classList.add('pacman')
      pacDotEaten()
      powerPelletEaten()
      checkForWin()
      checkForGameOver()
    }
    document.addEventListener('keyup', control)


    function pacDotEaten(this: any) {
      if (this.squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        this.squares[pacmanCurrentIndex].classList.remove('pac-dot')
        this.score++
        this.scoreDisplay.innerHTML = this.score
      }
    }

    function powerPelletEaten(this: any) {
      //if square pacman is in contains a power pellet
      if (this.squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        //remove power pellet class
        this.squares[pacmanCurrentIndex].classList.remove('power-pellet')
        //add a score of 10
        this.score += 10
        //change each of the four ghosts to isScared
        this.ghosts.forEach((ghost: { isScared: boolean; }) => ghost.isScared = true)
        //use setTimeout to unscare ghosts after 10 seconds
        setTimeout(unScareGhosts, 10000)
      }
    }

    function unScareGhosts() {
      ghosts.forEach(ghost => ghost.isScared = false)
    }


    class Ghost {
      className: string;
      startIndex: number;
      speed: number;
      currentIndex: number;
      isScared: boolean;
      timerId: number;
      constructor(className: string, startIndex: number, speed: number) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
      }
    }

    const ghosts = [
      new Ghost('blinky', 348, 250),
      new Ghost('pinky', 376, 400),
      new Ghost('inky', 351, 300),
      new Ghost('clyde', 379, 500)
    ]

    //draw my ghosts onto my grid
    /*ghosts.forEach(ghost => {
      this.squares[this.ghost.currentIndex].classList.add(this.ghost.className)
      this.squares[this.ghost.currentIndex].classList.add('ghost')
    })*/

    // move the ghosts
    ghosts.forEach(ghost => moveGhost(ghost))

    function moveGhost(this: any, ghost: Ghost) {
      console.log('moved ghost')
      const directions = [-1, +1, -this.width, +this.width]
      let direction = directions[Math.floor(Math.random() * directions.length)]
      console.log(direction)

      ghost.timerId = setInterval(() => {
        // all our code
        // if the next square does NOT contain a wall and does not contain a ghost
        if (
          !this.squares[ghost.currentIndex + direction].classList.contains('wall') &&
          !this.squares[ghost.currentIndex + direction].classList.contains('ghost')
        ) {
          // remove any ghost
          this.squares[ghost.currentIndex].classList.remove(ghost.className)
          this.squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
          // add direction to current Index
          ghost.currentIndex += direction
          // add ghost class
          this.squares[ghost.currentIndex].classList.add(ghost.className)
          this.squares[ghost.currentIndex].classList.add('ghost')
        } else direction = directions[Math.floor(Math.random() * directions.length)]

        //if the ghost is currently scared
        if (ghost.isScared) {
          this.squares[ghost.currentIndex].classList.add('scared-ghost')
        }

        //if the ghost is current scared AND pacman is on it
        if (ghost.isScared && this.squares[ghost.currentIndex].classList.contains('pacman')) {
          //remove classnames - ghost.className, 'ghost', 'scared-ghost'
          this.squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
          // change ghosts currentIndex back to its startIndex
          ghost.currentIndex = ghost.startIndex
          //add a score of 100
          this.score +=100
          //re-add classnames of ghost.className and 'ghost' to the ghosts new postion
          this.squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }
        checkForGameOver()
      }, ghost.speed )
    }

    // check for game over
    function checkForGameOver(this: any) {
      //if the square pacman is in contains a ghost AND the square does NOT contain a scared ghost
      if (
        this.squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !this.squares[pacmanCurrentIndex].classList.contains('scared-ghost')
      ) {
        //for each ghost - we need to stop it moving
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        //remove eventlistener from our control function
        document.removeEventListener('keyup', control)
        //tell user the game is over
        this.scoreDisplay.innerHTML = 'You LOSE'
      }
    }

    // check for win
    function checkForWin(this: any) {
      if (this.score === 274) {
        //stop each ghost
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        //remove the eventListener for the control function
        document.removeEventListener('keyup', control)
        //tell our user we have won
        this.scoreDisplay.innerHTML = 'You WON!'
      }
    }
  }
}

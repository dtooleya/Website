import { Component, Output, EventEmitter } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-snake',
  imports: [MatMenuModule],
  templateUrl: './snake.html',
  styleUrl: './snake.css'
})
export class Snake {
    rowCount = 20;
    colCount = 20;
    rows = Array.from({ length: this.rowCount }, (_, i) => i + 1);
    cols = Array.from({ length: this.colCount }, (_, i) => i + 1);
    isRunning = false;
    direction = 'RIGHT';
    head = { x: 10, y: 10 };
    snakeBody = [{ x: 10, y: 10 }];
    food = { x: 5, y: 5 };
    length = 1;

    constructor() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight' && this.direction !== 'LEFT') {
                this.direction = 'RIGHT';
            } else if (event.key === 'ArrowLeft' && this.direction !== 'RIGHT') {
                this.direction = 'LEFT';
            } else if (event.key === 'ArrowUp' && this.direction !== 'DOWN') {
                this.direction = 'UP';
            } else if (event.key === 'ArrowDown' && this.direction !== 'UP') {
                this.direction = 'DOWN';
            }
        });
     }

    startGame() {
        this.gameCycle();
        this.addFood();
        this.isRunning = true;
    }

    calculateSnakePosition() {
        if (this.direction === 'RIGHT') {
            this.head.x += 1;
        } else if (this.direction === 'LEFT') {
            this.head.x -= 1;
        } else if (this.direction === 'UP') {
            this.head.y -= 1;
        } else if (this.direction === 'DOWN') {
            this.head.y += 1;
        }

        this.snakeBody.push({ x: this.head.x, y: this.head.y });
        if (this.snakeBody.length > this.length) {
            this.snakeBody.shift();
        }
        if (this.head.x === this.food.x && this.head.y === this.food.y) {
            this.length += 1;
            let food = document.getElementById(this.food.x + ',' + this.food.y);
            if (food) {
                food.classList.remove('food');
            }
            this.food = { x: Math.floor(Math.random() * this.rowCount) + 1, y: Math.floor(Math.random() * this.colCount) + 1 };
            this.addFood();
        }

        let head = document.getElementById(this.head.x + ',' + this.head.y);
        if (head) {
            head.classList.add('snake');
        }
    }

    addFood() {
        let html = document.getElementById(this.food.x + ',' + this.food.y);
        if (html) {
            html.classList.add('food');
        }
    }

    gameCycle() {
        setTimeout(() => {
            this.calculateSnakePosition();
            // this.addFood();
            if (this.isRunning) {
                this.gameCycle();
            }
        }, 500);
    }

}

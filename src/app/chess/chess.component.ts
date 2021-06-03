import { Component, OnInit } from '@angular/core';

declare var ChessBoard: any;

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {
  // title: 'chess';
  board1: any;
  board2: any;
  constructor() { }

  ngOnInit(): void {
    this.board1 = ChessBoard('board1', {
      position: 'start',
      draggable: true
    });

    this.board2 = ChessBoard('board2', {
      draggable: true,
      dropOffBoard: 'trash',
      sparePieces: true
    })

    $('#startBtn').on('click', this.board2.start)
    $('#clearBtn').on('click', this.board2.clear)
  }
}

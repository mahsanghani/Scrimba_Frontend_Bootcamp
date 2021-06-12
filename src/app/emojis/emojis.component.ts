import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emojis',
  templateUrl: './emojis.component.html',
  styleUrls: ['./emojis.component.css']
})
export class EmojisComponent implements OnInit {
  myEmojis: any;
  emojiContainer: any;
  emojiInput: any;
  pushBtn: any;
  unshiftBtn: any;
  popBtn: any;
  shiftBtn: any;

  constructor() {
    this.myEmojis = ["👨‍💻", "⛷", "🍲"]
    this.emojiContainer = document.getElementById("emoji-container")
    this.emojiInput = document.getElementById("emoji-input")
    this.pushBtn = document.getElementById("push-btn")
    this.unshiftBtn = document.getElementById("unshift-btn")
    this.popBtn = document.getElementById("pop-btn")
    this.shiftBtn = document.getElementById("shift-btn")
  }

  ngOnInit(): void {
    this.myEmojis = ["👨‍💻", "⛷", "🍲"]

    const renderEmojis = () => {
      this.emojiContainer = document.getElementById("emoji-container")
      this.emojiContainer.innerHTML = ""
      for (let i = 0; i < this.myEmojis.length; i++) {
        let emoji = document.createElement('span')
        emoji.textContent = this.myEmojis[i]
        this.emojiContainer.append(emoji)
      }
    }

    renderEmojis()

    this.pushBtn = document.getElementById("push-btn")
    this.pushBtn.addEventListener("click", () =>{
      this.emojiInput = document.getElementById("emoji-input")
      if (this.emojiInput.value) {
        this.myEmojis.push(this.emojiInput.value)
        this.emojiInput.value = ""
        renderEmojis()
      }
    })

    this.unshiftBtn = document.getElementById("unshift-btn")
    this.unshiftBtn.addEventListener("click", () =>{
      this.emojiInput = document.getElementById("emoji-input")
      if (this.emojiInput.value) {
        this.myEmojis.unshift(this.emojiInput.value)
        this.emojiInput.value = ""
        renderEmojis()
      }
    })

    this.popBtn = document.getElementById("pop-btn")
    this.popBtn.addEventListener("click", () =>{
      this.myEmojis.pop()
      renderEmojis()
    })

    this.shiftBtn = document.getElementById("shift-btn")
    this.shiftBtn.addEventListener("click", () =>{
      this.myEmojis.shift()
      renderEmojis()
    })
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emojis',
  templateUrl: './emojis.component.html',
  styleUrls: ['./emojis.component.css']
})
export class EmojisComponent implements OnInit {
  emojiContainer: any;
  emojiInput: any;
  popBtn: any;
  pushBtn: any;
  shiftBtn: any;
  unshiftBtn: any;

  constructor() {
    this.emojiContainer = "";
    this.emojiInput = "";
    this.popBtn = "";
    this.pushBtn = "";
    this.shiftBtn = "";
    this.unshiftBtn = "";
  }

  ngOnInit(): void {
    const myEmojis = ["👨‍💻", "⛷", "🍲"]

    const renderEmojis = () => {
      const emojiContainer = document.getElementById("emoji-container")
      this.emojiContainer.innerHTML = ""
      for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        this.emojiContainer.append(emoji)
      }
    }

    renderEmojis()

    const pushBtn = document.getElementById("push-btn")
    this.pushBtn.addEventListener("click", () =>{
      const emojiInput = document.getElementById("emoji-input")
      if (this.emojiInput.value) {
        myEmojis.push(this.emojiInput.value)
        this.emojiInput.value = ""
        renderEmojis()
      }
    })

    const unshiftBtn = document.getElementById("unshift-btn")
    this.unshiftBtn.addEventListener("click", () =>{
      const emojiInput = document.getElementById("emoji-input")
      if (this.emojiInput.value) {
        myEmojis.unshift(this.emojiInput.value)
        this.emojiInput.value = ""
        renderEmojis()
      }
    })

    const popBtn = document.getElementById("pop-btn")
    this.popBtn.addEventListener("click", function(){
      myEmojis.pop()
      renderEmojis()
    })

    const shiftBtn = document.getElementById("shift-btn")
    this.shiftBtn.addEventListener("click", function(){
      myEmojis.shift()
      renderEmojis()
    })
  }
}

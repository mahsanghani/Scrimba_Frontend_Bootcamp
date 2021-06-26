import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boredbot',
  templateUrl: './boredbot.component.html',
  styleUrls: ['./boredbot.component.css']
})
export class BoredbotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    function getActivityIdea() {
      fetch("https://apis.scrimba.com/bored/api/activity")
        .then(res => res.json())
        .then(data => {
          // @ts-ignore
          document.getElementById("idea").textContent = data.activity
          document.body.classList.add("fun")
          // @ts-ignore
          document.getElementById("title").textContent = "🦾 HappyBot🦿"
        })
    }
    // @ts-ignore
    document.getElementById("bored-button").addEventListener("click", getActivityIdea)
  }
}

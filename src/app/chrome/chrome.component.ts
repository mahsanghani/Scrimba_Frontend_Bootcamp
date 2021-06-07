import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrome',
  templateUrl: './chrome.component.html',
  styleUrls: ['./chrome.component.css']
})
export class ChromeComponent implements OnInit {
  box: any;
  container: any;
  inputBtn: any;
  inputEl: any;
  myLeads: string[] = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
  ulEl: any;

  constructor() {
    this.box = " "
    this.inputBtn = " "
    this.inputEl = " "
    this.box = document.getElementById("box")
    this.container = document.getElementById("container")
    this.inputBtn = document.getElementById("input-btn")
    this.inputEl = document.getElementById("input-el")
    this.ulEl = document.getElementById("ul-el")
  }

  ngOnInit(): void {
    this.inputBtn.addEventListener("click", () => {
      console.log("Button clicked from addEventListener")
      this.myLeads.push("www.awesomelead.com")
      console.log(this.myLeads)
    })
    this.box.addEventListener("click", function(){
      console.log("I want to open the box!")
    })
    for (let i = 0; i < this.myLeads.length; i++) {
      this.ulEl.innerHTML = "<li>" + this.myLeads[i] + "</li>"
      const li = document.createElement("li")
      li.textContent = this.myLeads[i]
      this.ulEl.append(li)
    }
    this.container.innerHTML = "<button>Buy!</button>"

    const basePrice = 520
    const discount = 120
    let shippingCost = 12
    let shippingTime = "5-12 days"
    shippingCost = 15
    shippingTime = "7-14 days"
    const fullPrice = basePrice - discount + shippingCost
    console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)
  }
  buy() {
    this.container.innerHTML += "<p>Thank you for buying!</p>"
  }
}

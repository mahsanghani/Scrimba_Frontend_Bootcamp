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
  listItems: string = "";

  constructor() {
    this.box = " "
    this.inputBtn = " "
    this.inputEl = " "
    this.listItems = ""
    this.box = document.getElementById("box")
    this.container = document.getElementById("container")
    this.inputBtn = document.getElementById("input-btn")
    this.inputEl = document.getElementById("input-el")
    this.ulEl = document.getElementById("ul-el")
  }

  ngOnInit(): void {
    this.inputBtn.addEventListener("click", () => {
      console.log("Button clicked from addEventListener")
      this.myLeads.push(this.inputEl.value)
      this.inputEl.value = ""
      console.log(this.myLeads)
    })
    this.box.addEventListener("click", function(){
      console.log("I want to open the box!")
    })

    this.renderLeads()

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

  renderLeads() {
    for (let i = 0; i < this.myLeads.length; i++) {
      this.ulEl.innerHTML = "<li><a target='_blank' href='" + this.myLeads[i] + "'>" + this.myLeads[i] + "</a></li>"
      this.listItems += `
            <li>
                <a target='_blank' href='${this.myLeads[i]}'>
                    ${this.myLeads[i]}
                </a>
            </li>
        `
      const li = document.createElement("li")
      li.textContent = this.myLeads[i]
      this.ulEl.append(li)
    }
    this.ulEl.innerHTML = this.listItems
    this.container.innerHTML = "<button>Buy!</button>"
  }
}

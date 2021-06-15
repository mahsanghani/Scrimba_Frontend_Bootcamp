import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrome',
  templateUrl: './chrome.component.html',
  styleUrls: ['./chrome.component.css']
})
export class ChromeComponent implements OnInit {
  box: any;
  container: any;
  deleteBtn: any;
  inputBtn: any;
  tabBtn: any;
  inputEl: any;
  ulEl: any;
  listItems: string = "";
  leads: string[]
  myLeads: string[] = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
  testLeads: string = `["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]`;

  constructor() {
    this.box = "a"
    this.inputBtn = "b"
    this.inputEl = "c"
    this.listItems = "d"
    this.leads = []
    this.tabBtn = document.getElementById("tab-btn")
    this.box = document.getElementById("box")
    this.container = document.getElementById("container")
    this.deleteBtn = document.getElementById("delete-btn")
    this.inputBtn = document.getElementById("input-btn")
    this.inputEl = document.getElementById("input-el")
    this.ulEl = document.getElementById("ul-el")
  }

  ngOnInit(): void {
    const tabs = [
      {url: "https://www.linkedin.com/in/per-harald-borgen/"}
    ]
    this.deleteBtn.addEventListener("dblclick", () => {
      localStorage.clear()
      this.myLeads = []
      this.render(this.myLeads)
    })
    this.inputBtn.addEventListener("click", () => {
      console.log("Button clicked from addEventListener")
      this.myLeads.push(this.inputEl.value)
      this.inputEl.value = ""
      console.log(this.myLeads)
    })
    this.box.addEventListener("click", function(){
      console.log("I want to open the box!")
    })
    this.tabBtn.addEventListener("click", () =>{
      console.log(tabs[0].url)
      /*chrome.tabs.query({active: true, currentWindow: true}, (tabs: { url: string; }[]) => {
        this.myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(this.myLeads) )
        this.render(this.myLeads)
      });*/
    })

    this.testLeads = JSON.parse(this.testLeads)
    // this.testLeads.push("www.lead2.com")
    this.testLeads = JSON.stringify(this.testLeads)
    console.log(typeof this.testLeads)

    localStorage.clear()
    let leadsFromLocalStorage = JSON.parse( <string>localStorage.getItem("this.myLeads") )
    console.log(leadsFromLocalStorage)
    localStorage.setItem("myLeads", JSON.stringify(this.myLeads) )

    if (leadsFromLocalStorage) {
      this.myLeads = leadsFromLocalStorage
      this.render(this.myLeads)
    }
    let name = localStorage.getItem("myName")
    console.log(name)
    localStorage.clear()
  }

  buy() {
    this.container.innerHTML += "<p>Thank you for buying!</p>"
  }

  render(leads: string[]) {
    for (let i = 0; i < this.leads.length; i++) {
      this.ulEl.innerHTML = "<li><a target='_blank' href='" + this.leads[i] + "'>" + this.leads[i] + "</a></li>"
      this.listItems += `
            <li>
                <a target='_blank' href='${this.leads[i]}'>
                    ${this.leads[i]}
                </a>
            </li>
        `
      const li = document.createElement("li")
      li.textContent = this.leads[i]
      this.ulEl.append(li)
    }
    this.ulEl.innerHTML = this.listItems
    this.container.innerHTML = "<button>Buy!</button>"
  }
}

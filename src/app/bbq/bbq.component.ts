import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bbq',
  templateUrl: './bbq.component.html',
  styleUrls: ['./bbq.component.css']
})
export class BbqComponent implements OnInit {
  emailCollectorForm: any;
  ourFormData: any;
  updatedContentContainer: any;
  userEmailAddress: string;
  userFirstName: string;

  constructor() {
    this.emailCollectorForm = document.getElementById("Email-Collector")
    this.ourFormData = new FormData()
    this.updatedContentContainer = document.getElementById("Main-Content")
    this.userEmailAddress = ""
    this.userFirstName = ""
  }

  ngOnInit(): void {
    this.emailCollectorForm.addEventListener("submit", (event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
      event.preventDefault()
      this.ourFormData = new FormData(event.target)
      this.userFirstName = this.ourFormData.get("firstName")
      this.userEmailAddress = this.ourFormData.get("emailAddress")
      let updatedHtmlContent = `
        <h2>Congratulations, ${this.userFirstName}!</h2>
        <p>You're on your way to becoming a BBQ Master!</p>
        <p class="fine-print">You will get weekly BBQ tips sent to: ${this.userEmailAddress}</p>`
      this.updatedContentContainer.innerHTML = updatedHtmlContent
    })
  }
}

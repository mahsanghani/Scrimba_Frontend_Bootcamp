import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  usernameInput: any;
  searchInput: any;

  constructor() {
    // @ts-ignore
    this.usernameInput = document.getElementById('usernameInput').addEventListener('keyup', function(event) {
      // @ts-ignore
      let username = event.target.value.toLowerCase();
      console.log(username);
    });
    // @ts-ignore
    this.searchInput = document.getElementById("searchInput").addEventListener("keyup", function(event) {
      // @ts-ignore
      let searchQuery = event.target.value.toLowerCase();
      let allNamesDOMCollection = document.getElementsByClassName('name');
      console.log(allNamesDOMCollection[1].textContent);
      for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        // @ts-ignore
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        console.log(currentName);
      }
    });
  }

  ngOnInit(): void {
  }

}

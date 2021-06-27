import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  color: string = ''
  colors: string = ''
  photo: string = ''
  photos: any;
  response: any;
  selectedPhotos: string[] = ['']
  user: string = ''

  constructor() { }

  ngOnInit(): void {
    function displayColors(colors: any[]) {
      let myColorsHtml = colors.map(color => {
        return `<div class="my-color" style="background-color: ${color.value}"></div>`
      }).join('')

      console.log(myColorsHtml)

      document.body.innerHTML = `<div class="my-colors">
        ${myColorsHtml}
    </div>`
    }

    async function getColors(colorCount: number) {
      let response = await fetch(`https://api.noopschallenge.com/hexbot?count=${colorCount}`)
      let data = await response.json()
      let colors = data.colors

      displayColors(colors)
    }

    let colorCount = 100
    getColors(colorCount)

    async function getPhotos() {
      let response = await fetch("photos.json")
      let photos = await response.json()
      return photos
    }

    function getMyPhotosHtml(photos: any[]) {
      let myPhotosHtml = photos.map(photo => {
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}"/>`
      }).join('')
      return `<div class="my-photos">${myPhotosHtml}</div>`
    }

    getPhotos().then(photos => {
      let myPhotosHtml = getMyPhotosHtml(photos)
      document.body.innerHTML = `<div class="my-gallery">
        <img id="my-selected-photo" class="my-photo"
        src="https://picsum.photos/id/${photos[2].id}/300/300" />
        ${myPhotosHtml}
    </div>`

      let myPhotoImgs = Array.from(document.getElementsByClassName("my-photo"))
      myPhotoImgs.forEach(photoImg => {
        photoImg.addEventListener("click", e => {
          // let selectedPhotoSrc = photoImg.src.substr(0, photoImg.src.length - 7) + `300/300`
          let selectedPhoto = document.getElementById("my-selected-photo")
          // @ts-ignore
          selectedPhoto.src = selectedPhotoSrc
          // @ts-ignore
          selectedPhoto.style.display = "inline"
        })
      })
    })

    async function getUsers() {
      let response = await fetch("users.json")
      let users = await response.json()
      return users
    }

    function getUserDiv(user: { username: any; }) {
      return `<div class="my-online-user">
        <div class="user-username">${user.username}</div>
        <div class="user-online"></div>
    </div>`
    }

    getUsers().then(users => {
      let sampleUser = users[0]

      document.body.innerHTML = `
    <div class="header">Header</div>
    <div class="my-online-users">
        ${users.map((user: { username: any; }) => getUserDiv(user)).join('')}
    </div>
    <div class="main-content">Main Content</div>
    <div class="footer">Footer</div>
    `
    })

    async function getUser() {
      let response = await fetch("user.json")
      let user = await response.json()
      console.log(user)
      return user
    }

    function displayUser(user: { name: any; username: any; company: { name: any; catchPhrase: any; bs: any; }; email: any; phone: any; website: any; address: { street: any; suite: any; city: any; zipcode: any; }; }) {
      document.body.innerHTML = `<div class="user-profile">
        <div class="user-profile-header">
            <div>${user.name}</div>
            <div>@${user.username}</div>
        </div>

        <div class="user-profile-company">
            <div>Company: ${user.company.name}</div>
            <div>${user.company.catchPhrase}</div>
            <div>${user.company.bs}</div>
        </div>

        <div class="user-profile-contact">
            <div>📧${user.email}</div>
            <div>📞${user.phone}</div>
            <div>💻${user.website}</div>
        </div>

        <div class="user-profile-address">
            <div>${user.address.street}, ${user.address.suite}</div>
            <div>${user.address.city} ${user.address.zipcode}</div>
        </div>
    </div>`
    }

    getUser().then(displayUser)

  }

}

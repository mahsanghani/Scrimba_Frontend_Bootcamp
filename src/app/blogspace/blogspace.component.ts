import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogspace',
  templateUrl: './blogspace.component.html',
  styleUrls: ['./blogspace.component.css']
})
export class BlogspaceComponent implements OnInit {
  postsArray: any[] = []
  titleInput: any = document.getElementById("post-title")
  bodyInput: any = document.getElementById("post-body")
  form: any = document.getElementById("new-post")

  constructor() {
  }

  ngOnInit(): void {
    const renderPosts = () => {
      let html = ""
      for (let post of this.postsArray) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
      }
      // @ts-ignore
      document.getElementById("blog-list").innerHTML = html
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts")
      .then(res => res.json())
      .then(data => {
        this.postsArray = data.slice(0, 5)
        renderPosts()
      })

    this.form.addEventListener("submit", (e: { preventDefault: () => void; }) => {
      e.preventDefault()
      const postTitle = this.titleInput.value
      const postBody = this.bodyInput.value
      const data = {
        title: postTitle,
        body: postBody
      }

      const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }

      fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
          this.postsArray.unshift(post)
          renderPosts()
          this.titleInput.value = ""
          this.bodyInput.value = ""
        })
    })
  }
}

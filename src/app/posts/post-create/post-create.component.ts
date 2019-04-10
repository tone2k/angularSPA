import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PostsService } from "../post.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']

})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = "";

  constructor(public postService: PostsService) {}

  onAddPost(form: NgForm){
if (form.invalid) {
  return;
}

    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // }
    this.postService.addPost(form.value.title, form.value.content)
  }
}

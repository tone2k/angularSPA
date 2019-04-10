import { Component, OnInit } from '@angular/core';

import {Post} from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  // DUMMY DATA
  // posts = [
  //   { title: 'First Post', content: 'This is the first post'},
  //   { title: 'Second Post', content: 'This is the second post' },
  //   { title: 'Third Post', content: 'This is the third post' }
  // ];

posts: Post[] = [];

  constructor(public postsService: PostsService) {}
  ngOnInit() {
    this.posts = this.postsService.getPost();
  }
}

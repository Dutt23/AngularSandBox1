import { Component, OnInit } from "@angular/core";
import { Post } from "../../models/Post";
import { PostService } from "../../services/post.service";
@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: "",
    body: ""
  };
  isEdit: boolean = false;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }
  editPost(post: Post) {
    this.isEdit = true;
    this.currentPost.editing = false;
    this.currentPost = post;
    this.currentPost.editing = true;
  }

  deletePost(post: Post) {
    this.postService.deletePost(post).subscribe(() => {
      this.posts.forEach((currentPost, index) => {
        this.posts.splice(index, 1);
      });
    });
  }

  onUpdatedPost(post: Post) {
    // current is the element in the loop
    // index is the iindex of the current item being iterated through the loop
    this.posts.forEach((current, index) => {
      if (post.id === current.id) {
        this.posts.splice(index, 1);
        // Removes the element at the spefcified index only the at the index.
        this.posts.unshift(post);
        this.isEdit = !this.isEdit;
        post.editing = !post.editing;
        this.currentPost = {
          id: 0,
          body: "",
          title: ""
        };
      }
    });
  }
}

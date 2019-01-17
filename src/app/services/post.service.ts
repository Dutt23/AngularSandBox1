import { Injectable } from "@angular/core";
// Before this make sure you import HttpModule into app.module
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../models/Post";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class PostService {
  postUrl: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postUrl, post, httpOptions);
  }

  updatePost(post: Post): Observable<Post> {
    const putUrl = `${this.postUrl}/${post.id}`;
    return this.http.put<Post>(this.postUrl, post, httpOptions);
  }
  deletePost(post: Post | number): Observable<Post> {
    const id = typeof post === "number" ? post : post.id;

    const deletUrl = `${this.postUrl}/${id}`;
    return this.http.delete<Post>(deletUrl, httpOptions);
  }
  getPost(id: number): Observable<Post> {
    const getPostUrl = `${this.postUrl}/${id}`;
    return this.http.get<Post>(getPostUrl, httpOptions);
  }
}

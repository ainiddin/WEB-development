import { Injectable , inject} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Post,Comment} from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  private apiUrl='https://jsonplaceholder.typicode.com/posts';
  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
  }
  getPost(id: number): Observable<Post>{
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }
  getComments(postId: number): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.apiUrl}/${postId}/comments`);  }
}

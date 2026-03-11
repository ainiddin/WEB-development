import { Component, OnInit, inject, signal } from '@angular/core';
import {PostService} from '../../services/post';
import {Post} from '../../models/post.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList implements OnInit {
  private postService = inject(PostService);

  posts = signal<Post[]>([]);
  isLoading = signal(true); // Состояние загрузки [cite: 56]

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts.set(data.slice(0, 20)); // Берем только 20 постов
      this.isLoading.set(false);
    });
  }
}

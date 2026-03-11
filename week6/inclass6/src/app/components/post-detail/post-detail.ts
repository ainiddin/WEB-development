import {Component, OnInit , signal , inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PostService} from '../../services/post';
import {Post,Comment} from '../../models/post.model';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetail {
    private route = inject(ActivatedRoute);
    private postService = inject(PostService);

    post = signal<Post | null>(null);
  comments = signal<Comment[]>([]);
  isLoading = signal(true);

  ngOnInit() {
    // Получаем id и конвертируем в число через + [cite: 124]
    const id = +this.route.snapshot.params['id'];

    // Загружаем данные [cite: 60]
    this.postService.getPost(id).subscribe(p => this.post.set(p));
    this.postService.getComments(id).subscribe(c => {
      this.comments.set(c);
      this.isLoading.set(false);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataFake, saveDataToLocalStorage } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  createdAt: string = ""; 
  comments: string[] = [];
  newComment: string = "";
  
  private id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.find(article => article.id === id);

    if (result) {
      this.photoCover = result.photoCover;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.createdAt = result.createdAt;
      this.comments = result.comments || []; 
    } else {
      // Redireciona para a página inicial se o post não for encontrado
      this.router.navigate(['/home']);
    }
  }

  addComment() {
    if (this.newComment.trim()) {
      this.comments.push(this.newComment); 
      const post = dataFake.find(post => post.id === this.id);
      if (post) {
        post.comments = this.comments; 
        saveDataToLocalStorage(); 
      }
      this.newComment = ""; 
    }
  }

  deletePost() {
    if (this.id) {
      const index = dataFake.findIndex(post => post.id === this.id);
      if (index !== -1) {
        dataFake.splice(index, 1); 
        saveDataToLocalStorage(); 
        this.router.navigate(['/home']); // Redireciona para a página inicial após excluir
      }
    }
  }
}
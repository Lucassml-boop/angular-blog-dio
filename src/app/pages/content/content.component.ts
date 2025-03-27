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
  
  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
    });

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoCover;
      this.createdAt = result.createdAt;
      this.comments = result.comments || []; 
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
        this.router.navigate(['/']); 
      }
    }
  }
}
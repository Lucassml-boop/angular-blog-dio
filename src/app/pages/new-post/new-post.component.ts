import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { dataFake, saveDataToLocalStorage } from '../../data/dataFake';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  post = {
    id: '',
    title: '',
    description: '',
    photoCover: '',
    createdAt: ''
  };
  selectedFile: File | null = null;

  constructor(private router: Router) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const maxPosts = 3;
    const cooldownTime = 60 * 60 * 1 * 1000; // 1 hora em milissegundos
    const postCount = parseInt(localStorage.getItem('postCount') || '0', 10);
    const lastPostTime = parseInt(localStorage.getItem('lastPostTime') || '0', 10);
    const currentTime = Date.now();

    if (postCount >= maxPosts && currentTime - lastPostTime < cooldownTime) {
      alert('Máximo de posts criados. Aguarde 1 hora para criar mais.');
      return;
    }

    if (currentTime - lastPostTime >= cooldownTime) {
      localStorage.setItem('postCount', '1');
    } else {
      localStorage.setItem('postCount', (postCount + 1).toString());
    }
    localStorage.setItem('lastPostTime', currentTime.toString());

    if (!this.post.title.trim() || !this.post.description.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (this.selectedFile && !this.selectedFile.type.startsWith('image/')) {
      alert('Por favor, selecione um arquivo de imagem válido.');
      return;
    }

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.post.photoCover = e.target.result;
        this.post.id = (dataFake.length + 1).toString();
        this.post.createdAt = new Date().toISOString();
        dataFake.push({ ...this.post }); // Adiciona o novo post ao final da lista
        saveDataToLocalStorage();
        this.router.navigate(['/']); 
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.post.id = (dataFake.length + 1).toString();
      this.post.createdAt = new Date().toISOString();
      dataFake.push({ ...this.post }); // Adiciona o novo post ao final da lista
      saveDataToLocalStorage();
      this.router.navigate(['/']); 
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
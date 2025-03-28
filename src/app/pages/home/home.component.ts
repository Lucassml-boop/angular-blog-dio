import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts = dataFake;

  smallCards = [
    {
      id: '101',
      title: 'Notícia 1',
      photoCover: 'https://legadodamarvel.com.br/wp-content/uploads/2025/03/legadodamarvel-vingadores-doomsday-chris-pratt-senhor-das-estrelas-starlord-avengers.webp',
    },
    {
      id: '102',
      title: 'Notícia 2',
      photoCover: 'https://legadodamarvel.com.br/wp-content/uploads/2025/03/legadodamarvel-vingadores-doomsday-chris-pratt-senhor-das-estrelas-starlord-avengers.webp',
    },
    {
      id: '103',
      title: 'Notícia 3',
      photoCover: 'https://legadodamarvel.com.br/wp-content/uploads/2025/03/legadodamarvel-vingadores-doomsday-chris-pratt-senhor-das-estrelas-starlord-avengers.webp',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('Posts carregados:', this.posts); 
  }

}
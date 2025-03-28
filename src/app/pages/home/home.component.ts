import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts = dataFake;


  constructor() { }

  ngOnInit(): void {
    console.log('Posts carregados:', this.posts); 
  }

}
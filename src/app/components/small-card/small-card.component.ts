import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover: string = "";

  @Input()
  cardTitle: string = "";

  @Input()
  Id: string = "0";

  @Input()
  cardLegend: string = "";

  @Input()
  isSideCard: boolean = false; // Adicionado para diferenciar os cards laterais

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToContent(): void {
    this.router.navigate(['/content', this.Id]);
  }
}
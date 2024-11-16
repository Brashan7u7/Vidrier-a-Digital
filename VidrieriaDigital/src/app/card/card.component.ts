import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() lista: string = '';
  @Input() pdf: string = '';

  constructor() {}

  ngOnInit(): void {
    if (!this.lista) {
      console.warn('Lista no proporcionada. Usando valor por defecto.');
    }
  }
}

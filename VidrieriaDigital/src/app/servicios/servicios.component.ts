import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CardComponent, MatGridListModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
})
export class ServiciosComponent {}

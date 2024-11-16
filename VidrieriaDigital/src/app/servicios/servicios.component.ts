import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CardComponent, MatGridListModule, MatCardModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'], 
})
export class ServiciosComponent {}

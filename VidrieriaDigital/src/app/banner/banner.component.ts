import { Component } from '@angular/core';
import { CotizacionFormComponent } from "../cotizacion-form/cotizacion-form.component";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CotizacionFormComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}

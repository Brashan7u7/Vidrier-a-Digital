import { Component } from '@angular/core';
import { CotizacionFormComponent } from "../cotizacion-form/cotizacion-form.component";


@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [CotizacionFormComponent],
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.css'
})
export class SobreNosotrosComponent {

}

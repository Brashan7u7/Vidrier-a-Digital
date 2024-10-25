import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { CotizacionFormComponent } from './cotizacion-form/cotizacion-form.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    BannerComponent,
    CotizacionFormComponent,
    ServiciosComponent,
    SobreNosotrosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'VidrieriaDigital';
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cotizacion-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cotizacion-form.component.html',
  styleUrls: ['./cotizacion-form.component.css'],
})
export class CotizacionFormComponent {
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  mensaje: string = '';

  enviarWhatsApp(event: Event) {
    event.preventDefault();
    const mensaje = `Hola, me gustaría recibir una cotización. 
      Nombre: ${this.nombre}
      Email: ${this.email}
      Teléfono: ${this.telefono}
      Mensaje: ${this.mensaje}`;

    console.log(mensaje);
    const url = `https://wa.me/529512402904?text=${encodeURIComponent(
      mensaje
    )}`;

    console.log(url);

    window.open(url, '_blank');
    setTimeout(() => {
      window.location.href = url;
    }, 200);
  }
}

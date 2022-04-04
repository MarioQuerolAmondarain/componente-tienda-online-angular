import { Product } from './features/models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  product = new Product("Palmera", "https://prod-mercadona.imgix.net/images/5e949a6f64b52be230b8f1084156dcd9.jpg?fit=crop&h=300&w=300", 1, "a");
  title = 'componente-tienda-online-angular';
}

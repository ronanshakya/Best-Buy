import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() description!: string;
  @Input() price!: string;

  @Input()
  get imageSource(): string { return this._imageSource; }
  set imageSource(photo: string) {
    this._imageSource = `../assets/img/${photo}`;
  }
  private _imageSource = '';
}

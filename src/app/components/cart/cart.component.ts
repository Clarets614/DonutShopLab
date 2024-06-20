import { Component } from '@angular/core';
import { DonutDetailsModel } from '../../models/donut-details';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private _donutService:DonutService){}



  getCart():DonutDetailsModel[]{
    return this._donutService.cart;
  }

  deleteItem(i:DonutDetailsModel){
    this._donutService.removeFromCart(i);
  }

  resetCart(){
    this._donutService.resetCart();
  }

}

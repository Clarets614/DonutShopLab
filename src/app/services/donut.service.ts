import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutModel, Result } from '../models/donuts';
import { DonutDetailsModel } from '../models/donut-details';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http:HttpClient) { }

  allDonuts: DonutDetailsModel[] = []

  getDonuts():Observable<DonutModel>{
    return this.http.get<DonutModel>("https://grandcircusco.github.io/demo-apis/donuts.json")
  }

  getDonutDetails(id:number):Observable<DonutDetailsModel>{
    return this.http.get<DonutDetailsModel>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`)
  }

  cart:DonutDetailsModel[] = [];

  addToCart(d:DonutDetailsModel){
    this.cart.push(d);
    console.log(this.cart);
  }

  removeFromCart(d:DonutDetailsModel){
    let index:number = this.cart.findIndex(x => x.id == d.id);
    this.cart.splice(index, 1);
  }

  resetCart(){
    this.cart = [];
  }



}

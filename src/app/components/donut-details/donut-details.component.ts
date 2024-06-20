import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DonutService } from '../../services/donut.service';
import { DonutModel, Result, } from '../../models/donuts';
import { DonutDetailsModel } from '../../models/donut-details';

@Component({
  selector: 'app-donut-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donut-details.component.html',
  styleUrl: './donut-details.component.css'
})
export class DonutDetailsComponent {
  constructor(private ActivatedRoute:ActivatedRoute, private _donutService: DonutService){}

  displayDonut = {} as DonutDetailsModel;

  ngOnInit(){
    this.ActivatedRoute.paramMap.subscribe((paramMap) => {
      let id = Number(paramMap.get("id"));
      console.log(id);
      this._donutService.getDonutDetails(id).subscribe((response:DonutDetailsModel) => {
        console.log(response);
        this.displayDonut = response;
      });

    })
  }

  addToCart(){
    this._donutService.addToCart(this.displayDonut);
  }

}

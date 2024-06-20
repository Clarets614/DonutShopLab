import { Component } from '@angular/core';
import { DonutModel, Result} from '../../models/donuts';
import { DonutService } from '../../services/donut.service';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {

  constructor(private _donutService: DonutService){}

  allDonuts:Result[]= [];

ngOnInit():void{
  this._donutService.getDonuts().subscribe((response:DonutModel)=>{
    console.log(response);
    this.allDonuts = response.results;
  })
}

}

import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string;
  title = 'food';
  obsTrack: Observable<Object>;
  results: any;



  constructor(private food:FoodService) {

   }


   submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.food.searchFood(this.query);
    this.obsTrack.subscribe((data) => { this.results = data; console.log(this.results) });
  }

}

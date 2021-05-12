import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodService {


  constructor(private http: HttpClient) {}
  getItem(breeds: string) {
    const url = `https://api.thedogapi.com/v1/breeds/${breeds}`;
   const headers = new HttpHeaders();

    return this.http.get(url, { headers });
  }

}

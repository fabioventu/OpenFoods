import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodService {


  constructor(private http: HttpClient) {}
  searchFood(query: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=5&json=true`;
   const headers = new HttpHeaders();

    return this.http.get(url, { headers });
  }
  getItem(id: string) {
    const url = `https://world.openfoodfacts.org/api/v0/product/${id}`;
   const headers = new HttpHeaders();

    return this.http.get(url, { headers });
  }
}

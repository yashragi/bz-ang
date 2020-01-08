import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getcountries(){
    return this.http.get('https://resetcountries.eu/rest/v2/all');
  }
}







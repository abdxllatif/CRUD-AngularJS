import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get("http://localhost:5000/Books");
  }
}

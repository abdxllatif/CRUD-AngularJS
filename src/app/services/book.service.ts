import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl ="http://localhost:5000/Books";

  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get<Book[]>(this.apiUrl);
  }
  delete(id){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}

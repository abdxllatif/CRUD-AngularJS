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
  persist(book){
    return this.http.post<Book>(this.apiUrl, book);
  }
  completed(id, completed){
    return this.http.patch(`${this.apiUrl}/${id}`, {completed: !completed});
  }
  update(book){
    return this.http.put(`${this.apiUrl}/${book.id}`,book)
  }
}

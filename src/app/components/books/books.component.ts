import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : Book[] = [];

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookService.findAll()
        .subscribe(books => this.books = books)
  }

}

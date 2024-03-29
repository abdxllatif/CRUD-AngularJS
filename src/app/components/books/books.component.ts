import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  search ='';
  showForm = false;
  editForm = false;

  myBook : Book = {
    label : '',
    completed : false
  }

  books : Book[] = [];
  resBooks : Book[] = [];

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookService.findAll()
        .subscribe(books => {
          this.resBooks = this.books = books
        })
  }

  deleteBook(id){
    this.bookService.delete(id)
        .subscribe(() => {
          this.books = this.books.filter(book => book.id != id)
        })
  }
  persistBook(){
    this.bookService.persist(this.myBook)
        .subscribe((book) => {
          this.books =[book, ...this.books];
          this.resetBook();
          this.showForm = false;
        })
  }

  resetBook(){
    this.myBook = {
      label: '',
      completed: false
    }
  }

  toggleCompleted(book){
    this.bookService.completed(book.id,book.completed)
        .subscribe(() => {
          book.completed = !book.completed
        })
  }

  edit(book){
    this.myBook = book
    this.editForm = true
  }

  updateBook(){
    this.bookService.update(this.myBook)
        .subscribe(book => {
          this.resetBook()
          this.editForm = false
        })
  }

  searchBooks(){
    this.resBooks = this.books.filter((book) => book.label.toLowerCase().includes(this.search.toLowerCase()))
  }
}

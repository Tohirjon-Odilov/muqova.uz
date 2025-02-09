import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";

export interface Book {
  id: number;
  title: string;
  author: string;
  coverImageUrl: string;
  description: string;
  publishDate: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  // books: Book[] = [];
  banners = [
    {
      image: 'https://images.unsplash.com/photo-1577985051167-0d49eec21977?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Yangi Nashrlar'
    },
    {
      image: 'https://images.unsplash.com/photo-1522211988038-6fcbb8c12c7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Eng Ko‘p O‘qilgan Kitoblar'
    },
    {
      image: 'https://images.unsplash.com/photo-1558636815-1978d0419bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Mualliflar bilan Suhbatlar'
    }
  ];



  books = [
    {
      coverImageUrl: 'https://backend.book.uz/user-api/img/img-file-ed38f449d36eb9fe371e2ff4fb4f96f9.png',
      title: 'Maqaddima',
      author: 'Ibn Haldum'
    },
    {
      coverImageUrl: 'https://backend.book.uz/user-api/img/img-file-279160c9220fec2d6359f697afbae224.jpg',
      title: 'Jannat',
      author: 'Abdurazzor Gurna'
    },
    {
      coverImageUrl: 'https://backend.book.uz/user-api/img/img-file-50a0f5347b62335cc43d7f64e52eaa1b.jpg',
      title: 'Anor Daraxti',
      author: 'Nazar Bekiro\'g\'lu'
    },
    {
      coverImageUrl: 'https://backend.book.uz/user-api/img/img-file-763edfd59cde36baa8f93af002f20e34.jpg',
      title: 'Alkimyogar',
      author: 'Paulo Koelo'
    }
  ];



  ngOnInit(): void {
    // this.getBooks().subscribe((books) => {
    //   this.books = books;
    // })
  }

  // getBooks(): Observable<Book[]> {
  //   return of(MOCK_BOOKS);
  // }

  // getBookById(id: number): Observable<Book | undefined> {
  //   const book = MOCK_BOOKS.find((b) => b.id === id);
  //   return of(book);
  // }



}

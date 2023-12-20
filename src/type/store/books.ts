interface Book {
    id: string;
    title: string;
    author: string;
    text: string;
}
interface BooksState {
    books: Book[];
}
interface SetBooksAction {
    type: 'books/setBooks';
    payload: Book[];
}

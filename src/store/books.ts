import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';



export const setBooks = createAction('books/setBooks', (books: Book[]) => ({
    payload: books,
  }));
  
  const initialState: BooksState = {
    books: [],
  };

  const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(setBooks, (state, action: PayloadAction<Book[]>) => {
        state.books = action.payload;
      });
    },
  });
  
  export default booksSlice.reducer;
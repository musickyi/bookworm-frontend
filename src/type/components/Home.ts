interface HomeProps {
    bookId?: string | string[] | undefined;
}
interface BooksType {    
        id: number;
        title: string;
};
interface SelectedBookType{
    id:number;
    author:string;
    title:string;
    text:string;
}
interface MyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
  }
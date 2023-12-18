import React, { useEffect, useState } from 'react';
import Bookcase from '../../../public/png/bookcase.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as S from './style';
import Link from 'next/link';
import API from '../../api';
import Modal from 'react-modal';


export default function HomePage() {
    const randomColors = ['#466624', '#CF3425', '#F0BF57', '#4A3E53'];
    const [books, setBooks] = useState<BooksType[]>([]);
    const [selectedBook, setSelectedBook] = useState<SelectedBookType | undefined>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const router = useRouter();

    const bookId: string | string[] | undefined = router.query.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get(`/book/bookshelf/${bookId}`);
                setBooks(response.data);
            } catch (error) {
                console.log(`${error} 오류!`);
            }
        };

        fetchData();
    }, [bookId]);


    const hyphenateBookId = (bookId: string | string[] | undefined) => {
        if (typeof bookId === 'string') {
            const prefix = bookId.slice(0, 1).toUpperCase();
            const suffix = bookId.slice(1);
            const hyphenatedId = `${prefix}-${suffix}`;
            return hyphenatedId;
        }
        return '';
    };

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * randomColors.length);
        return randomColors[randomIndex];
    };

    const generateBooks = () => {
        const generatedBooks = [];

        const totalBooks = Math.min(80, books.length); // 최대 80개까지만 표시

        for (let row = 0; row < 4; row++) {
            const bookRow = [];

            for (let column = 0; column < 20; column++) {
                const index = row * 20 + column;

                if (index < totalBooks && books[index].title) {
                    bookRow.push(
                        <S.BookColoumn key={column} color={getRandomColor()} onClick={() => handleBookClick(books[index])}>
                            {books[index].title} {index + 1}
                        </S.BookColoumn>
                    );
                }
            }

            if (bookRow.length > 0) {
                generatedBooks.push(<S.BookRow key={row}>{bookRow}</S.BookRow>);
            }
        }

        return generatedBooks;
    };

    const handleBookClick = async (book: BooksType) => {
        try {
            const response = await API.get(`/book/${book.id}`);
            setSelectedBook(response.data);
        } catch (error) {
            console.log(`${error} 오류!`);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false); // 모달 닫기
    };

    return (
        <S.HomeContainer>
            <S.BookcaseLocate>
                <span>{hyphenateBookId(bookId)} 책장</span>
            </S.BookcaseLocate>
            <S.BookLocate>{generateBooks()}</S.BookLocate>
            <S.BookcaseStyle>
                <S.ImageContainer>
                    <Image src={Bookcase} alt="Bookcase" priority={true} />
                </S.ImageContainer>
            </S.BookcaseStyle>
            <S.BookWriteButton>
                <Link href='book/insert'>책 쓰기</Link>
            </S.BookWriteButton>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                <S.ModalStyle>
                    {selectedBook && (
                        <>
                            <h2>{selectedBook.title}</h2>
                            <p>{selectedBook.author}</p>
                            <p>{selectedBook.text}</p>
                            <span>다음</span>
                            <span>이전</span>
                            <button onClick={closeModal}>닫기</button>
                        </>
                    )}
                </S.ModalStyle>
            </Modal>
        </S.HomeContainer>
    );
}


import React, { useEffect, useState } from 'react';
import Bookcase from '../../../public/png/bookcase.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as S from './style';
import Link from 'next/link';
import API from '../../api';
import Modal from 'react-modal';
import * as SVG from '../../../public/svg'
import { useDispatch, useSelector} from 'react-redux';
import { setBooks } from '../../store/books';
import { RootState } from '../../store/store';

export default function HomePage() {
    const dispatch = useDispatch();
    const books = useSelector((state: RootState) => state.books.books);

    const randomColors = ['#466624', '#CF3425', '#F0BF57', '#4A3E53'];
    const [selectedBook, setSelectedBook] = useState<SelectedBookType | undefined>();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  
    const router = useRouter();
    const bookId: string | string[] | undefined = router.query.id;
  
    const fetchBooks = async () => {
      try {
        const accessToken: string | null = localStorage.getItem('accessToken');
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        const response = await API.get(`/book/bookshelf/${bookId}`,{
            headers,
        });
        const booksData = response.data;
        dispatch(setBooks(booksData));
      } catch (error) {
        console.log(`${error} 오류!`);
      }
    };
  
    useEffect(() => {
      if (bookId) {
        dispatch(setBooks([]));
        fetchBooks();
      }
    }, [bookId, dispatch]);
  
    const openReportModal = () => {
      setIsReportModalOpen(true);
    };
  
    const closeReportModal = () => {
      setIsReportModalOpen(false);
    };
  
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
      const totalBooks = Math.min(80, (books || []).length);
  
      for (let row = 0; row < 4; row++) {
        const bookRow = [];
  
        for (let column = 0; column < 20; column++) {
          const index = row * 20 + column;
  
          if (index < totalBooks && books[index].title) {
            bookRow.push(
              <S.BookColoumn key={column} color={getRandomColor()} onClick={() => handleBookClick(books[index])}>
                {books[index].title}
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
  
    const handleBookClick = async (book:Book) => {
      try {
        const accessToken: string | null = localStorage.getItem('accessToken');
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };
        const response = await API.get(`/book/${book.id}`,{
            headers,
        });
        setSelectedBook(response.data);
        setIsModalOpen(true);
      } catch (error) {
        console.log(`${error} 오류!`);
      }
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleReportClick = async () => {
        try {
            const accessToken: string | null = localStorage.getItem('accessToken');
            const headers = {
              Authorization: `Bearer ${accessToken}`,
            };
            const response = await API.patch(`/book/report/${selectedBook?.id}`,{
                headers,
            });
            if (response.status === 200) {
              alert('신고가 성공적으로 접수되었습니다.');
              setIsModalOpen(false);
              setIsReportModalOpen(false);
            } else {
              alert('신고 처리 중 오류가 발생했습니다.');
            }
          } catch (error) {
            console.error('신고 처리 중 오류:', error);
            alert('신고 처리 중 오류가 발생했습니다.');
          }
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
                <Link href='/write'>책 쓰기</Link>
            </S.BookWriteButton>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                style={{
                    content: {
                        width: '35%',
                        height: '80%',
                        margin: 'auto',
                        padding: 0,
                    }
                }}
            >
                <S.BookModalStyle>
                    {selectedBook && (
                        <>
                            <div>
                                <h2>{selectedBook.title}</h2>
                                    <S.BookMoadalAuthor>
                                        <span>{selectedBook.author}</span>
                                    </S.BookMoadalAuthor>
                            <div>
                            </div>   
                                <S.BookMoadalContent>
                                    <p>{selectedBook.text}</p>
                                </S.BookMoadalContent>
                            </div>
                            <S.ModalButtonLocate>
                                <button onClick={closeModal}>
                                    <SVG.CloseButton />
                                </button>
                                <button onClick={openReportModal}>
                                    <SVG.ReportButton />
                                </button>
                            </S.ModalButtonLocate>
                        </>
                    )}
                </S.BookModalStyle>
            </Modal>
            <Modal
                isOpen={isReportModalOpen}
                onRequestClose={closeReportModal}
                ariaHideApp={false}
                style={{
                    content: {
                        width: '40%',
                        height: '60%',
                        margin: 'auto',
                        padding: 0
                    }
                }}

            >
                <S.ReportModalStyle>
                    <S.ReportWarning>
                        <h2>신고</h2>
                        <p>
                            허위 신고가 누적될시 <br />
                            불이익이 있을 수 있습니다 <br />
                            다시한번 확인해 주세요 <br />
                        </p>
                    </S.ReportWarning>
                    <div>
                        <ul>
                            <li>부적절한 언행(욕설, 비방 등)</li>
                            <li>성적인 컨텐츠</li>
                            <li>광고 / 스팸성 글</li>
                            <li>저작권 침해 관련</li>
                        </ul>
                        <p>위와 같은 내용이라면 신고해 주십시오</p>
                    </div>
                    
                    <div>
                        <S.ReportButtonStyle color="#A0FF88" onClick={handleReportClick}>
                            확인
                        </S.ReportButtonStyle>
                        <S.ReportButtonStyle color="#FF5959" onClick={closeReportModal}>
                            취소
                        </S.ReportButtonStyle>
                    </div>
                </S.ReportModalStyle>
            </Modal>
        </S.HomeContainer>
    );
}

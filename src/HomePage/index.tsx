import React from 'react';
import Bookcase from '../../public/png/bookcase.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as S from './style';
export default function HomePage() {
    const randomColors = ['#466624', '#CF3425', '#F0BF57', '#4A3E53'];

    const router = useRouter();
    
    const bookId: string | string[] | undefined = router.query.id;
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
        const books = [];

        for (let row = 0; row < 4; row++) {
            const bookRow = [];

            for (let column = 0; column < 20; column++) {
                bookRow.push(
                    <S.BookColoumn key={column} color={getRandomColor()}>
                        책 {row * 20 + column + 1}
                    </S.BookColoumn>
                );
            }

            books.push(<S.BookRow key={row}>{bookRow}</S.BookRow>);
        }

        return books;
    };

  
    return (
        <S.HomeContainer>
            <S.BookcaseLocate>
                <span>{hyphenateBookId(bookId)} 책장</span>
            </S.BookcaseLocate>
            <S.BookLocate>{generateBooks()}</S.BookLocate>
            <S.BookcaseStyle>
                <S.ImageContainer>
                    <Image src={Bookcase} alt="Bookcase" />
                </S.ImageContainer>
            </S.BookcaseStyle>
        </S.HomeContainer>
    );
}


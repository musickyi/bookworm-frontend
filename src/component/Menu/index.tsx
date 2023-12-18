import React, { useEffect, useState } from 'react';
import * as S from './style';
import * as SVG from '../../../public/svg';
import Link from 'next/link';



export default function Menu() {
    const [isSidebarVisible, setSidebarVisibility] = useState(false);
    const [toggleButtons, setToggleButtons] = useState<ToggleButtonProps[]>([
        { id: 1, $isOpen: false, selectedToggle: null },
        { id: 2, $isOpen: false, selectedToggle: null },
    ]);
    const [bookCaseButtons, setBookCaseButtons] = useState<BookCaseButtonProps[]>([
        { onClick: () => { }, $isOpen: false, label: 'A' },
        { onClick: () => { }, $isOpen: false, label: 'B' },
        { onClick: () => { }, $isOpen: false, label: 'C' },
    ]);

    const handleSidebar = () => {
        setSidebarVisibility(!isSidebarVisible);
    };

    const handleToggle = (id: number) => {
        setToggleButtons((prevButtons) =>
            prevButtons.map((button) =>
                button.id === id
                    ? { ...button, $isOpen: !button.$isOpen, selectedToggle: null }
                    : button
            )
        );

    };

    const handleToggleSelection = (toggleId: number, selection: string) => {
        setToggleButtons((prevButtons) =>
            prevButtons.map((button) =>
                button.id === toggleId
                    ? { ...button, selectedToggle: selection }
                    : button
            )
        );

        setBookCaseButtons((prevBookCaseButtons) =>
            prevBookCaseButtons.map((bookCaseButton) =>
                bookCaseButton.label === selection
                    ? { ...bookCaseButton, $isOpen: !bookCaseButton.$isOpen }
                    : bookCaseButton
            ))
    };

    const urlMappings: { [key: string]: string } = {
        A: '/a',
        B: '/b',
        C: '/c',
    };
    return (
        <>
            <S.MenuContainer>
                <S.BookwormLogo>
                    <S.WormStyle>
                        <SVG.Bookworm />
                    </S.WormStyle>
                    책벌레<br />
                    <span>우리들의 감성 도서관</span>
                </S.BookwormLogo>
                <S.MenuStyle onClick={handleSidebar}>
                    <SVG.MenuIcon />
                </S.MenuStyle>
            </S.MenuContainer>

            {isSidebarVisible && (
                <S.Sidebar $isOpen={isSidebarVisible}>
                    <S.BottomSpace />
                    {toggleButtons.map((button) => (
                        <div key={button.id}>
                            <S.ToggleButton
                                id={button.id}
                                onClick={() => handleToggle(button.id)}
                                $isOpen={button.$isOpen}
                            >
                                <SVG.Arrow />
                                {button.id === 1 ? '내가 작성한 책 확인' : '책장 확인'}
                            </S.ToggleButton>

                            {button.id === 2 && button.$isOpen && (
                                <>
                                    {bookCaseButtons.map((bookCaseButton) => (
                                        <div key={bookCaseButton.label}>
                                            <S.BookCaseButton
                                                onClick={() =>
                                                    handleToggleSelection(button.id, bookCaseButton.label)
                                                }
                                                $isOpen={bookCaseButton.$isOpen}
                                            >
                                                <SVG.Arrow />
                                                {bookCaseButton.label}
                                            </S.BookCaseButton>
                                            {bookCaseButton.$isOpen && (
                                                <S.BookCaseLocateList>
                                                    {Array.from({ length: 5 }, (_, index) => (
                                                        <li key={index}>
                                                            <Link
                                                                href={`${urlMappings[bookCaseButton.label]}${index + 1}`}
                                                            >
                                                                0{index + 1}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </S.BookCaseLocateList>
                                            )}
                                        </div>
                                    ))}

                                </>
                            )}
                        </div>
                    ))}
                </S.Sidebar>
            )}
        </>
    );
}
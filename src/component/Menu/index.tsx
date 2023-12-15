import React from 'react';
import * as S from './style';
import * as SVG from '../../../public/svg';
export default function Menu() {
    return (
        <S.MenuContainer>
            <S.BookwormLogo>
                <S.WormStyle>
                    <SVG.Bookworm />
                </S.WormStyle>
                책벌레<br />
                <span>우리들의 감성 도서관</span>
            </S.BookwormLogo>
            <S.MenuStyle>
                <SVG.MenuIcon />
            </S.MenuStyle>
        </S.MenuContainer>
    );
}


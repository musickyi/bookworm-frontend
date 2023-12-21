import React, { useEffect, useState } from 'react';
import * as S from './style';
import BugImage from '../../../public/png/Bug.png';
import { useRouter } from 'next/router';
import API from '../../api/index';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from '../../store/books';
import { RootState } from '../../store/store';

const WritePage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.books);
  const [isWriting, setIsWriting] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isWriteAllowed, setIsWriteAllowed] = useState<boolean>(true);

  const router = useRouter();
  const bookId: string | string[] | undefined = router.query.id;

  useEffect(() => {
    if (bookId) {
      dispatch(setBooks([]));
      fetchBooks();
    }

  }, [bookId, dispatch]);

  const fetchBooks = async () => {
    try {

      const response = await API.get(`/book/bookshelf/${bookId}`);
      const booksData: Book[] = response.data;
      dispatch(setBooks(booksData));
      setIsWriteAllowed(booksData !== undefined && booksData.length < 80);

    } catch (error) {
      console.log(`${error} 오류!`);
    }
  };

  const handleWriteClick = async () => {
    await fetchBooks();
    if (isWriteAllowed) {
      setIsWriting(!isWriting);
    } else {
      alert('이 책장에는 더 이상 책을 만들 수 없습니다.');
    }
  };

  const handleCancelClick = () => {
    setIsWriting(false);
  };

  const handleConfirmClick = () => {

    const postData = {
      title: title,
      text: body,
      bookshelf: bookId,
    };

    API.post('/book', postData).then(() => {
      router.push(`/${bookId}`);
    }).catch(error => {
      alert("전송에 실패했습니다.");
    });
  };
  return (
    <S.ContentWrapper>
      <S.WritingSection>제목</S.WritingSection>
      <S.TitleInput
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <S.WritingSection>본문</S.WritingSection>
      <S.BodyInput
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      {isWriting && (
        <S.WarningSection>
          <S.WarningTitle>경고</S.WarningTitle>
          <S.WarningMessage>
            <span>글 작성이 완료되면 사이트가 유지되는 동안</span>
            <br /> 보관 되며
            <br /> 수정 및 삭제가 불가능 합니다.
            <br /> <br /> 가이드라인에 위배되는 글일 경우
            <br /> 삭제될 수 있습니다.
            <br /> <br />
            <span>그대로 진행 하시겠습니까?</span>
          </S.WarningMessage>
          <S.WarningButton confirm={true} onClick={handleConfirmClick} >확인</S.WarningButton>
          <S.WarningButton confirm={false} onClick={handleCancelClick}>취소</S.WarningButton>
        </S.WarningSection>
      )}
      <div>
        <S.BottomButton
          onClick={handleWriteClick}
          disabled={!isWriteAllowed}
        >
          {isWriteAllowed ? '집필하기' : '집필불가'}
        </S.BottomButton>
      </div>
      <S.Bug src={BugImage} alt="Bug" priority={true} />
    </S.ContentWrapper>
  );
};

export default WritePage;

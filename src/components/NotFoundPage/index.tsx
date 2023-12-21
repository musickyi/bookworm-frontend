import * as S from './style'
import Bugs from '../../../public/png/Group 44.png';
import Books from '../../../public/png/Group 43.png';
import Notfound from '../../../public/png/BookBugText.png';
import Image404 from '../../../public/png/4 0 4.png';
import { useRouter } from 'next/router';


const Feature404 = () => {
  const router = useRouter();

  const handleHomeButtonClick = () => {
    router.push('/a1');
  };

  return (
    <S.Container>
      <S.TopContainer>
        <S.Feature404Image src={Image404} alt='Feature404' priority={true} />
        <S.NotFoundImage src={Notfound} alt='Notfound' priority={true} />
      </S.TopContainer>
      <S.BottomContainer>
        <S.HomeButton onClick={handleHomeButtonClick}>홈으로</S.HomeButton>
        <S.BugsImage src={Bugs} alt='Bugs' priority={true} />
        <S.BooksImage src={Books} alt='Books' priority={true}  />
      </S.BottomContainer>
    </S.Container>
  );
};

export default Feature404;

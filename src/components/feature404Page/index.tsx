import React from 'react';
import Image from 'next/image';
import Bugs from '../../../public/png/Group 44.png';
import Books from '../../../public/png/Group 43.png';
import Notfound from '../../../public/png/Group 8.png';
import Feature404 from '../../../public/png/4 0 4.png';
import { useRouter } from 'next/router';

const feature404 = () => {
  const router = useRouter();

  const handleHomeButtonClick = () => {
    router.push('/a1');
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: "#4C3327" }}>
      <Image
        src={Books}
        alt='Books'
        priority={true}
        objectFit="cover"
        style={{ position: "relative", width: "1470px", height: "100px", left: "20px", top: "660px" }}
      />
      <Image
        src={Bugs}
        alt='Bugs'
        priority={true}
        objectFit="cover"
        style={{ position: "relative", width: "1330px", height: "200px", left: "100px", top: "350px" }}
      />
      <button onClick={handleHomeButtonClick} style={{
        position: 'absolute',
        width: '270px',
        height: '70px',
        left: '620px',
        top: '560px',
        backgroundColor: "#FCFFD6",
        fontFamily: "HANAMDAUM",
        borderRadius: "15px",
        fontSize: "25px"
      }}>
        홈으로
      </button>
      <Image
        src={Notfound}
        alt='Notfound'
        priority={true}
        objectFit='cover'
        style={{
          position: 'absolute',
          width: "550px",
          height: "350px",
          left: "520px",
          top: "100px",
          zIndex: "1"
        }}
      />
      <Image
        src={Feature404}
        alt='Feature404'
        priority={true}
        objectFit='cover'
        style={{
          position: "absolute",
          left: "200px",
          top: "30px",
          height: "320px",
          width: "1100px"
        }}
      />
    </div>
  );
};

export default feature404;

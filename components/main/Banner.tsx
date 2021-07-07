import React from 'react';
import styled from 'styled-components';
import { BannerImg } from '../../assets';
import Image from 'next/image';

const Banner = () => {
  return (
    <BannerWrap>
      <Image src={BannerImg} />
      <BannerBox>
        <TitleBox>
          <MainTitle>Find Your Colfume</MainTitle>
          <SubTitle>컬러테스트와 함께 나에게 어울리는 색과 향수를 찾아보세요</SubTitle>
        </TitleBox>
        <TestBnt>Start</TestBnt>
      </BannerBox>
    </BannerWrap>
  );
};

const BannerWrap = styled.div`
  margin-top: 7.2rem;
  height: 94.1rem;

  img {
    position: relative;
    justify-content: center;
    width: 100vw;
  }
`;

const BannerBox = styled.div`
  display: flex;
  position: absolute;
  top: 22.7rem;
  flex-direction: column;
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const MainTitle = styled.div`
  font-family: 'Junge';
  font-size: 12rem;
`;

const SubTitle = styled.div`
  font-size: 2.8rem;
  margin-top: 2rem;
  margin-bottom: 16%;
  font-size: 2.8rem;
`;

const TestBnt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  border: 0.3rem solid ${({ theme }) => theme.colors.black};
  width: 38.2rem;
  height: 10.7rem;
  font-family: 'Junge';
  font-size: 5rem;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

export default Banner;

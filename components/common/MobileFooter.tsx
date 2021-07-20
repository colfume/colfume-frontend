import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FooterIcons } from '../../assets';
import Image from 'next/image';
import { media } from '@styles/theme';
import { Logo } from '../../assets';

const MobileFooter = () => {
  return (
    <MobileBox>
      <LogoWrapper>
        <Image alt="mobile-logo" src={Logo} />
      </LogoWrapper>
      <ContentWrapper>
        <InfoColumn>
          <div className="contact-box">
            <Heading>Contact</Heading>
            <a href="mailto:khyeryun98@inha.edu">
              <FooterButton>khyeryun98@inha.edu</FooterButton>
            </a>
          </div>
          <div>
            <Heading>Info</Heading>
            <FooterContent>COLFUME | 대표 구혜련</FooterContent>
          </div>
        </InfoColumn>

        <FollowColumn>
          <div>
            <Heading>Follow us</Heading>
            <ImageWrapper>
              <a href="https://www.notion.so/Colfume-a4cd3bdbe31e46bfbff60c5beade2788">
                <Image alt="footerIcon" src={FooterIcons} />
              </a>
            </ImageWrapper>
          </div>
          <div>
            <TextInfo>개인정보취급방침</TextInfo>
            <TextInfo>이용약관</TextInfo>
          </div>
        </FollowColumn>
      </ContentWrapper>
    </MobileBox>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  padding-right: 15%;
  padding-left: 15%;
  color: ${({ theme }) => theme.colors.gray3};
`;

const MobileBox = styled.div`
  bottom: 0;
  margin-top: auto;
  background: ${({ theme }) => theme.colors.gray1};
  width: 37.5rem;
  min-height: 25.6rem;
`;

const LogoWrapper = styled.div`
  margin: 0 auto;
  margin-top: 3.614rem;
  padding-top: 3.614rem;
  width: 8.012rem;
  height: 1.986rem;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 30rem;
  text-align: left;

  .contact-box {
    width: 17rem;
  }
`;

const FollowColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 10rem;
  text-align: left;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.7rem;
  font-family: 'Gotham';
  font-size: 1.2rem;
  font-weight: 700;
`;

const FooterButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  width: 11rem;
  font-family: 'Junge';
  font-size: 1rem;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;

const FooterContent = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
`;

const TextInfo = styled.div`
  margin-bottom: 0.5rem;
  width: 8rem;
  font-size: 1rem;
  font-weight: 400;
`;

const ImageWrapper = styled.div`
  width: 17rem;
  img {
    width: 4.5rem;
  }
`;

export default MobileFooter;

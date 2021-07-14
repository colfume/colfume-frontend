import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FooterIcons } from '../../assets';
import Image from 'next/image';
import { media } from '@styles/theme';
import { Logo } from '../../assets';

const Box = styled.div`
  bottom: 0;
  margin-top: auto;
  background: ${({ theme }) => theme.colors.gray1};
  width: 100%;
  min-height: 57.6rem;

  ${media.mobile} {
    display: none;
    min-height: 25.6rem;
  }

  @media (max-width: 100rem) {
    padding: 7rem 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 190rem;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 2rem;
  margin-top: 17.8rem;
  margin-left: 24.5rem;

  ${media.mobile} {
    margin-top: 3.6rem;
    margin-left: 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 13rem;
  text-align: left;

  ${media.mobile} {
    :nth-child(2) {
      display: none;
    }
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 44rem;
  text-align: left;

  ${media.mobile} {
    width: 25.9rem;
  }
`;

const FollowColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 230px;
  width: 150px;
  text-align: left;

  ${media.mobile} {
    margin-left: 0;
  }
`;

const Heading = styled.div`
  margin-bottom: 4rem;
  font-family: 'Gotham';
  font-size: 2rem;
  font-weight: 700;

  ${media.mobile} {
    font-size: 1.2rem;
  }
`;

const FooterHeading = styled.div`
  margin-bottom: 4rem;
  font-family: 'Junge';
  font-size: 3.2rem;
`;

const FooterButton = styled.div`
  margin-bottom: 3.8rem;
  font-family: 'Junge';
  font-size: 2rem;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;

const FooterContent = styled.div`
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  font-weight: 400;
`;

const ImageWrapper = styled.div`
  margin-bottom: 3.8rem;
`;

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <FooterHeading>Colfume</FooterHeading>
          </Column>
          <Column>
            <Heading>Menu</Heading>
            <Link href="/product">
              <FooterButton>Product</FooterButton>
            </Link>
            <Link href="/test">
              <FooterButton>Color Test</FooterButton>
            </Link>
            <Link href="/search">
              <FooterButton>Search</FooterButton>
            </Link>
          </Column>
          <InfoColumn>
            <Heading>Contact</Heading>
            <a href="mailto:khyeryun98@inha.edu">
              <FooterButton>khyeryun98@inha.edu</FooterButton>
            </a>
            <Heading>Info</Heading>
            <FooterContent>COLFUME | 대표 구혜련</FooterContent>
            <a href="https://www.notion.so/Colfume-a4cd3bdbe31e46bfbff60c5beade2788">
              <FooterContent>
                https://www.notion.so/Colfume-a4cd3bdbe31e46bfbff60c5beade2788
              </FooterContent>
            </a>
          </InfoColumn>
          <FollowColumn>
            <Heading>Follow us</Heading>
            <ImageWrapper>
              <a href="https://www.notion.so/Colfume-a4cd3bdbe31e46bfbff60c5beade2788">
                <Image src={FooterIcons} />
              </a>
            </ImageWrapper>
            <FooterContent>개인정보취급방침</FooterContent>
            <FooterContent>이용약관</FooterContent>
          </FollowColumn>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;

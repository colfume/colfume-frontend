import React from 'react';
import Content from './Content';
import Banner from './Banner';
import Mood from './Mood';
import { Slide } from '../';
import Footer from '../common/Footer';
import styled from 'styled-components';
import { media } from '@styles/theme';
import { GetRecommData } from 'lib/api/main/getRecomm';
import PaletteData from '../../public/PaletteData';
import sizeMe from 'react-sizeme';
import MobileFooter from '../common/MobileFooter';

function MainWrap(props) {
  const { width, height } = props.size;
  const rawData = GetRecommData().data;
  const isMobile = width <= 375 ? true : false;

  return (
    <>
      <Banner />
      <Content
        title="About Colfume"
        content="향수가 어려우신가요?//Colfume에서 당신의 색과 향기를 찾아보세요"
        paddingTitle={isMobile ? '6.2rem' : '12.5rem'}
        paddingContent={isMobile ? '1.6rem' : '6.3rem'}
        paddingBottom={isMobile ? '5.8rem' : '12.7rem'}
      />
      <ContentWrap>
        <Content
          title="Colfume Palette"
          content="8가지의 색으로 쉽고 재미있게 당신의 향을 알아볼까요?"
          paddingTitle={isMobile ? '3.2rem' : '12.5rem'}
          paddingContent={isMobile ? '0.6rem' : '0rem'}
          paddingBottom={isMobile ? '4.5rem' : '12.5rem'}
        />
        <Slide
          slideName="palette"
          isMobile={isMobile}
          length={isMobile ? 2 : 4}
          data={PaletteData}
        />
      </ContentWrap>
      <Mood
        title="Mood and Style"
        content="원하는 무드 또는 스타일을 선택하여 향수를 찾아보세요"
        paddingTitle={isMobile ? '3.3rem' : '12.4rem'}
        paddingContent={isMobile ? '0.6rem' : '0rem'}
        paddingBottom={isMobile ? '5rem' : '10rem'}
      />
      <ContentWrap>
        <Content
          title="Recommendation"
          content="테마별로 향수를 추천해드려요"
          paddingTitle={isMobile ? '6.6rem' : '12.1rem'}
          paddingContent={isMobile ? '0.6rem' : '0rem'}
          paddingBottom={isMobile ? '5.9rem' : '16rem'}
        />
        {rawData && (
          <SlideWrap>
            <Comment>
              <span>
                <strong>{rawData.section_name},</strong>
              </span>{' '}
              <span>이런 향수는 어떤가요?</span>
            </Comment>
            <SlideContainer>
              <Slide
                slideName="recommendation"
                isMobile={isMobile}
                length={isMobile ? 2 : 3}
                data={rawData.section_perfumes[0]}
              />
            </SlideContainer>
          </SlideWrap>
        )}
      </ContentWrap>
      {isMobile ? <MobileFooter /> : <Footer />}
    </>
  );
}

export default sizeMe({ monitorHeight: true })(MainWrap);

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SlideWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media[768]} {
    align-items: center;
  }
`;

const Comment = styled.div`
  margin-bottom: 1.98rem;
  line-height: 3.6rem;
  font-size: 2rem;

  ${media[768]} {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  ${media.mobile} {
    margin: auto;
    margin-bottom: 3.05rem;

    line-height: 2.31rem;
    font-size: 1.4rem;
  }

  strong {
    font-weight: bold;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 19.7rem;
  border-top: solid ${({ theme }) => theme.colors.black};
  border-bottom: solid ${({ theme }) => theme.colors.black};
  width: 142.6rem;

  ${media[1440]} {
    margin-bottom: 20rem;
    width: 110rem;
  }

  ${media[1100]} {
    margin-bottom: 21rem;
    width: 80rem;
  }

  ${media[768]} {
    margin-bottom: 22rem;
    width: 65rem;
  }

  ${media.mobile} {
    margin-bottom: 22.4rem;
    width: 33.7rem;
  }
`;

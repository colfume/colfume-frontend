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
      <MaterialBox>
        <LogoWrapper>
          <Image alt="mobile-logo" src={Logo} />
        </LogoWrapper>
      </MaterialBox>
    </MobileBox>
  );
};

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
const MaterialBox = styled.div``;

export default MobileFooter;

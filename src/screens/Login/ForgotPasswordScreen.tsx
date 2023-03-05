import React, {memo} from 'react';
import styled from 'styled-components/native';

import {ScreenWrapper} from '@/components/ScreenWrapper';
import RegisterHeader from '@/screens/Login/components/RegisterHeader';

const ForgotPasswordScreen = () => {
  return (
    <Wrapper>
      <RegisterHeader title={'Find Your Account'} />
    </Wrapper>
  );
};

const Wrapper = styled(ScreenWrapper)``;

export default memo(ForgotPasswordScreen);

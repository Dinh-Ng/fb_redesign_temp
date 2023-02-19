import React, {memo} from 'react';
import styled from 'styled-components/native';

import {ScreenWrapper} from '@/components/ScreenWrapper';
import RegisterHeader from '@/screens/Login/components/RegisterHeader';

const RegisterScreen = () => {
  return (
    <Container>
      <RegisterHeader title={'Create account'} />
    </Container>
  );
};

const Container = styled(ScreenWrapper)``;

export default memo(RegisterScreen);

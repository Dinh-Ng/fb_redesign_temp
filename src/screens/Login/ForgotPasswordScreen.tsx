import React, {memo} from 'react';
import styled from 'styled-components/native';

import {ScreenWrapper} from '@/components/ScreenWrapper';
import RegisterHeader from '@/screens/Login/components/RegisterHeader';
import {Colors} from '@/themes/Colors';

const ForgotPasswordScreen = () => {
  return (
    <Container>
      <RegisterHeader title={'Find Your Account'} />
      <Wrapper>
        <StepTitle>Enter your phone number</StepTitle>
        <StepDescription>Enter your phone number</StepDescription>
      </Wrapper>
    </Container>
  );
};

const Container = styled(ScreenWrapper)``;

const Wrapper = styled(ScreenWrapper)`
  align-items: center;
`;

const StepTitle = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: ${Colors.black};
  margin: 40px 0 20px 0;
`;

const StepDescription = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: ${Colors.gray1};
  text-align: center;
  margin-bottom: 50px;
`;

export default memo(ForgotPasswordScreen);

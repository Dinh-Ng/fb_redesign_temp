import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

import {IMG_LOGO} from '@/assets';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import GradientButton from '@/screens/Login/components/GradientButton';
import {Colors} from '@/themes/Colors';

const LoginScreen = () => {
  return (
    <Wrapper contentContainerStyle={styles.wrapper}>
      <Logo source={IMG_LOGO} resizeMode={'stretch'} />
      <InputWrapper>
        <Input label={'Phone or Email'} />
        <Input label={'Password'} />
      </InputWrapper>
      <GradientButton title={'Log In'} />
      <ForgotPassButton>
        <ForgotPassText>Forgot Password?</ForgotPassText>
      </ForgotPassButton>

      <LineWrapper>
        <Line />
        <LineText>OR</LineText>
        <Line />
      </LineWrapper>

      <SignUpButton>
        <SignUpText>Create new Facebook account</SignUpText>
      </SignUpButton>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

const Wrapper = styled(KeyboardAwareScrollView)``;

const Logo = styled.Image`
  width: 50px;
  height: 80px;
`;

const InputWrapper = styled.View`
  width: 100%;
  padding: 0 40px;
  margin: 50px 0;
`;

const Input = styled(TextInput)`
  width: 100%;
  background-color: transparent;
  font-weight: 400;
  font-size: 14px;
`;

const ForgotPassButton = styled.TouchableOpacity`
  margin: 20px 0 50px 0;
`;

const ForgotPassText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: ${Colors.primary};
`;

const LineWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 0 40px;
`;
const Line = styled.View`
  background-color: ${Colors.gray1};
  height: 1px;
  flex: 1;
`;
const LineText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: ${Colors.gray1};
  margin: 0 10px;
`;

const SignUpButton = styled.TouchableOpacity`
  border-radius: 12px;
  border-color: ${Colors.primary};
  border-width: 1px;
  padding: 7px 24px;
  margin-top: 50px;
`;
const SignUpText = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: ${Colors.black};
`;

export default memo(LoginScreen);

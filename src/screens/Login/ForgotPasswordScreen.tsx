import React, {memo, useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

import {ScreenWrapper} from '@/components/ScreenWrapper';
import GradientButton from '@/screens/Login/components/GradientButton';
import RegisterHeader from '@/screens/Login/components/RegisterHeader';
import {Colors} from '@/themes/Colors';

interface dataTitleInterface {
  title: string;
  stepTitle: string;
  stepDescription?: string;
  button: string;
}

type dataTitlesInterface = dataTitleInterface[];

const ForgotPasswordScreen = () => {
  const dataTitle: dataTitlesInterface = [
    {
      title: 'Find Your Account',
      stepTitle: 'Enter your phone number',
      button: 'Find Your Account',
    },
    {
      title: 'Find Your Account',
      stepTitle: 'Enter your email address',
      button: 'Find Your Account',
    },
    {
      title: 'Find Your Account',
      stepTitle: 'Enter the code we sent to\n' + 'Sanjayshendy123@gmail.com',
      stepDescription: 'We sent 6 digit code to your email address.',
      button: 'Continue',
    },
  ];

  const [pages, setPages] = useState<number>(0);

  const handleNextButton = useCallback(() => {
    if (pages === 0 || pages === 1) {
      setPages(2);
      return;
    }
    if (pages === dataTitle.length - 1) {
      // navigateLogin();
      return;
    }
    setPages(pages + 1);
  }, [pages]);

  return (
    <Container>
      <RegisterHeader title={dataTitle[pages].title} />
      <Wrapper contentContainerStyle={styles.wrapper}>
        <StepTitle>{dataTitle[pages].stepTitle}</StepTitle>
        {dataTitle[pages]?.stepDescription && (
          <StepDescription>{dataTitle[pages].stepDescription}</StepDescription>
        )}

        {pages === 0 && <PhoneEmailInput keyboardType={'number-pad'} />}
        {pages === 1 && <PhoneEmailInput keyboardType={'email-address'} />}

        {pages === 2 && <CodeInput keyboardType={'number-pad'} />}

        <GradientButton
          onPress={handleNextButton}
          title={dataTitle[pages].button}
        />
      </Wrapper>
      {pages === 0 && (
        <FooterButton onPress={() => setPages(1)}>
          <FooterButtonText>{'Search by email instead'}</FooterButtonText>
        </FooterButton>
      )}
      {pages === 1 && (
        <FooterButton onPress={() => setPages(0)}>
          <FooterButtonText>
            {'Search by phone number instead'}
          </FooterButtonText>
        </FooterButton>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
});

const Container = styled(ScreenWrapper)``;

const Wrapper = styled(KeyboardAwareScrollView)`
  //align-items: center;
  //padding: 0 40px;
`;

const StepTitle = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: ${Colors.black};
  margin: 40px 0 20px 0;
  text-align: center;
`;

const StepDescription = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: ${Colors.gray1};
  text-align: center;
  margin-bottom: 50px;
`;

const PhoneEmailInput = styled(TextInput)`
  font-weight: 400;
  font-size: 14px;
  background-color: ${Colors.white};
  margin-bottom: 50px;
  width: 100%;
`;

const FooterButton = styled.TouchableOpacity`
  margin-bottom: 30px;
  align-items: center;
`;

const FooterButtonText = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color: ${Colors.primary};
`;

const CodeInput = styled(TextInput)`
  font-weight: 400;
  font-size: 14px;
  background-color: ${Colors.white};
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  letter-spacing: 22px;
`;

export default memo(ForgotPasswordScreen);

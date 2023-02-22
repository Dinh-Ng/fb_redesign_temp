import React, {memo, useCallback, useState} from 'react';
import {Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

import {IMG_ILLUSTRATION} from '@/assets';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import GradientButton from '@/screens/Login/components/GradientButton';
import RegisterHeader from '@/screens/Login/components/RegisterHeader';
import {Colors} from '@/themes/Colors';

const {width} = Dimensions.get('window');

const RegisterScreen = () => {
  const dataTitle = [
    {
      title: 'Create account',
      stepTitle: 'Join Facebook',
      stepDescription:
        'We’ll help you \ncreate a new account in a few easy steps.',
    },
    {
      title: 'Create account',
      stepTitle: 'What’s your name?',
      stepDescription: 'Enter the name you use in real life.',
    },
    {
      title: 'Birthday',
      stepTitle: 'What’s your birthday?',
      stepDescription:
        'Choose your date of birth. \n' +
        'You can always make this private later.',
    },
    {
      title: 'Gender',
      stepTitle: 'What’s your gender',
      stepDescription:
        'You can change who sees your gender on your profile later.',
    },
  ];

  const [pages, setPages] = useState<number>(0);

  const handleNextButton = useCallback(() => {
    if (pages === dataTitle.length - 1) {
      return;
    }
    setPages(pages + 1);
  }, [dataTitle.length, pages]);

  return (
    <Container>
      <RegisterHeader title={dataTitle[pages].title} />
      <Wrapper>
        {pages === 0 && <IllustrationImage source={IMG_ILLUSTRATION} />}
        <StepTitle>{dataTitle[pages].stepTitle}</StepTitle>
        <StepDescription>{dataTitle[pages].stepDescription}</StepDescription>

        {pages === 1 && (
          <NameWrapper>
            <NameInput selectionColor={Colors.primary} label={'First Name'} />
            <NameInput label={'Last Name'} />
          </NameWrapper>
        )}

        <GradientButton
          onPress={handleNextButton}
          title={pages === dataTitle.length - 1 ? 'Sign up' : 'Next'}
        />
      </Wrapper>
      {pages === 0 && (
        <FooterButton>
          <FooterButtonText>{'Already have an account?'}</FooterButtonText>
        </FooterButton>
      )}
    </Container>
  );
};

const Container = styled(ScreenWrapper)`
  background-color: ${Colors.white};
`;

const Wrapper = styled(ScreenWrapper)`
  align-items: center;
`;

const IllustrationImage = styled.Image`
  width: ${width - 20}px;
  height: ${(width * 218) / 331}px;
  margin: 30px 0 60px 0;
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

const FooterButton = styled.TouchableOpacity`
  margin-bottom: 30px;
  align-items: center;
`;

const FooterButtonText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: ${Colors.primary};
`;

const NameWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 80px;
  padding: 0 25px;
`;

const NameInput = styled(TextInput)`
  background-color: white;
  flex: 1;
  margin: 0 15px;
`;

export default memo(RegisterScreen);

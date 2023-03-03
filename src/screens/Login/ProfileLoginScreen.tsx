import React, {memo, useCallback} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import {IC_ADD, IC_SEARCH, IC_THREE_DOT, IMG_AVATAR, IMG_LOGO} from '@/assets';
import {ScreenWrapper} from '@/components/ScreenWrapper';
import {
  navigateToLoginScreen,
  navigateToRegisterScreen,
} from '@/navigations/navigations';
import GradientButton from '@/screens/Login/components/GradientButton';
import {Colors} from '@/themes/Colors';

const ProfileLoginScreen = () => {
  const onPressCreateNewAccount = useCallback(() => {
    navigateToRegisterScreen();
  }, []);

  const navigateLogin = useCallback(() => {
    navigateToLoginScreen();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Logo source={IMG_LOGO} />

        <ProfileButton>
          <View>
            <Avatar source={IMG_AVATAR} />
            <NotifyNumberWrapper>
              <NotifyNumber>7</NotifyNumber>
            </NotifyNumberWrapper>
          </View>
          <ProfileName>Sanjay Shendy</ProfileName>
          <ThreeDotButton>
            <ThreeDotIcon source={IC_THREE_DOT} />
          </ThreeDotButton>
        </ProfileButton>

        <OptionWrapper>
          <OptionButton onPress={navigateLogin}>
            <OptionIcon>
              <OptionIconAdd source={IC_ADD} />
            </OptionIcon>
            <OptionText>Log Into Another Account</OptionText>
          </OptionButton>
          <OptionButton>
            <OptionIcon>
              <OptionIconSearch source={IC_SEARCH} />
            </OptionIcon>
            <OptionText>Find Your Account</OptionText>
          </OptionButton>
        </OptionWrapper>
      </Wrapper>
      <GradientButton
        onPress={onPressCreateNewAccount}
        title={'Create New Facebook Account'}
      />
    </Container>
  );
};

const Container = styled(ScreenWrapper)`
  align-items: center;
  padding-bottom: 70px;
`;

const Wrapper = styled(ScreenWrapper)`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 50px;
  height: 70px;
`;

const ProfileButton = styled.TouchableOpacity`
  margin-top: 80px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 40px;
  justify-content: space-between;
`;

const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;

const ProfileName = styled.Text`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${Colors.black};
  margin-left: 14px;
  flex: 1;
`;

const NotifyNumberWrapper = styled.View`
  background-color: ${Colors.red};
  position: absolute;
  right: -5px;
  top: -5px;
  padding: 3px;
  border-radius: 10px;
  width: 22px;
  height: 22px;
  align-items: center;
  border: 1px solid ${Colors.white};
`;

const NotifyNumber = styled.Text`
  color: ${Colors.white};
  font-size: 14px;
`;

const ThreeDotButton = styled.TouchableOpacity``;

const ThreeDotIcon = styled.Image`
  width: 4px;
  height: 16px;
`;

const OptionWrapper = styled.View`
  width: 100%;
  padding: 30px 45px;
`;

const OptionButton = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
`;
const OptionIcon = styled.View`
  width: 50px;
  align-items: center;
`;
const OptionIconAdd = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 15px;
`;

const OptionIconSearch = styled.Image`
  width: 17.4px;
  height: 17.4px;
  margin-right: 15px;
`;

const OptionText = styled.Text`
  color: ${Colors.primary};
  font-weight: 500;
  font-size: 12px;
`;

export default memo(ProfileLoginScreen);

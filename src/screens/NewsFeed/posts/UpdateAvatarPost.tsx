import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';

import {IMG_AVATAR} from '@/assets';
import {Colors} from '@/themes/Colors';

const UpdateAvatarPost = () => {
  return (
    <Container>
      <UserWrapper>
        <Avatar source={IMG_AVATAR} />
        <View>
          <UserStatus>
            <Name>Tejas Phopale</Name> updated his profile photo
          </UserStatus>

          <TimeStatus>2 h . Delhi . </TimeStatus>
        </View>
      </UserWrapper>

      <AvatarWrapper style={styles.boxShadow}>
        <NewAvatar source={IMG_AVATAR} />
      </AvatarWrapper>
    </Container>
  );
};

const Container = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${Colors.border};
  border-bottom-style: solid;
  padding: 15px 20px;
`;

const UserWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 17px;
`;

const UserStatus = styled.Text`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 5px;
`;

const Name = styled.Text`
  font-weight: 600;
  font-size: 14px;
`;

const TimeStatus = styled.Text`
  font-weight: 400;
  font-size: 11px;
  color: ${Colors.gray3};
`;

const AvatarWrapper = styled.View``;

const NewAvatar = styled.Image`
  width: 230px;
  height: 230px;
  border-radius: 200px;
  border-width: 2px;
  border-color: #c4c4c4;
  align-self: center;
  margin-top: 40px;
`;

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default memo(UpdateAvatarPost);

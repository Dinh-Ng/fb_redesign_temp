import React, {memo} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

import {IMG_AVATAR} from '@/assets';
import {Colors} from '@/themes/Colors';

const NewsFeedScreen = () => {
  return (
    <Container>
      <CreatePostContainer>
        <CreatePostAvatar source={IMG_AVATAR} />
      </CreatePostContainer>
    </Container>
  );
};

const Container = styled(KeyboardAwareScrollView)`
  padding-top: 10px;
  background-color: ${Colors.white};
`;

const CreatePostContainer = styled.View`
  flex-direction: row;
`;

const CreatePostAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 0 20px;
`;

export default memo(NewsFeedScreen);

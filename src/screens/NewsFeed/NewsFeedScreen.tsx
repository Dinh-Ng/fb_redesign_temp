import React, {memo} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

import CreatePost from '@/screens/NewsFeed/components/CreatePost';
import {Colors} from '@/themes/Colors';

const NewsFeedScreen = () => {
  return (
    <Container>
      <CreatePost />
    </Container>
  );
};

const Container = styled(KeyboardAwareScrollView)`
  padding-top: 10px;
  background-color: ${Colors.white};
`;

export default memo(NewsFeedScreen);

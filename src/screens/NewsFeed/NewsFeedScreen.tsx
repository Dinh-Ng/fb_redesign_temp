import React, {memo} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

import {IC_SEARCH} from '@/assets';
import CreatePost from '@/screens/NewsFeed/components/CreatePost';
import ShortcutButton from '@/screens/NewsFeed/components/ShortcutButton';
import {Colors} from '@/themes/Colors';

const NewsFeedScreen = () => {
  return (
    <Container>
      <CreatePost />
      <ShortcutWrapper>
        <ShortcutButton
          backgroundColor={'rgba(249, 197, 15, 0.1)'}
          title={'Reels'}
          icon={IC_SEARCH}
          titleColor={'rgba(249, 197, 15, 1)'}
        />
        <ShortcutButton
          backgroundColor={'rgba(249, 197, 15, 0.1)'}
          title={'Room'}
          icon={IC_SEARCH}
          titleColor={'rgba(249, 197, 15, 1)'}
        />
        <ShortcutButton
          backgroundColor={'rgba(249, 197, 15, 0.1)'}
          title={'Group'}
          icon={IC_SEARCH}
          titleColor={'rgba(249, 197, 15, 1)'}
        />
        <ShortcutButton
          backgroundColor={'rgba(249, 197, 15, 0.1)'}
          title={'Live'}
          icon={IC_SEARCH}
          titleColor={'rgba(249, 197, 15, 1)'}
        />
      </ShortcutWrapper>
    </Container>
  );
};

const Container = styled(KeyboardAwareScrollView)`
  padding-top: 10px;
  background-color: ${Colors.white};
`;

const ShortcutWrapper = styled.View`
  flex-direction: row;
  padding: 0 10px;
`;

export default memo(NewsFeedScreen);

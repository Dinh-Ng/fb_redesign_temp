import React, {memo} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

import {IC_SEARCH, IMG_ILLUSTRATION, IMG_LOGO} from '@/assets';
import CreatePost from '@/screens/NewsFeed/components/CreatePost';
import ShortcutButton from '@/screens/NewsFeed/components/ShortcutButton';
import StoryCarousel from '@/screens/NewsFeed/components/StoryCarousel';
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
          iconColor={'#F9C50F'}
        />
        <ShortcutButton
          backgroundColor={'rgba(68, 192, 65, 0.1)'}
          title={'Room'}
          icon={IC_SEARCH}
          titleColor={'rgba(68, 192, 65, 1)'}
        />
        <ShortcutButton
          backgroundColor={'rgba(248, 89, 0, 0.1)'}
          title={'Group'}
          icon={IC_SEARCH}
          titleColor={'rgba(252, 101, 101, 1)'}
        />
        <ShortcutButton
          backgroundColor={'rgba(72, 107, 229, 0.1)'}
          title={'Live'}
          icon={IC_SEARCH}
          titleColor={'rgba(72, 107, 229, 1)'}
        />
      </ShortcutWrapper>

      <StoryWrapper>
        <StoryCarousel
          storyItems={[
            <TestImage source={IMG_ILLUSTRATION} />,
            <TestImage source={IMG_ILLUSTRATION} />,
            <TestImage source={IMG_ILLUSTRATION} />,
            <TestImage source={IMG_ILLUSTRATION} />,
            <TestImage source={IMG_LOGO} />,
            <TestImage source={IMG_ILLUSTRATION} />,
            <TestImage source={IMG_ILLUSTRATION} />,
            <TestImage source={IMG_ILLUSTRATION} />,
            <TestImage source={IMG_ILLUSTRATION} />,
            <TestImage source={IMG_ILLUSTRATION} />,
            <TestImage source={IMG_ILLUSTRATION} />,
            <TestImage source={IMG_ILLUSTRATION} />,
            <TestImage source={IMG_ILLUSTRATION} />,
          ]}
        />
      </StoryWrapper>
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
  margin-top: 17px;
`;

const StoryWrapper = styled.View``;

const TestImage = styled.Image`
  width: 90px;
`;

export default memo(NewsFeedScreen);

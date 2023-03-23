import React, {memo, useCallback} from 'react';
import styled from 'styled-components/native';

import {IC_SEARCH, IMG_AVATAR} from '@/assets';
import {Colors} from '@/themes/Colors';

interface Props {
  onPressCreatePost?: () => void;
  onPressSearch?: () => void;
}

const CreatePost = ({onPressCreatePost, onPressSearch}: Props) => {
  const navigateUserSetting = useCallback(() => {
    //;
  }, []);

  return (
    <CreatePostContainer>
      <CreatePostAvatarButton onPress={navigateUserSetting}>
        <CreatePostAvatar source={IMG_AVATAR} />
      </CreatePostAvatarButton>

      <CreatePostButton onPress={onPressCreatePost}>
        <CreatePostPlaceholder>
          What’s on your mind, Sanjay?
        </CreatePostPlaceholder>
      </CreatePostButton>

      <SearchButton onPress={onPressSearch}>
        <SearchIcon source={IC_SEARCH} />
      </SearchButton>
    </CreatePostContainer>
  );
};

const CreatePostContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CreatePostAvatarButton = styled.TouchableWithoutFeedback``;

const CreatePostAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 0 20px;
`;

const CreatePostButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px 10px 6px;
  background-color: ${Colors.gray2};
  border-radius: 10px;
`;

const CreatePostPlaceholder = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: ${Colors.gray1};
`;

const SearchButton = styled.TouchableOpacity`
  padding: 6px;
  background-color: ${Colors.gray2};
  margin: 0 20px;
  border-radius: 10px;
`;

const SearchIcon = styled.Image`
  width: 18px;
  height: 18px;
  tint-color: ${Colors.black};
`;

export default memo(CreatePost);

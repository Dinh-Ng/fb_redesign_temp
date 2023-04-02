import React, {memo} from 'react';
import styled from 'styled-components/native';

import {IMG_AVATAR, IMG_ILLUSTRATION} from '@/assets';
import {Colors} from '@/themes/Colors';

const UpdateAvatarPost = () => {
  return (
    <Container>
      <Avatar source={IMG_AVATAR} />

      <ContentImg source={IMG_ILLUSTRATION} />
    </Container>
  );
};

const Container = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${Colors.border};
  border-bottom-style: solid;
  padding: 15px 20px;
`;

const UserWrapper = styled.View``;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const ContentImg = styled.Image``;

export default memo(UpdateAvatarPost);

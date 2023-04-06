import React, {memo} from 'react';
import styled from 'styled-components/native';

import {IC_POST_COMMENT, IC_POST_LIKE, IC_POST_MESSAGE} from '@/assets';

const FooterPost = () => {
  return (
    <Container>
      <WrapperIcon>
        <Icon source={IC_POST_LIKE} />
        <Icon source={IC_POST_COMMENT} />
        <Icon source={IC_POST_MESSAGE} />
      </WrapperIcon>

      <WrapperStatus>
        <CounterReact />
        <CounterComment>4 Comments</CounterComment>
      </WrapperStatus>
    </Container>
  );
};

const Container = styled.View``;

const WrapperIcon = styled.View`
  flex-direction: row;
  padding: 15px 5px;
`;

const Icon = styled.Image`
  height: 18px;
  width: 21px;
  margin-right: 30px;
  object-fit: contain;
`;

const WrapperStatus = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

const CounterReact = styled.View``;

const CounterComment = styled.Text`
  font-weight: 400;
  font-size: 11px;
`;

export default memo(FooterPost);

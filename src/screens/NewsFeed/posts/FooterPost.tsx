import React, {memo} from 'react';
import styled from 'styled-components/native';

import {IC_SMS} from '@/assets';

const FooterPost = () => {
  return (
    <Container>
      <WrapperIcon>
        <Icon source={IC_SMS} />
        <Icon source={IC_SMS} />
        <Icon source={IC_SMS} />
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
`;

const WrapperStatus = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

const CounterReact = styled.View``;

const CounterComment = styled.Text``;

export default memo(FooterPost);

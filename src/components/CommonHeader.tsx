import React, {memo, ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

interface CommonHeaderProps {
  children?: ReactElement | ReactElement[] | null;
}

const CommonHeader = ({children}: CommonHeaderProps) => {
  return (
    <Container>
      <SafeAreaView />
      {children}
    </Container>
  );
};

const Container = styled.View``;

export default memo(CommonHeader);

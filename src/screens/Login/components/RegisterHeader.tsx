import React, {memo, useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';
import styled from 'styled-components/native';

import {IC_BACK} from '@/assets';
import CommonHeader from '@/components/CommonHeader';
import {Colors} from '@/themes/Colors';

interface Props {
  title: string;
  onGoBack?: () => void;
}

const RegisterHeader = ({title, onGoBack}: Props) => {
  const {canGoBack, goBack} = useNavigation();

  const handleGoBack = useCallback(() => {
    onGoBack ? onGoBack() : canGoBack() && goBack();
  }, [canGoBack, goBack, onGoBack]);

  return (
    <CommonHeader>
      <Container>
        <BackButton onPress={handleGoBack}>
          <BackIcon source={IC_BACK} />
        </BackButton>
        <Title>{title}</Title>
      </Container>
    </CommonHeader>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.border};
  padding: 0;
`;

const BackButton = styled.TouchableOpacity`
  padding: 13.5px 25px 13.5px 21px;
`;

const BackIcon = styled.Image`
  width: 8px;
  height: 14px;
`;

const Title = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: ${Colors.black};
`;
export default memo(RegisterHeader);

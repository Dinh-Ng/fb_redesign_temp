import React, {memo} from 'react';
import styled from 'styled-components/native';

import {IC_CHECK_RADIO, IC_UNCHECK_RADIO} from '@/assets';
import {Colors} from '@/themes/Colors';

interface CheckButtonProps {
  title?: string;
  description?: string;
  isChecked: boolean;
  onPress: () => void;
}

const CheckButton = ({
  title,
  description,
  isChecked,
  onPress,
}: CheckButtonProps) => {
  return (
    <Button onPress={onPress}>
      <Wrapper>
        <Title>{title}</Title>
        {!!description && <Description>{description}</Description>}
      </Wrapper>
      <RadioIcon source={isChecked ? IC_CHECK_RADIO : IC_UNCHECK_RADIO} />
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.border};
  border-bottom-style: solid;
  padding: 10px 0;
  margin-bottom: 10px;
`;

const Wrapper = styled.View``;

const Title = styled.Text`
  font-weight: 600;
  font-size: 14px;
`;

const Description = styled.Text`
  font-size: 10px;
  color: ${Colors.gray1};
  margin-top: 5px;
`;

const RadioIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

export default memo(CheckButton);

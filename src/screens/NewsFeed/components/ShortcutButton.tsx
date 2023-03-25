import React, {memo} from 'react';
import {ImageSourcePropType} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  backgroundColor: string;
  icon: ImageSourcePropType;
  title: string;
  titleColor: string;
  iconColor?: string;
}

const ShortcutButton = ({
  backgroundColor,
  icon,
  title,
  titleColor,
  iconColor,
}: Props) => {
  return (
    <Container style={{backgroundColor}}>
      <Icon source={icon} style={{tintColor: iconColor}} />
      <Title style={{color: titleColor}}>{title}</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 6px;
  flex: 1;
  border-radius: 10px;
  align-items: center;
  margin: 0 5px;
`;

const Icon = styled.Image`
  width: 21px;
  height: 19px;
  margin-right: 10px;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 12px;
`;

export default memo(ShortcutButton);

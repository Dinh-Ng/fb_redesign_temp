import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import {Colors} from '@/themes/Colors';

interface Props {
  title: string;
  onPress?: () => void;
}

const GradientButton = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <GradientWrapper
        colors={['#384CFF', '#00A3FF']}
        useAngle={true}
        angle={91}>
        <Title>{title}</Title>
      </GradientWrapper>
    </TouchableOpacity>
  );
};

const GradientWrapper = styled(LinearGradient)`
  padding: 12px 0;
  border-radius: 15px;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: ${Colors.white};
`;

const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'rgba(28, 120, 255, 0.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1.5,
    shadowRadius: 10,
    elevation: 24,
  },
});

export default memo(GradientButton);

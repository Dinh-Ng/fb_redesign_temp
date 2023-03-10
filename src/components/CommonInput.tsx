import React, {memo} from 'react';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

import {Colors} from '@/themes/Colors';

const CommonInput = styled(TextInput)`
  font-weight: 400;
  font-size: 14px;
  background-color: ${Colors.white};
  color: ${Colors.black};
`;

export default memo(CommonInput);

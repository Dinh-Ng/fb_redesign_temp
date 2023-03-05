import styled from 'styled-components/native';

import {Colors} from '@/themes/Colors';

export const ScreenWrapper = styled.View<{backgroundColor?: string}>`
  flex: 1;
  background-color: ${props => props.backgroundColor ?? Colors.white};
`;

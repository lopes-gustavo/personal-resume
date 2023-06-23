import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const HimalayasIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M 0 64 A 1 1 0 0 0 128 64 A 1 1 0 0 0 0 64 Z M 111.0423 78.192 H 14.6287 C 13.881 78.192 13.4512 77.4325 13.9517 76.877 C 15.5554 75.0967 18.4962 73.0512 20.5739 73.0512 C 23.8585 73.0512 24.3277 75.3878 27.143 75.3878 C 31.8352 75.3878 36.9967 59.4981 44.9735 59.4981 C 52.9502 59.4981 52.9503 68.845 61.8655 68.845 C 70.7808 68.845 74.5346 38 87.2036 38 C 98.3168 38 109.4302 61.0702 112.9628 75.8171 C 113.2572 77.046 112.306 78.192 111.0423 78.192 Z"
      fill="currentColor"
    />
  </Icon>
));

export default HimalayasIcon;

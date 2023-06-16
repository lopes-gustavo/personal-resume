import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const DevReadyIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
      <path
        clipRule="evenodd"
        d="M 0 0 C 28 -1 57 0 85 1 C 124 17 138 46 124 91 C 100 126 68 136 26 119 C 14 110 5 98 2 84 C 0 56 0 28 0 0 Z M 52 40 L 52 40 Z M 52 40 L 89 64 L 52 89 V 40 Z"
        fill="currentColor"
        fillRule="evenodd"
      />
  </Icon>
));

export default DevReadyIcon;

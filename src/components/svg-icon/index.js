import React from 'react';

import * as icons from './icons';

export const SvgIcon = ({
  type,
  ...props
}) => {
  const Icon = icons[type];

  if (!Icon) {
    return null;
  }
  return <Icon {...props} />;
};

export default SvgIcon;

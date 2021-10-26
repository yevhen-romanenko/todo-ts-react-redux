import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

interface IProps {
  date: string;
  //   styles?: StyledProps
}

export const CardDateLabels: FC<IProps> = ({ date }) => {
  return <Typography color='textSecondary'>Create date:{date}</Typography>;
};

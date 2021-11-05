import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

interface IProps {
  date: string;
}

export const TaskDateExpiredLabels: FC<IProps> = ({ date }) => {
  return <Typography color='secondary'>Expired date:{date}</Typography>;
};

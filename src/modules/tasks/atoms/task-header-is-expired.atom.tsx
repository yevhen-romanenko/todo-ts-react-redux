import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

interface IProps {
  isExpired: boolean;
}

export const TaskHeaderIsExpired: FC<IProps> = ({ isExpired }) => {
  if (!isExpired) return null;
  return (
    <div style={styles.expiredContainer}>
      <Typography variant='h6' component='div'>
        {'Expired task!'}
      </Typography>
    </div>
  );
};

const styles = {
  expiredContainer: {
    marginBottom: 8,
    backgroundColor: '#B22222',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
};

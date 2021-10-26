import React, { FC, useState } from 'react';
import { Icon } from '@material-ui/core';
import { IColumn } from '../../../shared/interfaces';

interface IProps {}

export const AddNewTaskButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonText = 'Add new task';
  const buttonTextOpacity = 0.5;
  const buttonTextColor = 'inherit';
  const buttonTextBackground = 'inherit';

  return (
    <div
      onClick={() => {
        setIsOpen(true);
      }}
      style={{
        ...styles.openFormButtonGroup,
        opacity: buttonTextOpacity,
        color: buttonTextColor,
        backgroundColor: buttonTextBackground,
      }}>
      <Icon>add</Icon>
      <p>{buttonText}</p>
    </div>
  );
};

const styles = {
  openFormButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
};

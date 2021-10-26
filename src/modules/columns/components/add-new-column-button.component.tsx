import React, { FC, useState } from 'react';
import { Icon } from '@material-ui/core';
import { IColumn } from '../../../shared/interfaces';

interface IProps {
  // title: string;
  // description: string;
  // column: IColumn;
}

export const AddNewColumnButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonText = 'Add new column';
  const buttonTextOpacity = 1;
  const buttonTextColor = 'white';
  const buttonTextBackground = 'rgba(0,0,0,.15)';

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

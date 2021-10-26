import React, { FC, useState } from 'react';
import { Icon } from '@material-ui/core';
import { ICard, IList } from '../../../shared/interfaces';

interface IProps {
  id: number;
  listID: number;
  title: string;
  description: string;
  list: IList<ICard>;
}

export const AddActionButton: FC<IProps> = ({ title, description, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonText = list ? 'Add another list' : 'Add another card';
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? 'white' : 'inherit';
  const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';

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
  formButtonGroup: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
  },
};

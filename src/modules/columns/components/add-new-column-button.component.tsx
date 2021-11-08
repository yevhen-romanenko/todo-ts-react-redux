import React, { FC, useState } from 'react';
import { Icon } from '@material-ui/core';

import { AddNewColumnForm } from '.';

export const AddNewColumnButton: FC = () => {
  const [addColumnForm, setAddColumnForm] = useState(false);

  const toggleAddColumnForm = (): void => {
    setAddColumnForm(!addColumnForm);
  };

  const buttonText = 'Add new column';
  const buttonTextOpacity = 1;
  const buttonTextColor = 'white';
  const buttonTextBackground = 'rgba(0,0,0,.15)';

  return (
    <div>
      {' '}
      {!addColumnForm ? (
        <div
          onClick={toggleAddColumnForm}
          style={{
            ...styles.openFormButtonGroup,
            opacity: buttonTextOpacity,
            color: buttonTextColor,
            backgroundColor: buttonTextBackground,
          }}>
          <div>
            <Icon>add</Icon>
            <p>{buttonText}</p>
          </div>
        </div>
      ) : (
        <AddNewColumnForm
          toggleAddForm={toggleAddColumnForm}></AddNewColumnForm>
      )}
    </div>
  );
};

const styles = {
  openFormButtonGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 50,
    width: 272,
    paddingLeft: 10,
  },
};

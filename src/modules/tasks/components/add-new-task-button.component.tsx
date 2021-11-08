import React, { FC, useState } from 'react';
import { Icon } from '@material-ui/core';
import { AddNewTaskForm } from '.';

interface IProps {
  columnId: number;
}

export const AddNewTaskButton: FC<IProps> = ({ columnId }) => {
  const [isOpenTaskForm, setIsOpenTaskForm] = useState(false);

  const toggleAddTaskForm = (): void => {
    setIsOpenTaskForm(!isOpenTaskForm);
  };

  const buttonText = 'Add new task';
  const buttonTextOpacity = 0.5;
  const buttonTextColor = 'inherit';
  const buttonTextBackground = 'inherit';

  return (
    <div>
      {' '}
      {!isOpenTaskForm ? (
        <div
          onClick={toggleAddTaskForm}
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
        <AddNewTaskForm
          columnId={columnId}
          toggleAddTaskForm={toggleAddTaskForm}></AddNewTaskForm>
      )}
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

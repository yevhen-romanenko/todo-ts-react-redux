import { Typography } from '@mui/material';
import React, { FC, useState } from 'react';

import { EditTaskForm } from '../smart-components';

interface ITaskTitleIsEditingProps {
  columnID: number;
  taskId: number;
  title: string;
  description: string;
}

export const TaskTitleDescIsEditing: FC<ITaskTitleIsEditingProps> = ({
  columnID,
  taskId,
  title,
  description,
}) => {
  const [isEditingTask, setIsEditingTask] = useState(false);

  const toggleEditTask = (): void => {
    setIsEditingTask(!isEditingTask);
  };

  if (isEditingTask)
    return (
      <EditTaskForm
        columnID={columnID}
        taskId={taskId}
        title={title}
        description={description}
        toggleIsTaskEdit={toggleEditTask}
      />
    );
  return (
    <div
      onClick={toggleEditTask}
      style={{
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <div>
        <Typography variant='h5' component='div'>
          {title}
        </Typography>
      </div>
      <div>
        <Typography gutterBottom>{description}</Typography>
      </div>
    </div>
  );
};

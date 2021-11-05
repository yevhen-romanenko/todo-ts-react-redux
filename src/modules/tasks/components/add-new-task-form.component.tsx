import React, { FC, useState } from 'react';
import { Button, Card, Icon } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import { DateInput } from 'semantic-ui-react-datetimeinput';
import { useDispatch } from 'react-redux';
import { addTasksThunk } from '../../../store/tasks';
import { dateParse } from '../../../shared/helpers';

interface IProps {
  columnId: number;
  toggleAddTaskForm: () => void;
}

export const AddNewTaskForm: FC<IProps> = ({ columnId, toggleAddTaskForm }) => {
  const dispatch = useDispatch();

  const titlePlaceholder = 'Enter a title for this task...';
  const descPlaceholder = 'Enter task description';
  const buttonTitle = 'Add task';

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskExpDate, setTaskExpDate] = useState(new Date());

  const handleInputTitleChange = (e: any) => {
    setTaskTitle(e.target.value);
  };

  const handleInputDescriptionChange = (e: any) => {
    setTaskDesc(e.target.value);
  };

  const handleChangeDateValue = (newDateValue: Date) => {
    setTaskExpDate(newDateValue);
  };

  const handleAddTask = () => {
    if (taskTitle) {
      setTaskTitle('');
      setTaskDesc('');
      setTaskExpDate(new Date());
      toggleAddTaskForm();

      dispatch(
        addTasksThunk(columnId, taskTitle, taskDesc, dateParse(taskExpDate))
      );
    }

    return;
  };

  return (
    <div>
      <Card style={{ minHeight: 85, minWidth: 272, padding: '6px 8px 2px' }}>
        <TextareaAutosize
          placeholder={titlePlaceholder}
          autoFocus
          value={taskTitle}
          onChange={handleInputTitleChange}
          style={{
            resize: 'none',
            width: '100%',
            overflow: 'hidden',
            outline: 'none',
            border: 'none',
          }}></TextareaAutosize>

        <div>
          <TextareaAutosize
            placeholder={descPlaceholder}
            value={taskDesc}
            onChange={handleInputDescriptionChange}
            style={{
              resize: 'none',
              width: '100%',
              overflow: 'hidden',
              outline: 'none',
              border: 'none',
            }}></TextareaAutosize>
          <p
            style={{
              fontFamily: 'monospace',
              margin: 3,
            }}>
            DeadLine date:
          </p>
          <DateInput
            onDateValueChange={handleChangeDateValue}
            buttonPlacement='buttonsInside'
            size='large'
            showTooltips={false}
            dateValue={taskExpDate}></DateInput>
        </div>
      </Card>
      <div style={styles.formButtonGroup}>
        <Button
          onMouseDown={handleAddTask}
          variant='contained'
          style={{ color: 'white', backgroundColor: '#5aac44' }}>
          {buttonTitle}
          {''}
        </Button>
        <div onClick={toggleAddTaskForm}>
          <Icon style={{ marginLeft: 8, cursor: 'pointer' }}>close</Icon>
        </div>
      </div>
    </div>
  );
};

const styles = {
  formButtonGroup: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
  },
};

import React, { FC, useState } from 'react';
import { Button, Card, Icon } from '@material-ui/core';
import { IColumn } from '../../../shared/interfaces';
import TextareaAutosize from 'react-textarea-autosize';
import { DateInput } from 'semantic-ui-react-datetimeinput';
// import { dateParse } from '../../../shared/helpers';

interface IProps {
  title: string;
  description: string;
  expiredDate: Date;
}

export const AddNewTaskForm: FC<IProps> = ({
  title,
  description,
  expiredDate,
}) => {
  const titlePlaceholder = 'Enter a title for this task...';
  const descPlaceholder = 'Enter task description';
  const buttonTitle = 'Add task';

  const [taskTitle, setTaskTitle] = useState(title);
  const [taskDesc, setTaskDesc] = useState(description);
  const [taskExpDate, setTaskExpDate] = useState(expiredDate);

  const [isOpen, setIsOpen] = useState(false);

  const handleInputTitleChange = (e: any) => {
    setTaskTitle(e.target.value);
  };

  const handleInputDescriptionChange = (e: any) => {
    setTaskDesc(e.target.value);
  };

  const changeDateValue = (newDateValue: any) => {
    // setCardExpDate({ newDateValue });
  };

  const handleAddTask = () => {
    if (title) {
      setTaskTitle('');
      setTaskDesc('');
      setTaskExpDate(new Date());
      setIsOpen(false);
      //   dispatch(addList(title));
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
            onBlur={() => setIsOpen(false)}
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
            buttonPlacement='buttonsInside'
            size='large'
            showTooltips={false}
            dateValue={taskExpDate}
            onDateValueChange={() => {
              new Date(0);
            }}></DateInput>
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
        <div onClick={() => setIsOpen(false)}>
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

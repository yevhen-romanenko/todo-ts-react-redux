import React, { FC } from 'react';
import { Button, Card, Icon } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import { editTaskThunk } from '../../../store/tasks';
import { useDispatch } from 'react-redux';

interface ITaskFormProps {
  taskId: number;
  columnID: number;
  title: string;
  description: string;
  toggleIsTaskEdit: () => void;
}

export const EditTaskForm: FC<ITaskFormProps> = ({
  taskId,
  columnID,
  title,
  description,
  toggleIsTaskEdit,
}) => {
  const dispatch = useDispatch();
  const [cardTitle, setCardTitle] = React.useState<string>(title);
  const [cardDesc, setCardDesc] = React.useState<string>(description);

  const closeForm = () => {
    toggleIsTaskEdit();
  };

  const handleChangeTitle = (e: any) => {
    setCardTitle(e.target.value);
  };

  const handleChangeDescription = (e: any) => {
    setCardDesc(e.target.value);
  };

  const saveCard = (e: any) => {
    e.preventDefault();
    dispatch(editTaskThunk(taskId, cardTitle, cardDesc));
    toggleIsTaskEdit();
  };

  const cancelSave = (e: any) => {
    closeForm();
  };

  return (
    <form onSubmit={closeForm}>
      <Card
        style={{
          minHeight: 85,
          minWidth: 272,
          padding: '6px 8px 2px',
          marginBottom: '10px',
        }}>
        <TextareaAutosize
          value={cardTitle}
          onChange={handleChangeTitle}
          style={{
            resize: 'none',
            width: '100%',
            overflow: 'hidden',
            outline: 'none',
          }}></TextareaAutosize>
        <TextareaAutosize
          value={cardDesc}
          onChange={handleChangeDescription}
          style={{
            resize: 'none',
            width: '100%',
            overflow: 'hidden',
            outline: 'none',
          }}></TextareaAutosize>
        <div>
          <Button
            variant='contained'
            style={{ color: 'white', backgroundColor: '#5aac44' }}
            onClick={saveCard}>
            Save
          </Button>
          <Icon
            style={{ marginLeft: 8, cursor: 'pointer' }}
            onClick={cancelSave}>
            close
          </Icon>
        </div>
      </Card>
    </form>
  );
};

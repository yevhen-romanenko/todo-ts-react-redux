import React, { FC, useState } from 'react';
import { Button, Card, Icon } from '@material-ui/core';
// import { deleteCard, editCard } from '../actions';
import TextareaAutosize from 'react-textarea-autosize';

interface IProps {
  id: number;
  listID: number;
  title: string;
  description: string;
}

export const EditCardForm: FC<IProps> = ({ title, description }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardTitle, setCardTitle] = useState(title);
  const [cardDesc, setCardDesc] = useState(description);

  const closeForm = () => {
    setIsEditing(false);
  };

  const handleChangeTitle = (e: any) => {
    setCardTitle(e.target.value);
  };

  const handleChangeDescription = (e: any) => {
    setCardDesc(e.target.value);
  };

  const saveCard = (e: any) => {
    e.preventDefault();
    // dispatch(editCard(listID, id, cardTitle, cardDesc));
    setIsEditing(false);
  };

  const cancelSave = (e: any) => {
    closeForm();
  };

  const handleDeleteCard = () => {
    // dispatch(deleteCard(id, listID));
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

import React, { FC, useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ListTitleIsEditing } from '../atoms';

interface IProps {
  listID: number;
  title: string;
  cards: [];
  canMoveLeft: boolean;
  canMoveRight: boolean;
}

export const TodoList: FC<IProps> = ({
  listID,
  title,
  cards,
  canMoveLeft,
  canMoveRight,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  //   const [cardTitle, setCardTitle] = useState(title);
  //   const [cardDesc, setCardDesc] = useState(description);

  const handleDeleteList = (e: any) => {
    // dispatch(deleteList(listID));
  };
  const handleMoveLeft = (direction: any) => {
    // dispatch(moveList(listID, DIRECTION_LEFT));
  };

  const handleMoveRight = (direction: any) => {
    // dispatch(moveList(listID, DIRECTION_RIGHT));
  };

  return (
    <div style={styles.container}>
      <div>
        {canMoveLeft && (
          <div style={styles.listButtons} onClick={handleMoveLeft}>
            <ArrowBackIcon />
          </div>
        )}
        <div>
          {' '}
          <ListTitleIsEditing
            listID={listID}
            title={title}
            isEditing={isEditing}
          />
        </div>
        {canMoveRight && (
          <div style={styles.listButtons} onClick={handleMoveRight}>
            <ArrowForwardIcon />
          </div>
        )}
        <div onClick={handleDeleteList}>
          <DeleteIcon></DeleteIcon>
        </div>
      </div>

      {/* {cards.map((card) => (
          <TodoCard
            id={card.id}
            listID={listID}
            key={card.id}
            title={card.title}
            description={card.description}
            dateOfCreate={card.dateOfCreate}
            expiredTaskDate={card.expiredTaskDate}></TodoCard>
        ))}
        <TodoActionButton listID={listID} /> */}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: '100%',
    marginRight: 8,
  },
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listButtons: {
    cursor: 'pointer',
  },
  deleteIcon: {
    cursor: 'pointer',
    position: 'relative',
    right: '-30px',
  },
};

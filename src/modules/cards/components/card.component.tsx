import React, { FC, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { CardHeaderIsExpired, CardDateLabels } from '../atoms';
import DeleteIcon from '@mui/icons-material/Delete';

interface IProps {
  id: number;
  listID: number;
  title: string;
  description: string;
  dateOfCreate: string;
  expiredTaskDate: string;
}

export const TodoCard: FC<IProps> = ({
  title,
  description,
  dateOfCreate,
  expiredTaskDate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  //   const [cardTitle, setCardTitle] = useState(title);
  //   const [cardDesc, setCardDesc] = useState(description);

  return (
    <Card style={styles.cardContainer}>
      <CardContent>
        <CardHeaderIsExpired isExpired={true} />
        <div>
          <Typography variant='h6' component='div'>
            {title}
          </Typography>
          <div style={styles.deleteIcon}>
            <DeleteIcon></DeleteIcon>
          </div>
        </div>
        <div onClick={() => setIsEditing(true)}>
          <Typography gutterBottom>{description}</Typography>
        </div>

        <CardDateLabels date={dateOfCreate} />
        <CardDateLabels date={expiredTaskDate} />
      </CardContent>
    </Card>
  );
};

const styles = {
  titleContainer: {
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContainer: {
    marginBottom: 8,
  },
  deleteIcon: {
    cursor: 'pointer',
  },
  expiredContainer: {
    marginBottom: 8,
    backgroundColor: '#B22222',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
};

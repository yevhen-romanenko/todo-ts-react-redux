import React, { FC, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import {
  TaskHeaderIsExpired,
  TaskDateLabels,
  TaskDateExpiredLabels,
} from '../atoms';
import DeleteIcon from '@mui/icons-material/Delete';
// import { deleteTaskReq } from '../../../api/tasks';
import { connect, useDispatch } from 'react-redux';
import { deleteTask } from '../../../store/tasks';

interface IProps {
  id: number;
  columnID: number;
  title: string;
  description: string;
  dateOfCreate: string;
  expiredTaskDate: string;
}

export const TodoTask: FC<IProps> = ({
  id,
  columnID,
  title,
  description,
  dateOfCreate,
  expiredTaskDate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  //   const [cardTitle, setCardTitle] = useState(title);
  //   const [cardDesc, setCardDesc] = useState(description);

  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask(columnID, id) as any);
    console.log('deleted task witd id', id, 'from column #', columnID);
  };

  return (
    <div>
      <Card style={styles.cardContainer}>
        <CardContent>
          <TaskHeaderIsExpired isExpired={false} />
          <div
            style={{
              marginBottom: 8,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Typography variant='h5' component='div'>
              {title}
            </Typography>
            <div onClick={handleDeleteTask} style={styles.deleteIcon}>
              <DeleteIcon></DeleteIcon>
            </div>
          </div>
          <div onClick={() => setIsEditing(true)}>
            <Typography gutterBottom>{description}</Typography>
          </div>

          <TaskDateLabels date={dateOfCreate} />
          <TaskDateExpiredLabels date={expiredTaskDate} />
        </CardContent>
      </Card>
    </div>
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

export default connect()(TodoTask);

import React, { FC } from 'react';
import { Card, CardContent } from '@material-ui/core';
import {
  TaskHeaderIsExpired,
  TaskDateLabels,
  TaskDateExpiredLabels,
} from '../atoms';
import DeleteIcon from '@mui/icons-material/Delete';

import { connect, useDispatch } from 'react-redux';
import { deleteTask } from '../../../store/tasks';
import { dateParse } from '../../../shared/helpers';
import { TaskTitleDescIsEditing } from '.';

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
  // const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask(id));
  };

  const isExpiredTask = (expiredDate: string) => {
    const isExpired = expiredDate <= dateParse(new Date());
    return isExpired;
  };

  return (
    <div>
      <Card style={styles.cardContainer}>
        <CardContent>
          <TaskHeaderIsExpired isExpired={isExpiredTask(expiredTaskDate)} />
          <TaskTitleDescIsEditing
            columnID={columnID}
            taskId={id}
            title={title}
            description={description}
          />
          <TaskDateLabels date={dateOfCreate} />
          <TaskDateExpiredLabels date={expiredTaskDate} />
          <div onClick={handleDeleteTask} style={styles.deleteIcon}>
            <DeleteIcon></DeleteIcon>
          </div>
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

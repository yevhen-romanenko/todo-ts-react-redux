import React, { FC } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ColumnTitleIsEditing } from '../atoms';
import { AddNewTaskButton, TodoTask } from '../../tasks/components';
import {
  changeColumnPositionThunk,
  deleteColumn,
  fetchColumnsThunk,
} from '../../../store/columns';
import { ITask } from '../../../shared/interfaces';

import { useDispatch, connect } from 'react-redux';

import store from '../../../store';
import { DIRECTION_LEFT, DIRECTION_RIGHT } from '../../../shared/consts';
import { fetchTasksThunk } from '../../../store/tasks';
import { useEffectOnce } from '../../../hooks/useEffectOnce';

interface ITodoColumnProps {
  columnID: number;
  title: string;
  tasks: ITask[];
  canMoveLeft: boolean;
  canMoveRight: boolean;
}

export const TodoColumn: FC<ITodoColumnProps> = ({
  columnID,
  title,
  tasks,
  canMoveLeft,
  canMoveRight,
}) => {
  const dispatch = useDispatch();

  useEffectOnce(() => {
    store.dispatch(fetchColumnsThunk() as any);
    store.dispatch(fetchTasksThunk() as any);
  });

  const handleDeleteColumn = () => {
    dispatch(deleteColumn(columnID));
  };
  const handleMoveLeft = () => {
    dispatch(changeColumnPositionThunk(columnID, DIRECTION_LEFT));
  };

  const handleMoveRight = () => {
    dispatch(changeColumnPositionThunk(columnID, DIRECTION_RIGHT));
  };

  return (
    <div style={styles.container}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {canMoveLeft && (
          <div style={styles.listButtons} onClick={handleMoveLeft}>
            <ArrowBackIcon />
          </div>
        )}
        <div>
          {' '}
          <ColumnTitleIsEditing columnID={columnID} title={title} />
        </div>
        {canMoveRight && (
          <div style={styles.listButtons} onClick={handleMoveRight}>
            <ArrowForwardIcon />
          </div>
        )}
        <div
          style={{
            cursor: 'pointer',
            position: 'relative',
            right: '-30px',
          }}
          onClick={handleDeleteColumn}>
          <DeleteIcon></DeleteIcon>
        </div>
      </div>

      {tasks.map((task) => (
        <TodoTask
          id={task.id}
          columnID={columnID}
          key={task.id}
          title={task.title}
          description={task.description}
          dateOfCreate={task.dateOfCreate}
          expiredTaskDate={task.expiredDate}></TodoTask>
      ))}
      <AddNewTaskButton columnId={columnID}></AddNewTaskButton>
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

const mapStateToProps = (state: any) => ({
  tasks: state.tasks.taskItems,
});

export default connect(mapStateToProps)(TodoColumn);

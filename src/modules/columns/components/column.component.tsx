import React, { FC } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ColumnTitleIsEditing } from '../atoms';
import { AddNewTaskButton, TodoTask } from '../../tasks/components';
import { deleteColumn } from '../../../store/columns';
import { ITask } from '../../../shared/interfaces';
// import { IColumn } from '../../../shared/interfaces';
// import { Dispatch } from 'redux';
import { useDispatch, connect } from 'react-redux';

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
  // const [isEditing, setIsEditing] = useState(false);
  const isEditing = false;
  //   const [cardTitle, setCardTitle] = useState(title);
  //   const [cardDesc, setCardDesc] = useState(description);

  const handleDeleteColumn = () => {
    dispatch(deleteColumn(columnID));
  };
  const handleMoveLeft = (direction: any) => {
    // dispatch(moveList(listID, DIRECTION_LEFT));
  };

  const handleMoveRight = (direction: any) => {
    // dispatch(moveList(listID, DIRECTION_RIGHT));
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
          <ColumnTitleIsEditing
            columnID={columnID}
            title={title}
            isEditing={isEditing}
          />
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
      <AddNewTaskButton></AddNewTaskButton>
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
  columns: state.columns.columns,
});

export default connect(mapStateToProps)(TodoColumn);

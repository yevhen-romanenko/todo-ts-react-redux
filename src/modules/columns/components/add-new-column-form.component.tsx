import React, { FC, useState } from 'react';
import { Button, Card, Icon } from '@material-ui/core';
import { IColumn } from '../../../shared/interfaces';
import TextareaAutosize from 'react-textarea-autosize';
import { addColumn } from '../../../store/columns';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
// import { dateParse } from '../../../shared/helpers';

interface IProps {
  isOpen: boolean;
}

// const addNewColumn = (column: IColumn) => async (dispatch: Dispatch) => {
//   setTimeout(() => dispatch(addColumn(column) as any), 1000);
// };

export const AddNewColumnForm: FC<IProps> = ({ isOpen }) => {
  const titlePlaceholder = 'Enter column title...';
  const buttonTitle = 'Add column';

  const dispatch = useDispatch();

  const [columnTitle, setColumnTitle] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(isOpen);

  const handleInputTitleChange = (e: any) => {
    setColumnTitle(e.target.value);
  };

  const handleAddColumn = (e: any) => {
    // const { dispatch } = this.props;
    // const { title } = this.state;

    if (columnTitle) {
      setIsFormOpen(false);

      // dispatch(addColumn(columnTitle) as any);

      setColumnTitle('');
    }

    return;
  };
  // console.log(isFormOpen);
  return (
    <div>
      <Card style={{ minHeight: 85, minWidth: 272, padding: '6px 8px 2px' }}>
        <TextareaAutosize
          placeholder={titlePlaceholder}
          autoFocus
          value={columnTitle}
          onChange={handleInputTitleChange}
          style={{
            resize: 'none',
            width: '100%',
            overflow: 'hidden',
            outline: 'none',
            border: 'none',
          }}></TextareaAutosize>
      </Card>
      <div style={styles.formButtonGroup}>
        <Button
          onMouseDown={handleAddColumn}
          variant='contained'
          style={{ color: 'white', backgroundColor: '#5aac44' }}>
          {buttonTitle}
          {''}
        </Button>
        <div onClick={() => setIsFormOpen(false)}>
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

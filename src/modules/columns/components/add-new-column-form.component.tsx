import React, { FC, useState } from 'react';
import { Button, Card, Icon } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import { addColumnsThunk } from '../../../store/columns';

import { useDispatch } from 'react-redux';
// import { dateParse } from '../../../shared/helpers';

type TodoAddColumnFormProps = {
  toggleAddForm: () => void;
};

export const AddNewColumnForm: FC<TodoAddColumnFormProps> = ({
  toggleAddForm,
}) => {
  const titlePlaceholder = 'Enter column title...';
  const buttonTitle = 'Add column';

  const dispatch = useDispatch();
  const [columnTitle, setColumnTitle] = useState('');

  const handleInputTitleChange = (e: any) => {
    setColumnTitle(e.target.value);
  };

  const handleAddColumn = (e: any) => {
    if (columnTitle) {
      dispatch(addColumnsThunk(columnTitle));
      setColumnTitle('');
      toggleAddForm();
    }

    return;
  };

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
        <div onClick={toggleAddForm}>
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

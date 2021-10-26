import React, { FC, useState } from 'react';
import { Button, Card, Icon } from '@material-ui/core';
import { IColumn } from '../../../shared/interfaces';
import TextareaAutosize from 'react-textarea-autosize';
import { DateInput } from 'semantic-ui-react-datetimeinput';
// import { dateParse } from '../../../shared/helpers';

interface IProps {
  // id: number;
  // listID: number;
  title: string;
  //   description: string;
  column: IColumn;
}

export const AddNewColumnForm: FC<IProps> = ({ title, column }) => {
  const titlePlaceholder = 'Enter column title...';
  const buttonTitle = 'Add column';

  const [columnTitle, setColumnTitle] = useState(title);

  const [isOpen, setIsOpen] = useState(false);

  const handleInputTitleChange = (e: any) => {
    setColumnTitle(e.target.value);
  };

  const handleAddColumn = () => {
    // const { dispatch } = this.props;
    // const { title } = this.state;

    if (title) {
      setColumnTitle('');
      setIsOpen(false);
      //   dispatch(addList(title));
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
        <div onClick={() => setIsOpen(false)}>
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

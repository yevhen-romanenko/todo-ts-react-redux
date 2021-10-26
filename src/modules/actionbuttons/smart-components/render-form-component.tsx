import React, { FC, useState } from 'react';
import { Button, Card, Icon } from '@material-ui/core';
import { ICard, IList } from '../../../shared/interfaces';
import TextareaAutosize from 'react-textarea-autosize';
import { DateInput } from 'semantic-ui-react-datetimeinput';

interface IProps {
  id: number;
  listID: number;
  title: string;
  description: string;
  list: IList<ICard>;
}

export const AddFormButton: FC<IProps> = ({ title, description, list }) => {
  const titlePlaceholder = list
    ? 'Enter list title...'
    : 'Enter a title for this card...';

  const placeholder = 'Enter card description';

  const buttonTitle = list ? 'Add list' : 'Add Card';

  const [cardTitle, setCardTitle] = useState(title);
  const [cardDesc, setCardDesc] = useState(description);
  //   const [cardExpDate, setCardExpDate] = useState(description);

  const [isOpen, setIsOpen] = useState(false);

  const handleInputTitleChange = (e: any) => {
    setCardTitle(e.target.value);
  };

  const handleInputDescriptionChange = (e: any) => {
    setCardDesc(e.target.value);
  };

  const changeDateValue = (newDateValue: Date) => {
    setState({ expiredTaskDate: newDateValue });
  };

  const handleAddList = () => {
    // const { dispatch } = this.props;
    // const { title } = this.state;

    if (title) {
      setCardTitle('');
      setIsOpen(false);
      //   dispatch(addList(title));
    }

    return;
  };

  const handleAddCard = () => {
    // const { dispatch, listID, dateOfCreate } = this.props;
    // const { title, description, expiredTaskDate } = this.state;

    if (title) {
      setCardTitle('');
      setCardDesc('');
      //   setCardExpDate(new Date());
      //   dispatch(
      //     addCard(listID, title, description, dateOfCreate, expiredTaskDate)
      //   );
    }
  };

  return (
    <div>
      <Card style={{ minHeight: 85, minWidth: 272, padding: '6px 8px 2px' }}>
        <TextareaAutosize
          placeholder={titlePlaceholder}
          autoFocus
          value={cardTitle}
          onChange={handleInputTitleChange}
          style={{
            resize: 'none',
            width: '100%',
            overflow: 'hidden',
            outline: 'none',
            border: 'none',
          }}></TextareaAutosize>
        {list ? (
          ''
        ) : (
          <div>
            <TextareaAutosize
              placeholder={placeholder}
              onBlur={() => setIsOpen(false)}
              value={cardDesc}
              onChange={handleInputDescriptionChange}
              style={{
                resize: 'none',
                width: '100%',
                overflow: 'hidden',
                outline: 'none',
                border: 'none',
              }}></TextareaAutosize>
            <p
              style={{
                fontFamily: 'monospace',
                margin: 3,
              }}>
              DeadLine date:
            </p>
            <DateInput
              buttonPlacement='buttonsInside'
              size='large'
              showTooltips={false}
              dateValue={null}
              onDateValueChange={changeDateValue}

              //   dateValue={this.state.expiredTaskDate}
              //   onDateValueChange={this.changeDateValue}
            ></DateInput>
          </div>
        )}
      </Card>
      <div style={styles.formButtonGroup}>
        <Button
          onMouseDown={list ? handleAddList : handleAddCard}
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

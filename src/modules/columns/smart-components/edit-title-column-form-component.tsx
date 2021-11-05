import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { editColumnsTitleThunk } from '../../../store/columns';

interface IProps {
  columnID: number;
  title: string;
  toggleisEdit: () => void;
}

export const EditTitleColumnForm: FC<IProps> = ({
  columnID,
  title,
  toggleisEdit,
}) => {
  const dispatch = useDispatch();

  const [newColumnTitle, setNewColumnTitle] = React.useState<string>(title);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewColumnTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      dispatch(editColumnsTitleThunk(columnID, newColumnTitle));
      toggleisEdit();
    }
  };

  return (
    <div className='input-field margintop2'>
      <input
        onChange={changeHandler}
        value={newColumnTitle}
        type='text'
        id='title'
        placeholder={title}
        onKeyPress={keyPressHandler}
      />
    </div>
  );
};

import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { editColumnTitle } from '../../../store/columns';

interface IProps {
  columnID: number;
  title: string;
  isEdit: boolean;
}

export const EditTitleColumnForm: FC<IProps> = ({
  columnID,
  title,
  isEdit,
}) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState<boolean>(isEdit);
  const [newColumnTitle, setNewColumnTitle] = React.useState<string>(title);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewColumnTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      // dispatch(editColumnTitle(columnID, newColumnTitle));
      setIsEditing(false);
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

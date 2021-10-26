import React, { FC, useState } from 'react';

interface IProps {
  listID: number;
  title: string;
}

export const EditTitleForm: FC<IProps> = ({ title }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const handleChange = (e: any) => {
    e.preventDefault();
    setListTitle(e.target.value);
  };

  const handleFinishEditing = (e: any) => {
    setIsEditing(false);
    //   dispatch(editListTitle(listID, listTitle));
  };

  const handleFocus = (e: any) => {
    e.target.select();
  };

  return (
    <form onSubmit={handleFinishEditing}>
      <input
        type='text'
        value={listTitle}
        onFocus={handleFocus}
        autoFocus
        onChange={handleChange}
        onBlur={handleFinishEditing}
      />
    </form>
  );
};

import React, { FC, useState } from 'react';

import { EditTitleColumnForm } from '../smart-components';

interface IProps {
  columnID: number;
  title: string;
}

export const ColumnTitleIsEditing: FC<IProps> = ({ title, columnID }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const toggleEditColumnTitle = (): void => {
    setIsEditingTitle(!isEditingTitle);
  };

  if (isEditingTitle)
    return (
      <EditTitleColumnForm
        columnID={columnID}
        title={title}
        toggleisEdit={toggleEditColumnTitle}
      />
    );
  return <h4 onClick={toggleEditColumnTitle}>{title}</h4>;
};

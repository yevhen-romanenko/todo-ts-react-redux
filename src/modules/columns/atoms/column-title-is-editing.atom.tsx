import React, { FC, useState } from 'react';

import { EditTitleColumnForm } from '../smart-components';

interface IProps {
  columnID: number;
  isEditing: boolean;
  title: string;
}

export const ColumnTitleIsEditing: FC<IProps> = ({ title, columnID }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!isEditing) return <h4 onClick={() => setIsEditing(true)}>{title}</h4>;
  return <EditTitleColumnForm columnID={columnID} title={title} />;
};

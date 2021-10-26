import React, { FC, useState } from 'react';

import { EditTitleForm } from '../smart-components';

interface IProps {
  listID: number;
  isEditing: boolean;
  title: string;
  //   styles?: StyledProps
}

export const ListTitleIsEditing: FC<IProps> = ({ title, listID }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!isEditing) return <h4 onClick={() => setIsEditing(true)}>{title}</h4>;
  return <EditTitleForm listID={listID} title={title} />;
};

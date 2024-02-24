import React, { ReactNode } from 'react';

type ContentProps = {
    children?: ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="p-4">
      {children}
    </div>
  );
}

export default Content
import React, { ReactNode } from 'react';

interface StyleProps {
  children: ReactNode;
}

const Style: React.FC<StyleProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-1/2 p-4 flex flex-col md:flex-row items-start"> 
        {children}
      </div>
    </div>
  );
};

export default Style;

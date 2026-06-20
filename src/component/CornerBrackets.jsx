import React from 'react';

const CornerBrackets = () => {
  return (
    <>
      <div className="border-muted-foreground/50 absolute -top-px -left-px h-2 w-2 border-t border-l" />
      <div className="border-muted-foreground/50 absolute -top-px -right-px h-2 w-2 border-t border-r" />
      <div className="border-muted-foreground/50 absolute -bottom-px -left-px h-2 w-2 border-b border-l" />
      <div className="border-muted-foreground/50 absolute -bottom-px -right-px h-2 w-2 border-b border-r" />
    </>
  );
};

export default CornerBrackets;

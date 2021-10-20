import React from 'react';

const MiniPopup = ({ title, children }) => {
  return (
    <div className="fullScreen">
      <div className="miniPopup">
        <div className="card-title">{title}</div>
        {children}
      </div>
    </div>
  );
};
export default MiniPopup;

import React from 'react';

/**
 * Mini Modal component
 * @param title Title for the modal
 * @param children Body of the modal
 */
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
export default React.memo(MiniPopup);

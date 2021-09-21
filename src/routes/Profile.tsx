import React, { ReactElement } from 'react';

export function Profile(): ReactElement {
  return (
    <div className="profile">
      <h1 className="header-font">
        Denne siden er tom.
        <span role="img" aria-label="female emoji shrugging">
          🤷‍♀️
        </span>
      </h1>
    </div>
  );
}

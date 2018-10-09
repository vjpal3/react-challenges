import React from 'react';
import { Link } from 'react-router';

const LauncherTile = (props) => {
  return (
    <div>
      <Link to={`/launcher/${props.id}`} >{props.name}</Link>
    </div>
  );
};

export default LauncherTile;

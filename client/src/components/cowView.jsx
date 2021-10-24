import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Build this out
// props: { cow = a cow object }
function CowView(props) {
  return (
    <div>
      <h2>{props.cow.name}</h2>
      {props.cow.description}
    </div>
  )
}

export default CowView;
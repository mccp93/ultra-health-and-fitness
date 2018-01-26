import React from 'react';

import '../../../styles/Athlete.scss';

const Athlete = props => (
  <div className="athlete-wrapper">
    <div className="athlete-image-wrapper">
      <img className="athlete-image" src={props.image} alt={props.sport} />
    </div>
    <div className="athlete-body">
      <div className="athlete-title">
        <div className="athlete-name">{props.name}</div>
        <div className="athlete-sport">{props.sport}</div>
      </div>

      <div className="athlete-text">{props.body}</div>

      <div className="athlete-workout">
        {props.workout.map((object, i) => (
          <div className="athlete-sample-exercise" key={i}>
            <div className="athlete-exercise">{object[0]}</div>
            <div className="athlete-reps">{object[1]}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Athlete;

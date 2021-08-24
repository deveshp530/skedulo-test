import React from 'react';

export const Jobs = (props: any) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Job: {props.name}</h3>
        <li>Start: {props.start}</li>
        <li>End: {props.end}</li>
        <h4>Contact: {props.contact}</h4>
      </div>
    </div>
  );
};

import React from 'react';
import { Jobs } from './Jobs';


interface IJobListProps {
  jobs: any[];
}

export const JobList = (props: IJobListProps) => {
  if (props.jobs && props.jobs.length === 0) {
    return (
      <div>
        <h3> No jobs found</h3>
      </div>
    );
  }
  return (
    <ul className="list-group">
      {props.jobs.map((job: any) => (
        <li key={job.id}>
          <Jobs
            name={job.name}
            start={job.start}
            end={job.end}
            contact={job.contact}
          />
        </li>
      ))}
    </ul>
  );
};

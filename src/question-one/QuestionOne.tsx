import React, { useState } from 'react';
import { IDataService } from '../common/types';

import { SectionGroup } from '../components/section/SectionGroup';
import { SectionPanel } from '../components/section/SectionPanel';

import './QuestionOne.css';
import { JobList } from '../components/JobList';
import { SearchBar } from '../components/SearchBar';

export const QuestionOne: React.FC<{ service: IDataService }> = ({
  service,
}) => {
  const [data, setData] = useState<any>(null);

  const getAllJobs = (searchTerm: string) => {
    service
      .getJobsWithSearchTerm(searchTerm)
      .then((res) => {
        setTimeout(() => {
          setData(res);
        }, 500);
      })
  };
  return (
    <SectionGroup>
      <SectionPanel>
        <SearchBar getAllJobs={getAllJobs} />
        {data && <JobList jobs={data} />}
      </SectionPanel>
    </SectionGroup>
  );
};

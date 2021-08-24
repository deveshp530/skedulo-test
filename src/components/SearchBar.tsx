import React, { useState } from 'react';

interface ISearchBarProps {
  getAllJobs: any;
}

export const SearchBar = (props: ISearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);
  const { getAllJobs } = props;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (searchTerm.length > 2) {
    getAllJobs(searchTerm);
  }

  return (
    <div>
      <form>
        <label htmlFor='getJob'>Search</label>
        <input
        id='getJob'
          type="text"
          className="form-control"
          placeholder="Search for a Job"
          value={searchTerm}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

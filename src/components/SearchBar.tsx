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

  if (searchTerm === ''){
      return(
          <div></div>
      )
  }
  return (
    <div>
      <label>Search</label>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={onChange}
      />
    </div>
  );
};

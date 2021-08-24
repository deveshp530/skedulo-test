Wanted to create components for each of the following:
    SearchBar, JobList, Jobs


the search bar will call the function to connect with the service and display jobs with a matching query

the joblist takes in the data of the resulting searchterm and passes it on to the component. The joblist then takes in the prop of jobs which uses the map function to create multiple Job components based on the query.

# Improvements
I couldn't get the field to clear when the search field is empty. 

# Challenges

I have worked with TS before, but not with react before. So I was having some difficulty understanding some of the react FC code. HAd to take some time and learn more about how to use TS and react. Got it figured it out and is very helpful!

Getting the data to load on the page. The data was not showing up and was giving me an undefined for the props.jobs. Forgot to include the data in QuestionOne.TSX along with the JobList component and was working fine after that.

I could not get the name to show up because there was no field of Name in the 'db.json' file. If I were to change it, I would add a contactName field in the file and use that to display the person who posted the job. 


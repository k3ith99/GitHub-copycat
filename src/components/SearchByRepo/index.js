import React, {useState, useEffect} from 'react';
import axios from 'axios';

var months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

const SearchByRepo = () => {

    const [ username, setUsername ] = useState("");
    const [ nameInput, setNameInput ] = useState("");
    const [ userData, setUserData] = useState([]);
    const [ status, setStatus] = useState(false);

    const [reps, setReps] = useState([])
    const [error, setError] = useState()
    const [clicked, setClicked] = useState()
    const [repository, setRepository] = useState("some things")

    const handleInput = e => setNameInput(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        setUsername(nameInput);
        fetchUser(nameInput);
        setNameInput("");
        };


    const fetchUser = async (nameInput) => {
        try{
            let { data } = await axios.get(`https://api.github.com/users/${nameInput}/repos`)
            console.log(data[0].name)
            setReps(data)
            setStatus(0)
        } catch(err){
            console.log("Can't find user");

            setStatus(1)
            }
        };

   
    
    //////////////////////////////////////////////////////
    //let repository = ["some things"];

    
        // const fetch = async () => {
        //     try {
        //         let { data } = await axios.get(`https://api.github.com/users/${username}/repos`) 
        //         console.log(data)
        //         setReps(data)
        //     } catch (error) {
        //         setError(error.message)
        //     }

        // }


    
    const handleClick = async (e) => {
        e.preventDefault();
        //console.log(`You clicked something `);
        //console.log(e.target.value);
        try {
            /* let { data } = await axios.get(`https://api.github.com/users/${username}/repos`) */
            let data = reps
            const repo = data.filter(sg => sg.id == e.target.value)
            console.log(repo)
            
            //console.log([repo[0].forks_count, repo[0].open_issues_count, repo[0].archived, repo[0].stargazers_count ])
            setRepository(repo[0])
            setClicked(1);
            //console.log(repository)
        } catch (error) {
            setError(error.message)
        }
      }

      const Mailbox = () => {
          console.log("below is")
          console.log(repository)
          let updated = repository.updated_at
          let date = updated.slice(8,10)+" "+months[parseInt(updated.slice(6,8))]+" "+updated.slice(0,4)
         return (
          <div className = "repo-results">
            <p> 
                    Number of forks: {repository.forks_count}  <br/>
                    Number of open issues: {repository.open_issues_count} <br/>
                    Number of stargazers: {repository.stargazers_count}  <br/>            
                    Last updated:  {date}   
            </p>              
        
          </div>
        );
      }

    return(
        <>
         <div className="news-reader">
            <div className='area0'>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='username'> </label>
                <input type = "text" id = "username" placeholder='github-username' value = {nameInput} onChange= {handleInput} />
                <input type = "submit" />
            </form>
            <span> {status ?"Invalid username. Please try again.":""} </span>
            </div>

            
       
            {/* <h1 className = "searchId"> Search form</h1> */}
            {status ? <div> </div>:
            <div className="areaA">
                {/* <p> {username} 's repos </p> */}
                <ul>
                    {
                        reps.map( sg => (
                            <li key = {sg.id} > 
                            <button value ={sg.id} className="gitButton" onClick={handleClick}> {sg.name} </button>
                            </li>
                        )

                        )
                    }
                </ul>
            </div>}

            <div className="areaB">
        
                <div>
                {!status && clicked && <Mailbox />}
                </div>

            </div>
        {error && <div id="error" role ="alert" >{error}</div>}
        </div>
        </>
    )
} 

export default SearchByRepo;

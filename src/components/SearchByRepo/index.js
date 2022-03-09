import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SearchByRepo = () => {

    const [reps, setReps] = useState([])
    const [error, setError] = useState()
    const [clicked, setClicked] = useState(true)
    
    const [username, setUsername] = useState("jalexxx");
    
    useEffect( () => {
        const fetchSongs = async () => {
            try {
                let { data } = await axios.get(`https://api.github.com/users/${username}/repos`) 
                console.log(data)
                setReps(data)
            } catch (error) {
                setError(error.message)
            }

        }
        fetchSongs()
        
    },[])

    function handleClick(e) {
        e.preventDefault();
        setClicked(1);
        console.log('You clicked something');
        // try {
        //     let { data } = await axios.get(`https://api.github.com/users/${params.name}/repos/`) 
        //     console.log(data)
        //     setSongs(data)
        // } catch (error) {
        //     setError(error.message)
        // }
      }

    return(
        <div className="news-reader">
            {/* <h1 className = "searchId"> Search form</h1> */}
            <div className="areaA">
                <p> {username} 's repos </p>
                <ul>
                    {
                        reps.map( sg => (
                            <li key = {sg.id} > 
                            <button className="gitButton" onClick={handleClick}> Repo name: {sg.name} {sg.id} </button>
                            </li>
                        )

                        )
                    }
                </ul>
            </div>

            <div className="areaB">
        
                <h2>
                You have unread messages.
                </h2>

            </div>

        {error && <div id="error" role ="alert" >{error}</div>}
        </div>

    )
} 

export default SearchByRepo;

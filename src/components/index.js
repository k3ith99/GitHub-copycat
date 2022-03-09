import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Headlines = () => {

    const [songs, setSongs] = useState([])
    const [error, setError] = useState()
    const [clicked, setClicked] = useState(true)
    
    const [username, setUsername] = useState("jalexxx");
    
    // const params =       {name: "jalexxx"};
   
    useEffect( () => {
        const fetchSongs = async () => {
            try {
                let { data } = await axios.get(`https://api.github.com/users/${username}/repos`) 
                console.log(data)
                setSongs(data)
            } catch (error) {
                setError(error.message)
            }

        }
        fetchSongs()
        
    },[])

    function handleClick(e) {
        e.preventDefault();
        setClicked(1);
        console.log('You clicked something.');
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
            <h1> Search form</h1>
            <div className="areaA">
                <p> {username} 's repos </p>
                <ul>
                    {
                        songs.map( sg => (
                            <li key = {sg.id} > 
                            <button className="gitButton" onClick={handleClick}> Repo name: {sg.name} </button>
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

        {/* {error && <div id="error" role ="alert" >{error}</div>} */}
        </div>

    )
} 

export default Headlines;

import React, {useState} from 'react';
import axios from 'axios';




const SearchByUser = () => {
    const [ username, setUsername ] = useState("");
    const [ nameInput, setNameInput ] = useState("");
    const [ userData, setUserData] = useState([]);

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
            setUserData(data)
        } catch(err){
            console.log("Can't find user");
            }
        };
    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor='username'>Username</label>
            <input type = "text" id = "username" placeholder='username' value = {nameInput} onChange= {handleInput} />
            <input type = "submit" />
        </form>
        
        <section className = 'userData'>
           
                    <article>
                        <ul>{
                        userData.map( sg => (
                            <li key = {sg.id} > 
                            <button className="gitButton" > Repo name: {sg.name} </button>
                            </li>
                        )

                        )
                    }{ /* add a function here*/}
                    </ul>
                    </article>

                
            
        </section>
        </>
    )
}

export default SearchByUser;

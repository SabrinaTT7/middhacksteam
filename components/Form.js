import {useState,setState} from 'react';
import users from '../data/users.json';
export default function Form({use}){
    const [interests, setInterests] = useState([]);
    const [match, setMatch] = useState(undefined);
    let best_user = undefined;
    function findMatch(){
        let best_match = -1;
        //let best_user = undefined;
        for (let i = 0; i < users.length; i ++){
            let count = 0;
            let user = users[i];
            if (user.match === undefined){
                    //we also need to check here if the user already has a match
                //if they do we take them out of the running
                for (let j = 0; j < interests.length; j++){
                    let interest = interests[j];
                    for (let k = 0; k < user.interests.length; k++){
                        if (interest === user.interests[k]){
                            count +=1
                        }
                    }
                    
                }
                if (count > best_match){
                    best_match = count;
                    best_user = user;
                }
            }
            
        }
        setMatch(best_user)
       
    }
    return(
        <div>
            <h1> Fill out this form to get matched with a pal! </h1>
            <p>Please select as many interests as you want! You will be matched with the people who have the most in common.</p>
            <button className = "button" onClick = {() =>{setInterests([...interests, "hockey"])}}>Hockey</button>
            <button className = "button" onClick = {() =>{setInterests([...interests, "shakespeare"])}}>Shakespeare</button>
            <button className = "button" onClick = {() =>{setInterests([...interests, "poetry"])}}>Poetry</button>
            <button className = "button" onClick = {() =>{setInterests([...interests, "baseball"])}}>Baseball</button>
            <button className = "button" onClick = {() =>{setInterests([...interests, "swimming"])}}>Swimming</button>
            <button className = "button" onClick = {() =>{setInterests([...interests, "reading"])}}>Reading</button>
            <button className = "button" onClick = {() =>{setInterests([...interests, "writing"])}}>Writing</button>
            <button className = "button" onClick = {() =>{setInterests([...interests, "cooking"])}}>Cooking</button>
            <button className = "button" onClick = {() =>{setInterests([...interests, "baking"])}}>Baking</button>
            <button className = "button" onClick = {() =>{setInterests([...interests, "coding"])}}>Coding</button>
            <button className = "button" onClick = {() =>{setInterests([...interests, "music"])}}>Music</button>
            <button className = "button" onClick = {() =>{setInterests([...interests, "musicals"])}}>Musicals</button>
            <button className = "button" onClick = {() =>{setInterests([...interests, "skateboarding"])}}>Skateboarding</button>
            <br></br>
            <br></br>
            <button className = "button1" onClick = {() =>{findMatch()}}>Done</button>
            
            <p>Your match is... </p>
            <p>{match === undefined? "...": match.name}</p>
            

        </div>
        //have a bunch of buttons for potential interests to click on if you are interested in that subject
        //optional: text input for other interests
        //psuedocode for this
        // loop through each user in the "database" (imported data from users.json file)
        // match the user with the user who has the most interests in common (use a count)
        // update the match in the user's info
        
    );
        
}

import {useState,setState} from 'react';
import users from '../data/users.json';
export default function Form({user}){
    const [interests, setInterests] = useState([]);
    const [match, setMatch] = useState([]);
    function findMatch(){
        let best_match = -1;
        let best_user = undefined;
        for (i = 0; i < users.length; i ++){
            let count = 0;
            let user = users[i];
            //we also need to check here if the user already has a match
            //if they do we take them out of the running
            for (j = 0; j < interests.length; j++){
                let interest = interests[j];
                for (k = 0; k < user.interests.length; k++){
                    console.log(user.interests[k]);
                    console.log(interest);
                    if (interest === user.interests[k]){
                        console.log("heerree");
                        count +=1
                    }
                }
                
            }
            if (count > best_match){
                console.log("hereeeee");
                best_match = count;
                best_user = user;
            }
        }
        setMatch(best_user)
    }
    return(
        <div>
            <h1> Fill out this form to get matched with a pal! </h1>
            <p>Please select as many interests as you want! You will be matched with the people who have the most in common.</p>
            <button onClick = {() =>{setInterests([...interests, "hockey"])}}>Hockey</button>
            <button onClick = {() =>{setInterests([...interests, "shakespeare"])}}>Shakespeare</button>
            <button onClick = {() =>{setInterests([...interests, "poetry"])}}>Poetry</button>
            <button onClick = {() =>{setInterests([...interests, "baseball"])}}>Baseball</button>
            <button onClick = {() =>{setInterests([...interests, "swimming"])}}>Swimming</button>
            <button onClick = {() =>{setInterests([...interests, "reading"])}}>Reading</button>
            <button onClick = {() =>{setInterests([...interests, "writing"])}}>Writing</button>
            <button onClick = {() =>{setInterests([...interests, "cooking"])}}>Cooking</button>
            <button onClick = {() =>{setInterests([...interests, "baking"])}}>Baking</button>
            <button onClick = {() =>{setInterests([...interests, "coding"])}}>Coding</button>
            <button onClick = {() =>{setInterests([...interests, "music"])}}>Music</button>
            <button onClick = {() =>{setInterests([...interests, "musicals"])}}>Musicals</button>
            <button onClick = {() =>{setInterests([...interests, "skateboarding"])}}>Skateboarding</button>
            <br></br>
            <button onClick = {() =>{findMatch}}>DONE</button>
            <p>{interests}</p>
            <p>Your match is... {match}</p>

        </div>
        //have a bunch of buttons for potential interests to click on if you are interested in that subject
        //optional: text input for other interests
        //psuedocode for this
        // loop through each user in the "database" (imported data from users.json file)
        // match the user with the user who has the most interests in common (use a count)
        // update the match in the user's info
        
    );
        
}

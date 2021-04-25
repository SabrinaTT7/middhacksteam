import {useState, setState} from 'react';
export default function Pal({user}){
    const [text, setText] = useState("Write your letter here!");
    const [letterDisplay1, setLetterDisplay1] = useState("Hey");
    const [letterDisplay2, setLetterDisplay2] = useState("Hey back.");
   
    function addLetter(letter){
        setLetterDisplay1(letterDisplay2);
        setLetterDisplay2(letter);
    }

    return(
        <div>
             <h1> Talk to your pal here! </h1>
             <p>{letterDisplay1}</p>
             <p>{letterDisplay2}</p>
             <textarea id="txtArea" rows= "30" cols= "40" placeholder="Write your letter here!" onChange = {(e) => {setText(e.target.value)}}/>
             <button onClick = {() => addLetter(text)}>Send</button>
        </div>
       //this will be pretty simple: just a textarea with an input at the end
       //once the input is submitted it should display a sort of 'sent' format
       //so at the top of the page will be a display of say 2 most recent letters (the one received and then the one sent)

       //the trick will be making it look pretty!
    );
        
}

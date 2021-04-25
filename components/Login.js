import { unstable_renderSubtreeIntoContainer } from "react-dom";

export default function Login(selected){
    
    //selected = () => {selected}
    
    let username = ""
    console.log(selected)
    return(
        
       <div>
           <form class="box" action="index.html" method="post">
            <h3>Login</h3>
            <input type ="text" name = {username} placeholder="Username"></input>
            <input type = "password" name ="" placeholder ="Password"></input>
            <input className = "button" type = "button" name= "" value ="Login" onClick ={() => selected(true)}></input>
            </form>
       </div>
       
       
    );
        
}

export default function Login(handler){
    let username = ""
    return(
        
       <div>
           <form class="box" action="index.html" method="post">
            <h3>Login</h3>
            <input type ="text" name = {username} placeholder="Username" onChange={() => {handler(username)}}></input>
            <input type = "password" name ="" placeholder ="Password"></input>
            <input type = "submit" name= "" value ="Login"></input>
            </form>
       </div>
    );
        
}
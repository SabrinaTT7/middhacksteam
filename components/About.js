export default function About({user}){
    user.name = "sabrina";
    return(

       <div>
           <p>{user.name}</p>
       </div>
    );
        
}
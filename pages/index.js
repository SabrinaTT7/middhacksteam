import {useState, setState} from 'react';
import About from '../components/About';
import Form from '../components/Form';
import Pal from '../components/Pal';
import Login from '../components/Login';

export default function Home() {
    const [page, setPage] = useState(undefined)
    const [loginStatus, setLoginStatus] = useState(false)
    
    return (
        <div>
            <head>
            {/* <!-- Required meta tags --> */}
            {/* <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1"> */}

            {/* <!-- Bootstrap CSS --> */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"/>
{/*             
            <!-- Local CSS --> */}
            <link rel="stylesheet" href="style.css"/>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"/>

            <title>Pandemic Pals</title>
            </head>
          
            <body>
                <div className="container">
                    <div className="p-4 my-4 bg-light text-dark rounded-3">
                        <h1>Hello, pandemic friends!</h1>
                        <h2>Welcome to the world of <i>Pandemic Pals</i> where you can befriend someone new in these challenging times!</h2>    
                        {page === undefined && <About user = {{name: "Sabrina", age: 20}}/>}
                    </div>
                </div>
               
                <nav class="navbar navbar-light bg-light navbar-expand-md">
                    <div class="container">
                        <span class="navbar-brand">navigate</span>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <button class="" onClick= {() => setPage('form')}>Get Matched!</button>
                                <button class="" onClick= {() => setPage('pal')}>Letter Time!</button>
                            </div>
                        </div>
                    </div>
                </nav>
                {loginStatus === false && <Login selected = {(item) => {setLoginStatus(item), console.log(undefined)}}/>}
                {page === "form" && <Form/>}
                {page === "pal" && <Pal/>}

            
                {/* <!-- Bootstrap JS --> */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
                
               

            </body>

        </div>

    );
}
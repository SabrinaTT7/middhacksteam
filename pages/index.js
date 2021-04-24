import {useState} from 'react';
export default function Home() {
    return (
        <div>
            <head>
            {/* <!-- Required meta tags --> */}
            {/* <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1"> */}

            {/* <!-- Bootstrap CSS --> */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"/>
{/*             
            <!-- Local CSS --> */}
            <link rel="stylesheet" href="style.css"/>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"/>

            <title>Pandemic Pals</title>
            </head>
            <body>
                <div class="container">
                    <div class="p-4 my-4 bg-light text-dark rounded-3">
                        <h1>Hello, pandemic friends!</h1>
                        <h2>Welcome to the world of <i>Pandemic Pals</i> where you can befriend someone new in these challenging times!</h2>    
                    </div>
                </div>
                <nav class="navbar navbar-light bg-light navbar-expand-md">
                    <div class="container">
                        <span class="navbar-brand">Middlebury Panther</span>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link" href="">Get Matched!</a>
                                <a class="nav-link" href="pal.html">Check In! (Better name here lol)</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <h3>Contact Me</h3>
                <ul class="list-inline">
                    <li class="list-inline-item">panther@middlebury.edu</li>
                    <li class="list-inline-item"><a href="https://github.com/middlebury"><i class="bi-github" role="img" aria-label="GitHub"></i></a></li>
                    <li class="list-inline-item"><a href="https://www.linkedin.com/school/middlebury-college/"><i class="bi-linkedin" role="img" aria-label="GitHub"></i></a></li>
                </ul>
                {/* <!-- Bootstrap JS --> */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
                
                <form class="box" action="index.html" method="post">
                    <h1>Login</h1>
                    <input type ="text" name ="" placeholder="Username"></input>
                    <input type = "password" name ="" placeholder ="Password"></input>
                    <input type = "submit" name= "" value ="Login"></input>
                </form>

            </body>

        </div>

    );
}
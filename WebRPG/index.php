<?php
    session_start();
    require "header.php";
?>



<main>
    <?php
        if (isset($_SESSION['userId'])) {
            echo '<div class="alert alert-success p-4 fixed-top" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                You have logged in!
            </div>';
        }
        else {
            require "loginBox.php";}
    ?>

    <!-- Big Container -->
    <div class="container">
        <!-- Home Box -->
        <div class="home">
            <!-- Home -->
            <h1 class="welcome">WELCOME TO WEB RPG</h1>
            <p>Welcome to the first RPG made by us for us!</p>
            <!-- Meet the crew -->
            <div class="section">
                <h2>Meet the crew</h2>
                <div class="d-flex-inline">
                    <div class=userBio>
                        <img src="pics/margoul.png" class="crewPic img-fluid rounded-circle">
                        <h3>Margoul</h3>
                        <ul>
                            <li>Alias: Senpai</li>
                            <li>Country: France</li>
                            <li>Superpower: Sounding super french</li>
                        </ul>
                    </div>
                    <div class=userBio>
                        <img src="pics/paralogic.png" class="crewPic img-fluid rounded-circle">
                        <h3>Paralogic</h3>
                        <ul>
                            <li>Alias: Alex, Sasha</li>
                            <li>Country: Austria</li>
                            <li>Superpower: Contagious laugh, twitch thot</li>
                        </ul>
                    </div>

                    <div class=userBio>
                        <img src="pics/sleepy.png" class="crewPic img-fluid rounded-circle">
                        <h3>Sleepy</h3>
                        <ul>
                            <li>Alias: Flippy</li>
                            <li>Country: Norway</li>
                            <li>Superpower: Flip super hard</li>
                        </ul>
                    </div>
                    <div class=userBio>
                        <img src="pics/ulvi.png" class="crewPic img-fluid rounded-circle">
                        <h3>Deus</h3>
                        <ul>
                            <li>Alias: Dus, Bot, Alex2</li>
                            <li>Country: Norway</li>
                            <li>Superpower: Super loudness, amazing painting skills</li>
                        </ul>
                    </div>
                    <div class=userBio>
                        <img src="pics/ulvi.png" class="crewPic img-fluid rounded-circle">
                        <h3>Ulvhagel</h3>
                        <ul>
                            <li>Alias: Ulvi, Doggo</li>
                            <li>Country: Sweden</li>
                            <li>Superpower: Youtuber, Meme maker, HEY (*swedish*)</li>
                        </ul>
                    </div>
                    <div class=userBio>
                        <img src="pics/pearl.png" class="crewPic img-fluid rounded-circle">
                        <h3>Pearl</h3>
                        <ul>
                            <li>Alias: Grill</li>
                            <li>Country: ?</li>
                            <li>Superpower: Cute voice</li>
                        </ul>
                    </div>
                    <div class=userBio>
                        <img src="pics/tails.png" class="crewPic img-fluid rounded-circle">
                        <h3>Left4Tails</h3>
                        <ul>
                            <li>Alias: Tails, Irish guy</li>
                            <li>Country: Ireland/USA</li>
                            <li>Superpower: Weelchair, RP</li>
                        </ul>
                    </div>
                    <div class=userBio>
                        <img src="pics/jade.png" class="crewPic img-fluid rounded-circle">
                        <h3>Jade</h3>
                        <ul>
                            <li>Alias: Yanick, Janik, ...</li>
                            <li>Country: Germany</li>
                            <li>Superpower: Coding skills</li>
                        </ul>
                    </div>
                    <div class=userBio>
                        <img src="#" class="crewPic img-fluid rounded-circle">
                        <h3>TC</h3>
                        <ul>
                            <li>Alias: tc</li>
                            <li>Country: Norway</li>
                            <li>Superpower: Overwatch pro player</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Videos -->
            <div class="section">
                <h2>Videos</h2>
                <iframe width="460" height="215" src="https://www.youtube.com/embed/D_3zwxDf0ik" frameborder="0" allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
                <iframe width="460" height="215" src="https://www.youtube.com/embed/FjEszfO0wRw" frameborder="0" allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
                <p>Here are some videos from the crew!
                </p>
            </div>
            <!-- Images -->
            <div class="section images">
                <h2>Images</h2>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item"><img class="carouselImage" src="pics/vr1.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="pics/vr2.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="pics/vr3.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="pics/vr4.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="https://cdn.discordapp.com/attachments/447022468520083456/455448834240413697/unknown.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="https://cdn.discordapp.com/attachments/447022468520083456/455451026984796172/unknown.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="https://cdn.discordapp.com/attachments/437346018716286981/440200368459350029/unknown.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="https://cdn.discordapp.com/attachments/474612535589339139/474934860834668576/floor.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="https://cdn.discordapp.com/attachments/437346018716286981/444605844005322762/unknown-2.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="https://cdn.discordapp.com/attachments/437346018716286981/444588900715986965/unknown.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="https://cdn.discordapp.com/attachments/474612535589339139/474934860834668576/floor.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="https://cdn.discordapp.com/attachments/437346018716286981/471760128220200971/unknown.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="https://cdn.discordapp.com/attachments/437346018716286981/451825924367712283/unknown.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="https://cdn.discordapp.com/attachments/437346018716286981/452604358509461515/unknown.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="https://cdn.discordapp.com/attachments/437346018716286981/453681054268653588/unknown.png"></div>
                        <div class="carousel-item"><img class="carouselImage" src="https://cdn.discordapp.com/attachments/437346018716286981/453681113009881108/Conan_Drawing.png"></div>
                        <div class="carousel-item active"><img class="carouselImage" src="https://cdn.discordapp.com/attachments/474612535589339139/475325869162889220/spank.png"></div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    <p>Some of our adventures!</p>
                </div>
            </div>

        </div>
    </div>

    <!-- Signup Modal -->
    <div id="signup" class="modal signupModal" tabindex="-1" role="dialog">
        <section class="modal-dialog modal-md">
            <form class="modal-content bg-dark text-light form-signin needs-validation" method="POST" action="includes/signup.php">

                <div class="modal-header">
                    <h3 class="modal-title mx-auto">Registration</h3>
                </div>
                <div class="modal-body">
                    <div class="m-4">
                        <label>Username</label>
                        <input type="text" name="username" class="form-control" id="validationCustom01" required>
                        <div class="valid-feedback">
                            Ok!
                        </div>
                    </div>

                    <div class="m-4">
                        <label>Password</label>
                        <input type="password" name="pwd" class="form-control" required>
                        <label>Repeat Password</label>
                        <input type="password" name="pwd_repeat" class="form-control" required>
                    </div>


                    <div class="m-4">
                        <label>Email Address</label>
                        <input type="email" name="email" class="form-control" required>
                    </div>
                    <p class="small">By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms
                            & Conditions</a>.</p>
                    <button type="submit" name="signupBtn" class="btn btn-primary d-block mx-auto">Register</button>
                </div>

            </form>
        </section>
    </div>

    <script src="index.js"></script>
</main>

</html>
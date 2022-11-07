<!DOCTYPE html>
<html>
    <head>
        <title>French stuff</title>
        <style>
            body{
                /*Color palette: flygon orange(#F2B05E), flygon blue(#62A4B6), black, white, flygon green(#CAF28D), light flygon green(#CFF2AC), flygon eyeball (#B89C1E)*/
                background-color:#caf28d;
                color:black;
                font-family:sans-serif;
                max-width: 56.625rem;
                padding-left: 7%;
                padding-right: 7%;
                padding-bottom: 4rem;
                margin-left:auto;
                margin-right:auto;
            }
            h1, h2{
                font-family:cursive, sans-serif;
            }
            #toc{
                background-color:#CFF2AC;
                color:#a6a6a6;
                padding:5px;
                width:100%;
                position:relative;
                float:left;
                margin-right:5px;
                border:3px solid black;
            }
            #toc_ul{
                list-style:none;
                text-align:left;
                padding-left:5px;
            }
            #toc_title{
                font-weight: bold;
                line-height: 1.33;
                letter-spacing: 1.5px;
                font-variant:lowercase;
                font-family:cursive, sans-serif;
                margin-top:3px;
                margin-left:3px;
                font-size:.8rem;
            }
            .type{
                display:inline-block;
            }
            img {
                width:300px;
                float:left;
                margin:3px;
            }
            .learning_nugget{
                display:inline-block;
                width:45%;
                height:350px;
                float:left;
                margin:6px;
                padding:5px;
                font-family:cursive;
                font-weight:bold;
                margin-
            }
            div#greetings .learning_nugget{
                border:#B89C1E solid 3px;
            }
            div#introduction_phrases .learning_nugget{
                border:#62A4B6 solid 3px;
            }
            div#feelings .learning_nugget{
                border:#62872b solid 3px;
            }
            div#weather .learning_nugget{
                border:#F2B05E solid 3px;
            }
        </style>
    </head>
    <body>
        <marquee>
            <h1>Welcome, class!</h1>
        </marquee>
        <div id="toc">
            <h3 id="toc_title">Table of Contents</h3>
            <ul id="toc_ul">
                <!--<li><a href="#one">One: "Expresso," or What Drinks am I Even Making?</a></li>
                <li><a href="#two">Two: "Variety is the Spice of Life," or Secondary Terms</a></li>
                <li><a href="#three">Three: "Numerology," or Coffee Cups and You</a></li>
                <li><a href="#four">Four: "Yes, Chef!" or, Making Ingredients In-House</a></li>
                <li><a href="#five">Five: "Now we're cooking with gas!" or, Drink-Making</a></li>
                <li><a href="#six">Six: "Addiction," or My Favorite Drinks</a></li>-->
            </ul>
        </div>
        <div class="type" id="greetings">
            <h2>Greetings</h2>
            <div class="learning_nugget">
                <img src="hamster-hello.gif">
                <caption class="english">"Hello!"</caption>
            </div>
            <div class="learning_nugget">
                <img src="hi.gif">
                <caption class="english">"Hi!"</caption>
            </div>
            <div class="learning_nugget">
                <img src="elmo-hey.gif">
                <caption class="english">"Hey!"</caption>
            </div>
            <div class="learning_nugget">
                <img src="whats-up.gif">
                <caption class="english">"What's up?"</caption>
            </div>
        </div>
        <div class="type" id="introduction_phrases">
            <h2>Introduction</h2>
            <div class="learning_nugget">
                <img src="how-are-you.gif">
                <caption class="english">How are you?</caption>
            </div>
            <div class="learning_nugget">
                <img src="doing-well.gif">
                <caption class="english">I am doing well!</caption>
            </div>
            <div class="learning_nugget">
                <img src="not-doing-well.gif">
                <caption class="english">I am not doing well.</caption>
            </div>
            <div class="learning_nugget">
                <img src="whats-your-name.gif">
                <caption class="english">What is your name?</caption>
            </div>
            <div class="learning_nugget">
                <img src="my-name-is.gif">
                <caption class="english">My name is...</caption>
            </div>
            <div class="learning_nugget">
                <img src="i-like.gif">
                <caption class="english">I like...</caption>
            </div>
            <div class="learning_nugget">
                <img src="i-dont-like.gif">
                <caption class="english">I do not like...</caption>
            </div>
            <div class="learning_nugget">
                <img src="what-do-you-like.gif">
                <caption class="english">What do you like?</caption>
            </div>
        </div>
        <div class="type" id="feelings">
            <h2>Feelings</h2>
            <div class="learning_nugget">
                <img src="happy.gif">
                <caption class="english">I am happy!</caption>
            </div>
            <div class="learning_nugget">
                <img src="sad.gif">
                <caption class="english">I am sad.</caption>
            </div>
            <div class="learning_nugget">
                <img src="angry.gif">
                <caption class="english">I am angry!</caption>
            </div>
            <div class="learning_nugget">
                <img src="excited.gif">
                <caption class="english">I am excited!</caption>
            </div>
            <div class="learning_nugget">
                <img src="surprised.gif">
                <caption class="english">I am surprised!</caption>
            </div>
        </div>
        <div class="type" id="weather">
            <h2>Weather</h2>
            <div class="learning_nugget">
                <img src="sunny.gif">
                <caption class="english">It is sunny.</caption>
            </div>
            <div class="learning_nugget">
                <img src="raining.gif">
                <caption class="english">It is raining.</caption>
            </div>
            <div class="learning_nugget">
                <img src="windy.gif">
                <caption class="english">It is windy!</caption>
            </div>
            <div class="learning_nugget">
                <img src="hot.gif">
                <caption class="english">It is hot.</caption>
            </div>
            <div class="learning_nugget">
                <img src="cold.gif">
                <caption class="english">It is cold.</caption>
            </div>
        </div>
    </body>
</html>

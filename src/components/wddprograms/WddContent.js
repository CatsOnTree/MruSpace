import React from 'react'
import WddPrgmCom from './WddPrgmCom';
import logo from '../images/m-logo.png'

export default function WddContent({wddactiveComponent}) {
    function myfun() {
        alert("button clicked!!")
    }
    const timebtn={
        width:"auto",
        heigh:"50px",
        backgroundColor:"#F16522",
        fontSize:"20px",
        border:"none",
        padding:"3px"
    }
    function getcurrenttime(){
        var presenttime = new Date()
        document.getElementById("time").innerHTML = presenttime;
    }
    const getcurrenttimeintervel = ()=>{
      setInterval(()=>getcurrenttime(),1000)
    }

    const WddContentObj={
        onsubmit:{
            code:`<!DOCTYPE html>
<html lang="en">
<head>
    <title>onsubmit</title>
</head>
<body>
    <form onsubmit="myfun()">
    Enter name : <input type="text">
    <input type="submit">
    </form>
    <script>
        function myfun(){
            alert("form submitted on MRUSPACE!!")
        }
    </script>
</body>
</html>
`,
output:`A input with submit button will be displayed`,
heading:`JavaScript program based on OnSubmit Event`
        },
        calc:{
            code:`<!DOCTYPE html>
<html lang="en">

<head>
    <title>Calculator</title>
    <style>
        button {
            width: 50px;
            height: 50px;
        }

        input {
            width: 210px;
            height: 50px;
        }
        #clear{
            width: 210px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="calculator" align="center">

            <div class="input-El">
                <input type="text" placeholder="" id="output-Display">
            </div>
            <div class="button-El">
                <button onclick="display('7')">7</button>
                <button onclick="display('8')">8</button>
                <button onclick="display('9')">9</button>
                <button onclick="display('*')">x</button><br>
                <button onclick="display('4')">4</button>
                <button onclick="display('5')">5</button>
                <button onclick="display('6')">6</button>
                <button onclick="display('-')">-</button><br>
                <button onclick="display('1')">1</button>
                <button onclick="display('2')">2</button>
                <button onclick="display('3')">3</button>
                <button onclick="display('+')">+</button><br>
                <button onclick="display('0')">0</button>
                <button onclick="display('.')">.</button>
                <button onclick="calculate('=')" id="equalEl">=</button>
                <button onclick="display('/')">/</button><br>
                <button onclick="cle()" id="clear">AC</button>
            </div>

        </div>
    </div>

</body>
<script>
    let outputDisplay = document.getElementById("output-Display");

    function display(num) {
        outputDisplay.value += num;
    }
    
    function calculate(num) {
        try {
            outputDisplay.value = eval(outputDisplay.value);
        }
        catch (error) {
            outputDisplay.value = "Invalid Input!!"
        }
    }

    function cle() {
        outputDisplay.value = " ";
    }
</script>

</html>
`,
output:`calculator`,
heading:`Simple Calculator using HTML`
        },

        comparison:{
            code:`<!DOCTYPE html>
<html>
    <head>
        <title>comparison operators</title>
    </head>
    <script>
        var a= 10;
        var b = 20;
        document.write(a==b,"<br>");
        document.write(a>=b,"<br>");
        document.write(a<=b,"<br>");
        document.write(a!=b,"<br>");
        document.write(a>b,"<br>");
        document.write(a<b,"<br>");
    </script>
</html>
`,
output:`false
false
true
true
false
true`,
heading:`Comparison operators in JavaScript`
        },

        hyperlink:{
            code:`
<!DOCTYPE html>
<html lang="en">
<head>
    <title>week1</title>
</head>
<body>
    <p><a href="https://www.anilreddy.ml/">My Portfolio</a></p>
    <a href="https://www.mruspace.ml/"><img src="img/m-logo.png" alt="MRU SPACE"></a>
</body>
</html>
`,
output : <div><p><a href="https://www.anilreddy.ml/">My Portfolio</a></p>
 <a href="https://www.mruspace.ml/"><img src={logo} alt="MRU SPACE" style={{width:"50px",height:"50px"}}/></a></div>,
heading:`HYPERLINKS IN HTML`
        },

        onclick:{
            code:`
<!DOCTYPE html>
<html lang="en">
<head>
    <title>onclick</title>
</head>
<body>
    <button onclick="myfun()">Click Me</button>
    <script>
        function myfun() {
            alert("button clicked!!")
        }
    </script>
</body>
</html>
`,
output: <button onClick={myfun} style={{width:"100px",height:"50px",fontSize:"20px"}}>Click Me</button>,
heading:`JavaScript program based on OnClick Event`
        },

        onfocus:{
code:`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>onblur</title>
</head>
<body>
    <input type="text" id="inputid" onblur="fun()">
    <script>
        function fun(){
            alert("Focus is out of input!!")
        }
    </script>
</body>
</html>
`,
output:`After executing first click on input box
and then click some where else to see onfocus event effect`,
heading:'JavaScript program based on onFocus Event'
        },

        onload:{
            code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Onload</title>
</head>
<body onload="alertfun()">
    <script>
        function alertfun(){
            alert("Welcome to the world of MRUSPACE")
        }
    </script>
</body>
</html> 
`,
output:`After executing Just refresh the website to see the onload effect`,
heading:`JavaScript program based on onLoad Event`
        },

        squares:{
            code:`
<!DOCTYPE html>
<html>
    <head>
        <title>squares and cubes from 1 to 10</title>
    </head>
    <script>
        document.write("<p><center>The square and cubes of numbers from 1 to 10</center></p>")
        document.write('<table border="2" align="center" bgcolor="gray">');
        document.write('<th>Numbers</th><th>Squares</th><th>Cubes</th>')
        for(var i=0;i<=10;i++){
            document.write("<tr><td>"+i+"</td><td>"+i**2+"</td><td>"+i**3+"</td></tr>")
        }
        document.write("</table>")
    </script>
</html> 
`,
output:`We get the squares and cubes from 1 to 10 in a table format`,
heading:`squares and cubes from 1 to 10 using js`
        },

        textformat:{
            code:`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <p>This is <b>bold text</b></p>
    <p>This is <strong>strongly import text</strong></p>
    <p>This is <i>italic text</i></p>
    <p>This is <em>emphasized text</em></p>
    <p>This is <mark>highlighted text</mark></p>
    <p>This is <code>computer code</code></p>
    <p>This is <small>smaller text</small></p>
    <p>This is <sub>subscript</sub> and <sup>superscript</sup></p>
    <p>This is <del>deleted text</del></p>
    <p>This is <ins>inserted text</ins></p>
    <p>This is <b>bold text</b></p>
</body>
</html>
  `,
output:<div><p>This is <b>bold text</b></p>
<p>This is <strong>strongly import text</strong></p>
<p>This is <i>italic text</i></p>
<p>This is <em>emphasized text</em></p>
<p>This is <mark>highlighted text</mark></p>
<p>This is <code>computer code</code></p>
<p>This is <small>smaller text</small></p>
<p>This is <sub>subscript</sub> and <sup>superscript</sup></p>
<p>This is <del>deleted text</del></p>
<p>This is <ins>inserted text</ins></p><p>This is <b>bold text</b></p></div>,
heading:`TEXT FORMATTING`
        },

        time:{
            code:`<!DOCTYPE html>
<html lang="en">
<head>
    <title>time</title>
</head>
<body onload="getcurrenttime()">
    <h1>The current time is:</h1>
    <div id="time"></div>
</body>
    <script>
        function getcurrenttime(){
            var presenttime = new Date()
            document.getElementById("time").innerHTML = presenttime;
        }
    </script>
</html>
`,
output:<div><button style={timebtn} onClick={getcurrenttimeintervel}>Click here to see output</button>
<h1>The current time is:</h1>
<div id="time"></div></div>,
heading:`Current Time and date using JavaScript`
        },

togglemenu:{
code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #home{
            width: 100vw;
            height: 5vh;
            background-color: rgb(229, 150, 150);
            color: white;
        }
        #subnav{
            width: 100vw;
            height: 5vh;
            background-color: aqua;
            color: white;
            display: block;
        }
        a{
            text-decoration: none;
            color: #000;
            font-size: 25px;
        }
    </style>
</head>
<body>
    <div id="home">
        <a href="#" onclick="myfun()">menu</a>
    </div>
    <div id="subnav"> 
        <a href="#">home</a>
        <a href="#">Contact</a>
        <a href="#">Programs</a>
    </div>
    <script>
        function myfun(){
            let x = document.getElementById("subnav");
            if (x.style.display === "block"){
                x.style.display = "none";
            }
            else{
                x.style.display = "block";
            }
        }
    </script>
</body>
</html>   
`,
output:`We Get a Toggle Menu after executing the above code`,
heading:`Mobile Toggle Navigation Menu Using HTML,CSS and JAVASCRIPT`
},

variabledec:{
    code:`
<!DOCTYPE html>
<html>
    <head>
        <title>JS Variable declaration</title>
    </head>
    <body>
        <script>
            //declaring multiple variables 
            var a=10,b=20,c=30;
            //declaring single variable
            var d=40;
            document.write(a,"<br>")
            document.write(b,"<br>")
            document.write(c,"<br>")
            document.write(d,"<br>")
        </script>
    </body>
</html>
`,
output:`10
20
30
40`,
heading:`Variable Declaration in JavaScript`
},

x5intable:{
    code:`
<!DOCTYPE html>
<html lang="en">
<head>
    <title>superscripts</title>
</head>
<body>
    <script>
        document.write("<p><center>The x <sup>5</sup>  x <sup>6</sup></center></p>")
        document.write('<table border="2" align="center">')
        document.write("<th>Numbers</th><th>x <sup>5</sup></th><th>x <sup>6</sup></th>")
        for(var i=1;i<=5;i++){
            document.write("<tr><td>"+i+"</td><td>"+i**5+"</td><td>"+i**6+"</td></tr>");
        }
        document.write("</table>")
    </script>
</body>
</html> 
`,
output: <p>We get the X<sup>5</sup>& X <sup>6</sup> in table format</p>,
heading:<p>X<sup>5</sup>& X <sup>6</sup> in table format</p>
},

    }

  return (
    <div>
    {wddactiveComponent === "ComponentA" && <WddPrgmCom propsContent={WddContentObj.textformat}/>}
    {wddactiveComponent === "ComponentB" && <WddPrgmCom propsContent={WddContentObj.hyperlink}/>}
    {wddactiveComponent === "ComponentC" && <WddPrgmCom propsContent={WddContentObj.calc}/>}
    {wddactiveComponent === "ComponentD" && <WddPrgmCom propsContent={WddContentObj.comparison}/>}
    {wddactiveComponent === "ComponentE" && <WddPrgmCom propsContent={WddContentObj.time}/>}
    {wddactiveComponent === "ComponentF" && <WddPrgmCom propsContent={WddContentObj.togglemenu}/>}
    {wddactiveComponent === "ComponentG" && <WddPrgmCom propsContent={WddContentObj.x5intable}/>}
    {wddactiveComponent === "ComponentH" && <WddPrgmCom propsContent={WddContentObj.squares}/>}
    {wddactiveComponent === "ComponentI" && <WddPrgmCom propsContent={WddContentObj.variabledec}/>}
    {wddactiveComponent === "ComponentJ" && <WddPrgmCom propsContent={WddContentObj.onclick}/>}
    {wddactiveComponent === "ComponentK" && <WddPrgmCom propsContent={WddContentObj.onsubmit}/>}
    {wddactiveComponent === "ComponentL" && <WddPrgmCom propsContent={WddContentObj.onfocus}/>}
    {wddactiveComponent === "ComponentM" && <WddPrgmCom propsContent={WddContentObj.onload}/>}

    </div>
  )
}

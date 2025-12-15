function App()
{
  if(true)
  {
  var v=100
  let l=200
  const c=300
  v++
  l++
  console.log("Let:"+l);
  //c++
  console.log("Let:"+c);
  }
    return(
    <>
      <h1>variable : global : (v)</h1>
      <h1>does not work let and const : beacause local</h1>
    </>
  )
}
export default App
/*function App()
{
  let myfun=(a,b,c)=>{
    var total=a+b+c
    document.getElementById("res").innerHTML="<h2>Total:</h2>"+total;
  }
  return(
    <>
    <h2>Arrow Function with Parameter</h2>
    <h4>Note:onClick c must be in caps<br></br>Don't use doublt qutoes</h4>
    <h4>Note:in calling function don't use parenthesis when without passing args</h4>
    <button onClick={()=>myfun(10,30,56)}>click me</button>
    <div id="res"></div>
    </>
  )
}
export default App
/*import myimg from './images/images.jpg'
function App(){
  return(
    <>
    <h2>Image Demo using path as expression</h2>
    <center><img src={myimg} width="20%" height="auto" alt="path is wrong"></img></center>
    </>
  )
}
export default App
/*function App(){
  var a=250
  var b=40
  var c=300
  return(
    <>
    <h2>Largest Amoung 3 Numbers</h2>
    <h2>Largest Number:{a>b?(a>c?a:c):(b>c?b:c)}</h2>
    </>
  )
}
export default App
function App(){
  //Javascript learned code
  var a=10
  var b=30
  var c="Sneha"

  return(<>
       <h1>Total:{a+b}</h1>
       <marquee bgcolor='blue'><font size='7'>{c}</font></marquee>
  </>)
}
export default App
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

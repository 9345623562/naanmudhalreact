import React from "react";
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      studentname:this.props.sname,
      studentmark:this.props.mark
    }
  }
  render()
  {
    return(
    <>
    <h1>Combine react state + props</h1>
    <h2>Student Name:{this.state.studentname}</h2>
    <h2>Student Mark:{this.state.studentmark}</h2>
    </>)
  }
}
export default App
/*import React from "react";
class App extends React.Component
{
  constructor()
  {
    super()
    this.state={
      sno:105,
      sname:"Sneha",
      mark:[98,58,94,76,82]
    }
  }
  show=()=>{
    this.setState({sname:"Sneha M"})
  }
  dis=()=>{
    this.setState({mark:[67,85,63,54,82]})
  }
  dis1=()=>{
    const newmark=[...this.state.mark]
    newmark[2]=94
    this.setState({mark:newmark})
  }
  render()
  {
    return(<>
        <h1>This is Class Components</h1>
        <h3>Serial Number:{this.state.sno}</h3>
        <h3>Student Name:{this.state.sname}</h3>
          {this.state.mark.map((v,index)=><>Mark:{index+1} = {v}<br></br></>)}
          <button onClick={this.show}>update name</button>
          <button onClick={this.dis}>update marks</button>
          <button onClick={this.dis1}>update single mark</button>
        
    </>)
  }
}
export default App
/*import { aadhar,accno,place,name } from "./mycomponents/commonvariable"
import Sneha from "./mycomponents/Sneha"
function App()
{
  return(
    <>
    <Sneha/>
    <h1>This is default App Components</h1>
    <h3>My Name is:{name}</h3>
    <h3>My City:{place}</h3>
    <h3>My Aadhar Number:{aadhar}</h3>
    <h3>My Account Number:{accno}</h3>
    </>
  )
}
export default App
/*function App()
{
  var arr=[11,22,33,44,89,56,77,100]
  var s=0
  var ma=arr[0]
  var order=arr
  var fans=""
  return(
  <>
    <h2>new model map(loop)</h2>
    {arr.map((v)=><>{v}<br></br></>)}
    <h2>New model map (loop)</h2>
    <ol type="I">
    {arr.map((v)=><li>{v}</li>)}
    </ol>
    <h2>Task: Sum of array</h2>

    <div style={{display:"none"}}>
    {arr.map((item)=><>{s=s+item}<br></br></>)}
    </div>
    <h3>sum of Array:{s}</h3>
    <div style={{display:"none"}}>
    {arr.map((v)=><>{ma<v && <>{ma=v}</>}</>)}
    </div>
    <h3>max of array:{ma}</h3>

    <h2>Ascending order</h2>
    <div style={{display:"none"}}>{order.sort((a,b)=>a-b)}</div>
    {order.map((item)=>(<>{item },</>))}

    <h2>descending order</h2>
    <div style={{display:"none"}}>{order.sort((a,b)=>b-a)}</div>
    {order.map((item)=>(<>{item},</>))}

    <h3>Adding element in an array</h3>
    <div style={{display:"none"}}>{order.push(999)}</div>
    {order.map((item)=><>{item},</>)}
    <br></br>
    
    <h3>Remove last element in an array</h3>
    <div style={{display:"none"}}>{order.pop()}</div>
    {order.map((item)=><>{item},</>)}
    
    <h2>Remove last comma</h2>
    <div style={{display:"none"}}>{order.map((item)=><>{fans=fans+item+","}</>)}</div>
    {fans.slice(0,-1)}
 </>)  
}
export default App
/*function App()
{
  var arr=[25,17,64,35,78,18,64,84,79,14]
  return(<>
  <h2>React loop map method</h2>
  <h2>Old Model</h2>
  {arr[0]}
  {arr[1]}
  {arr[2]}
  {arr[3]}
  {arr[4]}
  {arr[5]}
  {arr[6]}
  {arr[7]}
  {arr[8]}
  {arr[9]}
  <h3>New Model(loop)</h3>
  {arr.map((v)=><>
  {v}<br></br>
  </>)}
  </>
)
}
export default App
/*function App()
{
  var arr=[11,22,55,68,84]
  var[v1,,v2,...v3]=arr
  return(<>
  <h2>spread operator</h2>
  <h3>index 0: {v1}</h3>
  <h3>index 1: {v2}</h3>
  <h3>index 3: {v3}</h3>
  </>
)
}
export default App
/*function App()
{
  var unit=410
  return(<>
    <h1>Electricity Bill</h1>
    <h2>{`100 units Free `}</h2>
    <h2>{(unit<=50 && "Minimum bill is 50") || 
    (unit<=100 && "Amount : ₹0") || 
    (unit>100 && unit<=200 && `Amount for ${unit} : ₹${(unit-100)*2}`) || 
    (unit>200 && unit<=300 && `Amount for ${unit} : ₹${(200+(unit-200)*3)}`) || 
    (unit>300 && unit<=400 && `Amount for ${unit} : ₹${(500+(unit-300)*4)}`) || 
    (unit>400 && `Amount for ${unit} : ₹${(900+(unit-400)*5)}`)}</h2>
  </>)
}
export default App
/*function App()
{

  var unit=101
  return(
    <>
    <h1>React Simple if Else ladder-</h1>
    <h2>{(unit>=400 && "$5/unit")||(unit>300 && "$4/unit")||(unit>200 && "₹3/unit")||(unit>100 && "₹2/unit")|| "0/unit"}</h2>
    <h2>Minimum Bill:50</h2>
    </>
  )
}
export default App
/*function App()
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
export default App*/
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

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const nayoks = ['Sakib', 'Rajjak', 'Alamgir', 'Salman']
  // var person = {
  //   name: "Dr. Mahafuz",
  //   job: "Singer"
//   }
//   var person2 = {
//     name: "Dharshan Raval",
//     job: "Singer"
//   }
//  var style = {
//    color: 'red',
//    backgroundColor: 'green'
//  }

//   return (
//     <div className="App">
//       <header className="App-header"> 
        // <img src={logo} className="App-logo" alt="logo" />
        // <p>
        //   Edit done <code>src/App.js</code> and save to reload.
        // </p>
//         <p>My FIrst React Paragraph</p>
//         <Person name="Rubel" food="fuska" nayika="Moushumi"></Person>
//         <Person name="Jashim" nayika="Shabana"></Person>
//         <Person name="Bapparaj" nayika="Cheka"></Person>
//         <Person name="Eliyas k" nayika="Diti"></Person>
//         <h1 className="" style={style}>My Heading:{person.name +" "+person.job}</h1>
//         <h3 style={{backgroundColor: "orange", color: "green"}}>Singer: {person2.name +" "+ person2.job}</h3>
       
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function Person (props) {
//   console.log(props)
//   return (
//   <div style={{border:'2px solid red', margin:'10px'}}>
//      <h1> Nayok: {props.name}</h1>
//   <h3>Hero of {props.nayika}</h3>
//   </div>
//   )
 
// }
const nayoks = ['Sakib', 'Rajjak', 'Alamgir', 'Salman', 'Bappy', 'Shuvo']

const products = [
  {name: 'Photoshop', price: '$90.99'},
  {name: 'Illustator', price: '$20.99'},
  {name: 'Adobe Reader', price: '$9.88'},
  {name: 'premear El', price: '$454.08'}
]
const friends = [
  {name: 'Faysal', id: '27'},
  {name: 'Ezaz', id: '26'},
  {name: 'Rakib', id: '18'},
  {name: 'Alif', id: '28'},
]

return (
      <div className="App">
        <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
          <p>I am a React Person</p>
          <Counter></Counter>
          <Users></Users>
          <ul>
            {
              nayoks.map(nayok => <li>{nayok}</li>)
            }
            {
              products.map(product => <li>{product.name}</li>)
            }

          </ul>
          {
            products.map(pd => <Product product={pd}></Product>)
          }
          {/* <Product product={products[0]}></Product>
          <Product product={products[1]}></Product>
          <Product product={products[2]}></Product> */}

          <ul>
            {
              friends.map(fd => <li>{fd.name}-{fd.id}</li>)
            }
          </ul>


          <Person name="Munna" job="Football"></Person>
          <Person name="Masud" job="Circket"></Person>
          <Person></Person>
          </header>
          </div>
  );
 }

 function Counter(){
   const [count, setCount] = useState(10);
   const handleIncrease = () =>{ setCount(count + 1);
    //  const newCount = count + 1;
     
   }
   return(
     <div>
       <h1>Count: {count}</h1>
       <button onClick={ () => setCount(count - 1)}>Decrease</button>
       <button onClick={handleIncrease}>Increase</button>
     </div>
   )
 }

 function Users(){
   const [users, setUsers] = useState([])
   useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setUsers(data));
   })
   return(
     <div>
       <h3>Dynamic Users: {users.length}</h3>
       <ul></ul>
       {
         users.map(user => <li>{user.email}</li>)
       }
       
     </div>
   )
 }

 function Product(props){
   const productStyle={
     border: '1px solid gray',
     borderRadius: '5px',
     backgroundColor: 'lightgray',
     color: 'red',
     height: '200px',
     width: '200px',
     float: 'left'
   }
   const {name, price} = props.product;
   return(
     <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
     </div>
   )
 }

 function Person(props){
   return(
     <div style={{border:'3px solid green', margin:'10px', padding: '10px', width:'400px'}}>
       <h3>My name: {props.name} </h3>
       <p>My Profession: {props.job} </p>
     </div>
   )

 }


export default App;

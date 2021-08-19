import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var Nayoks = ['Sakib','Salman','anower','Jaffor', 'Alomgir', 'Salman']
  var ProductName = [{First:'Photoshop', Prize:"$99.8" },
                       {First:'Illustrator', Prize:'$60.6'},
                       {First:'PDF Reader', Prize:'$6.99'}
]
   const kaloName = ProductName.map(Product=>Product.name)
   console.log(kaloName)
  
  return (
    <div className="App">
      <header className="App-header">
         
         <p>It Safe and Clean</p>
         
         <Users></Users>
         <Counter></Counter>

       <ul>

           {Nayoks.map(ok =><li>{ok}</li>)}
        
         {ProductName.map(jan =><li>{jan.First}</li>  )}
       </ul>
        
        {
          ProductName.map(iio => <Product iio = {iio}></Product>)
        }
        
        

        
        

 
               

      </header>
    </div>
  );
  
}

function Users() {
  const[user, setUser] =useState([])
useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data) )
})

  return(
    <div>
      <h3>Dynamic Users {user.length}</h3>
       <ul>
         {user.map(users => <li>{users.phone}</li>)}
       </ul>
    </div>
  )
}

function Counter() {

  const [Count , count2] = useState(10)
  const countName = () =>{count2(Count +1) }
    
   
  return(
    <div>
      <h1> Name:{Count} </h1>
      <button onMouseMove= {countName}  >Increase</button>
      <br />
      <button onClick= { () => count2(Count - 1)}   > Decrease</button>
    </div>
  )
}






function Product(propus){

  const productStyle = {
    border:"1px solid gray",
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    hight:"400px",
    width:"400px",
    flot:'left'
  }  
  const {First, Prize}= propus.iio;
  console.log(First, Prize)
  return (

    <div style={productStyle}>
      <h3>  { First} </h3>

      <h4>{ Prize} </h4>

      <button  > Buy Now</button>
    </div>
  )
}










function  Person(props){
  const PersonStyle = { backgroundImage : 'lineargradient(90deg, red, yellow)',
                             border:'2px solid red ',
                            margin: ' 10px'}
  return (
  <div   style={PersonStyle}>
    <h3>Nayok:{props.name}     </h3>

<h5>Hero of  {props.Nayka}</h5>
</div>
)
}
   
export default App;

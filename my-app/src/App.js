import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const username = "Artem1";

function Button() {
  return (
    <button className="button1">Sign in</button>
  );
}

function AlertMessage() {
  const [count, setCount] = useState(0);
  function Alert(){
    alert("Hello, "+username+"!");
    setCount(count + 1)
  }
  return (
    <button className="button2" onClick={Alert}>Clicked {count} times</button>
  )
}

export default function App() {
  let content;
    if(username === "Artem") {
      content = <MainMenu />;
    } else {
      content = <><h1>Welcome, {username}!</h1><Button /><AlertMessage /></>;
    }
    return(
      <div>
        {content}
        <List />
      </div>
    )
}

function MainMenu(){
    return (
      <>
      <div className="menu">
        <h2>Menu</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      </>
    );
}

function List() {
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  const listItems = products.map(product =>
    <li key={product.id} style={{
      color: product.id == 1 ? 'magenta' : 'darkgreen'
    }}>
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

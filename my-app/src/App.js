import logo from './logo.svg';
import './App.css';

const username = "Artem";

function Button() {
  return (
    <button className="button1">I'm a button</button>
  );
}

export default function App() {
  let content;
    if(username === "Artem") {
      content = <MainMenu />;
    } else {
      content = <h1>Welcome, {username}!</h1>;
    }
    return(
      <div>
        {content}
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

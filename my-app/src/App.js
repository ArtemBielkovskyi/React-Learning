import logo from './logo.svg';
import './App.css';

const username = "Artem";

function Button() {
  return (
    <button className="button1">I'm a button</button>
  );
}

export default function App() {
  return (
    <>
      <h1>Hello world! React time!</h1>
      <Button />
      <h2>This website under the license of <span className="creator">{username}</span></h2>
    </>
  );
}

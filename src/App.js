import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';

const IdCard = (props) => <div className="div-card">
  <img src={props.picture} alt="imagen"/>
  FirstName: {props.firstName}<br/> LastName: {props.lastName}<br/> Gender: {props.gender}<br/> Height: {props.height}<br/>  Birth{props.birth}<br/>
</div>



function App() {
  return (
    <div className="">
      <IdCard firstName="John" lastName="Doe" gender="male" birth="1992-07-14" height="1.78m" picture="https://randomuser.me/api/portraits/men/44.jpg"/>
      <IdCard firstName="Obrien" lastName="Delores" gender="female" height="1.72m" birth="1992-07-14" picture="https://randomuser.me/api/portraits/women/44.jpg"/>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;

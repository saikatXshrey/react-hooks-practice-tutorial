import React, { useState } from 'react';
import './App.css';
import RulesHook from './component/rulesHook';
import UseStateArray from './component/UseStateArray';
import UseStateObject from './component/UseStateObject';
import ShortCirEval from './component/ShortCirEval';
import BasicForm from './component/forms/basicForm';
import UseEffects1 from './component/useEffect/useEffects1';
import UseEffects2 from './component/useEffect/useEffects2';
import UnControlled from './component/forms/unControlled';
import UseReducer from './component/useReducer/useReducer';
import ComA from './component/useContext/ComA';
import Test from './component/customHooks/test';
import Same from './component/customHooks/same';

const App = () => {

  // const [myName, setMyName] = useState('Saikat Das');

  // const changeName = () => {
  //   let val = myName;
  //   if (val === 'Saikat Das') {
  //     setMyName('Shrey');
  //   } else {
  //     setMyName('Saikat Das');
  //   }
  // }

  return (
    <div>
      <RulesHook />
      <UseStateArray />
      <UseStateObject />
      <ShortCirEval />
      <BasicForm />
      <UseEffects1 />
      <UseEffects2 />
      <UnControlled />
      <UseReducer />
      <ComA />
      <Test />
      <Same />
    </div>
  );
}

export default App;
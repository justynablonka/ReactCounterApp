import './App.css';
import ButtonsPanel from './ButtonsPanel';
import Display from './Display';
import Step from './Step';
import React, { useState } from 'react';

function App() {

  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  const onAdd = () => {
    setValue(prev => prev + step);
  }

  const onReInit = () => {
    setValue(0);
  }

  const onReset = () => {
    setValue(0);
    setStep(1);
  }

  const onChangeStep = (e) => {
    setStep(parseInt(e.target.value));
  }

  return (
    <div className="App">
      <h1>Counter app</h1>
      <div className="counter-content">
        <Display value={value} />
        <ButtonsPanel onAdd={onAdd} onReInit={onReInit} onReset={onReset} step={step} />
        <Step step={step} onChangeStep={onChangeStep} />
      </div>
    </div>
  );
}

export default App;

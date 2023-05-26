import './App.css';
import React, { useState } from 'react';
import ReactiveSearch from './components/SearchBar/ReactiveSearch';
import InputArea from './components/InputArea';
import CenteredTree from './components/CenteredTree';
import CustomNodeTree from './components/CustomNodeTree';
import debugData from './components/data/with-attributes.json';
import SOINC_FP_questions from './data/SOINC_FP_suggestion.json'
import Eric_FP_questions from './data/Eric_FP_suggestion.json'
const searchSuggestion = SOINC_FP_questions.concat(Eric_FP_questions);
const PrettyPrintJson = (str) => {
  try {
    return JSON.stringify(JSON.parse(str), null, 2);
  } catch (e) {
    console.log(e);
    console.log(str);
    return str;
  }
}


function App() {
  const initialTextAreaValue = PrettyPrintJson(JSON.stringify(debugData));
  const [textAreaValue, setTextAreaValue] = useState(initialTextAreaValue);
  const [submittedValue, setSubmittedValue] = useState('');
  const [isTextChanged, setIsChanged] = useState(false);

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
    setIsChanged(true);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(textAreaValue);
    setTextAreaValue(PrettyPrintJson(textAreaValue));
  }

  const handleFormReset = (event) => {
    event.preventDefault();
    setTextAreaValue(initialTextAreaValue);
    setSubmittedValue('');
    setIsChanged(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1><em>Explore the power of quick estimation</em></h1>
        <ReactiveSearch suggestions={searchSuggestion} />
      </header>
      <hr />
      <div className='container'>
        <div className='box'>
          <h2>Fermy's Estimation</h2>
        </div>
        <div className='box'>
          <h2>JSON View</h2>
          <br />
          <InputArea
            value={textAreaValue}
            isChanged={isTextChanged}
            onChange={handleTextAreaChange}
            onSubmit={handleFormSubmit}
            onReset={handleFormReset}
          />
        </div>
        <div className='box'>
          <h2>Tree View</h2>
          <br />
          <CenteredTree Data={submittedValue} />
        </div>
        <div className='box'>
          <h2>Custom Tree View</h2>
          <br />
          <CustomNodeTree Data={submittedValue} />
        </div>
      </div>
    </div>
  );
}

export default App;

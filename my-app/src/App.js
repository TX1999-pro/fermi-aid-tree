import './App.css';
import React, { useState } from 'react';
// components
import ReactiveSearch from './components/SearchBar/ReactiveSearch';
import InputArea from './components/InputArea';
import CenteredTree from './components/CenteredTree';
import CustomNodeTree from './components/CustomNodeTree';
import LLMChatDemo from './components/LLMChat/LLMChat';
// data
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
  // JSON text area states
  const initialTextAreaValue = PrettyPrintJson(JSON.stringify(debugData));
  const [textAreaValue, setTextAreaValue] = useState(initialTextAreaValue);
  const [submittedValue, setSubmittedValue] = useState('');
  const [isTextChanged, setIsChanged] = useState(false);

  // Search states
  const [searchState, setSearchState] = useState(0);
  // 0: initliase or idle
  // 1: searching (on focus)
  // 2: search finished (user selected an item) - display quick result
  // 3: search finished (user didn't select item but pressed enter)
  const [searchValue, setSearchValue] = useState('');

  // AI response states
  const [resultFromLLM, setResultFromLLM] = useState("[This will be the AI response.]");

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
      </header>

      <div className="Search-container">
        <ReactiveSearch suggestions={searchSuggestion} searchState={searchState} setSearchState={setSearchState} setResultFromLLM={setResultFromLLM} />
      </div>
      <hr />
      {searchState !== 0 &&
        <div className='container'>
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
          <div className='display-ai-response box'>
            <h2>Fermy's Response</h2>
            <div style={{ textAlign: "left", whiteSpace: "pre-wrap", width: "400px", height: '500px', overflowY: 'scroll' }} >
              {resultFromLLM}
            </div>

          </div>
          <div className='display-assumptions box'>
            <h2>Extracted Assumptions in the estimation</h2>
          </div>
          <div className='display-tree-view box'>
            <h2>Tree View</h2>
            <br />
            <CenteredTree Data={submittedValue} />
          </div>
          <div className='display-tree-view box'>
            <h2>Custom Tree View</h2>
            <br />
            <CustomNodeTree Data={submittedValue} />
          </div>
          <div className='placeholder box'>
            <h2>Placeholder</h2>
          </div>
        </div>
      }
    </div>
  );
}

export default App;

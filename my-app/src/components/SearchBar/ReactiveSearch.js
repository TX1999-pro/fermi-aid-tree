import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useState } from 'react';
import LLMChatDemo from '../LLMChat/LLMChat';
import useLLM from "usellm";
function ReactiveSearch({ suggestions, searchState, setSearchState, setResultFromLLM }) {
    // We can preload the questions.
    // Note that the id field is mandatory
    // const items = [
    //     {
    //         id: 0,
    //         name: 'Cobol'
    //     },
    //     {
    //         id: 1,
    //         name: 'JavaScript'
    //     },
    //     {
    //         id: 2,
    //         name: 'Basic'
    //     },
    //     {
    //         id: 3,
    //         name: 'PHP'
    //     }
    // ]

    const [textInSearchBar, setTextInSearchBar] = useState('');
    const [questionDisplay, setQuestionDisplay] = useState('');
    const [quickAnswer, setQuickAnswer] = useState([]); // when user selected from suggestion

    const items = suggestions;

    const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" }); // testing only

    const handleOnSearch = (string, results) => {
        // onSearch = typing: first callback parameter is the string searched
        // and the second is the results (array).

        // Vulnerability: this function is called whenever user typed something
        // triggered when user press enter
        setTextInSearchBar(string); // this is weird, but it works
        console.log("typing: " + string);

        if (textInSearchBar === '') {
            console.log("No question entered");
            setSearchState(0);
            setQuestionDisplay('');
            setQuickAnswer('');
            return;
        }
        console.log('You searched: ' + textInSearchBar); // !BUG: whenever user typed something, this alert will pop up
        fetchAIResponse(textInSearchBar, searchState);
    }
    async function fetchAIResponse(query, searchState) {
        if (searchState === 3) return; // exit if already in State 3
        setSearchState(3); // user pressed enter, waiting for response
        try {
            await llm.chat({
                messages: [{ role: "user", content: query }],
                stream: true,
                onStream: ({ message }) => setResultFromLLM(message.content),
            });
        } catch (error) {
            console.error("Something went wrong!", error);
            setResultFromLLM("Something went wrong! Please try again later.");
        }
        await setSearchState(2);
    }

    const handleOnHover = (result) => {
        // the item hovered
        //console.log(result.name);
        setTextInSearchBar(result.name);
    }

    const handleOnSelect = (item) => {
        // the item selected (from suggested list)
        console.log("selected item: \n");
        console.log(item);
        setTextInSearchBar(item.name);
        setQuestionDisplay(item.name);
        setQuickAnswer([item.answer, item.unit]);
        setResultFromLLM(""); // clear LLM result
        setSearchState(2); // search finished, user selected answer
    }

    const handleReset = () => {
        setSearchState(0);
        setTextInSearchBar('');
        setQuestionDisplay('');
        setQuickAnswer([]);
        console.log('Resetting Answer Display...');
    }

    const handleQuery = () => {
        console.log('Querying...');
        alert('Waiting for backend...');
    }

    const handleOnFocus = () => {
        console.log('Focused On Search Bar');
    }

    const formatResult = (item) => {
        return (
            <>
                <div style={{ display: 'flex', flexDirection: "column", textAlign: 'left' }}>
                    <span>{item.name}</span>
                    <span style={{ textAlign: 'right', color: "darkslategray" }}>&nbsp; &#8776; &nbsp;10<sup>{item.answer}</sup></span>
                    {/* <span style={{ textAlign: 'right', color: "darkslategray", backgroundColor: '#d9e0c6' }}>id: {item.id}</span> */}
                </div>


            </>
        );
    }

    return (
        <div >
            <div className="search-bar" >
                <ReactSearchAutocomplete
                    items={items}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    onClear={handleReset}
                    autoFocus
                    formatResult={formatResult}
                    showNoResultsText={"No suggestion matched"}
                    maxLength={200}
                    placeholder={"Type your own question and press enter to ask AI, or pick a suggested question..."}
                />
            </div>
            {questionDisplay !== "" &&
                <div className='quick-answer'>
                    <p>Quick Answer
                        <span>&nbsp; &#8776; &nbsp;</span>
                        <strong>10<sup>{quickAnswer[0]}</sup></strong>
                        &nbsp; {quickAnswer[1]}
                    </p>
                    <p>This question is sourced from <a href="">this link</a></p>
                    <br />
                    {/* <LLMChatDemo query={textInSearchBar} onEnterPressed={handleOnSearch} /> */}
                    <button onClick={handleOnSearch}>Ask Fermy!</button>
                    <button onClick={handleReset}>
                        Clear Answer
                    </button>

                </div>}
            <br />
        </div>
    );
}

export default ReactiveSearch;
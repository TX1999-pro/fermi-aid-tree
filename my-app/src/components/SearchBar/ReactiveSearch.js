import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useState } from 'react';
function ReactiveSearch({ suggestions }) {
    // note: the id field is mandatory
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
    const [quickAnswer, setQuickAnswer] = useState(''); // when user selected from suggestion
    const [searchState, setSearchState] = useState(0);
    // 0: initliase or idle
    // 1: searching (on focus)
    // 2: search finished (user selected an item) - display quick result
    // 3: search finished (user didn't select item but pressed enter)

    const items = suggestions;
    const fetchData = (value) => {
        fetch();
    }

    const handleOnSearch = (string, results) => {
        // onSearch = typing: first callback parameter is the string searched
        //  and the second is the results (array).
        if (textInSearchBar === '') {
            console.log("No question entered");
            setSearchState(0);
            setQuestionDisplay('');
            setQuickAnswer('');
            return;
        }
        console.log("searching for: ");
        console.log(string, results);
        // if the question in the database, display the quick answer
        // else, display the question and ask user to input the answer

        //fetchData(string)

    }

    const handleOnHover = (result) => {
        // the item hovered
        // console.log(result);
    }

    const handleOnSelect = (item) => {
        // the item selected (from suggested list)
        console.log("selected item: \n");
        console.log(item);
        setTextInSearchBar(item.name);
        setQuestionDisplay(item.name);
        setQuickAnswer(item.answer);
        setSearchState(1); // searching
    }

    const handleReset = () => {
        setSearchState(0);
        setTextInSearchBar('');
        setQuestionDisplay('');
        setQuickAnswer('');
        console.log('Resetting Answer Display...');
    }

    const handleOnFocus = () => {
        console.log('Focused');
    }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        );
    }

    return (
        <div >
            <div className="search-bar" >
                <ReactSearchAutocomplete style={{ width: 600 }}
                    items={items}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    autoFocus
                    formatResult={formatResult}
                    showNoResultsText={"No suggestion matched"}
                    maxLength={100}
                    placeholder={"Type your question here"}
                />
            </div>
            {searchState !== 0 &&
                <div className='quick-answer'>
                    <p><strong>{questionDisplay}</strong></p>
                    <p>Answer
                        <span>&nbsp; &#8776; &nbsp;</span>
                        <strong>10<sup>{quickAnswer}</sup></strong>
                    </p>
                    <button onClick={handleReset}>
                        Ask Another Question
                    </button>
                    <br />
                    <button onClick={handleReset}>
                        Show Details
                    </button>
                </div>}
        </div>
    );
}

export default ReactiveSearch;
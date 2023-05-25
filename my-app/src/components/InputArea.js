export default function InputArea({ value, isChanged, onChange, onSubmit, onReset }) {
    // check wether textarea value has changed from previsous value
    // the inputArea will submit the textAreaValue to the server
    const submitButton = (isChanged)
        ? <button type="submit">Update</button>
        : <button type="submit">Submit</button>;
    const resetButton = (<button type="reset">Reset</button>)
    return (
        <div>
            <form onSubmit={onSubmit} onReset={onReset}>
                <textarea value={value} onChange={onChange} />
                {submitButton}
                {resetButton}
            </form>
        </div>
    );
}
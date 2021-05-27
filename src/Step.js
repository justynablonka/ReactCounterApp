import './Step.css';

function Step(props) {
    return (
        <label>Step <input type="number" className="step-input" value={props.step} onChange={props.onChangeStep}></input></label>
    );
}

export default Step;
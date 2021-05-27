import './ButtonsPanel.css';

function ButtonsPanel(props) {
    return (
        <div className="buttonsPanel">
            <button onClick={props.onAdd}>Add {props.step}</button>
            <button onClick={props.onReInit}>ReInit</button>
            <button onClick={props.onReset}>Reset</button>
        </div>
    );
}

export default ButtonsPanel;
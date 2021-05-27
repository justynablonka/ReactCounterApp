import './Display.css';

function Display(props) {
    return (
        <p>Stan licznika to <span className="counter-value">{props.value}</span></p>
    );
} 

export default Display;
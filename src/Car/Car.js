export default (props) => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <button onClick={props.onChangeTitle}>Click</button>
    </div>
)
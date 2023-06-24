const Tweet = (props) => {
return (
    <div>
        <h1 style={{ color: 'blue' }}>Your message</h1>
        <p className="message">{props.message}</p>
        <p>Made by: {props.username} on {props.date}</p>
    </div>
)
}
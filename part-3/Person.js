const Person = (props) => {
    let reply; 
    if (props.age < 18){
        reply= "You must be 18 to vote"
    } else {
        reply="Plz go Vote"
    }
    return (
        <div>
            <p>Learn some information about this person: 
                <div>
                Name: {props.name} <br></br>
                Age : {props.age} <br></br>
                Hobbies: <ul>
                        {props.hobbies.map(hobbies => <li>{hobbies}</li>)}
                    </ul>
                Reminder: {reply}
                </div><br></br>
                
            </p>
        </div>
    )
}


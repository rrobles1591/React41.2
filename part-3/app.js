const App = () => (
    <div>
        <Person name="Nancy" age={41} hobbies={["playing piano", "making epoxy crafts", "boating"]}/>
        <Person name="Joe" age={31} hobbies={["gaming", "making board games", "cooking"]}/>
        <Person name="Romy" age={32} hobbies={["painting", "going to the beach", "reading"]}/>
    </div>
);

ReactDOM.render(<App />,document.getElementById("root"));


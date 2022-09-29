import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='ques-ans'>
            <div>
                <h2>How does React work?</h2>
                <p>Brought to existence by Jordan Walke and maintained by Facebook, React is the most widely used front-end JavaScript library in the web development domain. Some of the examples of commonly used JavaScript libraries are TensorFlow, Angular, Node etc. React takes a declarative approach to application development that makes it simple to reason about the program while simultaneously aiming for efficiency and flexibility. It is a component-based, open-source front-end library that is exclusively responsible for the application's view layer. It creates basic views for each state in the project, and when the data changes, React updates and renders the appropriate component quickly. The declarative approach simplifies debugging and makes the code more predictable. Let's have a look at an Instagram page built entirely with React to better understand how it works.</p>
            </div>
            <div>
                <h2>Difference between props and state.</h2>
                <p><strong>Props: </strong>
The Data is passed from one component to another.
It is Immutable (cannot be modified).Props can be used with state and functional components.Props are read-only.</p>
                <p><strong>State: </strong>
The Data is passed within the component only.
It is Mutable ( can be modified).
State can be used only with the state components/class component (Before 16.0).
State is both read and write.</p>
            </div>
            <div>
                <h2>What does useEffect do other than load data?</h2>
                <p>The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it. Pretty much anything you want to “do” in a React component other than return JSX (any sort of side effect), will go into a useEffect. (and you can have more than one useEffect per component, too) All this power comes with a tradeoff: useEffect can be confusing until you understand how it works. In this post, we’re going to look at lots of useEffect examples so that you understand the mental model and can use it effectively in your own code.</p>
            </div>
        </div>
    );
};

export default Question;
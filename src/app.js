import React from 'react';

const Headline = () => {
  return <h1 className="title">Welcome to the jungle</h1>
}

const Greeting = (props) => {
  const {name, age} = props; //destructure props
  return <p>You are the cutest, {name}! You are {age} years old!</p>
}

export const App = () => {
  return (
    <div> 
      <Headline />
      <Greeting name="Leoboi" age={30}/>
    </div>
  )
}

// Greeting.propTypes = {
//   name: React.PropTypes.string,
//   age: React.PropTypes.number.isRequired
// }

// validate the data  
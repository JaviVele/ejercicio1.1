import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Contenido = (props) =>{
  const primero = props.part1;
  const numero1 = props.exercises1;
  const segundo = props.part2;
  const numero2 = props.exercises2;
  const tercero = props.part3;
  const numero3 = props.exercises3;
  return (
    <div>
      <Part frase={primero} numero={numero1}/>
      <Part frase={segundo} numero={numero2}/>
      <Part frase={tercero} numero={numero3}/>
    </div>
  )
}
const Part = (props) =>{
  return (
    <div>
      <p>{props.frase} {props.numero}</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3} </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    <Header course={course}/>
    <Contenido part1={part1} exercises1={exercises1}/>
    <Contenido part1={part2} exercises1={exercises2}/>
    <Contenido part1={part3} exercises1={exercises3}/>
    <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

import { useState, useEffect } from 'react'
import QuestAns from './components/QuestandPoints';
import './App.css';
import './index.css'


function App() {

  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState(null)
  const [isHidden, setIsHidden] = useState(null)
  const [points, setPoints] = useState(0)

  useEffect(() => {
    getQuestion()
  }, [])

  const url = "http://jservice.io/api/random"

  const getQuestion = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data);
      setQuestion(data)
      setAnswers(false)
    } catch (error) {
      console.log(error);
    }
  }

  const revealAns = () => {
    setIsHidden(!isHidden)
  }

  const decrease = () => {
    setPoints(points - question[0].value)
  }

  const increase = () => {
    setPoints(points + question[0].value)
  }


  return (
    <div className="App">
      <h1>Welcome to Jeopardy</h1>

      <div className='score'>
        <h2>Score: {points}</h2>
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
      </div>

      <button onClick={getQuestion}>Get Question</button>

      {question && <QuestAns props={question} />}

      <div>

          <button onClick={revealAns}>Reveal Answer</button>
        <br />
            {isHidden ? question[0].answer : null}
      </div>

    </div>
  );
}

export default App;

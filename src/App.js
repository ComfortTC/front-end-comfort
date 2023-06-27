import './App.css';
import Home from './pages/home';
import data from './api/questions.json';
import { useEffect, useState } from 'react';

function App() {
  const [questions, setQuestions] = useState()

  useEffect(() => {
    data.questions.forEach(data => {
      setQuestions(prevState => ({
        ...prevState,
        [data.code]: ''
      }))
    })
  }, [])

  return (
    <div>
      {
        questions !== undefined ? <Home details={questions} /> : null
      }
    </div>
  );
}

export default App;

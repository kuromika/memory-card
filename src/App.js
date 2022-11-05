import React, { useState, useEffect, useCallback } from 'react';
import Head from "./components/Head";
import Main from "./components/Main";
import shuffleArr from './util.js';
import './styles/style.css';

const App = (props) => {

  const [data, setData] = useState([]);
  const [scores, setScores] = useState({ current: 0, best: 0});
  const [picked, setPicked] = useState([]);

  const updateScores = (element) => {
    if (picked.indexOf(element) === -1) {
      increaseScores(element);
      return;
    }
    resetScores();
  }

  const increaseScores = (element) => {
     setScores({
       current: scores.current + 1,
       best: scores.current + 1 > scores.best ? scores.current + 1 : scores.best
      });
      setPicked([...picked, element]);
  }

  const resetScores = () => {
    setScores({
      ...scores,
      current: 0
    });
    setPicked([]);
  }

  const shuffleData = useCallback(() => {
    setData(shuffleArr(props.data));
  }, [props.data])

  useEffect(() => {
    shuffleData();
  }, [shuffleData]);

  return (
    <div className="app">
      <Head
        current={scores.current}
        best={scores.best}>
      </Head>

      <Main
        data={data}
        shuffle={shuffleData}
        update={updateScores}>
      </Main>
    </div>
  )
}

export default App;
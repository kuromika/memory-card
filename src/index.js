import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const data = ["Alma", "Dorothy Haze", "*Kira* Miki", "Anna Graem", "Gabriella",
  "Mario", "Art Von Delay", "Gillian", "Rad Shiba",
  "Beatrice Albert", "Ingram McDougal", "Sei Asagiri", "Dana Zane",
  "Jamie", "Stella Hoshii", "Deal", "Julianne Stingray", "Streaming-chan",
  "Donovan Dawson", "Kimberly La Vallete", "Virgilio"];

root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);

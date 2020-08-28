import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = ["apple", "banana","grape","mango","orange","lemon","coconut","cherry","kiwi","peach"];

const randomWorld = word[Math.floor(Math.random()*word.length)];

function App() {
    return (
        <div>
        <WordCard value={randomWorld}/>
        </div>
        );    
}
export default App;

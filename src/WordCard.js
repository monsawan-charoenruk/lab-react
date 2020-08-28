import React, {useState} from 'react';
import CharacterCard from './CharacterCard';
import _, { times } from 'lodash';
import Guess from './Guess';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

function WordCard(props){
    const [state, setState] = useState(prepareStateFromWord(props.value))
    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        console.log(guess)
        setState({...state, guess})
        if(guess.length == state.word.length){
            if(guess == state.word){         
                console.log('yeah!')
                setState({...state,guess,completed: true})
            }
            else if(state.attempt == 3){
                setState({...state,guess: 'จบเกม',completed: true})
            }
            else{
                console.log('reset, next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
    }
 return (
 <div>
    <p className='p2'>รอบที่{state.attempt}/3</p>
    {state.chars.map((c, i) => 
        <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>)
    }
    <Guess value={state.guess}/>
 </div>
 );
}
export default WordCard;
import Header from './components/Header/Header';
import Board from './components/Board';
import Footer from './components/Footer/Footer';
import React, { useState } from 'react';
import PageWrapper from './components/PageWrapper';
import { sentences } from './data/sentences';
import { harderSentences } from './data/HarderSentences';
import StartButton from './components/StartButton';

function App() {
    const [lvl, setLvl] = useState(true);
    const Length = lvl ? sentences.length : harderSentences.length;
    const changeNumber = () => {
        return Math.floor(Math.random() * Length);
    };
    const [started, setStarted] = useState(false);
    const [text, setText] = useState('');
    const [number, setNumber] = useState(changeNumber());
    const [finished, setFinished] = useState(false);
    const [count, setCount] = useState(0);

    const prepStart = () => {
        setNumber(Math.floor(Math.random() * Length));
        setText('');
        setFinished(false);
        setCount(0);
        document.getElementById('textField').focus();
    };

    const onChangeLevel = () => {
        setLvl(!lvl);
        setStarted(false);
        prepStart();
    };

    const onStartButton = () => {
        setStarted(!started);
        if (!started) {
            prepStart();
        }
    };

    const markAsFinished = () => {
        setFinished(true);
        setStarted(false);
    };

    const startLabel = started && finished === false ? 'STOP' : 'NEW PLAY';
    return (
        <PageWrapper>
            <Header />
            <Board markAsFinished={markAsFinished} started={started} setStarted={setStarted} text={text} setText={setText} number={number} finished={finished} lvl={lvl} prepStart={prepStart} />
            <Footer started={started} setText={setText} text={text} number={number} finished={finished} count={count} setCount={setCount} lvl={lvl} onChangeLevel={onChangeLevel}>
                <StartButton onStart={onStartButton} label={startLabel} />
            </Footer>
        </PageWrapper>
    );
}

export default App;

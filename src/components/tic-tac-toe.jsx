import { useEffect, useState } from "react";
import { Players } from "./players";
import "./tic-tac-toe.css";
import "./resetBtn.css";

export const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [three, setThree] = useState("");
    const [four, setFour] = useState("");
    const [five, setFive] = useState("");
    const [six, setSix] = useState("");
    const [seven, setSeven] = useState("");
    const [eight, setEight] = useState("");
    const [nine, setNine] = useState("");

    const [result, setResult] = useState(false);
    const [player, setPlayer] = useState("");

    useEffect(() => {
        if(
            (one === "X" && two === "X" && three === "X") ||
            (four === "X" && five === "X" && six === "X") ||
            (seven === "X" && eight === "X" && nine === "X") ||
            (one === "X" && four === "X" && seven === "X") ||
            (two === "X" && five === "X" && eight === "X") ||
            (three === "X" && six === "X" && nine === "X") ||
            (one === "X" && five === "X" && nine === "X") || 
            (three === "X" && five === "X" && seven === "X") 
        ) {
            setResult(true);
            setPlayer("Wooh!! Player 1 Won!");
        }
        else if(
            (one === "O" && two === "O" && three === "O") ||
            (four === "O" && five === "O" && six === "O") ||
            (seven === "O" && eight === "O" && nine === "O") ||
            (one === "O" && four === "O" && seven === "O") ||
            (two === "O" && five === "O" && eight === "O") ||
            (three === "O" && six === "O" && nine === "O") ||
            (one === "O" && five === "O" && nine === "O") || 
            (three === "O" && five === "O" && seven === "O") 
        ) {
            setResult(true);
            setPlayer("Wooh!! Player 2 Won!");
        }

        if(
            (one !== "") && (two !== "") && (three !== "") &&
            (four !== "") && (five !== "") && (six !== "") &&
            (seven !== "") && (eight !== "") && (nine !== "")
        ) {
            setResult(true);
            setPlayer("Yo, you both are losers!!! Match drawn!");
        }
        
    }, [one, two, three, four, five, six, seven, eight, nine]);

    const handleChange = (value) => {
        if(count % 2 === 0) {
            value("X");
        }
        else {
            value("O");
        }
        setCount((p) => p+1);
    }

    const handleClick = (box) => {
        if(box === "one" && one === "") {
            handleChange(setOne);
        }
        else if(box === "two" && two === "") {
            handleChange(setTwo);
        }
        else if(box === "three" && three === "") {
            handleChange(setThree);
        }
        else if(box === "four" && four === "") {
            handleChange(setFour);
        }
        else if(box === "five" && five === "") {
            handleChange(setFive);
        }
        else if(box === "six" && six === "") {
            handleChange(setSix);
        }
        else if(box === "seven" && seven === "") {
            handleChange(setSeven);
        }
        else if(box === "eight" && eight === "") {
            handleChange(setEight);
        }
        else if(box === "nine" && nine === "") {
            handleChange(setNine);
        }
    };

    const handleReset = () => {
        setOne("");
        setTwo("");
        setThree("");
        setFour("");
        setFive("");
        setSix("");
        setSeven("");
        setEight("");
        setNine("");
        setCount(0);
        setResult(false);
    }

    return (
        <>
            <div id="logo">Game of Tic-Tac-Toe</div>
            <div id="container">
            <div id="gameContainer">
                {result ? <div id="resultDetail">{player}</div> :
                <div id="gameOption">
                    <div id="boxOne" onClick={() => handleClick("one")}>{one}</div>
                    <div onClick={() => handleClick("two")}>{two}</div>
                    <div onClick={() => handleClick("three")}>{three}</div>
                    <div onClick={() => handleClick("four")}>{four}</div>
                    <div onClick={() => handleClick("five")}>{five}</div>
                    <div onClick={() => handleClick("six")}>{six}</div>
                    <div onClick={() => handleClick("seven")}>{seven}</div>
                    <div onClick={() => handleClick("eight")}>{eight}</div>
                    <div onClick={() => handleClick("nine")}>{nine}</div>
                </div>
                }
            </div>
                <div id="gameDetails">
                    <Players count={count} />
                    <button onClick={handleReset}>RESET</button>
                </div>
            </div>
            <div id="copyright">Created by Taher Ahmed</div>
        </>
    )
};
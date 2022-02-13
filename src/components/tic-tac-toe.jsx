import { useEffect, useState } from "react";
import { Players } from "./players";
import "./tic-tac-toe.css";
import "./resetBtn.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setOne, setTwo, setThree, setFour, setFive, setSix, setSeven, setEight, setNine, setReset } from "../features/action";

export const TicTacToe = () => {
    const [result, setResult] = useState(false);
    const [player, setPlayer] = useState("");

    const dispatch = useDispatch();
    const { count, one, two, three, four, five, six, seven, eight, nine } = useSelector((state) => ({
        count: state.count,
        one: state.one,
        two: state.two,
        three: state.three,
        four: state.four,
        five: state.five,
        six: state.six,
        seven: state.seven,
        eight: state.eight,
        nine: state.nine
    }));

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

    const handleClick = (box) => {
        if(box === "one" && one === "") {
            dispatch(setOne());
        }
        else if(box === "two" && two === "") {
            dispatch(setTwo());
        }
        else if(box === "three" && three === "") {
            dispatch(setThree());
        }
        else if(box === "four" && four === "") {
            dispatch(setFour());
        }
        else if(box === "five" && five === "") {
            dispatch(setFive());
        }
        else if(box === "six" && six === "") {
            dispatch(setSix());
        }
        else if(box === "seven" && seven === "") {
            dispatch(setSeven());
        }
        else if(box === "eight" && eight === "") {
            dispatch(setEight());
        }
        else if(box === "nine" && nine === "") {
            dispatch(setNine());
        }
    };

    const handleReset = () => {
        setResult(false);
        dispatch(setReset());
    }

    return (
        <>
            <div id="logo">Game of Tic-Tac-Toe</div>
            <div id="container">
            <div id="gameContainer">
                {result ? <div id="resultDetail">{player}</div> :
                <div id="gameOption">
                    <div onClick={() => handleClick("one")}>{one}</div>
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
import { ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, RESET } from "./actionTypes";

const init = {
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    count: 0
};

export const reducer = (state = init, { type, payload }) => {
    switch(type) {
        case ONE: 
            if(state.count % 2 === 0) {
                return {
                    one: "X",
                    two: state.two,
                    three: state.three,
                    four: state.four,
                    five: state.five,
                    six: state.six,
                    seven: state.seven,
                    eight: state.eight,
                    nine: state.nine,
                    count: state.count + 1
                }
            }
            else {
                return {
                    one: "O",
                    two: state.two,
                    three: state.three,
                    four: state.four,
                    five: state.five,
                    six: state.six,
                    seven: state.seven,
                    eight: state.eight,
                    nine: state.nine,
                    count: state.count + 1
                }
            }

        case TWO:
            if(state.count % 2 === 0) {
                return {
                    one: state.one,
                    two: "X",
                    three: state.three,
                    four: state.four,
                    five: state.five,
                    six: state.six,
                    seven: state.seven,
                    eight: state.eight,
                    nine: state.nine,
                    count: state.count + 1
                }
            }
            else {
                return {
                    one: state.one,
                    two: "O",
                    three: state.three,
                    four: state.four,
                    five: state.five,
                    six: state.six,
                    seven: state.seven,
                    eight: state.eight,
                    nine: state.nine,
                    count: state.count + 1
                }
            }

        case THREE:
            if(state.count % 2 === 0) {
                return {
                    one: state.one,
                    two: state.two,
                    three: "X",
                    four: state.four,
                    five: state.five,
                    six: state.six,
                    seven: state.seven,
                    eight: state.eight,
                    nine: state.nine,
                    count: state.count + 1
                }
            }
            else {
                return {
                    one: state.one,
                    two: state.two,
                    three: "O",
                    four: state.four,
                    five: state.five,
                    six: state.six,
                    seven: state.seven,
                    eight: state.eight,
                    nine: state.nine,
                    count: state.count + 1
                }
            }

        case FOUR:
            if(state.count % 2 === 0) {
                return {
                    one: state.one,
                    two: state.two,
                    three: state.three,
                    four: "X",
                    five: state.five,
                    six: state.six,
                    seven: state.seven,
                    eight: state.eight,
                    nine: state.nine,
                    count: state.count + 1
                }
            }
            else {
                return {
                    one: state.one,
                    two: state.two,
                    three: state.three,
                    four: "O",
                    five: state.five,
                    six: state.six,
                    seven: state.seven,
                    eight: state.eight,
                    nine: state.nine,
                    count: state.count + 1
                }
            }

        case FIVE:
            if(state.count % 2 === 0) {
                return {
                    one: state.one,
                    two: state.two,
                    three: state.three,
                    four: state.four,
                    five: "X",
                    six: state.six,
                    seven: state.seven,
                    eight: state.eight,
                    nine: state.nine,
                    count: state.count + 1
                }
            }
            else {
                return {
                    one: state.one,
                    two: state.two,
                    three: state.three,
                    four: state.four,
                    five: "O",
                    six: state.six,
                    seven: state.seven,
                    eight: state.eight,
                    nine: state.nine,
                    count: state.count + 1
                }
            }

        case SIX:
            if(state.count % 2 === 0) {
                return {
                    one: state.one,
                    two: state.two,
                    three: state.three,
                    four: state.four,
                    five: state.five,
                    six: "X",
                    seven: state.seven,
                    eight: state.eight,
                    nine: state.nine,
                    count: state.count + 1
                }
            }
            else {
                return {
                    one: state.one,
                    two: state.two,
                    three: state.three,
                    four: state.four,
                    five: state.five,
                    six: "O",
                    seven: state.seven,
                    eight: state.eight,
                    nine: state.nine,
                    count: state.count + 1
                }
            }
            
        case SEVEN:
            if(state.count % 2 === 0) {
                return {
                    one: state.one,
                    two: state.two,
                    three: state.three,
                    four: state.four,
                    five: state.five,
                    six: state.six,
                    seven: "X",
                    eight: state.eight,
                    nine: state.nine,
                    count: state.count + 1
                }
            }
            else {
                return {
                    one: state.one,
                    two: state.two,
                    three: state.three,
                    four: state.four,
                    five: state.five,
                    six: state.six,
                    seven: "O",
                    eight: state.eight,
                    nine: state.nine,
                    count: state.count + 1
                }
            }

        case EIGHT: 
            if(state.count % 2 === 0) {
                return {
                    one: state.one,
                    two: state.two,
                    three: state.three,
                    four: state.four,
                    five: state.five,
                    six: state.six,
                    seven: state.seven,
                    eight: "X",
                    nine: state.nine,
                    count: state.count + 1
                }
            }
            else {
                return {
                    one: state.one,
                    two: state.two,
                    three: state.three,
                    four: state.four,
                    five: state.five,
                    six: state.six,
                    seven: state.seven,
                    eight: "O",
                    nine: state.nine,
                    count: state.count + 1
                }
            }

        case NINE:
            if(state.count % 2 === 0) {
                return {
                    one: state.one,
                    two: state.two,
                    three: state.three,
                    four: state.four,
                    five: state.five,
                    six: state.six,
                    seven: state.seven,
                    eight: state.eight,
                    nine: "X",
                    count: state.count + 1
                }
            }
            else {
                return {
                    one: state.one,
                    two: state.two,
                    three: state.three,
                    four: state.four,
                    five: state.five,
                    six: state.six,
                    seven: state.seven,
                    eight: state.eight,
                    nine: "O",
                    count: state.count + 1
                }
            }

        case RESET:
            return {
                one: "",
                two: "",
                three: "",
                four: "",
                five: "",
                six: "",
                seven: "",
                eight: "",
                nine: "",
                count: 0
            }
        
        default:
            return state
    }
};
import {useReducer} from 'react';
import Question from "./Question";

const initialState = {
    currentQuestionIndex: 0,
    questions: [],
};

const reducer = (state, action) => {
    if (action.type === "NEXT_QUESTION") {
        return {
            ...state,
            currentQuestionIndex: state.currentQuestionIndex + 1,
        }
    }
    return state
};

const Quiz = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("state =", state);


    return (
        <div className="quiz">
            <div>
                <div>
                    <div className="score">
                        Question 1 / 10
                    </div>
                </div>
                <Question />
                <div className="next-button" onClick={() => dispatch({type: "NEXT_QUESTION"})}>Next Question</div>
            </div>
        </div>
        )
};

export default Quiz;
import {useContext} from 'react';
import Question from "./Question";
import {QuizContext} from "../contexts/quiz";



const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);


    return (
        <div className="quiz">
            <div>
                <div>
                    <div className="score">
                        Question {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
                    </div>
                </div>
                <Question />
                <div className="next-button" onClick={() => dispatch({type: "NEXT_QUESTION"})}>Next Question</div>
            </div>
        </div>
        )
};

export default Quiz;
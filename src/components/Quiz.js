import Question from "./Question";


const Quiz = () => {
    return (
        <div className="quiz">
            <div>
                <div>
                    <div className="score">
                        Question 1 / 10
                    </div>
                </div>
                <Question />
                <div className="next-button">Next Question</div>
            </div>
        </div>
        )
};

export default Quiz;
import React, { PureComponent } from 'react';
import Confetti from 'react-confetti';
import { getNumberOfDaysBetweenDates } from '../utils/date';

interface IProps {
    color: string;
}

interface IState {
    showConfetti?: boolean;
}

function calculateNumberOfDatesLeft(today: Date) {
    const birthday = new Date();
    birthday.setMonth(6);
    birthday.setDate(6);
    return getNumberOfDaysBetweenDates(today, birthday);
}

class Home extends PureComponent<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            showConfetti: false
        }
    }

    render()  {
        const { color } = this.props;
        const numberOfDaysLeft = calculateNumberOfDatesLeft(new Date());
        let content = (
            <div>
                <p>... og jeg har bursdag om </p>
                <h2 className="birthday-number" style={{color}}>{numberOfDaysLeft}</h2>
                <p>dager <span role="img" aria-label="emoji star struck">🤩</span></p>
            </div>
        );

        if (numberOfDaysLeft === 365 || numberOfDaysLeft === 0) {
            content = (
                <div>
                    <p>... OG JEG HAR BURSDAG</p>
                    <h2 className="birthday-number" style={{color}}> I DAG</h2>
                </div>
            )
        }

        const { showConfetti } = this.state;
        return (
            <div className="home">
                <h1 className="header-font">Hei! <span role="img" aria-label="waving emoji">👋</span></h1>
                <p>Velkommen til min hjemmeside (og lekeplass)</p>
                <div className="birthday">
                    {content}
                    <button
                        className="birthday-button"
                        style={{borderColor: color}}
                        onClick={() => { this.setState({ showConfetti: true })}}
                    >
                        <span role="img" aria-label="celebrating emoji">🥳</span>
                    </button>
                    {showConfetti && (
                        <Confetti
                            width={window.outerWidth - 10 }
                            height={window.outerHeight - 10}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export { Home };

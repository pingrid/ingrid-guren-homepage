import React, {PureComponent } from 'react';
import Confetti from 'react-confetti';

interface IProps {
    color: string | 'blue';
}

interface IState {
    showConfetti?: boolean;
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
        const today = new Date();
        const birthday = new Date('1991-07-06');
        birthday.setFullYear(today.getFullYear() + 1);

        const numberOfDaysLeft = Math.ceil(Math.abs((birthday.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)));

        const { showConfetti } = this.state;
        return (
            <div className="home">
                <h1 className="header-font">Hei! <span role="img" aria-label="waving emoji">👋</span></h1>
                <p>Velkommen til min hjemmeside (og lekeplass)</p>
                <div className="birthday">
                    <p>... og jeg har bursdag om </p>
                    <h2 className="birthday-number" style={{color}}>{numberOfDaysLeft}</h2>
                    <p>dager <span role="img" aria-label="emoji star struck">🤩</span></p>
                    <button
                        className="birthday-button"
                        style={{borderColor: color}}
                        onClick={() => { this.setState({ showConfetti: true })}}
                    >
                        <span role="img" aria-label="celebrating emoji">🥳</span>
                    </button>
                    {showConfetti && (
                        <Confetti
                            width={window.outerWidth}
                            height={window.outerHeight}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export { Home };

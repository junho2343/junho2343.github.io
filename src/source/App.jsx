// import logo from './logo.svg';
// import './App.css';

import Icon from './Icon';

import data from '../data/data';
import '../scss/main.scss';

function App() {
    console.log(data);

    return (
        <div className="container">
            <div className="title">
                <h3>
                    JUNHO MOON<span>Developer</span>
                </h3>
            </div>
            <div className="box profile">
                <h4>PROFILE</h4>
                {data.profile.map((one, index) => (
                    <p key={index}>
                        <span>{one.name}</span>
                        <span> {one.value}</span>
                    </p>
                ))}
            </div>

            <div className="box career">
                <h4>CAREER</h4>
                {data.career.map((one, index) => (
                    <p key={index}>
                        <a href={one.href} target="_blank" rel="noreferrer">
                            {one.name}
                        </a>
                        <span className="period">{one.period}</span>
                    </p>
                ))}
            </div>

            <div className="box project">
                <h4>PROJECT</h4>
                {data.project.map((one, index) => (
                    <div key={index}>
                        <h5>{one.name}</h5>
                        {one.data.map((one, index) => (
                            <div key={index}>
                                <p>
                                    {one.name}
                                    <span className="period">{one.period}</span>
                                </p>
                                <p dangerouslySetInnerHTML={{ __html: one.detail }}></p>
                                <div>
                                    {one.skill.map((one, index) => (
                                        <Icon target={one} key={index} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

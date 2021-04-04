import React from 'react';

import '../styles/toggle.scss';

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <div className="switch-container">
            <label>
                <span className="labelText">Let the magic happen</span> 
                <input checked={ theme === 'dark' } onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light') } className="switch" type="checkbox" />
                <div className="switch-bg">
                    <div className="switch-thumb"></div>
                </div>
            </label>
        </div>
    );
};

export default Toggle;
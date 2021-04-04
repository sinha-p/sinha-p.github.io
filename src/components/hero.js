import React, { useEffect, useState } from 'react';

import '../styles/hero.scss';

// images
import me from '../images/me.svg';

const Hero = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [])
    return (
        <div className="hero">
            <div className="container">
                <div>
                    <img src={me} height="250" width="250" alt="me" />
                </div>
                <div>
                    <h1 className="title">
                        Hey!<span role="img" aria-label="hey">👋</span>, I'm Pritam
                    </h1>
                    <h2 className={mounted ? 'fade-in sub-title' : 'sub-title'}>
                        Software Engineer @<a href="https://cleartax.in" className="no-a-style company">ClearTax</a> | specialize in Front-end Technologies
                        | passionate about developing performant web apps | 💙 sketching 
                    </h2>
                </div>
                
            </div>
        </div>
    );
};

export default Hero;
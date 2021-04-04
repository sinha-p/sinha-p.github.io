import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';


import '../styles/header.scss';

// components
import Toggle from './toggle';
import Github from './icons/github';
import Linkedin from './icons/linkedin';
import Codepen from './icons/codepen';



const links = [
    {
        href: 'https://github.com/sinha-p',
        label: 'github',
    },
    {
        href: 'https://codepen.io/pri_io',
        label: 'codepen',
    },
    {
        href: '',
        label: 'linkedin',
    }
]

const Header = () => {
    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'github': return <Github />;
            case 'codepen': return <Codepen />;
            case 'linkedin': return <Linkedin />;
            default: return null;
        }
    }
    return (
    <nav className="nav">
        <div className="container nav-wrapper flex v-align space-btw">
            <ul className="links">
                {
                    links.map(({ href, label }) => (
                        <li key={label} className="list">
                            <a href={href} className="social-icon">
                                {renderIcon(label)}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
                )}
            </ThemeToggler>
        </div>
    </nav>
)};

export default Header;
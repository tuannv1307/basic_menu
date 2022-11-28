import type React from 'react';
import NavBarItem from './components/NavBarItem/NavBarItem';
import { st, classes } from './header.st.css';

export const Header: React.FC = () => {
    return (
        <header className={st(classes.root)}>
            <NavBarItem />
        </header>
    );
};

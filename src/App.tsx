import {  } from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path='' element={<IndexSite />} />
                <Route path='about' element={<AboutSite />} />
            </Routes>
        </HashRouter>
    );
}

function IndexSite(): JSX.Element {
    return <>Index <Link to="about">about</Link></>;
}

function AboutSite(): JSX.Element {
    return <>About Page</>;
}

export default App;

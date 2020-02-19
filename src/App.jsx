import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer/Footer';
import Landing from './components/home/Landing';
import store from './store';
import Movie from './components/home/Movie';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/movie/:id" component={Movie} />
                    {/* <Landing /> */}
                    <Footer />
                </Router>
            </Provider>
        </div>
    );
}

export default App;

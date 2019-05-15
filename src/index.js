import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/carousel'
import './css/index.css'
import Images from './components/photospread'
import TabTrial from './components/tabtrial'
import Socialbar from './components/socialmedia'
import NewsLetter from './components/newsletter'

const App = () => {
        return (
        <div>
            <Header />
            <h1 className='title'>Illies Gunpla</h1>
            <br/>
                <TabTrial />
            <br/>
            <h1 className='photo'>Photo Gallery</h1>
                <Images />
            <br/>
            <h3 className='news'>Please sign up for my newsletter for future project <br/>
            updates and product reviews!</h3>
                <div className='newsform'>
                  <NewsLetter />
                </div>
            <br/>
            <div className="bar">
                <Socialbar/>  
                Copyright 2019 Matt Canoy Illies
            </div>
        </div>
        );
    }

ReactDOM.render (<App />, document.querySelector('#root'))
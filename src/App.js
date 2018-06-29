import React, { Component } from 'react';
import { Navbar, NavItem, Parallax, Footer } from 'react-materialize';
// import Image from 'react-native'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar brand='IzzleNizzle' right>
          <NavItem onClick={() => console.log('test click')}>Isaac P.</NavItem>
          <NavItem onClick={() => console.log('test click')}>I plan on putting a few icons here </NavItem>
        </Navbar>


        <Parallax imageSrc="./assets/narrowcanyon.jpg" />
        <div className="section white">
          <div className="row container">
            <img src="/assets/AmberandI.JPG" id="profile" alt="Me"/>
              <h3 className="header">Hi! I'm Isaac</h3>
              <p className="grey-text text-darken-3 lighten-3">I'm a Web Developer. I currently work with the MERN Stack.</p>
          </div>
          </div>
          <Parallax imageSrc="./assets/ipadchessmatch.jpg" />
          <div className="section white">
            <div className="row container">
              <h2 className="header">Projects</h2>
              <p className="grey-text text-darken-3 lighten-3">Here I will put a few examples of my abilities.</p>
            </div>
          </div>


          <Footer copyrights="&copy; IzzleNizzle 2018"
            moreLinks={
              <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            }
            links={
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>

              </ul>
            }
            className='example'
          >
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </Footer>

        </div>
        );
      }
    }
    
    export default App;

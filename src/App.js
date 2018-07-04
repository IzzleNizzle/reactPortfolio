import React, { Component } from 'react';
import { Navbar, NavItem, Parallax, Footer } from 'react-materialize';
// import Image from 'react-native'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar brand='IzzleNizzle' right>
          <NavItem href="https://github.com/IzzleNizzle">Isaac P.</NavItem>
          <NavItem href="https://github.com/IzzleNizzle"><span><img className='logo' src="assets/githubicon.png" alt="#" /></span></NavItem>
          <NavItem href="https://www.linkedin.com/in/-isaacp/"><span><img className='logo' src="assets/linkedinicon.png" alt="#" /></span></NavItem>
          <NavItem href="https://stackoverflow.com/users/8822068/isaac?tab=profile"><span><img className='logo' src="assets/stackoverflowicon.png" alt="#" /></span></NavItem>

        </Navbar>

        <Parallax imageSrc="./assets/narrowcanyon.jpg" />
        <div className="section white">
          <div className="row container">
            <img src="/assets/AmberandI.JPG" id="profile" alt="Me" />
            <h3 className="header">Hi! I'm Isaac</h3>
            <p className="grey-text text-darken-3 lighten-3">I'm a Web Developer currently working with the MERN Stack.
            <br/>
            <br/>
            I love the diversity of people. Coding makes me happy.
            <br/>
            <br/>
            In my free time you can find me peddling my bike, riding at the skatepark, or with my laptop coding up a storm.</p>
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

          links={
            <ul>
              <li>
              <a href="https://github.com/IzzleNizzle" className='logo'><span ><img className='logo'src="assets/githubicon.png" alt="#" /></span> GitHub</a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/-isaacp/" className='logo'><span ><img className='logo'src="assets/linkedinicon.png" alt="#" /></span> LinkedIn</a>
              </li>
              <li>
              <a href="https://stackoverflow.com/users/8822068/isaac?tab=profile" className='logo'><span ><img className='logo'src="assets/stackoverflowicon.png" alt="#" /></span> Stack Overflow</a>
              </li>
            </ul>
          }
          className='example'
        >
          <h5 className="white-text">Let's connect!</h5>
        </Footer>

      </div>
    );
  }
}

export default App;

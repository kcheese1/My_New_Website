import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';

const IndexPage = () => (
  
  <Layout> 
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                About Me
              </a>
            </Scroll>
            
          </li>
          <li>
            <Scroll type="id" element="two">
              <a href="/#" className="button primary">
                Contact Me
              </a>
            </Scroll>
            
          </li>
          <li>
          <Scroll type="id" element="three">
              <a href="/#" className="button primary">
                Experience
              </a>
          </Scroll>
          </li>
          <li>
          <Scroll type="id" element="four">
              <a href="/#" className="button primary">
                Skills
              </a>
          </Scroll>
          </li>
          <li>
          <Scroll type="id" element="footer">
              <a href="/#" className="button primary">
                Media Links
              </a>
          </Scroll>
          </li>
        </ul>
        <ul className="actions special">
      
          <li>
              <a href='https://github.com/kcheese1' className="button primary2">
                Check out my GitHub!!
              </a>
            
          </li>
        </ul>
      </div>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            About Me
          </h2>
          <p>
            Currently a DeSales University student studying Computer Science and I am Co-President of the DeSales Student Chapter of the Association for Computing Machinery. As of right now I am in search of a job that pertains to my field.
          </p>
        </header>
      </div>
    </section>
    <section id="two" className="wrapper style6 special">
      <div className="inner">
        <header className="major">
          <h2>
            Contact Me
          </h2>
          <p>
            Email: kolbymiller.cs@gmail.com
          </p>
        </header>
      </div>
    </section>
    <section id="three" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            IT Student Worker at Desales University
            <br />
            -Part Time
          </h2>
          <p>
            Worked from November 2018 through May 2020
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Marketing Staff at Vector Marketing
            <br />
            -Seasonal
          </h2>
          <p>
            Worked from December 2018-August 2019
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            App Developer at TWG Companies
            <br />
            -Internship
          </h2>
          <p>
            Worked from April 2021-July 2021
          </p>
        </div>
      </section>
    </section>

    <section id="four" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Skills</h2>
        </header>
        <ul className="features">
          <li className="fas fa-laptop-code">
            <h3>Java</h3>
          </li>
          <li className="fas fa-laptop">
            <h3>C++</h3>
          </li>
          <li className="fas fa-code">
            <h3>Python</h3>
          </li>
          <li className="fas fa-bread-slice">
            <h3>Git</h3>
          </li>
          <li className="fas fa-folder">
            <h3>Microsoft Visual Studio</h3>
          </li>
          <li className="far fa-building">
            <h3>Systematic Image Server</h3>
          </li>
          <li className="fas fa-feather">
            <h3>Swift</h3>
          </li>
          <li className="fas fa-user-secret">
            <h3>React Native</h3>
          </li>
          <li className="fas fa-infinity">
            <h3>Unity</h3>
          </li>
          <li className="far fa-keyboard">
            <h3>Android Studio</h3>
          </li>
        </ul>
      </div>
    </section>

  </Layout>
  
);

export default IndexPage;

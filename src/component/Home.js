import React from "react";

import meetups from "../images/meetups.JPG";
import meetups02 from "../images/meetups02.JPG";
import books from "../images/books.JPG";
import books02 from "../images/books02.JPG";
import pearl from "../images/pearl.JPG";
import pearl02 from "../images/pearl02.JPG";
import allswell from "../images/alliswell.JPG";
import allswell02 from "../images/alliswell02.JPG";

import Navigation from "./Nav";
import Footer from "./Footer";

const HomePage = () => (
  <div>
    <Navigation />
    <div className="gridContainer">
      <div className="overlay">
        <h1 className="gridTitle">Capital Meetups.</h1>
        <p className="gridParagraph">
          At Enspiral our team built Capital Meetups because we disliked the
          Meetups app that already existed, so we sought to build something
          better.
        </p>
        <p className="gridParagraph">
          Front end built implementing <span>React and Redux</span>,
          <span> Auth with JWT token</span>,and backend using{" "}
          <span>Express, SQlite, Knex, </span>databases accessible to the front
          end with routes and database functions.
        </p>
        <p className="gridParagraph">
          As a team we made this happen through the employment of
          <span> Agile techniques</span>, consistant planning, time managment,
          and <span>delivery and presentation</span>.
        </p>
        <button className="bookButton">
          <a href="https://github.com/kahu-2019/meet-ups">CODE</a>
        </button>
        <button className="bookButtonTwo">
          <a href="https://capitalmeetups.herokuapp.com/#/​">SITE</a>
        </button>
      </div>
      <div>
        <img className="image" src={meetups} alt="meetups" />
        <img className="image" src={meetups02} alt="meetups" />
      </div>
    </div>
    <div className="gridContainerTwo">
      <div>
        <img className="image" src={books} alt="books" />
        <img className="image" src={books02} alt="books" />
      </div>
      <div className="overlayTwo">
        <h1 className="gridTitleTwo">Hairy Reads.</h1>
        <p className="gridParagraphTwo">
          <p>
            A personal project that combines my passion for reading and my
            passion for code.
          </p>
          Building a book journalling app which follows an individuals reading
          progress, books read, books wanting to read.{" "}
          <span>authentication using Firebase</span> and the front end and
          design implementing <span>React, Redux, and SASS.</span>
        </p>
        <button className="progressButton">
          <a href="https://github.com/HarryCandlish/Reads-Firebase">CODE</a>
        </button>
      </div>
    </div>
    <div className="gridContainerThree">
      <div className="overlayThree">
        <h1 className="gridTitleThree">Pearl Collective.</h1>
        <p className="gridParagraphThree">
          A place where juniors volunteer their skills to help small businesses,
          non-profits, social organisations gain online presence through
          building websites for their business or cause.
        </p>
        <p className="gridParagraphThree">
          <span>
            The goal is to simulate experience for juniors, better preparing
            them for a real work environment, and help organisations who for
            numerous reasons do not have an online presence.
          </span>
        </p>
        <p className="gridParagraphThree">
          Are currently working on websites for{" "}
          <span>
            Hey Day Craftbeer, a small business running in upper Cuba Street.
          </span>{" "}
        </p>
        <button className="friendsButton">
          <a href="https://github.com/HarryCandlish/Pearl-Collective-FE">
            CODE
          </a>
        </button>
      </div>
      <div>
        <img className="image" src={pearl} alt="pearl" />
        <img className="image" src={pearl02} alt="pearl" />
      </div>
    </div>
    <div className="gridContainerTwo">
      <div>
        <img className="image" src={allswell} alt="alliswell" />
        <img className="image" src={allswell02} alt="alliswellS" />
      </div>
      <div className="overlayTwo">
        <h1 className="gridTitleTwo">All Is Well.</h1>
        <p className="gridParagraphTwo">
          Due to the issue our society has with mental health, I attempted to
          build a website advertising the clothing line 'All is Well', which is
          clothing that promotes mental health awareness.
        </p>
        <p className="gridParagraphTwo">
          The front end is implemented in React, Redux, and Javascript Chart,
          and the backend in SQlite and a database displaying in the front end.
        </p>
        <button className="progressButton">
          <a href="https://github.com/HarryCandlish/ALL_IS_WELL_FRONTEND">
            FRONT END
          </a>
        </button>
        <button className="progressButton">
          <a href="https://github.com/HarryCandlish/ALL_IS_WELL_BACKEND">
            BACK END
          </a>
        </button>
      </div>
    </div>
    <Footer />
  </div>
);

export default HomePage;

//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function ScoreCard(props) {
  return (
    <div className={props.teamType}>
      <h2 className={props.teamType + "__name"}>{props.teamName}</h2>
      <div className={props.teamType + "__score"}>{props.score}</div>
    </div>
  );
}

function Buttons(props) {
  return (
    <div className={props.teamType+"Buttons"}>
      <button className={props.teamType + "Buttons__touchdown"} onClick={() => props.addToScore(7)}>{props.team} Touchdown</button>
      <button className={props.teamType + "Buttons__fieldGoal"} onClick={() => props.addToScore(3)}>{props.team} Field Goal</button>

      {/* <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
      <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>Away Field Goal</button> */}
    </div>
  );
}




function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [downScore, setDownScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">

        <div className="topRow">
          
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            
          <ScoreCard teamType="home" teamName="Lions" score={homeScore}></ScoreCard>

          <div className="timer">00:03</div>
          <ScoreCard teamType="away" teamName="Tigers" score={awayScore}></ScoreCard>
          
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <Buttons teamType="home" team="Home" addToScore={(n) => setHomeScore(homeScore + n)}></Buttons>
        <Buttons teamType="away" team="Away" addToScore={(n) => setAwayScore(awayScore + n)}></Buttons>

        {/* <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
        </div> */}
      </section>
    </div>

  
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feeding from "../components/Feeding";
import Nappies from "../components/Nappies";
import Sleep from "../components/Sleep";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="FeedNapSleep" />

      <div className="column1">
        {" "}
        <Link to="/feeding">
          <h3>Feeding</h3>
        </Link>
        <img
          src="https://em-content.zobj.net/source/samsung/380/baby-bottle_1f37c.png"
          alt="bottlepic"
        />
      </div>

      <div className="column2">
        {" "}
        <Link to="/nappies">
          <h3>Nappies</h3>
        </Link>
        <img
          src="https://em-content.zobj.net/source/samsung/220/briefs_1fa72.png"
          alt="nappy"
        />
      </div>

      <div className="column3">
        <Link to="/sleep">
          <h3>Sleep</h3>
        </Link>
        <img
          src="https://em-content.zobj.net/source/samsung/128/sleeping-face_1f634.png"
          alt="sleepimg"
        />
      </div>

      <div className="quotes">
        <h3>You are doing an AMAZING job!</h3>
        <p>
          As new parents, we often strive for perfection. But the truth is,
          there are no perfect parents, so just be the very best parents you can
          be.
        </p>
      </div>
    </>
  );
}

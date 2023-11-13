import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feeding from "../components/Feeding";
import Nappies from "../components/Nappies";
import Sleep from "../components/Sleep";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="FeedNapSleep" />

      <div class="column1">
        {" "}
        <h3>Feeding</h3>
        <img src="https://placehold.co/100x100" alt="bottlepic" />
      </div>

      <div class="column2">
        {" "}
        <h3>Nappies</h3>
        <img src="https://placehold.co/100x100" alt="nappy" />
      </div>

      <div class="column3">
        <h3>Sleep</h3>
        <img src="https://placehold.co/100x100" alt="sleepimg" />
      </div>

      <div className="quotes">
        <h3>You are doing an AMAZING job</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
          maiores! Laudantium explicabo assumenda rem fugit hic ducimus commodi
          quod. Suscipit, ipsum magni? Ut ipsam itaque earum atque! Vitae, illo
          voluptate? Aspernatur eveniet amet esse consequatur illo dolores velit
          nesciunt odit perspiciatis reiciendis, incidunt porro delectus maxime
          vitae quia laudantium, voluptatem quas accusantium? Aspernatur, magni.
        </p>
      </div>
    </>
  );
}

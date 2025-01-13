import "./style.scss";
import Button from "../../components/Button";
import Location from "../../components/Location";
import ExplanationCard from "../../components/ExplanationCard";
import data from "../../data/friendlyUse.json";

function Homepage() {
   return (
      <main>
         <div>
            <Location content={"Paris, Belleville"} />
         </div>
         <section className="explore">
            <h1>Réservez le menu qui vous convient</h1>
            <p>
               Découvrez des restaurants d&apos;exception, sélectionnés par nos
               soins.
            </p>
            <div className="explore__btn-container">
               <Button
                  content={"Explorer nos restaurants"}
                  className={"btn btn__explore"}
               />
            </div>
         </section>
         <section className="functioning">
            <h2>Fonctionnement</h2>
            <div className="functioning__explanation-cards">
               {data.functioning.map((item) => (
                  <ExplanationCard
                     key={item.id}
                     pellet={item.id}
                     icon={item.icon}
                     content={item.title}
                  />
               ))}
            </div>
         </section>
      </main>
   );
}

export default Homepage;

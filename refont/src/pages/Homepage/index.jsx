import "./style.scss";
import Button from "../../components/Button";
import Location from "../../components/Location";

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
      </main>
   );
}

export default Homepage;

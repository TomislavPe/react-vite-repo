import "./App.css";
import vratiTekst from "./helper";
import pismoIliGlava from "coinflipperjs"
import randomString from "random-string"

function App() {
    return (
        <>
            <h1>Naslov</h1>
            <h2>Pismo ili glava: {pismoIliGlava()}</h2>
            <h2>Random string: {randomString({ length: 20 })}</h2>
            {["proizvod 1", "proizvod 2", "proizvod 3"].map((proizvod) => {
                return <h2 key="">{proizvod}</h2>;
            })}
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, quasi nobis iure veniam possimus soluta commodi.
                Doloremque illo expedita sit?
                {vratiTekst() + "ssdhfkl"}
            </p>
        </>
    );
}

export default App;

import Carts from "./components/Carts";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App w-full overflow-hidden pb-4">
      <NavBar/>
      <Hero/>
      <Carts/>
    </div>
  );
}

export default App;

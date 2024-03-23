import "./App.css";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS?.map((item) => {
              return (
                <CoreConcepts
                  title={item.title}
                  description={item.description}
                  imgUrl={item.image}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;

import { useState } from "react";
import "./App.css";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
import Content from "./components/Content";

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  const handleClick = (selectedButton: string) => {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS?.map((item, index) => {
              return (
                <CoreConcepts
                  key={index}
                  title={item.title}
                  description={item.description}
                  imgUrl={item.image}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              handleClick={() => handleClick("components")}
              isActive={selectedTopic === "components"}
            >
              Components
            </TabButton>
            <TabButton
              handleClick={() => handleClick("jsx")}
              isActive={selectedTopic === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              handleClick={() => handleClick("props")}
              isActive={selectedTopic === "props"}
            >
              Props
            </TabButton>
            <TabButton
              handleClick={() => handleClick("state")}
              isActive={selectedTopic === "state"}
            >
              State
            </TabButton>
          </menu>
          {selectedTopic?.trim() === "" ? (
            <div>Please select a topic</div>
          ) : (
            <Content selectedTopic={selectedTopic} />
          )}
        </section>
      </main>
    </div>
  );
};

export default App;

import { useState } from "react";
import Content from "../Content";
import TabButton from "../TabButton";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  const handleClick = (selectedButton: string) => {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  };

  return (
    <>
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
    </>
  );
};

export default Examples;

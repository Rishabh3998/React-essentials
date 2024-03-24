import { EXAMPLES } from "../../data";
import "./index.css";

const Content = ({ selectedTopic }: { selectedTopic: string }) => {
  return (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
};

export default Content;

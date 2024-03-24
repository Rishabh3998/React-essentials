import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcept";

const CoreConcepts = () => {
  return (
    <>
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS?.map((item, index) => {
          return (
            <CoreConcept
              key={index}
              title={item.title}
              description={item.description}
              imgUrl={item.image}
            />
          );
        })}
      </ul>
    </>
  );
};

export default CoreConcepts;

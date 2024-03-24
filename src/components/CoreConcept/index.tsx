import { ICoreConcept } from "../../types";
import "./index.css";

const CoreConcept = ({ title, description, imgUrl }: ICoreConcept) => {
  return (
    <li>
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;

import { ICoreConcepts } from "../../types";
import "./index.css";

const CoreConcepts = ({ title, description, imgUrl }: ICoreConcepts) => {
  return (
    <li>
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcepts;

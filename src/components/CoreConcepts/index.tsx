import { ICoreConcepts } from "../../types";

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

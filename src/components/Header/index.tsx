import { reactDescriptions } from "../../constants";
import { getRandomInt } from "../../utils";
import reactImg from "../../assets/react-core-concepts.png";

const Header = () => {
  const randomDescription = reactDescriptions[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomDescription} react concepts you will need for almost any app you
        are going to build.
      </p>
    </header>
  );
};
export default Header;

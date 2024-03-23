import { reactDescriptions } from "../../constants";
import { getRandomInt } from "../../utils";

const Header = () => {
  const randomDescription = getRandomInt(2);
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[randomDescription]} react concepts you will need for
        almost any app you are going to build.
      </p>
    </header>
  );
};
export default Header;

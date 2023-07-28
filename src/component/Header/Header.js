import Concept from "../Concept/Concept";
import keyConceptsImage from "../../assets/images/key-concepts.png";
import "../../index";

function Header(props) {
  return (
    <div>
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      {/* <ul id="concepts">
        <Concept
          title={props.items[0].title}
          image={props.items[0].image}
          description={props.items[0].description}
        />
        <Concept
          title={props.items[1].title}
          image={props.items[1].image}
          description={props.items[1].description}
        />
        <Concept
          title={props.items[2].title}
          image={props.items[2].image}
          description={props.items[2].description}
        />
      </ul> */}
    </div>
  );
}

export default Header;

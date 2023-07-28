import "../index.css";

function Concept(props) {
  return (
    <div className="concept">
      <img src={props.image} alt="TODO: TITLE" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Concept;

//  <header>
//         <img src={keyConceptsImage} alt="Medal badge with a star" />
//         <h1>Key React Concepts</h1>
//         <p>Selected key React concepts you should know about</p>
//       </header>
//       <ul id="concepts">
//         <li className="concept">
//           <img src={componentsImage} alt="TODO: TITLE" />
//           <h2 title={concepts[0].title}></h2>
//           <p description={concepts[0].description}></p>
//         </li>
//         <li className="concept">
//           <img src={stateImage} alt="TODO: TITLE" />
//           <h2>TODO: TITLE</h2>
//           <p>TODO: DESCRIPTION</p>
//         </li>
//         <li className="concept">
//           <img src={eventsImage} alt="TODO: TITLE" />
//           <h2>TODO: TITLE</h2>
//           <p>TODO: DESCRIPTION</p>
//         </li>

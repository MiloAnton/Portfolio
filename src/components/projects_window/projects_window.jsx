import Draggable from "react-draggable";
import MenuBar from "../menu_bar/menu_bar";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

export default function ProjectsWindow(props) {
  return (
    <Draggable handle="#handle">
      <ResizableBox
        className="App"
        style={{ zIndex: props.zIndex }}
        onMouseDownCapture={() => props.handleClickZIndex()}
        width={400} // Largeur initiale de la fenêtre
        height={400} // Hauteur initiale de la fenêtre
        minConstraints={[300, 200]} // Largeur et hauteur minimales
        maxConstraints={[1300, 800]} // Largeur et hauteur maximales
        resizeHandles={["se"]} // Redimensionner uniquement depuis le coin inférieur droit
      >
        <MenuBar />
        <section className="page">
          <div className="content">
            <h2 style={{ color: "white", textAlign: "center" }}>
              Projets (bientôt disponible)
            </h2>
            <p>
              Mes projets seront visibles sur <br />
              cette fenêtre et seront consultables sur <br />
              votre navigateur, ou à travers un navigateur interne.
            </p>
          </div>
        </section>
        <div className="resizeIndicator" />
      </ResizableBox>
    </Draggable>
  );
}

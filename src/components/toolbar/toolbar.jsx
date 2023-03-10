import "./toolbar.scss";
import heart from "./../../assets/heart.svg";
import CircumIcon from "@klarr-agency/circum-icons-react";

export default function Toolbar(props) {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <section className="toolbar">
      <div className="menus">
        <img
          src={heart}
          height="20px"
          title="Développé avec amour par Milo Anton Roche-Vandenbroucque"
          alt="Icône de coeur"
        />
        <a href="#perso" title="Scroll vers la présentation">
          <p>
            <b>Milo</b>
          </p>
        </a>
        {
          props.focusedWindow === "zIndexMainWindow" ? (
            <>
              <a href="#stack" title="Scroll vers ma stack technique">
                <p>Stack</p>
              </a>
              <a href="#pro" title="Scroll vers mes expériences">
                <p>Pro</p>
              </a>
              <a href="#education" title="Scroll vers mes diplômes">
                <p>Formation</p>
              </a>
            </>
          ) : props.focusedWindow === "zIndexProjectsWindow" ? (
            <a href="#projects" title="Scroll vers mes projets">
              <p>Projets</p>
            </a>
          ) : props.focusedWindow === "zIndexLinksWindow" ? (
            <a href="#links" title="Scroll vers mes liens">
              <p>Liens</p>
            </a>
          ) : props.focusedWindow === "zIndexPeopleWindow" ? (
            <a href="#people" title="Scroll vers mes liens">
              <p>Liens</p>
            </a>
          ) : null
        }
        
      </div>
      <div className="icons">
        <CircumIcon name="cloud_on" />
        <CircumIcon name="bluetooth" />
        <CircumIcon name="battery_full" />
        <p>{date}</p>
        <p>9:41 am</p>
        <CircumIcon name="logout" />
      </div>
    </section>
  );
}

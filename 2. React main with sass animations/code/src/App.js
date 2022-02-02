import "./App.scss";
import logo from "./img/beast.jpg";
import Wave from "react-wavify";

function App() {
  return (
    <>
      <header>
        <h1>Some header content</h1>
      </header>
      <main className="main">
        <div className="main__heading">
          <h1>React-0-to-HERO #2</h1>
        </div>

        <div className="main__content">
          <div className="main__content__text">
            <p>
              <span>
                Figma is used here. We are going to replace this content with
                original dummy content. You can try with other content.
              </span>
              <span>
                Figma is used here. We are going to replace this content with
                original dummy content. You can try with other content.
              </span>
              <span>
                Figma is used here. We are going to replace this content with
                original dummy content. You can try with other content. Figma is
                used here. We are going to replace this content with original
                dummy content. You can try with other content. Figma is used
                here. We are going to replace this content with original dummy
                content. You can try with other content.
              </span>
              <span>
                Figma is used here. We are going to replace this content with
                original dummy content. You can try with other content.Figma is
                used here. We are going to replace this content with original
                dummy content. You can try with other content.
              </span>
            </p>
          </div>

          <div className="main__content__image">
            <div className="img-1">
              {" "}
              <img src={logo} alt="react-logo-1" />
            </div>
            <div className="img-2">
              {" "}
              <img src={logo} alt="react-logo-2" />
            </div>
            <div className="img-3">
              {" "}
              <img src={logo} alt="react-logo-3" />
            </div>
          </div>
        </div>
        <div className="wave">
          <Wave
            fill="rgba(61, 50, 50, 1)"
            paused={true}
            options={{
              height: 50,
              amplitude: 50,
              speed: 0.5,
              points: 3,
            }}
          />
        </div>
      </main>
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.css";
import "./instructors.css";
import insJohnMark from "./assets/John Mark.jpg";
import insLoraShrof from "./assets/Lora Shrof.jpg";
import insZengChin from "./assets/Zeng Chin.jpg";

export default function Instructors() {
  return (
    <>
      <div id="instructors" className="p-5">
        <div>
          <h2 style={{ fontWeight: "bold" }}>Meet our instructors</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 instructor-container mt-5">
            <div className="p-2">
              <img src={insJohnMark} alt="" className="big-avatar" />
            </div>
            <div className="instructor-overlay d-flex flex-column justify-content-center align-items-center shadow-lg rounded">
              <div className="p-4 d-flex flex-column justify-content-center align-items-center">
                <img src={insJohnMark} alt="" className="col-2" />
                <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
                  John Mark
                </div>
                <p style={{ color: "#09B451" }}>Senior Developer</p>
              </div>
              <div>
                <blockquote className="blockquote text-center p-3">
                  <p>
                    “Education will be for you
                    <br />
                    what you want it to be”
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 instructor-container mt-5">
            <div className="p-2">
              <img src={insLoraShrof} alt="" className="big-avatar" />
            </div>
            <div className="instructor-overlay d-flex flex-column justify-content-center align-items-center shadow-lg rounded">
              <div className="p-4 d-flex flex-column justify-content-center align-items-center">
                <img src={insLoraShrof} alt="" className="col-2" />
                <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
                  Lora Shrof
                </div>
                <p style={{ color: "#09B451" }}>Marketing Lead</p>
              </div>
              <div>
                <blockquote className="blockquote text-center p-3">
                  <p>
                    “Knowledge has to be improved,
                    <br />
                    challenged, and increased
                    <br />
                    constantly, or it vanishes”
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 instructor-container mt-5">
            <div className="p-2">
              <img src={insZengChin} alt="" className="big-avatar" />
            </div>
            <div className="instructor-overlay d-flex flex-column justify-content-center align-items-center shadow-lg rounded">
              <div className="p-4 d-flex flex-column justify-content-center align-items-center">
                <img src={insZengChin} alt="" className="col-2" />
                <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
                  Zeng Chin
                </div>
                <p style={{ color: "#09B451" }}>Data Analist at Meta</p>
              </div>
              <div>
                <blockquote className="blockquote text-center p-3">
                  <p>
                    “To know that we know what we
                    <br />
                    know, and to know that we do not
                    <br />
                    know what we do not know, that is
                    <br />
                    true knowledge”
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./Home.css";
import "./Right.css";
const Right = () => {
  return (
    <div className="sub_right">
      <h2>EDUCATION</h2>
      <div className="right_edu">
        <div>
          <h4>BACHELOR OF ARCHITECTURE</h4>
          <p>Marcelioneli Art Academy</p>
        </div>
        <h4>2014</h4>
      </div>
      <div className="right_edu">
        <div>
          <h4>MASTERS OF ARCHITECTURE</h4>
          <p>Sami institute of the Arts</p>
        </div>
        <h4>2018</h4>
      </div>
      <div>
        <h4>Languages</h4>
        <p>
          specifies that the padding should be inherited from the parent element
        </p>
      </div>
      <div className="experience">
        <div className="Languages">
          <div class="container1">
            <div class="ui-widgets">
              <div class="ui-values">English</div>
            </div>

            <div class="ui-widgets a1">
              <div class="ui-values">German</div>
            </div>

            <div class="ui-widgets a2">
              <div class="ui-values">Italian</div>
            </div>
          </div>
          {/* <h4>English</h4>
            <h4>German</h4>
            <h4>Italian</h4> */}
        </div>
        <h3>EXPERIENCE</h3>
        <div className="right_edu">
          <div>
            <h4>JUNIOR ASSISTANT</h4>
            <p>
              Anyone who has worked in React would have faced this and if not
              then will face it definitely. Prop drilling is basically a
              situation when the same data is being sent at almost every level
            </p>{" "}
          </div>
          <h4>2018</h4>
        </div>
        <div className="right_edu">
          <div>
            <h4>JUNIOR ARCHITECTURE</h4>
            <p>
              Anyone who has worked in React would have faced this and if not
              then will face it definitely. Prop drilling is basically a
              situation when the same data is being sent at almost every level
            </p>{" "}
          </div>
          <h4>2019</h4>
        </div>
        <div className="right_edu">
          <div>
            <h4>PROJECT MANAGER</h4>
            <p>
              Anyone who has worked in React would have faced this and if not
              then will face it definitely. Prop drilling is basically a
              situation when the same data is being sent at almost every level
            </p>{" "}
          </div>
          <h4>2020</h4>
        </div>
        <div className="right_edu">
          <div>
            <h4>MID LEVEL ARCHITECT</h4>
            <p>
              Anyone who has worked in React would have faced this and if not
              then will face it definitely. Prop drilling is basically a
              situation when the same data is being sent at almost every level
            </p>
          </div>
          <h4>2026</h4>
        </div>
      </div>
    </div>
  );
};

export default Right;

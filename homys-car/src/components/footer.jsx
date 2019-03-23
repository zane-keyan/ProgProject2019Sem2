import React, { Component } from "react";
import "./footer.css";
// class Footer extends Component {
//   render() {
//     return (
//       <footer>
//         <div className="p-3 mb-2 bg-light text-dark text-center">
//           © 2019 Copyright:
//           <a href="https://github.com/Abdosalah/ProgProject2019Sem2"> Team 0</a>
//         </div>
//       </footer>
//     );
//   }
// }
// export default Footer;

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">
            <a href="https://github.com/Abdosalah/ProgProject2019Sem2">
              {" "}
              Team 0
            </a>{" "}
            &#169; {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;

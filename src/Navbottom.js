import React from "react";

function Navbottom(props) {
  return (
    <div className="text-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={"page-item  " + (props.prevlist ? " " : "disabled")}>
            <a
              className="page-link"
              href="#"
              aria-disabled="true"
              onClick={() => {
                if (props.prevlist != null) {
                  props.setlist(props.seturl([props.prevlist, props.prevlist]));
                  props.setloading(true);
                }
              }}
            >
              Previous
            </a>
          </li>

          <li className={"page-item  " + (props.nextlist ? "" : "disabled")}>
            <a
              className="page-link"
              href="#"
              onClick={() => {
                props.setlist(props.seturl([props.nextlist, props.prevlist]));
                props.setloading(true);
              }}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbottom;

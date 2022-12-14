import React from "react";
//Bootstrap libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//jquery, popper.js libraries for bootstrap modal
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
// import $ from "jquery";

//Here are the modules for fullcalendar and dayclick event
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

// import Alert from "sweetalert2";

function Calendar() {
    
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center">
        <h3>Personal Sunrise</h3>
      </div>

      <div className="container">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          //Dayclick open sweetalert
          dateClick={function (info) {
            alert("Clicked on: " + info.dateStr);
            // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            // alert('Current view: ' + info.view.type);
            // change the day's background color just for fun
            // info.dayEl.style.backgroundColor = 'red';
          }}
          initialView="dayGridMonth"
          events={[
            { title: "event 1", date: "2022-11-01" },
            { title: "event 2", date: "2022-11-02" },
          ]}
          selectable={true}
          editable={true}
          droppable={true}
        />
      </div>
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title align-center">Add Event</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body text-center"></div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calendar;

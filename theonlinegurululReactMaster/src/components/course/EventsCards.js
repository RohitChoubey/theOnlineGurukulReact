import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/course/eventsCardsStyle.css';

function EventsCards(props) {
  return (
    <>
        <div className={props.bootstrapClass}>
            <div className="center_containerEvent">
            <div className="ch-item ch-img-a" style={{ backgroundImage: " url("+props.alldata.backgroundImage+")" }}>
                    <div className="ch-info ch_j">
                        <h3 className="coming-soon">Coming Soon</h3>
                    </div>
                </div>
            </div>
                <div className="title event_course_title">
                    <Link to="#">
                        <h3 className="comong-soons">{props.alldata.Event_name}</h3>
                    </Link>
                    <p className="comong-soons-p">{props.alldata.Event_content}</p>
                </div>
        </div>
    </>
  )
}

export default EventsCards

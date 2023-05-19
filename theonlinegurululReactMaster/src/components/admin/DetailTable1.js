import React from 'react';
import '../../css/admin/detailsTableStyles.css';

function DetailTable1(props) {
  return (
    <>
      <div className="detail_tables_container">
          <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="info-box">
                    <div className="info-box-icon bg-tog">
                        <i className={props.fontawesomeClassName} aria-hidden="true"></i>
                        <span className="info-box-number text-white">{props.heading}</span>
                    </div>
                    <div className="info-box-content">
                        {props.details.map((data) => 
                            <span className="info-box-text">{Object.keys(data)[0]}<small className="pull-right info-box-number">532</small></span>
                        )}
                    </div>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default DetailTable1

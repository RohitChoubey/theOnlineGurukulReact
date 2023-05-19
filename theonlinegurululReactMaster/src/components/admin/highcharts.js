import React from 'react'
import '../../css/admin/detailsTableStyles.css';

function collapseviewchart1(){
    document.querySelector('.smalldescChart').classList.toggle('expand');
    document.querySelector('#changechartBtn').classList.toggle('fa-plus');
}
function HighCharts() {
    
      
  return (
    <>
        <div className="DetalsZoomInTable_container">
            <div className="row">
                <div className="col-md-12">
                <div className="box">
                    <div className="box-header with-border">
                    <h3 className="box-title">Course Wise Class report</h3>
                    <div className="box-tools pull-right">
                        <button className="btn btn-box-tool" onClick={collapseviewchart1} id="collapseviewchart1"><i id="changechartBtn" className="fa fa-minus "></i></button>
                    </div>
                    </div> 
                    <div className="box-body">
                     
                     <div className="smalldescChart">
                         <p>HighCharts</p>
                         <p>HighCharts</p>
                         <p>HighCharts</p>
                     </div>

                    </div> 

                </div> 
                </div> 
            </div> 
        </div>
    </>
  )
}

export default HighCharts
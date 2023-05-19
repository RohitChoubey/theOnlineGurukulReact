import React from 'react'
import '../../css/admin/detailsTableStyles.css';


function collapseviewBox1(){
    document.querySelector('.smalldesc').classList.toggle('expand');
    document.querySelector('#changeBtn').classList.toggle('fa-plus');
}
function DetalsZoomInTable(props) {
    
      
  return (
    <>
        <div className="DetalsZoomInTable_container">
            <div className="row">
                <div className="col-md-12">
                <div className="box">
                    <div className="box-header with-border">
                    <h3 className="box-title">Latest Teachers</h3>
                    <div className="box-tools pull-right">
                    <span className="label label-danger bg-red text-white">5 New teachers May/2022</span>
                        <button className="btn btn-box-tool" onClick={collapseviewBox1} id="collapseviewBox1"><i id="changeBtn" className="fa fa-minus "></i></button>
                    </div>
                    </div> 
                    <div className="box-body">
                        <ul className="users-list clearfix smalldesc">
                        {props.detalsZoomInTable.map((data) => 
                            <li>
                                <a className="users-list-name" href={data.teacher_PresenterList}> {data.name } </a>
                                <span className="users-list-date">{data.phone}</span>
                                <span className="users-list-date">{data.date}</span>
                            </li>
                        )}
                        </ul>
                    
                                
                    </div> 

                </div> 
                </div> 
            </div> 
        </div>
    </>
  )
}

export default DetalsZoomInTable
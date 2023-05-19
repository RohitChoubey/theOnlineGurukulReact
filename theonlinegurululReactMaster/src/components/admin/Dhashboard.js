import React from 'react'
import DetailTable1 from './DetailTable1'
import DetalsZoomInTable from './DetalsZoomInTable'
import HighCharts from './highcharts';

function Dhashboard() {
    const detailsArray = [{'Total':'532'},{'Email_Confirm':'6464'},{'Enrollled_In_Courses':'85858'},{'Active_student':'84747'}];
    const detalsZoomInTable = [
        {'name':'Najiya Thasneem',
        'teacher_PresenterList':'https://www.theonlinegurukul.com/admin/master/Presenter/view/1711',
        'phone':'9810313314',
        'date':'8-May-2022'},
        {'name':'Najiya Thasneem',
        'teacher_PresenterList':'https://www.theonlinegurukul.com/admin/master/Presenter/view/1711',
        'phone':'9810313314',
        'date':'8-May-2022'},
        {'name':'Najiya Thasneem',
        'teacher_PresenterList':'https://www.theonlinegurukul.com/admin/master/Presenter/view/1711',
        'phone':'9810313314',
        'date':'8-May-2022'},
        {'name':'Najiya Thasneem',
        'teacher_PresenterList':'https://www.theonlinegurukul.com/admin/master/Presenter/view/1711',
        'phone':'9810313314',
        'date':'8-May-2022'},
        {'name':'Najiya Thasneem',
        'teacher_PresenterList':'https://www.theonlinegurukul.com/admin/master/Presenter/view/1711',
        'phone':'9810313314',
        'date':'8-May-2022'},
        {'name':'Najiya Thasneem',
        'teacher_PresenterList':'https://www.theonlinegurukul.com/admin/master/Presenter/view/1711',
        'phone':'9810313314',
        'date':'8-May-2022'},
    ]
  return (
    <>  
    <br />
    <br />
        <div className="adminDashboardMain_continer">
            <div className="container">
                
                <DetailTable1 heading="Student"  fontawesomeClassName="fa fa-users student_ios text-white"  details={detailsArray}/>
                <HighCharts/>
                <DetalsZoomInTable detalsZoomInTable={detalsZoomInTable}/>
            </div>
        </div>  
        <br />
    <br /> 
    </>
  )
}

export default Dhashboard
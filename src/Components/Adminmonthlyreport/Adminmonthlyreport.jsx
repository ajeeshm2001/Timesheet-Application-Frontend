import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Adminmonthlyreport() {
    const [report,setReport]=useState([]);
    useEffect(()=>{
        const monthlyreport = ()=>{
            axios.post("http://localhost:5000/getmonthlyreport",{},{withCredentials:true}).then((data)=>{
                setReport(data.data.report)
            })
        }
        monthlyreport();
    },[])
  return (
    <div className='container m-5'>
        <div class="tab-pane fade show active" id="bordered-justified-home" role="tabpanel" aria-labelledby="home-tab">

<div class="card">
   <div class="card-body">
    <h2>Monthly Report Of The Task</h2>

      <table class="table table-hover" id="weekly-table">
         <thead>
            <tr>
               <th scope="col">Users</th>
               <th scope="col">Total Completed Task</th>
            </tr>
         </thead>
         <tbody>
            {report.map((Element)=>{
                return(

               
                 <tr>

                 <td class="tm-product-name">{Element.name[0]}</td>
                 <td class="tm-product-name">{Element.count}</td>

              </tr>
 )
            })}
              


            <tr>
               
            </tr>
         </tbody>
      </table>


   </div>
</div>
</div>
    </div>
  )
}

export default Adminmonthlyreport
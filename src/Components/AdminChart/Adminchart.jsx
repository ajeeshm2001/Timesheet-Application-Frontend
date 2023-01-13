import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Adminchart() {
    const [chart,setChart]=useState([]);
        useEffect(()=>{
            const dailyreport = ()=>{
                axios.post("http://localhost:5000/getdailyreport",{},{withCredentials:true}).then((data)=>{
                    console.log(data.data.report);
                    setChart(data.data.report)
                })
            }
            dailyreport();
        },[])
  return (
    <div className='container mt-5'>
        <BarChart
          width={500}
          height={300}
          data={chart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="count" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
    </div>
  )
}

export default Adminchart
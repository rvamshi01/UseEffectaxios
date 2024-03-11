import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Tableaxios() {
    const [appointments,setAppointments]=useState([]);
    useEffect(()=>{
        axios.get("https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json")
         .then(res=>setAppointments(res.data.appointments));
    },[])

  return (
    <div>
      <table className='table table-hover'>
        <thead>
            <tr>
                <th>Patient Name</th>
                <th>Phone no</th>
                <th>appointment</th>
                <th>time</th>
                <th>doctor</th>
                <th>injury</th>
            </tr>
        </thead>
        <tbody>
            {appointments.map((p)=>{
                return(
                <tr key={p.patient_name}>   
                    <td>{p.patient_name}</td>
                    <td>{p.mobile_number}</td>
                    <td>{p.appointment_date}</td>
                    <td>{p.appointment_time}</td>
                    <td>{p.doctor}</td>
                    <td>{p.injury}</td>
                    </tr>

                )
            })}
        </tbody>
      </table>
    </div>
  )
}

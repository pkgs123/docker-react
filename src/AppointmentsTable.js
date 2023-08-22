import React from 'react';

const AppointmentsTable = ({ appointments }) => {
  return (
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Date</th>
    //       <th>Morning</th>
    //       <th>Afternoon</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {appointments.map((appointment) => (
    //       <tr key={appointment.date}>
    //         <td>{appointment.date}</td>
    //         <td>
    //           {appointment.appointments
    //             .filter((appt) => appt.timeSlot === 'Mrng')
    //             .map((appt) => (
    //               <div key={appt._id}>{appt.details[0].time}</div>
    //             ))}
    //         </td>
    //         <td>
    //           {appointment.appointments
    //             .filter((appt) => appt.timeSlot === 'After')
    //             .map((appt) => (
    //               <div key={appt._id}>{appt.details[0].time}</div>
    //             ))}
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <div>
    <table>
      <thead>
        <tr>
          {/* <th>Date</th> */}
          <th>Morning</th>
          <th>Afternoon</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment) => (
          <tr key={appointment.date}>
            <td>
              {appointment.appointments
                .filter((slot) => slot.timeSlot === 'Mrng')
                .map((slot) => (
                  <ul key={slot.timeSlot}>
                    {slot.details.map((detail) => (
                      <li key={detail._id}>{detail.time/2}</li>
                    ))}
                  </ul>
                ))}
            </td>
            <td>
              {appointment.appointments
                .filter((slot) => slot.timeSlot === 'After')
                .map((slot) => (
                  <ul key={slot.timeSlot}>
                    {slot.details.map((detail) => (
                      <li key={detail._id}>{detail.time/2}</li>
                    ))}
                  </ul>
                ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

};

export default AppointmentsTable;

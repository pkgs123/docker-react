import React from 'react';
import AppointmentsTable from './AppointmentsTable';

const Test1 = () => {
  const appointmentsData = [
    {
      date: '2023-07-12',
      appointments: [
        {
          timeSlot: 'After',
          details: [
            {
              _id: '64a468b27dfa619cb3b8de4e',
              userId: '649d441a1ee5569d0cfa4982',
              doctorId: '649eb1d51ae363a64a303732',
              date: '2023-07-12T00:00:00.000Z',
              time: '36',
              status: 'pending',
              createdAt: '2023-07-03T11:03:22.302Z',
              updatedAt: '2023-07-03T11:10:22.302Z',
              __v: 0,
            },
            {
                _id: '64a468b27dfa619cb3b8de4e',
                userId: '649d441a1ee5569d0cfa4982',
                doctorId: '649eb1d51ae363a64a303732',
                date: '2023-07-12T00:00:00.000Z',
                time: '36',
                status: 'pending',
                createdAt: '2023-07-03T11:03:22.302Z',
                updatedAt: '2023-07-03T11:10:22.302Z',
                __v: 0,
              },
          ],
        },
        {
          timeSlot: 'Mrng',
          details: [
            {
              _id: '64a468cb7dfa619cb3b8de4f',
              userId: '649d441a1ee5569d0cfa4982',
              doctorId: '649eb1d51ae363a64a303732',
              time: '21',
              status: 'pending',
              createdAt: '2023-07-03T11:03:22.302Z',
              updatedAt: '2023-07-03T11:10:22.302Z',
              __v: 0,
              date: '2023-07-12T00:00:00.000Z',
            },
            {
                _id: '64a468cb7dfa619cb3b8de4f',
                userId: '649d441a1ee5569d0cfa4982',
                doctorId: '649eb1d51ae363a64a303732',
                time: '21',
                status: 'pending',
                createdAt: '2023-07-03T11:03:22.302Z',
                updatedAt: '2023-07-03T11:10:22.302Z',
                __v: 0,
                date: '2023-07-12T00:00:00.000Z',
              },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Appointments</h1>
      <AppointmentsTable appointments={appointmentsData} />
    </div>
  );
};

export default Test1;

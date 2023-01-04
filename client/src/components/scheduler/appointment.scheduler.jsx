import React from 'react'
import { Scheduler } from "@aldabil/react-scheduler";

const AppointmentScheduler = () => {
  return (
    <Scheduler
      view="week"
      events={[
        {
          event_id: 1,
          title: "Event 1",
          start: new Date("2023/1/2 09:30"),
          end: new Date("2023/1/2 10:30")
        },
        {
          event_id: 2,
          title: "Event 2",
          start: new Date("2021/5/4 10:00"),
          end: new Date("2021/5/4 11:00")
        }
      ]}
    />
  )
}

export default AppointmentScheduler
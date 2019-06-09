import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import * as firebase from 'firebase/app'
import {queues} from './consultQueue'

import {useTimeDisplay} from '../time-slot/time-helper'

const Container = styled.div`
  display: grid;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  
  padding: 3em 5em;

  color: #2d2d30;
  background: #f1f3f5;
`

const consultCol = firebase.firestore().collection('consult')

// const queues = value.docs.map(doc => doc.data())
// const slots = queues.filter(x => x.slot === currentSlot) as ConsultQueue[]

const timeSlots = Object.keys(queues)

function getMentorName(mentor: string) {
  if (mentor === 'Good Factory') return 'ทีมงาน Good Factory'

  return 'พี่' + mentor
}

function shouldUpdateSlot(remainingTime: string, currentSlot: string) {
  return remainingTime === '00:00'
}

// function FlashChanges({remainingTime: string}) {
//   const [isFlashing, setFlashing] = useState(false)
//
//   useEffect(() => {
//     if (remainingTime === '00:00') {
//       setFlashing(true)
//
//       setTimeout(() => {
//         setFlashing(false)
//       }, 5000)
//     }
//   }, [remainingTime])
//
//   if (!isFlashing) return null
//
//   return (
//     <div>
//       <h1>หมดเวลาแล้วจ้าาาา</h1>
//     </div>
//   )
// }

export const App = () => {
  const [slotNumber, setSlotNumber] = useState(0)
  const currentSlot = timeSlots[slotNumber]
  const [remainingTime, currentTime] = useTimeDisplay(currentSlot)

  if (!currentSlot) return null

  useEffect(() => {
    if (shouldUpdateSlot(remainingTime, currentSlot)) {
      setSlotNumber(slotNumber + 1)
    }
  }, [remainingTime])

  const consultQueues = Object.entries(queues[currentSlot])

  window.setSlotNumber = setSlotNumber

  function forceNext() {
    setSlotNumber(slotNumber + 1)
  }

  return (
    <Container className='app-container'>
      <div>
        <div className='current-time-slot' onClick={forceNext}>เวลา {currentTime} (ช่วง {currentSlot})</div>
        <div className='remaining-time'>เหลือเวลา <strong>{remainingTime}</strong> นาที</div>
      </div>

      <div>{consultQueues.map(([project, mentor]) => (
        <div key={project} className='project-item'>
          <strong>{project}</strong> <span className='mentor-name'>พบ{getMentorName(mentor)}</span>
        </div>
      ))}</div>

      {/*<FlashChanges remainingTime='00:00' />*/}
    </Container>
  )
}

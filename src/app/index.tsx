import React from 'react'
import styled from '@emotion/styled'

import {useCurrentTime} from './useCurrentTime'
import {useMentorSlots} from './useCurrentSlot'
import {useRemainingTimeInSlot} from './useRemainingTimeInSlot'
import {tracks, startTime, maxSlots} from './consultQueue'

const Container = styled.div`
  display: grid;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  
  padding: 3em 5em;
`

interface MentorDisplayProps {
  data: string[]
}

function MentorDisplay({data}: MentorDisplayProps) {
  return (
    <div>
      {data.map((group, i) => (
        <div className='project-item' key={i}>
          <strong className='group-name'>กลุ่ม {group}</strong> <span className='mentor-name'>พบ{tracks[i]}</span>
        </div>
      ))}
    </div>
  )
}

function getProgress(time: string, slotDuration: number = 10) {
  const [min, sec] = time.split(':').map(Number)

  return Math.round(((min * 60 + sec) / (slotDuration * 60)) * 100)
}

// prettier-ignore
const ProgressContainer = styled.div<{progress: number}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  box-shadow: 0 -1px 4px rgba(53, 74, 94, 0.21);
  background: ${props => `linear-gradient(45deg, #9b59b6 ${props.progress}%, #e74c3c)`};
`

export const App = () => {
  const time = useCurrentTime()
  const [slot, mentorSlots] = useMentorSlots(startTime)
  const remainingTime = useRemainingTimeInSlot(10)

  const progress = getProgress(remainingTime, 10)

  let remainingClass = 'remaining-time'
  if (progress < 18) remainingClass += ' almost-end'
  if (progress < 10) remainingClass += ' blink'

  let inSession = slot > 0 && slot <= maxSlots

  return (
    <ProgressContainer progress={progress}>
      <div className="info-wrapper">
        <div className="info-container">
          <div>
            <div className='current-time-slot'><span>เวลา {time}</span> {inSession && <small>คิวที่ {slot}</small>}</div>
            <div className={remainingClass}>เหลือเวลา <strong>{remainingTime}</strong></div>
          </div>

          {inSession && <MentorDisplay data={mentorSlots} />}

          {!inSession && (
            <h1 className='no-session-title'>ไม่อยู่ในช่วงการคอนซัลท์</h1>
          )}
        </div>
      </div>
    </ProgressContainer>
  )
}

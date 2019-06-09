import {DateTime} from 'luxon'
import Timer = NodeJS.Timer
import {useEffect, useState} from 'react'
import {strptime} from '../time-utils'

export const getTimeDuration = (duration: string) => {
  const match = duration.match(/(.*:.*) - (.*:.*)/)
  if (!match || match.length < 3) return null

  const [_, start, end] = match

  return [start, end]
}


export function getRemainingTimeFromDuration(durationString: string, currentTime?: DateTime) {
  if (!currentTime) currentTime = DateTime.local()

  const duration = getTimeDuration(durationString)
  if (!duration) return null

  const [start, end] = duration
  const startingTime = strptime(start)
  const endingTime = strptime(end)


  const diff = startingTime.diff(currentTime)
  if (diff.milliseconds > 0) {
    return startingTime.diff(currentTime).toFormat('mm:ss')
  }

  return endingTime.diff(currentTime).toFormat('mm:ss')
}

export function useTimeDisplay(timeSlot: string) {
  const [remainingTime, setRemainingTime] = useState('0:00')
  const [currentTime, setCurrentTime] = useState('0:00')

  let timer: Timer

  useEffect(() => {
    if (!timeSlot) return

    timer = setInterval(() => {
      const current = DateTime.local().toFormat('hh:mm')
      setCurrentTime(current)

      const remaining = getRemainingTimeFromDuration(timeSlot)
      if (!remaining) return clearInterval(timer)

      setRemainingTime(remaining)
    }, 1000)

    return () => clearInterval(timer)
  }, [remainingTime, currentTime])

  return [remainingTime, currentTime]
}
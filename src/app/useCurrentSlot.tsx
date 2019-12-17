import {useEffect, useState} from 'react'

import {getSlotFromTime} from './timeSlot'
import {getInfoFromSlot} from './consultQueue'

export function useCurrentSlot(startTime: string) {
  const [slot, setSlot] = useState(0)

  function update() {
    const _slot = getSlotFromTime(startTime, 5)

    setSlot(_slot)
  }

  useEffect(() => {
    update()

    const timer = setInterval(() => {
      const d = new Date()

      if (d.getSeconds() === 0) update()
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return slot
}

export function useMentorSlots(startTime: string): [number, string[]] {
  const slot = useCurrentSlot(startTime)

  const [mentors, setMentors] = useState<string[]>([])
  
  useEffect(() => {
    const data = getInfoFromSlot(slot)

    if (data) setMentors(data)
  }, [slot])

  return [slot, mentors]
}
import {useEffect, useState} from 'react'

import {pad} from './useCurrentTime'

import {getRemainingTimeInSlot, SLOT_DURATION_MIN} from './timeSlot'

export function useRemainingTimeInSlot(
  slotDuration: number = SLOT_DURATION_MIN,
): string {
  const [remaining, setRemaining] = useState('-')

  useEffect(() => {
    const timer = setInterval(() => {
      const [minute, second] = getRemainingTimeInSlot(slotDuration)

      setRemaining(minute + ':' + pad(second))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return remaining
}

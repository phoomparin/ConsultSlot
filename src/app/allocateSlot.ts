export function allocate(tracks: number, teams: number, maxSlots: number): number[][] {
	let counter = 1

	let slots = []

	while (slots.length < maxSlots) {
		let local = []

		for (let i = 0; i < tracks; i++) {
			if (counter > teams) counter = 1

			local.push(counter++)
		}

		slots.push(local)
	}

	return slots
}

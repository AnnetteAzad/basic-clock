import clock from 'clock'
import { me as appbit } from 'appbit'
import { today, primaryGoal } from 'user-activity'
import * as document from 'document'
import { days, months } from './utils'

clock.granularity = 'minutes'

if (appbit.permissions.granted('access_activity')) {
	console.log(`User's primary activity goal is ${primaryGoal}`)
}
const clockLabel = document.getElementById('clock-label')
const dayLabel = document.getElementById('todays-date')
let dailySteps = document.getElementById('todays-steps')

setInterval(() => {
	dailySteps.text = '' + today.adjusted.steps
}, 100)

clock.addEventListener('tick', () => {
	let today = new Date()
	let hours = today.getHours()
	let mins = today.getMinutes()
	let day = today.getDate()

	clockLabel.text = `${hours}:${mins < 10 ? '0' : ''}${mins}`
	dayLabel.text = `${days[today.getDay()]} ${months[today.getMonth()]} ${day}`
})

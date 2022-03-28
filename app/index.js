import clock from "clock"
import * as document from "document"

clock.granularity = "minutes"

const clockLabel = document.getElementById("clock-label")
const dayLabel = document.getElementById("todays-date")

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
]

clock.addEventListener("tick", () => {
	let today = new Date()
	let hours = today.getHours()
	let mins = today.getMinutes()
	let day = today.getDate()

	clockLabel.text = `${hours}:${mins < 10 ? "0" : ""}${mins}`
	dayLabel.text = `${days[today.getDay()]} ${months[today.getMonth()]} ${day}`
})

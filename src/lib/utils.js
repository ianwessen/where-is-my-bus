import { AGENCY_ID, STOP_ID_MCBAKER_INBOUND, ROUTE_TAG } from './constants'

export const nextBusPrediction = (nextBusApiResponse) => {
	let prediction = null
	try {
		prediction = nextBusApiResponse.predictions.direction.prediction
	} catch {
		console.error(nextBusApiResponse)
		throw Error('Oof! No prediction object!')
	}
	return prediction
}

export const getPredictionUrl = () => {
	const root = `http://webservices.nextbus.com/service/publicJSONFeed`
	const command = `command=predictions&a=${AGENCY_ID}`
	const args = {
		stopId: STOP_ID_MCBAKER_INBOUND,
		routeTag: ROUTE_TAG,
	}
	const argsString = Object.entries(args).map(
		(entry) => `&${entry[0]}=${entry[1]}`
	)

	return `${root}?${command}${argsString.join('')}`
}

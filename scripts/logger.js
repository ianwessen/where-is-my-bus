const fs = require('fs');
const fetch = require('node-fetch');

let url = `http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=sf-muni&stopId=15385&routeTag=5`;

const logBusResponse = () => {
	const logger = fs.createWriteStream('responses.text', { flags: 'a' });

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log('data', data);
			logger.write(`\n ${new Date().toLocaleString()}\n`);
			logger.write(JSON.stringify(data));
			logger.write(`\n`);
		})
		.then(() => {
			setTimeout(() => {
				logBusResponse();
			}, 5 * 60 * 1000); // Once every two minutes
		});
};

logBusResponse();

const encodedParams = new URLSearchParams();

encodedParams.append("q", "Love is death!");
encodedParams.append("target", "pt");
encodedParams.append("source", "en");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'acf7e4aa3emsh6956a7a0444e672p136703jsn40b71faffc07',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
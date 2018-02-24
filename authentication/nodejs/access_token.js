var MP = require ("mercadopago");

var mp = new MP ("7272722303979733", "td7ESCGXlb7AckGZwUvACT07TSmy7Bpu");

mp.getAccessToken(function (err, accessToken){
	console.log (accessToken);
});

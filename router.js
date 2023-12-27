function route(pathname, handle, response, productId) {
	console.log("pathname: ", pathname); // pathname: /hello
	if (typeof handle[pathname] === "function") {
		handle[pathname](response, productId); // 함수니까 소괄호
	} else {
		// console.log("No request handler found for " + pathname);
		response.writeHead(404, { "Content-Type": "text/html" });
		response.write("Not Found"); // 한글 깨지넹
		response.end();
	}
}
exports.route = route;

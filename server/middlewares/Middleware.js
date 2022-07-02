module.exports = class Middleware {
	/**
	 * Run the request filter.
	 *
	 * @return mixed
	 */
	static handle(req, res, next) {
		next();
	}
};
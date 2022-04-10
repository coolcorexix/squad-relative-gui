export const safeRun = function (
	callback: Function | undefined,
	onError?: Function
): Function {
	return (...rest: Array<any>): any => {
		if (typeof callback === 'function') {
			try {
				return callback(...rest);
			} catch (e) {
				try {
					return safeRun(onError)(e);
				} catch (ee) {}
			}
		}
	};
};

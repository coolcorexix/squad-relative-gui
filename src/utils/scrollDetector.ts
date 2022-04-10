export type ScrollDetectorEvent = {
	lastX: number;
	lastY: number;
	offsetX: number;
	offsetY: number;
	vertical: 'up' | 'down';
	horizontal: 'left' | 'right';
};

export type IScrollDetector = {
	on(callback: Function): void;
	omit(callback: Function): void;
};

function createScrollDetector() {
	const callbackList: Array<Function> = [];
	let lastX: number = 0;
	let lastY: number = 0;

	const createEvent = (props: {
		lastX: number;
		lastY: number;
		offsetX: number;
		offsetY: number;
	}): ScrollDetectorEvent => {
		const horizontal = props.offsetX > props.lastX ? 'left' : 'right';
		const vertical = props.offsetY > props.lastY ? 'down' : 'up';
		return {
			lastX: props.lastX,
			lastY: props.lastY,
			offsetX: props.offsetX,
			offsetY: props.offsetY,
			vertical,
			horizontal,
		};
	};

	const emit = (event: ScrollDetectorEvent): void => {
		for (let i = 0; i < callbackList.length; i++) {
			if (callbackList[i]) {
				try {
					callbackList[i](event);
				} catch (e) {}
			}
		}
	};

	const handleScrollEvent = (): void => {
		requestAnimationFrame(() => {
			const offsetX: number = window.pageXOffset;
			const offsetY: number = window.pageYOffset;
			if (offsetX !== lastX || offsetY !== lastY) {
				const event: ScrollDetectorEvent = createEvent({
					lastX,
					lastY,
					offsetX,
					offsetY,
				});
				lastX = offsetX;
				lastY = offsetY;
				emit(event);
			}
		});
	};

	const register = (): void => {
		window.addEventListener('scroll', handleScrollEvent);
	};

	const destroy = (): void => {
		window.removeEventListener('scroll', handleScrollEvent);
	};

	const on = (callback: Function): void => {
		if (callback == null) return;
		if (!callbackList.length) {
			register();
		}
		callbackList.push(callback);
	};

	const omit = (callback: Function): void => {
		if (callback == null) return;
		for (let i = 0; i < callbackList.length; i++) {
			if (callback === callbackList[i]) {
				callbackList.splice(i, 1);
				break;
			}
		}
		if (!callbackList.length) {
			destroy();
		}
	};

	return {
		on,
		omit,
	};
}

const ScrollDetector = createScrollDetector();
export default ScrollDetector;

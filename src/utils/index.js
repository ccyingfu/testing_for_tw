class MessageList {
	constructor() {
		this.events = {};
	}
	$emit(name, args) {
		let hasName = this.events[name];
		if (hasName) {
			this.events[name].forEach((fn) => {
				// fn(...args);
				fn(args);
			});
		}
	}
	$on(name, fn) {
		let hasName = this.events[name]
		if (hasName) {
			this.events[name].push(fn);
		} else {
			this.events[name] = [fn];
		}
	}
}

export default MessageList;
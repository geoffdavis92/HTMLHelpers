// @flow
// HTMLNode

import State from "classes/state";
import regex from "helpers/regex";
import { and, gteZero, nonEmptyString } from "helpers/comparison";

export default class HTMLNode extends State {
	__findChildren: Function;
	__name: string;
	__selectByBestMethod: Function;
	children: Function;
	element: Function;
	listen: Function;
	node: Object | boolean | null;
	constructor() {
		super();
		this.__name = "HTMLNode";
		this.__findChildren = this.__findChildren.bind(this);
		this.__selectByBestMethod = this.__selectByBestMethod.bind(this);
		this.node = false;
	}
	__selectByBestMethod(selector: ?string = ""): Object | boolean | null {
		this.__selectByBestMethod = () => false;
		if (selector && selector !== "") {
			if (gteZero(selector.search(/^\#/g))) {
				return (this.node = document.getElementById(selector.replace(/^\#/, ""))
					? document.getElementById(selector.replace(/^\#/, ""))
					: false);
			} else {
				return (this.node = document.querySelector(selector)
					? document.querySelector(selector)
					: false);
			}
		} else {
			throw "Uncaught TypeError: Failed to execute '__selectByBestMethod': valid selector argument required, but none present.";
		}
	}
	__findChildren(selector: string | RegExp): Array<HTMLElement | Object> {
		if (this.node && this.node.hasChildNodes()) {
			const theChildren = [];
			const directChildren = Array.from(this.node.children);
			if (and(selector, nonEmptyString(selector))) {
				switch (typeof selector) {
					case "object": {
						return this.node.innerHTML.match(selector).map(el => {
							const id = el.match(regex.id)[1];
							return document.getElementById(id);
						});
						// flow-ignore
						break;
					}
					default: {
						console.error("selector type not supported.");
						// flow-ignore
						break;
					}
				}
			} else {
				return directChildren;
			}
		}
		return [];
	}
	children(prop: ?string): Array<HTMLElement | Object> {
		try {
			return prop ? this.node.children[prop] : this.node.children;
		} catch (e) {
			throw e;
		}
	}
	element(prop: ?string): HTMLElement | Object | null {
		try {
			return prop ? this.node[prop] : this.node;
		} catch (e) {
			throw e;
		}
	}
	listen(eventListener: string, eventHandler: Function): Function {
		return this.node.addEventListener(eventListener, eventHandler);
	}
}

// @flow
// Elements

import HTMLNode from "classes/HTMLNode";
import regex from "helpers/regex";

class Form extends HTMLNode {
	__name: string;
	inputs: Function;
	required: Function;
	constructor(selector: string) {
		super();
		this.__name = "Form";
		this.__selectByBestMethod(selector);
		this.inputs = this.inputs.bind(this);
		this.required = this.required.bind(this);
	}
	inputs(): Array<HTMLElement | Object> {
		return this.__findChildren(regex.inputs);
	}
	required(): Array<HTMLElement | Object> {
		return this.inputs().filter(input => input.required);
	}
}

export default { Form };

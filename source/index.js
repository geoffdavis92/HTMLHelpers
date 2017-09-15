// @flow
// Index

import Classes from "classes/";

const { Elements, HTMLNode } = Classes;

window.Elements = Elements;
window.HTMLNode = HTMLNode;

window.f = new Elements.Form("form");
window.h = new HTMLNode();

export { Classes };

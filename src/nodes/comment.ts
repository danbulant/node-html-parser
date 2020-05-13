import Node from './node.ts';
import NodeType from './type.ts';

export default class CommentNode extends Node {
	constructor(value: string) {
		super();
		this.rawText = value;
	}

	/**
	 * Node Type declaration.
	 * @type {Number}
	 */
	nodeType = NodeType.COMMENT_NODE;

	/**
	 * Get unescaped text value of current node and its children.
	 * @return {string} text content
	 */
	get text() {
		return this.rawText;
	}

	toString() {
		return `<!--${this.rawText}-->`;
	}
}

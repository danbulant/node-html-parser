import NodeType from './type.ts';

/**
 * Node Class as base class for TextNode and HTMLElement.
 */
export default abstract class Node {
	nodeType: NodeType | null = null;
	childNodes = [] as Node[];
	// @ts-ignore
	text: string;
	// @ts-ignore
	rawText: string;
	abstract toString(): string;
}

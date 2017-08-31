import { ZalgoLink } from "./link";
export class ZalgoLinkContainer {
	
	public title : string = "";
	public links : ZalgoLink[];

	constructor(title: string, links: ZalgoLink[]) {
		this.title = title;
		this.links = links;
	}
}
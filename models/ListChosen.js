import ChoseItem from "./ChoseItem.js";

export default class ListChosen extends ChoseItem {
    constructor(tabName, showName, type) {
        this.tabName = tabName;
        this.showName = showName;
        super(type);
    }
}
import { TextStyle } from "./textstyle.model";

export class Title {
    show: boolean
    text: string;
    subtext: string;
    link: string;
    sublink: string;
    textAlign: string;
    left: string;
    top: string;
    right: string;
    bottom: string;
    backgroundColor: string;
    borderColor: string;
    textStyle: TextStyle;
    subtextStyle: TextStyle;
    constructor(options?: Title) {
        this.show = true;
        this.text = options?.text || '';
        this.link = options?.link || ''
        this.subtext = options?.subtext || ''
        this.sublink = options?.sublink || ''
        this.textAlign = options?.textAlign || 'center'
        this.left = options?.left || 'auto'
        this.top = options?.top || 'auto'
        this.right = 'auto'
        this.bottom = 'auto'
        this.backgroundColor = options?.backgroundColor || 'transparent'
        this.borderColor = options?.borderColor || '#ccc'
        this.textStyle = options?.textStyle || new TextStyle()
        this.subtextStyle = options?.subtextStyle || new TextStyle()
    }
}

export class Legend {
    type: string;
    show: string;
    left: string;
    right: string;
    top: string;
    bottom: string;
    icon: string;
    backgroundColor: string;
    borderColor: string;
    trigger: string;
    orient: string;
    constructor(option?: Legend) {
        this.type = option?.type || 'plain'
        this.show = 'false' || 'true'
        this.left = option?.left || 'auto'
        this.right = option?.right || 'auto'
        this.top = option?.top || 'auto'
        this.bottom = option?.bottom || 'auto'
        this.icon = option?.icon || 'circle'
        this.backgroundColor = option?.backgroundColor || 'transparent'
        this.borderColor = option?.borderColor || '#ccc'
        this.trigger = option?.trigger || 'item'
        this.orient = option?.orient || 'verticle'
    }
}

export class Tooltip {
    show: boolean
    showContent: boolean
    enterable: boolean
    renderMode: string
    className: string
    valueFormatter: any
    backgroundColor: string
    borderColor: string
    borderWidth: number
    textStyle: any
    extraCssText: string
    constructor(option?: Tooltip) {
        this.show = option?.show || true
        this.showContent = option?.showContent || true
        this.enterable = option?.enterable || true
        this.renderMode = option?.renderMode || 'html'//richText,
        // this.className = option?.className || ''
        //this.valueFormatter = option?.valueFormatter || {}
        this.backgroundColor = option?.backgroundColor || '#cccc'
        this.borderColor = option?.borderColor || '#333'
        this.borderWidth = option?.borderWidth || 0
        this.textStyle = option?.textStyle || {}
        this.extraCssText = option?.extraCssText || ''
    }
} 
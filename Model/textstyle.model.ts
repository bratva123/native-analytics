export class TextStyle {
    color: string
    fontStyle: string
    fontWeight: string
    fontFamily: string
    fontSize: number
    emphasis: {}
    constructor(option?: TextStyle) {
        this.color = option?.color || '#333'
        this.fontStyle = option?.fontStyle || 'normal'
        this.fontWeight = option?.fontWeight || 'bolder'
        this.fontFamily = option?.fontFamily || 'sans-serif'
        this.fontSize = option?.fontSize || 18
        this.emphasis = {}
    }
}

export class xAxis {
    show: boolean;
    position: string;
    name: string;
    inverse: string;
    constructor(option: xAxis) {
        this.show = option?.show || true
        this.position = option?.position || 'bottom'
        this.name = option?.name || ''
        this.inverse = option?.inverse || ''
    }
} 
export default class PieSeries {
    name: string;
    radius: any;
    center: any;
    label: any;
    labelLine: any;
    itemStyle: any;
    emphasis: any;
    animationType: any;
    animationEasing: any;
    animationDelay: any;
    data: any;
    type: any;
    constructor(options?: PieSeries) {
        this.name = options?.name || 'Pie Chart';
        this.radius = options?.radius || '55%';
        this.center = options?.center || ['50%', '60%'];
        this.label = options?.label || {};
        this.labelLine = options?.labelLine || {};
        this.itemStyle = options?.itemStyle || {};
        this.emphasis = options?.emphasis || {};
        this.animationType = options?.animationType || 'scale';
        this.animationEasing = options?.animationEasing || 'cubicOut';
        this.data = options?.data || []
        this.type = 'pie'
        this.animationDelay = options?.animationDelay || function (idx) {
            return idx * 50;
        };
    }
}

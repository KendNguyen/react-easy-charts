import React, { PureComponent } from 'react';
import echarts, { ECharts } from 'echarts';

interface CoreChart {
    chart: ECharts
    option: object;
    className: string;
}

type PropsCoreChart = CoreChart;

class EasyChartCore extends PureComponent<PropsCoreChart> {
    private readonly coreChart: React.RefObject<HTMLInputElement>;
    echartsLib: object;

    constructor(props: PropsCoreChart) {
        super(props);
        this.echartsLib = echarts;
    }

    render() {
        return (
            <div className={'easy-chart-core'}>
                <div ref={this.coreChart} />
            </div>
        );
    }
}

export default EasyChartCore;

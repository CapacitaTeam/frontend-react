import React,{useRef,forwardRef, useImperativeHandle} from 'react';
// highcharts
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HC_exporting from 'highcharts/modules/exporting';
// antd
import Button from 'antd/lib/button';
import Spin from 'antd/lib/spin';

HC_exporting(Highcharts);

const ChartCustom = (props, ref) => {

    const chartRef = useRef();

    useImperativeHandle(ref, () => ({
        ...chartRef.current
    }));
    
    const {
        chartOptions,
        constructorType,
        allowChartUpdate,
        immutable,
        updateArgs,
        containerProps,
        callback,  
        canExport,
        loading
    } = props;

    const propsHighchart = {
        options: chartOptions,
        highcharts: Highcharts,
        constructorType: constructorType ? constructorType :'chart',
        allowChartUpdate: allowChartUpdate ? allowChartUpdate : true,
        immutable: immutable ? immutable: false,
        updateArgs: updateArgs ? updateArgs : [true, true, true],
        containerProps: containerProps ? containerProps : { className: 'chartContainer' },
        callback: callback ? callback : null
    };

    const propsButtonExport = {
        type:'default',
        icon: 'download',
        onClick: () => chartRef.current.chart.exportChart()
    }

    const propsSpin = {
        size: "large",
        spinning: (loading) ? loading : false
    }

    return (
        <div>
            {(canExport)?<Button {...propsButtonExport}/>:null}
            <Spin {...propsSpin}>
                <HighchartsReact {...propsHighchart} ref={chartRef}/>
            </Spin>
        </div>
    );
};

export default forwardRef(ChartCustom);
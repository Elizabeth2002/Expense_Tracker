import './Chart.css'
import ChartBar from './ChartBar';

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxValue = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => {
                return <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={maxValue} />
            })}
        </div>
    );
}

export default Chart;
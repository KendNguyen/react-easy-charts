import React, { FunctionComponent, useRef } from 'react'

interface OwnProps {
    chart: object;
    option: object;
    className: string;
}

type Props = OwnProps

const EasyChartCore: FunctionComponent<Props> = (props) => {
    const echartsElement = useRef(null)
    return (
        <div
            ref={echartsElement}
            className={`echarts-for-react ${props.className}`}
        />
    )
}

export default EasyChartCore

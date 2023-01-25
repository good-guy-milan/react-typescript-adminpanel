import React from 'react'
import {PieChart} from "react-minimal-pie-chart"
import style from './style.module.scss'

type Props = {
  data: {
    title: string
    value: number
    color: string
  }[]
  lineWidth?: number
}

export default ({data, lineWidth}: Props) =>
  <div className={style.chartWrap}>
    <div className={style.chartHalf}>
      <div className={style.radial}>
        <PieChart className={style.chart} data={data} lineWidth={lineWidth} startAngle={-90} />
      </div>
    </div>
    <div className={style.info}>
      {data.map(({title, value, color}, i) =>
        <div key={i} className={style.item}>
          <div className={style.circleWrap}>
            <div className={style.circle} style={{borderColor: color}}/>
          </div>
          <div className={style.itemMain}>
            <div className={style.value} style={{color}}>{value}%</div>
            <div className={style.title}>{title}</div>
            <div className={style.progress}>
              <div className={style.filled} style={{backgroundColor: color, width: `${value}%`}}/>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>

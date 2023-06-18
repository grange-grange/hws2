import React, {useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */
export type ChangeValueType = number | number[]

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))


    const change = (event: Event, value: ChangeValueType, activeThumb: number) => {
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
        const minDistance = 1;
        if (Array.isArray(value)) {
            if (activeThumb === 0) {
                setValue1(Math.min(value[0], value[1] - minDistance))
                setValue2(value[1])
            } else {
                setValue1(value[0])
                setValue2(Math.max(value[1], value[0] + minDistance))
            }
        } else {
            if (activeThumb === 0) {
                setValue1(Math.min(value, value2 - minDistance))
            }
        }
    }

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            // сделать так чтоб value1 изменялось // пишет студент
                            change={change}
                            value1={value1}
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            // сделать так чтоб value1/2 изменялось // пишет студент
                            change={change}
                            value1={value1}
                            value2={value2}
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11

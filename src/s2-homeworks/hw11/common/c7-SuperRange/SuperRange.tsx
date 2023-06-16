import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import {ChangeValueType} from "../../HW11";

type SuperRangeType = SliderProps & {
    change: (event: Event, value: ChangeValueType, activeThumb: number) => void
    value1: number
    value2?: number
}
const SuperRange: React.FC<SuperRangeType> = (props) => {

    return (
        <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={props.value2 ? [props.value1, props.value2] : props.value1}
            onChange={props.change}
            valueLabelDisplay="auto"
            disableSwap
            sx={{ // стили для слайдера // пишет студент
                width: 147,
                color: '#00CC22',
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                },
                '& .MuiSlider-thumb': {
                    color: '#fff',
                    border: 1,
                    borderColor: '#00CC22'
                },
                '& .MuiSlider-thumb:after': {
                    width: 6,
                    height: 6,
                    background: '#00CC22'
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

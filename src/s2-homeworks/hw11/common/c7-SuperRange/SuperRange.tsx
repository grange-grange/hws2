import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {

    return (
        <Slider
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

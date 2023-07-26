import React from 'react'
import IMAGES from '../../images'
import Story from '../Story/Story'

function Stories() {
    const stories = [
        {
            id: '1',
            img: IMAGES.cover1,
            name: 'annie__27'
        },
        {
            id: '2',
            img: IMAGES.cover2,
            name: 'arm12_'
        },
        {
            id: '3',
            img: IMAGES.cover3,
            name: '_syouu)'
        },
        {
            id: '4',
            img: IMAGES.cover4,
            name: 'music_'
        },
        {
            id: '5',
            img: IMAGES.cover5,
            name: 'horseriding_1001'
        },
        {
            id: '6',
            img: IMAGES.cover6,
            name: '_clara_25'
        },
    ]
  return (
    <div className="status-wrapper">
        {
            stories.map(el => <Story key={el.id} img={el.img} name={el.name} />)
        }
    </div>
  )
}

export default Stories
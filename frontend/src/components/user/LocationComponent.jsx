import React from 'react'
import { MapPin } from 'lucide-react'

const LocationComponent = (props) => {
    return (
        <div className='flex gap-3 items-center my-5 border-2 p-2 rounded-xl shadow-md border-gray-100 active:border-black ' onClick={() => {
            props.setvehiclePanel(true)
            props.setpanelOpen(false)
        }}>
            <h2><MapPin className='size-8'/></h2>
            <h2 className='font-medium text-lg'>{props.item.name}</h2>
        </div>
    )
}

export default LocationComponent
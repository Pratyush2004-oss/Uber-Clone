import React from 'react'
import LocationComponent from './LocationComponent'


const location = [{
    name: "24B, Near Kapoor's cape, Chandigarh, India",
    id: 1
},
{
    name: "24B, Near Kapoor's cape, Chandigarh, India",
    id: 2
},
{
    name: "24B, Near Kapoor's cape, Chandigarh, India",
    id: 3
},
{
    name: "24B, Near Kapoor's cape, Chandigarh, India",
    id: 4
},
{
    name: "24B, Near Kapoor's cape, Chandigarh, India",
    id: 5
}
]
const LocationSearchPanel = (props) => {
    return (
        <div>
            {
                location.map((item) => {
                    return (
                        <LocationComponent key={item.id} item={item} setvehiclePanel={props.setvehiclePanel} setpanelOpen={props.setpanelOpen}/>
                    )
                })
            }
        </div>
    )
}

export default LocationSearchPanel
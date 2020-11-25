import React from 'react'

export default function Planets({ data }) {
    return (
        <div class="container">
            <div class="row">
                {data.map(planets => {
                    return (
                        <div class="col-6 col-sm-3 block">
                            <h3>{planets.name}</h3>
                            <div>Rotation Period:  <span>{planets.rotation_period}</span></div>
                            <div>Diameter:  <span>{planets.diameter}</span></div>
                            <div>Climate:  <span>{planets.climate}</span></div>
                            <div>Population:  <span>{planets.population}</span></div>
                            <div>Residents:  <span>{planets.residents}</span></div>
                        </div>
                    )
                }
                )}
            </div>
        </div >
    )
}
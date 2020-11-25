import React from 'react'


export default function People({ data }) {
  return (
    <div className="container">
      {data.map(people => {
        return (
          <div className="col-6 col-sm-3 block">
            <h3>{people.name}</h3>
            <div>Height:  <span>{people.height}</span></div>
            <div>Mass:  <span>{people.mass}</span></div>
            <div>Birth Year:  <span>{people.birth_year}</span></div>
            <div>Gender:  <span>{people.gender}</span></div>
            <div>Homeworld:  <span>{people.homeworld} </span></div>
            <p>{people.films}</p>
          </div>
        )
      }
      )}
    </div >
  )
}

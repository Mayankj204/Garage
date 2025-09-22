import React, { useState } from 'react'
import cars from './data'
import './cars'

const Garage = () => {

    const [carsList, setCarsList] = React.useState(cars);

    const filterbyCategory = (category) => {
        setCarsList(cars.filter((data) => data.category == category))
    }
    return (<>

        <div className='buttons'>
            <button onClick={()=>setCarsList(cars)} type="button" class="btn btn-outline-info">ALL</button>
            <button onClick={() => filterbyCategory("Supercar")} type="button" className="btn btn-outline-primary">Supercar</button>
            <button onClick={() => filterbyCategory("SUV")} type="button" className="btn btn-outline-secondary">SUV</button>
            <button onClick={() => filterbyCategory("Convertible")} type="button" className="btn btn-outline-warning">Convertible</button>
            <button onClick={() => filterbyCategory("Sedan")} type="button" className="btn btn-outline-light">Sedan</button>
            <button onClick={() => filterbyCategory("Hatchback")} type="button" className="btn btn-outline-info">Hatchback</button>
        </div>
        <div className='Main-content'>
            {carsList.map((data) => (
                <div className='hover' key={data.id} >
                    <div  >
                        <div>
                            <img src={data.image} style={{ width: '300px', height: '200px', borderRadius: '15px', borderColor: 'darkgrey', borderStyle: 'solid', borderWidth: '1.5px' }} />
                            <div className='content' >
                                <span>  <h5>Car name :{data.name}</h5>
                                    <h6>Model No : {data.modelNo}</h6>
                                    <h6>Colour : {data.color}</h6>
                                    <h6>Category : {data.category}</h6></span>
                            </div>
                            <div className='price '>
                                <span>   <h3 className='price-box'>Price :{data.price} </h3>
                                </span> </div>
                        </div>
                    </div>               
                </div>
            ))}
        </div>
    </>
    )
}

export default Garage
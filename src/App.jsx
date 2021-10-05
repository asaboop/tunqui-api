import React, { useEffect, useState } from "react";
import axios from "axios"

import Tabla from "./Components/Tabla";

//https://www.chartjs.org/docs/latest/charts/bar.html

const App = () => {

    const [data, setData] = useState("")
    const [fetched, setFetched] = useState(false)

    useEffect(() => {
        const apiUrl = "https://api.covid19api.com/total/country/peru";

        axios.get(apiUrl).then((res) => {
            setData(res.data);
            setFetched(true)
            
        }).catch((e) => console.log(e))

    }, [])

    return (
        <div className="h-100 w-auto">
            {fetched ? 

                <Tabla covidCases={data} />

             : <h1>Cargando</h1>}
        </div>
    )
}

export default App;
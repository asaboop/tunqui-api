import React from "react";

import { Line } from "react-chartjs-2";

const Tabla = (props) => {
  const d = new Date();
  const dia = ("0" + d.getDate()).slice(-2);
  const mes = ("0" + (d.getMonth() + 1)).slice(-2);
  const año = d.getFullYear();

  //console.log(Object.keys(props.covidCases).length)

  //console.log(props.covidCases[620])

  const last30Data = [];
  const last30Date = [];
  const confirmed = [];
  const deaths = [];
  const recovered = [];
  const active = [];

  //limitar a 200 días
  for (let i = 0; i <= 200; i++) {
    last30Data.push(props.covidCases[420 + i]);
  }
  //sacar datos
  for (let i = 0; i <= 200; i++) {
    last30Date.push(last30Data[i].Date.slice(0, 10));
    confirmed.push(last30Data[i].Confirmed);
    deaths.push(last30Data[i].Deaths);
    recovered.push(last30Data[i].Recovered);
    active.push(last30Data[i].Active);
  }
  //

  const data = {
    labels: last30Date,
    datasets: [
      {
        label: "Confirmados",
        data: confirmed,
        fill: false,
        backgroundColor: "rgb(66, 191, 191)",
        borderColor: "rgba(66, 191, 191, 0.2)",
      },
      {
        label: "Muertes",
        data: deaths,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Recuperados",
        data: recovered,
        fill: false,
        backgroundColor: "rgb(191, 151, 66)",
        borderColor: "rgba(191, 151, 66, 0.2)",
      },
      {
        label: "Activos",
        data: active,
        fill: false,
        backgroundColor: "rgb(83, 191, 66)",
        borderColor: "rgba(83, 191, 66, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="container mb-4 mt-8 w-2/3 mx-auto border-2 border-gray-500 bg-white rounded-2xl overflow-hidden shadow-2xl ">
      <div className="header bg-gray-300 p-4">
        <h1 className="title text-xl font-semibold">
          Casos de covid a la fecha de {dia + "-" + mes + "-" + año}
        </h1>
      </div>
      <section className="w-2/3 mx-auto my-16">
        <Line data={data} options={options} />
      </section>
      <section>
        <table className="w-1/2 text-center mx-auto mb-8 border-2 border-gray-500">
          <thead>
            <tr className="bg-gray-300">
              <th>Fecha</th>
              <th>Confirmados</th>
              <th>Muertes</th>
              <th>Recuperados</th>
              <th>Activos</th>
            </tr>
          </thead>
          <tbody>
            {last30Data.slice(196).map((el, index) => {
              return (
                <tr className="hover:bg-gray-100" key={index}>
                  
                  <td className="py-2">{el.Date.slice(0, 10)}</td>
                  <td>{new Intl.NumberFormat().format(el.Confirmed)}</td>
                  <td>{new Intl.NumberFormat().format(el.Deaths)}</td>
                  <td>{new Intl.NumberFormat().format(el.Recovered)}</td>
                  <td>{new Intl.NumberFormat().format(el.Active)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Tabla;

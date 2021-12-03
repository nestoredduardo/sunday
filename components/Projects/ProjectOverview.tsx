import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

const ProjectOverview = () => {
  Chart.register(ArcElement)
  Chart.register(ChartDataLabels)

  const data = {
    options: {
      plugins: {
        datalabels: {
          backgroundColor: '#FFFF',
          'font.weight': 'bold',
        },
      },
    },
    labels: ['Hecho', 'En cola'],
    datasets: [
      {
        label: 'Avance del proyecto',
        data: [20, 10],
        backgroundColor: ['#cb5eee', '#0cd7e4'],
        hoverOffset: 4,
      },
    ],
  }

  return (
    <section>
      <h2 className="font-bold text-lg">Objetivo:</h2>
      <p className="leading-5">
        Simplificar el proceso de compartir cuentas de la manera manera más
        segura y cómoda posible permitiéndoles a los usuarios ahorrar en sus
        gastos de suscripciones.
      </p>
      <div className="w-2/3 mx-auto my-4">
        <Doughnut data={data} />
      </div>
    </section>
  )
}

export default ProjectOverview

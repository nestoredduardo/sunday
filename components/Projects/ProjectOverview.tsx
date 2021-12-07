import { useSelector } from 'react-redux'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'

import { selectSelectedProject } from '@utils/ProjectsSelectors'

const ProjectOverview = () => {
  const selectedProject = useSelector(selectSelectedProject)

  Chart.register(ArcElement)
  //Chart.register(ChartDataLabels)

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
        data: [
          selectedProject['task'].length,
          selectedProject['columns'][0]['taskIds'].length,
        ],
        backgroundColor: ['#cb5eee', '#0cd7e4'],
        hoverOffset: 4,
      },
    ],
  }

  return (
    <section>
      <h2 className="font-bold text-lg">Objetivo:</h2>
      <p className="leading-5">{selectedProject['aim']}</p>
      <div className="w-2/3 mx-auto my-4">
        <Doughnut data={data} />
      </div>
      <p className="text-center">
        {`${selectedProject['columns'][0]['taskIds'].length}/${selectedProject['task'].length}`}{' '}
        Tareas Completadas
      </p>
    </section>
  )
}

export default ProjectOverview

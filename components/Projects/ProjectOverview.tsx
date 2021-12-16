import { useSelector } from 'react-redux'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip } from 'chart.js'

import { selectSelectedProject } from '@utils/ProjectsSelectors'

const ProjectOverview = () => {
  const selectedProject = useSelector(selectSelectedProject)

  Chart.register(ArcElement, Tooltip)
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
    labels: ['Done', 'Backlog'],
    datasets: [
      {
        label: 'Avance del proyecto',
        data: [
          selectedProject.columns[2].taskIds.length,
          selectedProject.taskList.length -
            selectedProject.columns[2].taskIds.length,
        ],
        backgroundColor: ['#cb5eee', '#0cd7e4'],
        hoverOffset: 4,
      },
    ],
  }

  return (
    <section className="flex flex-col md:flex-row-reverse">
      <article className="md:w-1/2 md:items-center">
        <h2 className="font-bold text-lg">Objetivo:</h2>
        <p className="leading-5">{selectedProject['aim']}</p>
      </article>
      <article className="md:w-1/2 md:flex md:flex-col md:items-center">
        <div className="w-2/3 mx-auto my-4">
          <Doughnut data={data} />
        </div>
        <p className="text-center">
          {`${selectedProject.columns[2].taskIds.length}/${selectedProject.taskList.length}`}{' '}
          Tareas Completadas
        </p>
      </article>
    </section>
  )
}

export default ProjectOverview

import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import type { RootState } from '@store'

import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useEffect, useState } from 'react'

const ProjectOverview = () => {
  const selectSelectedProject = createSelector(
    (state: RootState) => state.projects,
    (projects) =>
      Object.fromEntries(
        Object.entries(projects).filter(([k, v]) => projects[k]['isSelected'])
      )
  )
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
        data: [20, 10],
        backgroundColor: ['#cb5eee', '#0cd7e4'],
        hoverOffset: 4,
      },
    ],
  }

  return (
    <section>
      <h2 className="font-bold text-lg">Objetivo:</h2>
      <p className="leading-5">{selectedProject['name']}</p>
      <div className="w-2/3 mx-auto my-4">
        <Doughnut data={data} />
      </div>
      <p className="text-center">20/30 Tareas Completadas</p>
    </section>
  )
}

export default ProjectOverview

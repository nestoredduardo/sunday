import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'

import { addType } from '@projectActions'

const NewType = ({ addType }) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => addType(data.name, data.aim)

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <section
      className="z-20 bg-white p-10 rounded-xl"
      onClick={stopPropagation}
    >
      <h1 className="text-center font-bold text-2xl mb-2 bg-clip-text text-transparent bg-gradient-to-br from-[#FFCC33] to-[#E233FF]">
        Nuevo tipo de tarea
      </h1>
      <form action="submit" onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Nombre del proyecto
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Uber for cats"
              {...register('name', { required: true })}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Objetivo
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="Premium trips for cats"
              {...register('aim', { required: true })}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Crear proyecto
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

const mapDispatchToProps = {
  addType,
}

export default connect(null, mapDispatchToProps)(NewType)

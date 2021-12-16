import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'

import { addType } from '@projectActions'
import { hideModal } from '@modalActions'

const NewType = ({ addType, hideModal }) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    addType(data.name, data.color)
    hideModal()
  }

  const defaultTypes = [
    //default
    { id: 1, name: 'Design', color: 'pink' },
    { id: 2, name: 'Development', color: 'green' },
    { id: 3, name: 'Data', color: 'blue' },
    { id: 4, name: 'Planning', color: 'indigo' },
    { id: 5, name: 'Testing', color: 'purple' },
    { id: 6, name: 'Launch', color: 'yellow' },
    { id: 7, name: 'Marketing', color: 'red' },
  ]

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <section
      className="z-20 bg-white p-10 rounded-xl md:w-[450px]"
      onClick={stopPropagation}
    >
      <h1 className="text-center font-bold text-2xl mb-2 bg-clip-text text-transparent bg-gradient-to-br from-[#FFCC33] to-[#E233FF]">
        Nuevo tipo de tarea
      </h1>
      <form action="submit" onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Nombre
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="DevOps"
              {...register('name', { required: true })}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Estilo
            </label>
          </div>
          <div className="md:w-2/3 grid grid-cols-3 gap-2">
            {defaultTypes.map((type) => (
              <label
                htmlFor="color-pink"
                className="flex justify-center items-center gap-1"
                key={`color-${type.color}`}
              >
                <input
                  {...register('color', { required: true })}
                  type="radio"
                  name="color"
                  value={type.color}
                  id={`color-${type.color}`}
                  className="form-radio h-5 w-5 text-green-300"
                />
                <span
                  className={`flex items-center h-6 px-3 text-xs font-semibold rounded-full text-${type.color}-500 bg-${type.color}-100`}
                >
                  Design
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Crear tipo de tarea
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

const mapDispatchToProps = {
  addType,
  hideModal,
}

export default connect(null, mapDispatchToProps)(NewType)

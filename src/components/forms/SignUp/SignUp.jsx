import React from 'react'

function SignUp() {
  return (
    <form>
        <div className='grid grid-flow-row sm:grid-flow-col gap-3'>
                        <div className='sm:col-span-4 justify-center'>
                            <label className='block text-gray-700 font-bold text-sm wb-2' for='nya'>Nombres y apellidos</label>
                            <input className='shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline' id='nya' name='nya' type="text"  placeholder='Nombre y apellido' required />
                        </div>

                    </div>
    </form>
  )
}

export default SignUp
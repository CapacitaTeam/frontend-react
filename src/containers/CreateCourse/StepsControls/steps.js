import React from 'react'
import GeneralData from '../StepContent/General'
import Source from '../StepContent/Source'

const step = [
    {
        title:'Datos Generales',
        description:'Descripcion del curso',
        content: <GeneralData/>
    },
    {
        title:'Recursos',
        description:'Crear y subir videos',
        content: <Source/>
    },
    {
        title:'Requerimientos',
        description:'Agregar los requerimientos para tomar el curso',
        content: 'Requerimientos'
    },
    {
        title:'Resumen',
        content: 'Resumen'
    }
]

export default step;
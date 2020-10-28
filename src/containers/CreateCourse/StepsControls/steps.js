import React from 'react'
import GeneralData from '../StepContent/General'
import Source from '../StepContent/Source'
import Requirements from "../StepContent/Requirements";
import Resume from '../StepContent/Resume'
//test
import InputUpload from '../../../components/InputUpload'

const step = [
    /*{
        title:'Test',
        content: <InputUpload type="image" files={[
            {url:"https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"},
            {url:"https://64.media.tumblr.com/6907c5365f93adda93bcc402ba831c55/tumblr_nuqopyURlN1qk7o3wo1_1280.jpg"},
            {url:"https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-760x400.jpeg"}
            ]} preview={true}/>
    },*/
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
        content: <Requirements />
    },
    {
        title:'Resumen',
        content: <Resume />
    }
]

export default step;
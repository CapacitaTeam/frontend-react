import React, {useContext} from 'react'
// context
import CourseContext from '../../Context'

const Resume = _ => {

    const data = useContext(CourseContext)
    console.log(data);
    return "Resumen"
}

export default Resume
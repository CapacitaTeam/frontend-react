const typeTemplate = "'${label}' no es un ${type} valido";

export const validateMessages = {
    default: "Error en campo '${label}'",
    required: "'${label}' es requerido",
    whitespace: "'${label}' no puede ser vacio",
    date: {
        format: "'${label}' no es un formato valido",
        parse: "'${label}' no puede ser convertido al formato de fecha",
        invalid: "'${label}' no es una fecha valida",
    },
    types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
    },
    string:{
        len: "'${label}' debe tener exactamente ${len} caracteres",
        min: "'${label}' debe tener ${min} caracteres como minimo",
        max: "'${label}' debe tener ${max} caracteres como maximo",
        range: "'${label}' debe ser entre ${min} y ${max} caracteres"
    },
    number: {
        len: "'${label}' debe ser igual a ${len}",
        min: "'${label}' debe ser mayor a ${min}",
        max: "'${label}' debe ser menor a ${max}",
        range: "'${label}' debe ser entre ${min} y ${max}",
    },
    array: {
        len: "'${label}' debe tener exactamente ${len} de tamaño",
        min: "'${label}' debe ser mayor a ${min} de tamaño",
        max: "'${label}' debe ser menor a ${max} de tamaño",
        range: "'${label}' debe ser entre ${min} y ${max} de tamaño",
    },
    pattern: {
        mismatch: "'${label}' no cumple con el patron ${pattern}",
    }
}
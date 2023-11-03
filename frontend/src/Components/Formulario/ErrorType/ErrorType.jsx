const ErrorType = (errorType) => {
    switch (errorType) {
        case "required":
            return "Este campo es obligatorio";
        case "minLength":
            return "Demasiado corto, la longitud mínima es de 7 caracteres";
        case "maxLength":
            return "Demasiado largo, la longitud máxima es de 15 caracteres";
        default:
            return "Ocurrió un error";
    }
}

export default ErrorType
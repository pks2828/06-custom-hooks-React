import { ChangeEvent, useState } from "react";


export const useForm = <T extends object>( initialForm : T  ) => {

    const [ formState, setFormState ] = useState( initialForm )
    
    const onInputChange = ( {target}:ChangeEvent<HTMLInputElement> ):void => {
        const { name, value } = target

        setFormState({
            ...formState,
            [ name ]: value
        })

    }

    const onResetForm = ():void => {//Funcion hecha por mi  para resetear el formularios
        setFormState( initialForm )
    }

    return {//lo que queramos exponer al mundo
        ...formState, // extraemos de formState los campos del objeto que ocupemos
        formState, //  otra forma de extraer
        onInputChange,
        onResetForm


    }

}

// {} objeto
// [] array
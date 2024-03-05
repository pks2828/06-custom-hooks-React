import { useState } from "react"


export const useCounter = ( initialValue:number = 10 ) => {

    const [counter, setCounter] = useState( initialValue )

    const increment = ( value = 1 ):void => {

        setCounter( counter + value )


    }

    //TODO : Implement decrement functionality.

    const decrement = ( value = 1 ):void => {
        
        // if ( counter === 0 ) return;

        setCounter( counter - value )
        

    }


    //TODO  : Add a reset function to 

    const reset = ():void => {
        setCounter( initialValue )
    }


    return{
        counter,
        increment,
        decrement,
        reset

    }

}

//PARA CAMBIAR EL VALOR DEL COUNTER TENEMOS QUE LLAMAR AL SETCOUNTER
// EL ERROR OBJECT OBJCET ES CUANDO MANDAMOS UN OBJETO {} LITERAL Y AL CONVETIRSE EN .TOSTRING PASA ESTO, TIENES QUE HACER UNA FUNCION EN EL ONCLICK
// REFERENCIA VIDEO 119 CURSO REACT FERNANDO 7:40
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { calcularTotalPagar, formatearDinero, calcularArillo} from "./Helpers";
import { FaRedo } from 'react-icons/fa';


export const CPEApp = () => {
    const [cantidad, setCantidad] = useState("");
    console.log(cantidad);

    const [arillo, setArillo] = useState();
    const [total, setTotal] = useState();

    useEffect(() => {
        const resultadoTotalPagar = calcularTotalPagar(cantidad);
        setTotal(resultadoTotalPagar);
        const resultadoArillo = calcularArillo(cantidad);
        setArillo(resultadoArillo);
    }, [cantidad]);

    const MIN = 0;
    const MAX = 340;

    const handleCantidadChange = (e) => {
        setCantidad(e.target.value);
    };

    const handleCantidadFocus = () => {
        if (cantidad === "0") {
            setCantidad("");
        }
    };

    const handleDivideByTwo = () => {
        const parsedValue = parseInt(cantidad);
        const evenValue = parsedValue % 2 === 0 ? parsedValue : parsedValue - 1;
        const dividedValue = evenValue / 2;
        setCantidad(dividedValue.toString());
      };

    const handleDeleteInput = () => {
        setCantidad("0")
    }
      

    return (
        <>
            <div className="my-5 max-w-lg mx-auto rounded-3xl bg-red-500 shadow p-5 ">
                <Header />
                <div className="mt-5 flex items-center place-items-center ml-20 mx-auto">
                    <input
                        type="number"
                        className="w-[100px] h-20 bg-white text-4xl font-extrabold border-yellow-300 rounded-2xl p-2 text-indigo-600 text-center ml-20 mr-3"
                        onChange={handleCantidadChange}
                        onFocus={handleCantidadFocus}
                        min={MIN}
                        max={MAX}
                        value={cantidad}
                        placeholder="0"
                    />
                    <button
                    className="border-2 border-white text-white font-extrabold text-xl bg-red-500 hover:bg-white hover:text-red-500 py-2 px-4 rounded-xl place-items-center flex items-end"
                    onClick={handleDeleteInput}   
                    >
                    <FaRedo className="mr-2" />
                    
                    </button>
                </div>


                <div className="flex items-center justify-center mt-3">
                    <button 
                        className="border-2 border-white p-2 mt-3 text-white font-extrabold text-2xl bg-red-500 hover:bg-white hover:text-red-500 py-2 px-4 rounded-xl"
                        onClick={handleDivideByTwo}
                        >
                        * Doble Cara 
                    </button>
                </div>

                <div className="my-5 rounded-3xl space-y-4 bg-gray-50 p-5">
                    <h2 className="text-2xl font-extrabold text-center">
                        Numero de Arillo y Precio Total.
                    </h2>
                    <p className="text-4xl text-indigo-600 text-center font-bold"> N° de Arillo: <span className="text-red-600 font-extrabold">#{arillo}</span></p>
                    <p className="text-4xl text-indigo-600 text-center font-bold"> Total a Pagar: <span className="text-red-600 font-extrabold">{formatearDinero(total)}</span></p>
                </div>
                <div className="text-white mt-7">
                Creado por: Said Montalvo
                </div>
            </div>
        </>
    );
};

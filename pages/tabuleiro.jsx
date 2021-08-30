import 'tailwindcss/tailwind.css'
import LinhaTabuleiro from "../components/LinhaTabuleiro"

export default function tabuleiro(){

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-500">
            <LinhaTabuleiro linhas={8} colunas={8} />
        </div>
    )
}
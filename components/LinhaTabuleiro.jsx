import 'tailwindcss/tailwind.css'
//Componente que cria linha e coluna dinamicamente para o tabuleiro
export default function LinhaTabuleiro(props){
    let linhas = []
    let colunas = []
    for (let index = 1; index <= props.colunas; index++) {
        if ((index%2) == 0) {
            linhas.push(    
                <>    
            <div className={"bg-white" + " w-20 h-20"} ></div>
            </>
            )
        } else {
            linhas.push(    
                <>    
            <div className={"bg-black" + " w-20 h-20"} ></div>
            </>
            )
        }
}
    for (let index = 1; index <= props.linhas; index++) {
        if(index%2 == 0){
            colunas.push(
                <>
                <div className="flex flex-row-reverse">    
                    {linhas} 
                </div>
                </>
            )
        }else{
            colunas.push(
                <>
                <div className="flex flex">    
                    {linhas} 
                </div>
                </>
            ) 
        }
    }
    return (
        <>
        {colunas}
        </>
    )
}
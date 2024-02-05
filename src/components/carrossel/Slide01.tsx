
function Slide01() {
    return (
        <>
            <div id="container" className="bg-neutro_2 container-home 
            bg-orange-200 
            flex 
            justify-center
            min-h-[85vh]">
                <div id="subcontainer" className="
                container 
                grid 
                grid-cols-2 
                text-white">
                    <div id="texto" className="
                    flex 
                    flex-col 
                    gap-4 
                    items-center 
                    justify-center 
                    py-4">
                        <h2 className="text-5xl font-bold">Bem Vindo ao Projeto Segunda Chance!</h2>
                    </div>
                    <div id="imagem" className="
                    flex 
                    justify-center">
                        <img src="https://img1.picmix.com/output/stamp/normal/1/5/8/5/2445851_880d1.png"
                            alt="Grupo misto de pessoas reunidas com braços entrelaçados"
                            className="w-2/3 "
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide01
import "./Stats.css"

function Stats() {
    return (
        <>
            {/* <!-- Section: Design Block --> */}
            <section className="-mb-10 mt-10 m-auto text-center lg:text-left pt-20">
                {/* <!-- Jumbotron --> */}
                <div className="container mx-auto text-center lg:text-left xl:px-32">
                    <div className="grid items-center lg:grid-cols-2">
                        <div className="mb-12 lg:mb-0">
                            <div
                                className="statsfonte relative z-[1] block w-3/5 m-auto rounded-lg py-12 shadow-[0_4px_10px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#a3957567] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[15px]">
                                <h2 className="mb-6 text-4xl font-bold">Porque comprar na Segunda Chance?</h2>
                                <p className="mb-12 text-neutral-500 dark:text-neutral-300 text-justify">
                                    Ao comprar em nossa plataforma, você estará contribuindo com ONGs que precisam de recursos
                                    para continuarem lutando por suas causa, pois a mesma recebe 100% do valor do produto vendido. <br />
                                    Você estará ajudando pessoas a terem uma segunda chance!
                                </p>
                            </div>
                        </div>

                        <div className="divStatss">

                            <img src="https://ik.imagekit.io/ghc9vhgb1/ron-smith-63tBU8et1YY-unsplash.jpg?updatedAt=1710554144149"
                                className="fotoStats w-96 border fancy-border-radius shadow-lg dark:shadow-black/20" alt="Imagem de Esperança" />
                        </div>
                    </div>
                </div>
                {/* <!-- Jumbotron --> */}
            </section>
            {/* <!-- Section: Design Block --> */}
        </>
    )
}

export default Stats
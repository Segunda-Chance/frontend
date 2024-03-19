import './Features.css';

function Features() {
  return (
    <>
      {/* <!-- Container for demo purpose --> */}
      <div className="container my-24 mx-auto md:px-6 pt-20">
        {/* <!-- Section: Design Block --> */}
        <section className=" text-center containerFeature">
          

          <div className="  grid lg:grid-cols-3 lg:gap-x-12">
            <div className="mb-16 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="h-7 w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                    6.325
                  </h3>
                  <h5 className="mb-4 text-lg font-medium">Vendas </h5>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Vendas de produtos/serviços realizados através da plataforma Segunda
                    Chance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                    <img
                      src="https://ik.imagekit.io/wzl99vhez/Segunda%20Chance/SOLIDARIEDADE.png?updatedAt=1709703222331"
                      alt=""
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                    1.729
                  </h3>
                  <h5 className="mb-4 text-lg font-medium">Vidas Alcançadas </h5>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Entre pessoas reintegradas á sociedade e internadas por livre e
                    espontânea vontade em clínicas de recuperação.
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                    <img
                      src="https://ik.imagekit.io/wzl99vhez/Segunda%20Chance/icons8-organiza%C3%A7%C3%A3o-35.png?updatedAt=1709703324831"
                      alt=""
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                    26
                  </h3>
                  <h5 className="mb-4 text-lg font-medium">Ongs Parceiras</h5>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Organizações associadas ao projeto Segunda Chance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  <!-- Section: Design Block --> */}
      </div>
    </>
  );
}

export default Features;

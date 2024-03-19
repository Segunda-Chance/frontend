import "./Contato.css"



function Contato() {
    return (
        <>


<div className="container my-24 mx-auto md:px-6 timefonte">
  <section className="mb-32 text-center">
    <h2 className="mb-32 text-4xl font-extrabold">
    ---------- Time de Desenvolvimento ----------
    </h2>

    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div className="mb-24 md:mb-0">
        <div
          className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex justify-center">
            <div className="flex justify-center -mt-[75px]">
              <img src="https://ik.imagekit.io/wzl99vhez/Segunda%20Chance/dani.png?updatedAt=1706656214214"
                className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">Danielle Okuma</h5>
            <p className="mb-6">Desenvolvedor FullStack Jr | Eng. Eletrônica</p>
            <ul className="mx-auto flex list-inside justify-center">
             {/* <!-- GitHub --> */}
              <a href="https://github.com/DaniOkuma" className="px-2">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-4 w-4 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* <!-- Linkedin --> */}
              <a href="https://www.linkedin.com/in/danielle-okuma/" className="px-2"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-24 md:mb-0">
        <div
          className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex justify-center">
            <div className="flex justify-center -mt-[75px]">
              <img src="https://ik.imagekit.io/wzl99vhez/Segunda%20Chance/Douglas.png?updatedAt=1706471202324"
                className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">Douglas Rosolini</h5>
            <p className="mb-6">Desenvolvedor FullStack Jr</p>
            <ul className="mx-auto flex list-inside justify-center">
                {/* <!-- GitHub --> */}
              <a href="https://github.com/douglasrc8" className="px-2">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-4 w-4 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* <!-- Linkedin --> */}
              <a href="https://www.linkedin.com/in/douglas-rosolini-correia-614677239/" className="px-2"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>
      

      <div className="">
        <div
          className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex justify-center">
            <div className="flex justify-center -mt-[75px]">
              <img src="https://ik.imagekit.io/wzl99vhez/Segunda%20Chance/Luiz.png?updatedAt=1706471202569"
                className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">Luiz Eduardo</h5>
            <p className="mb-6">Desenvolvedor FullStack Jr</p>
            <ul className="mx-auto flex list-inside justify-center">
                {/* <!-- GitHub --> */}
              <a href="https://github.com/LuizEduardoSC" className="px-2">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-4 w-4 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* <!-- Linkedin --> */}
              <a href="https://www.linkedin.com/in/luiz-eduardosc/" className="px-2"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    
    
    <div className="grid mt-24 gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div className="mb-24 md:mb-0">
        <div
          className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex justify-center">
            <div className="flex justify-center -mt-[75px]">
              <img src="https://ik.imagekit.io/wzl99vhez/Segunda%20Chance/Maria.png?updatedAt=1706474187034"
                className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">Maria Leiliane</h5>
            <p className="mb-6">Desenvolvedor FullStack Jr</p>
            <ul className="mx-auto flex list-inside justify-center">
             {/* <!-- GitHub --> */}
              <a href="https://github.com/Marilyn-FullStack" className="px-2">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-4 w-4 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* <!-- Linkedin --> */}
              <a href="https://www.linkedin.com/in/mlls/" className="px-2"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-24 md:mb-0">
        <div
          className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex justify-center">
            <div className="flex justify-center -mt-[75px]">
              <img src="https://ik.imagekit.io/wzl99vhez/Segunda%20Chance/NatanLopes.png?updatedAt=1706471202706"
                className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">Natan Lopes</h5>
            <p className="mb-6">Desenvolvedor FullStack Jr</p>
            <ul className="mx-auto flex list-inside justify-center">
                {/* <!-- GitHub --> */}
              <a href="https://github.com/NathanLPS" className="px-2">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-4 w-4 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* <!-- Linkedin --> */}
              <a href="https://www.linkedin.com/in/nathan-lopes-da-silva-8b4962279/" className="px-2"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>
      

      <div className="">
        <div
          className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex justify-center">
            <div className="flex justify-center -mt-[75px]">
              <img src="https://ik.imagekit.io/ghc9vhgb1/20210601_191457-removebg-preview.png?updatedAt=1710552629786"
                className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px] h-[150px]" alt="Avatar" />
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">Samara Almeida</h5>
            <p className="mb-6">Desenvolvedor FullStack Jr</p>
            <ul className="mx-auto flex list-inside justify-center">
                {/* <!-- GitHub --> */}
              <a href="https://www.linkedin.com/in/samara-almeida-als/" className="px-2">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-4 w-4 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* <!-- Linkedin --> */}
              <a href="https://github.com/als-samara" className="px-2"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    
    
     <div className="grid justify-center mt-24 gap-x-6 md:grid-cols-3 lg:gap-x-12">

      <div className="grid">
        <div
          className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex justify-center">
            <div className="flex justify-center -mt-[75px]">
              <img src="https://ik.imagekit.io/wzl99vhez/Segunda%20Chance/Vinicius.png?updatedAt=1706471202692"
                className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">Vinicius Monteiro</h5>
            <p className="mb-6">Desenvolvedor FullStack Jr | Analista de Sistemas</p>
            <ul className="mx-auto flex list-inside justify-center">
                {/* <!-- GitHub --> */}
              <a href="https://github.com/mcs-vinicius" className="px-2">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-4 w-4 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* <!-- Linkedin --> */}
              <a href="https://www.linkedin.com/in/viniciusmcsilva/" className="px-2"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    
  </section>
</div>



        </>
    )
}


export default Contato
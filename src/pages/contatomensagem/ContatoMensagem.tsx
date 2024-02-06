

function ContatoMensagem() {

    return (

        <>
            <div>
                <h2 className="text-center text-4xl  p-14 ">Entre em contato conosco!</h2>
            </div>
            <form className="max-w-md mx-auto my-4">
                <div>
                    <label
                        htmlFor="base-input"
                        className="block mb-2 p-1 text-md font-medium text-gray-900 dark:text-white"
                    >
                        Nome Completo:
                    </label>
                    <input
                        type="text"
                        id="base-input"
                        className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg sm:text-xs  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    />
                </div>

                <div>
                    <label htmlFor="base-input" className="block mb-2 p-1 text-md font-medium text-gray-900 dark:text-white">Email:</label>
                    <input type="text" id="base-input" className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                </div>
<div>
                <label htmlFor="base-input" className="block mb-2 p-1 text-md font-medium text-gray-900 dark:text-white">Assunto:</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                    <option>Dúvida</option>
                    <option>Reclamação</option>
                    <option>Sugestão</option>
              
                </select>
                </div>           
            

                <div>
                    <label htmlFor="message" className="block mb-2 p-1 text-md font-medium text-gray-900 dark:text-white">Mensagem:</label>
                    <textarea id="message" className="block p-5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Deixe sua mensagem"></textarea>
                </div>

                <button
                    type="submit"
                    className=" w-full mx-auto my-4 focus:ring-4 focus:outline-none font-medium rounded-lg text-md px-10 py-2.5 text-center text-white  border-gray-300"
                >
                    Enviar
                </button>
            </form>
        </>
    );
}

export default ContatoMensagem;
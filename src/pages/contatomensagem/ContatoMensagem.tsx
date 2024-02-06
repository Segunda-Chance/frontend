

function ContatoMensagem() {

    return (

        <>
<h2 className="text-center text-lg">Entre em contato conosco!</h2>

            <form className="max-w-md mx-auto my-4">
                <div>
                    <label
                        htmlFor="base-input"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                    >
                        Nome Completo:
                    </label>
                    <input
                        type="text"
                        id="base-input"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="base-input" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email:</label>
                    <input type="text" id="base-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

                <div>
                    <label htmlFor="base-input" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Assunto:</label>
                    <input type="text" id="base-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

                <div>
                    <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Mensagem:</label>
                    <textarea id="message" className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Deixe sua mensagem"></textarea>
                </div>

                <button
                    type="submit"
                    className=" w-full mx-auto my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-10 py-2.5 text-center text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-gray-300"
                >
                    Enviar
                </button>
            </form>
        </>
    );
}

export default ContatoMensagem;
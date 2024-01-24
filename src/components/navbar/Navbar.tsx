import { Link } from "react-router-dom";

function Navbar() {


    return (
        <>
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4 flex-row'>

                <div className=" container-nav flex text-lg flex-col justify-center text-center">
                    <div>
                        
                    </div>
                    <div>
                        <Link to='/home' className='text-2xl font-bold uppercase'>Segunda Chance</Link>
                    </div>
                    <div className='flex gap-4'>
                        <Link to='/' className='hover:underline'>Login</Link>
                        <Link to='/home' className='hover:underline'>Home</Link>
                        <Link to='/contato' className='hover:underline'>Contato</Link>
                        <Link to='/sobre' className='hover:underline'>Sobre</Link>
                        <Link to='' /*onClick={''}*/ className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

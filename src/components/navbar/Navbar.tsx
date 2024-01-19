import { Link } from "react-router-dom";

function Navbar() {


    return (
        <>
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold uppercase'>Segunda Chance</Link>

                    <div className='flex gap-4'>
                        <Link to='/' className='hover:underline'>Login</Link>
                        <Link to='/home' className='hover:underline'>Home</Link>
                        <Link to='/contato' className='hover:underline'>Contato</Link>
                        <Link to='' /*onClick={''}*/ className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
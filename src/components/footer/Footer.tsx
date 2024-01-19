import { GithubLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';

function Footer() {

  return (
    <div className="flex justify-center bg-gradient-to-r from-violet-950 via-purple-400 to-blue-950 text-white">
      <div className="container flex flex-col items-center py-4">
        <p className='text-xl font-bold'>
          Ong Segunda Chance | &copy
        </p>

        <p className='text-lg'>Acesse nossas redes sociais</p>
        <div className='flex gap-2'>
          <a href='https://www.linkedin.com/in/mlls/' target="_blank" rel="noopener noreferrer">
            <LinkedinLogo size={48} weight='bold' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600' />
          </a>
          <a href='https://github.com/Marilyn-FullStack' target="_blank" rel="noopener noreferrer">
            <GithubLogo size={48} weight='bold' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600' />
          </a>
          <a href='https://wa.me/message/M26HMQRIVWBBP1' target="_blank" rel="noopener noreferrer">
            <WhatsappLogo size={48} weight='bold' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

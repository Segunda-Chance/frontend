import "./Organizacao.css"

function Organizacao() {
  return (
    <>
  <div className="orgStats flex justify-center py-10 text-5xl font-extrabold bg mt-20" >  
  ---------- ONGs Parceiras ----------
  </div>
      <div className="container my-24 mx-auto md:px-6 orgStats">
        <section className="mb-32">
          <div className=" container mx-auto text-center lg:text-left xl:px-32">
            <div className=" containerOrg grid items-center lg:grid-cols-2 lg:flex-row-reverse ">
              <div className="mb-12 lg:mb-0">
                <div
                  className="relative z-[1] block rounded-lg bg-[#000000] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[#a3957567] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 className="mb-8 text-3xl orgStats">Salvando Gente</h2>
                  <p className="mb-8 pb-2 text-black lg:pb-0">
                    A ONG Salvando Gente é uma organização dedicada a oferecer apoio e esperança a pessoas que lutam contra a dependência química. Nossa missão é proporcionar tratamento, educação e recursos para aqueles que buscam recuperação.
                  </p>

                  <ul className="mb-0 text-neutral-500 ">
                    Nossos Valores:

                    <li className="py-4">
                      - Compaixão e Compreensão: Acreditamos que a dependência é uma doença e merece empatia, não julgamento. Estamos aqui para ouvir e apoiar.
                    </li>
                    <li className="py-4">
                      - Tratamento Integral: Reconhecemos que a recuperação envolve aspectos físicos, emocionais e sociais. Oferecemos programas holísticos para abordar todas essas áreas.
                    </li>
                    <li className="py-4">
                      - Prevenção e Educação: Trabalhamos para conscientizar sobre os riscos das drogas e fornecemos informações sobre prevenção.
                    </li>
                    <li className="py-4">
                      Oferecemos sessões de aconselhamento para ajudar os usuários a entenderem suas lutas e desenvolverem estratégias para a recuperação.
                      Trabalhamos com clínicas de reabilitação para encaminhar os usuários para tratamento adequado. Após a reabilitação, auxiliamos na reintegração à sociedade.
                      Campanhas de Conscientização: Organizamos eventos para educar a comunidade sobre os perigos das drogas e combater o estigma.
                      Juntos, podemos oferecer esperança e transformar vidas!
                    </li>
                  </ul >
                </div>
              </div>

              <div>
                <img src="https://ik.imagekit.io/wlnfhvisq/frww2.png?updatedAt=1710122760242"
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20 drop-shadow-2xl" alt="image" />
              </div>
            </div>
          </div>
        </section>
      </div>
 
      <div className="container my-24 mx-auto md:px-6 orgStats">
        <section className="mb-32">
          <div className="container mx-auto text-center lg:text-left xl:px-32">
            <div className=" grid items-center lg:grid-cols-2">
              <div>
                <img src="https://ik.imagekit.io/wlnfhvisq/frww.png?updatedAt=1710122748249"
                   className="w-full rounded-lg shadow-lg dark:shadow-black/20 drop-shadow-2xl orgStats" alt="image" />
              </div>
              <div className="mb-12 lg:mb-0">
                <div
                  className="-left-5 relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[#a3957567] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 className="mb-8 text-3xl font-bold">Ajudando Vidas</h2>
                  <p className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
                    A ONG Ajudando Vidas é uma organização comprometida em oferecer apoio integral para pessoas usuárias de drogas que enfrentam situações de vulnerabilidade social. Nossa missão é proporcionar cuidado, dignidade e oportunidades de recuperação para aqueles que mais precisam.
                  </p>
                  <ul className="mb-0 text-neutral-500 dark:text-neutral-300">
                    Nossos Valores:
                    <li className="py-4">
                      - Compaixão e Solidariedade: Acreditamos que cada pessoa merece respeito e compreensão, independentemente de sua jornada com as drogas.
                      Estamos aqui para estender a mão e oferecer esperança.
                    </li>
                    <li className="py-4">
                      - Tratamento Holístico e Humanizado: Reconhecemos que a dependência química afeta não apenas o corpo, mas também a mente e o espírito. Oferecemos programas que abordam todas essas dimensões, promovendo a recuperação completa.
                    </li>
                    <li className="py-4">
                      - Inclusão e Empoderamento: Trabalhamos para reintegrar os usuários à sociedade, capacitando-os com habilidades e conhecimentos para construir um futuro melhor.
                    </li>
                    <li className="py-4">
                      Recebemos cada pessoa de braços abertos, oferecendo informações sobre tratamento, prevenção e recursos disponíveis.
                      Proporcionamos sessões de aconselhamento para ajudar os usuários a compreenderem suas lutas e desenvolverem estratégias para a recuperação.
                      Trabalhamos em parceria com clínicas de reabilitação, garantindo que os usuários recebam o tratamento adequado. Além disso, auxiliamos na busca por emprego e moradia.
                      Realizamos palestras e workshops em escolas e comunidades para conscientizar sobre os riscos das drogas e prevenir o uso precoce.
                      Juntos, podemos resgatar vidas, oferecer esperança e transformar destinos.
                    </li>
                  </ul >
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
     
    </>
  )
}

export default Organizacao
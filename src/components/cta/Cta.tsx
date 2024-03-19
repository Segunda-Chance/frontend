
import "./Cta.css"

function Cta() {
  return (
    <>
        <section className="grid1">
          <div className="img1"></div>
          <div className="img2"></div>
          <div className="img3"></div>
  
          <div className="cta-wrapper">
            <div className="cta">
              <h1>Segunda Chance</h1>
              <p>As ruas clamam por socorro...</p>
              <a className="button" href="/sobre">Saiba Mais →</a>
            </div>  
          </div> 
        </section>

        <div className="strapline -mb-14">
          <blockquote>
            “O projeto segunda chance tem como objetivo conectar e conscientizar pessoas comuns sobre 
            ações sociais e disponibilizar uma plataforma robusta e segura para que ONGs que se dedicam a cuidar 
            de dependentes químicos, pessoas em situação de rua, de prostituição e toda a população em 
            situação de vulnerabilidades social, tenham um espaço para anunciar seus produtos/serviços e conseguir 
            arrecadar valores para suas causas.”
          </blockquote>
        </div>
    </>
  )
}

export default Cta
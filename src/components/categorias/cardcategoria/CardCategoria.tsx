import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import "./CardCategoria.css"


interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
            <div className="card">   
                {/* Tipo da Categoria */}
                <div className="text">
                    <h3>TIPO</h3>
                     <span>{categoria.tipo}</span>
                </div>

                {/* Nome Categoria */}
                <div className="text">
                    <h3>CATEGORIA</h3>
                     <span>{categoria.nomeCategoria}</span>
                </div>    

                
                {/* Edit e Delete */}
                <div className="icons">
                {/*  Edit */}
                    <a className="btn" href="#">
                        <Link to={`/editarcategoria/${categoria.id}`}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABSUlEQVR4nOWUvUrEQBSFg8XqM/gEgmunbc4ZdostbPMkYmUhWKivs8IGm+wdjL5BGhHBRmX3BUQsIpOdlZD/bNKoAwPJZe757pybG8f598ufTLY1eamJFyGeNXkRed6gN3Ehfa0Yp7coXPckjlkiSCz0yD2ak6MVgG+5BCEespVkdlgkvgYIMBTg0L6/5gA14rGQd0WVCxGknhfJefKqFNDGFgGGNhakCvFNrDUg8ryBkDfW46V23YPEWmBPK76v8nErwE6hQBUg6ipeBYj6EC8DxOfO1o/nikvjuYkHSu2vG1rqeROAAMe9iJcCiKmdzNMqcTtDYSvA/Xi8qxW/hPg0wpo8SXpQUHmTTzx3SJNnNvZhIKmpnWVt2Qyg+JSaZHOTqemJaXxdbiOAkHMhHs1NjF1tcjc/9CsAusN2agBhF3Gxv/O/t74BXkrM/ryAiREAAAAASUVORK5CYII="/>
                        </Link>
                    </a>

                    {/* Delete */}

                    <a className="btn" href="#">
                    <Link to={`/deletarcategoria/${categoria.id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,255.99609,255.99609">
                            <g fill="#c04140" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" className="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M21,2c-1.64545,0 -3,1.35455 -3,3v2h-10c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h1v36c0,1.654 1.346,3 3,3h26c1.654,0 3,-1.346 3,-3v-36h1c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-10v-2c0,-1.64545 -1.35455,-3 -3,-3zM21,4h8c0.55455,0 1,0.44545 1,1v2h-10v-2c0,-0.55455 0.44545,-1 1,-1zM19,14c0.552,0 1,0.448 1,1v25c0,0.553 -0.448,1 -1,1c-0.552,0 -1,-0.447 -1,-1v-25c0,-0.552 0.448,-1 1,-1zM25,14c0.552,0 1,0.448 1,1v25c0,0.553 -0.448,1 -1,1c-0.552,0 -1,-0.447 -1,-1v-25c0,-0.552 0.448,-1 1,-1zM31,14c0.553,0 1,0.448 1,1v25c0,0.553 -0.447,1 -1,1c-0.553,0 -1,-0.447 -1,-1v-25c0,-0.552 0.447,-1 1,-1z"></path></g></g>
                        </svg>
                    </Link>
                    </a>
                </div>
            </div>
    )
}

export default CardCategoria
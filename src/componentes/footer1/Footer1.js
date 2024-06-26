
import './footer1.css';
import logo from '../../img/logo.JPG';


export default function Footer1(){

    return(
        <div className='footer1' >
            <div className="footer1_1">
                <div className='logo'>
                    <div className='cont_img'>
                        <img alt='logo' src={logo} />
                    </div>
                </div>
                <div className='info'>
                    <h3>Academia</h3>
                    <p>
                    Universidad Distrital Francisco José de Caldas<br/><br/>
                    Grupo de Investigación <br/>
                    Virtus
                    </p>
                </div>
                <div className='info'>
                    <h3>Terminos de uso</h3>
                    <p> Terminos y condiciones<br/>
                        Copyright<br/><br/>
                        Política de privacidad</p>
                </div>
            </div>
            {/* <hr/> */}
            <div className='footer1_2'>
                 <div className='copyright'>
                    <p>Copyright © 2022 grupo VIRTUS. Derechos reservados.</p>
                 </div>
                 <div className='about'>
                    <a href='http://grupovirtus.org/sitio/index.php'>
                        <p>Sobre nosotros</p>
                        <i className="fa-brands fa-github"></i>
                    </a>
                 </div>
            </div>
            <div className='footer1_responsive'>

                <div className='info'>
                    <h3>Academia</h3>
                    <p>
                    Universidad Distrital Francisco José de Caldas<br/><br/>
                    Grupo de Investigación <br/>
                    Virtus
                    </p>
                </div>
                
                <div className='info'>
                    <h3>Terminos de uso</h3>
                    <p> Terminos y condiciones<br/>
                        Copyright<br/><br/>
                        Política de privacidad</p>
                </div>

                <div className='about'>
                    <a href='http://grupovirtus.org/sitio/index.php'>
                        <p>Sobre nosotros</p>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>

                <div className='copyright'>
                    <p>Copyright © 2022 grupo VIRTUS. Derechos reservados.</p>
                </div>
        
            </div>
        </div>
    )
}
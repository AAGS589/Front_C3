import '../css/login.css';

export default function Login(props) {


    return (
        <div className="login" id="fondo">
            <div className="row">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card pt-5">
                        <div className="card-header">
                            <h1 className='title1'>Inicio de sesión</h1>
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">👤</span>
                                <input type="email" className="form-control" placeholder="Ingrese su nombre de usuario" aria-label="Username" aria-describedby="basic-addon2" />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">🔒</span>
                                <input type="password" className="form-control" placeholder="Ingrese su contraseña" aria-label="clave" aria-describedby="basic-addon2" />
                            </div>
                            <div class="d-grid gap-2">
                    
                                <button class="btn btn-primary" type="button">Iniciar sesión</button>
                                <div className="card-footer">
                                    <span>¿Olvido su contraseña?</span> <a href="#">Recuperar</a>
                                </div>
                                <div className="card-footer">
                                    <span>¿No se ha registrado?</span> <a href="#">Registrar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
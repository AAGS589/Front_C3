import '../css/login.css';

export default function Login(props) {
    const [password,setPassword] = useState('');
    const [userName,setUsername] = useState('');
    const [redirect,setRedirect]= useState(false);

    const [tokens,setTokens] = useState('');
    const [user,setUser] = useState('');
    const [pass,setPass] = useState(false)
    const [error,setError] = useState("")
    //http://localhost:8000/api/v1/login/

    const verPassword = () =>{
        if (pass == false){
            setPass(true)
        }else{
            setPass(false)
        }
        console.log(pass)
    }

    const login = async (e) => {
        let response = await fetch('http://localhost:8000/api/v2/Auth2/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username':userName, 'password':password}),
        })
        let data = await response.json()


        if (response.status === 200){
            setUser(data)
            setUserProfile(jwt_decode(data.access))
            localStorage.setItem('token', data.access);
            setRedirect(true)
            setUserLogin(true)
        }else{
            //alert('algo salió mal')
            setError("Usuario o contraseña, icorrectos")
            setTimeout(() => {
                setError("")
            }, 5000);
        }

    }

    return (
        <div className="login">
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
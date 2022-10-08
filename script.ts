

let Registered: object[] = []
let Choice: boolean = true


class User{
    #UserName: string
    #Password: string

    constructor(name: string, password: string){
        this.SetUsername(name)
        this.SetPassword(password)
    }

    SetUsername(name: string){
        this.#UserName = name
    }

    SetPassword(password: string){
        this.#Password = password
    }

    GetUsername(): string{
        return this.#UserName
    }

    GetPassword(): string{
        return this.#Password
    }
}


while(Choice){
    Menu()
}

function Menu(){
    let Quest = String(prompt("1 Cadastrar /// 2 Fazer Login /// 3 Esqueci Minha Senha /// 4 Finalizar Programa"))

    switch(Quest){
        case "1":
        RegisterUser()
        break;

        case "2":
        Login()
        break;

        case "3":
        ForgotPassword()
        break;

        case "4":
        Finish()
        break;

        default:
        alert("Opção inválida")
        break;
    }
}


function RegisterUser(){

    let username = String(prompt("Cadastre o seu Username"))
    if(ValidateUserName(username) == false){
        return
    }


    let password = String(prompt("Cadastre o seu Password"))
    if(ValidatePassword(password) == false){
        return
    }


    let NewUser = new User(username, password)
    Registered.push(NewUser)
}
function ValidateUserName(username:string): boolean{
    let Regex = username.replace(/[^a-z0-9]/gi,"")

    if(username.length < 4 || username.length > 25){
        alert("Nome Inválido")
        return false
    }

    if(username != Regex){
        alert("Nome Inválido")
        return false
    }
}
function ValidatePassword(password: string): boolean{
    if(password.length < 6 || password.length > 25){
        alert("Password Inválido")
        return false
    }
}


function Login(){
    let Error: boolean = true
    let Username = String(prompt("Digite seu Username"))
    let Password = String(prompt("Digite seu Password"))
    Registered.forEach(VerificatePassword)

    function VerificatePassword(item: object){
        if(item.GetUsername() == Username && item.GetPassword() == Password){
            Error = false
            return alert("Login efetuado com sucesso !")
        }
    }

    if(Error == true){
        return alert("Usuário Ou Senha inválidos")
    }
}


function ForgotPassword(){
    let Error: number = 0
    let Username = String(prompt("Digite o seu Usuário"))
    Registered.forEach(FindUser)

    function FindUser(item){
        if(item.GetUsername() == Username){
            let NewPassword = String(prompt("Digite seu novo Password"))
            ValidatePassword(NewPassword)
            item.SetPassword(NewPassword)
        }
    }

    if(Error > 0){
        return alert("Usuário Ou Senha inválidos")
    }
}


function Finish(): boolean{
    return Choice = false
}


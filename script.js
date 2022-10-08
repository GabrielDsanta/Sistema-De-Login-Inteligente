"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_UserName, _User_Password;
let Registered = [];
let Choice = true;
class User {
    constructor(name, password) {
        _User_UserName.set(this, void 0);
        _User_Password.set(this, void 0);
        this.SetUsername(name);
        this.SetPassword(password);
    }
    SetUsername(name) {
        __classPrivateFieldSet(this, _User_UserName, name, "f");
    }
    SetPassword(password) {
        __classPrivateFieldSet(this, _User_Password, password, "f");
    }
    GetUsername() {
        return __classPrivateFieldGet(this, _User_UserName, "f");
    }
    GetPassword() {
        return __classPrivateFieldGet(this, _User_Password, "f");
    }
}
_User_UserName = new WeakMap(), _User_Password = new WeakMap();
while (Choice) {
    Menu();
}
function Menu() {
    let Quest = String(prompt("1 Cadastrar /// 2 Fazer Login /// 3 Esqueci Minha Senha /// 4 Finalizar Programa"));
    switch (Quest) {
        case "1":
            RegisterUser();
            break;
        case "2":
            Login();
            break;
        case "3":
            ForgotPassword();
            break;
        case "4":
            Finish();
            break;
        default:
            alert("Opção inválida");
            break;
    }
}
function RegisterUser() {
    let username = String(prompt("Cadastre o seu Username"));
    if (ValidateUserName(username) == false) {
        return;
    }
    let password = String(prompt("Cadastre o seu Password"));
    if (ValidatePassword(password) == false) {
        return;
    }
    let NewUser = new User(username, password);
    Registered.push(NewUser);
}
function ValidateUserName(username) {
    let Regex = username.replace(/[^a-z0-9]/gi, "");
    if (username.length < 4 || username.length > 25) {
        alert("Nome Inválido");
        return false;
    }
    if (username != Regex) {
        alert("Nome Inválido");
        return false;
    }
}
function ValidatePassword(password) {
    if (password.length < 6 || password.length > 25) {
        alert("Password Inválido");
        return false;
    }
}
function Login() {
    let Error = true;
    let Username = String(prompt("Digite seu Username"));
    let Password = String(prompt("Digite seu Password"));
    Registered.forEach(VerificatePassword);
    function VerificatePassword(item) {
        if (item.GetUsername() == Username && item.GetPassword() == Password) {
            Error = false;
            return alert("Login efetuado com sucesso !");
        }
    }
    if (Error == true) {
        return alert("Usuário Ou Senha inválidos");
    }
}
function ForgotPassword() {
    let Error = 0;
    let Username = String(prompt("Digite o seu Usuário"));
    Registered.forEach(FindUser);
    function FindUser(item) {
        if (item.GetUsername() == Username) {
            let NewPassword = String(prompt("Digite seu novo Password"));
            ValidatePassword(NewPassword);
            item.SetPassword(NewPassword);
        }
    }
    if (Error > 0) {
        return alert("Usuário Ou Senha inválidos");
    }
}
function Finish() {
    return Choice = false;
}

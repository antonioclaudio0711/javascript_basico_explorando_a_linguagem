export class SistemaAutenticacao {
    constructor() { }

    static login(objetoAutenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(objetoAutenticavel)) {
            return objetoAutenticavel.autenticar(senha);
        } else {
            return false;
        }

    }

    static ehAutenticavel(objetoAutenticavel) {
        return "autenticar" in objetoAutenticavel && objetoAutenticavel.autenticar instanceof Function;
    }
}
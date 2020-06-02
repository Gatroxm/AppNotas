export class Usuario {
    constructor(
        public nombre: string,
        public email?: string,
        public role?: string,
        public password?: string,
        public _id?: string,
    ) {}
}
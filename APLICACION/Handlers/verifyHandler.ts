import { VerifyEntidad } from "../../MODELO/ModeloEntrada/VerifyEntidad";
import { VerifyModelo } from "../../MODELO/ModeloSalida/VerifyModelo";
import { VerifyRepositorio } from "../../SERVICIO/Repositorio/VerifyRepositorio";


export const VerifyGetHandler = async (email: string, password: string): Promise<VerifyModelo[]> => {
    const VerifyesSalida: VerifyModelo[] = [];
    const Verifyes = await new VerifyRepositorio().obtenerVerify(email, password);
    Verifyes.forEach((Verify: VerifyEntidad) => {
        const VerifySalida = new VerifyModelo();
        VerifySalida.Nombre = Verify.Nombre;
        VerifySalida.Apellido = Verify.Apellido;
        VerifySalida.Rol = Verify.Rol;
        VerifySalida.IdOrganizacion = Verify.IdOrganizacion;
        VerifySalida.Resultado = Verify.Resultado;
        VerifyesSalida.push(VerifySalida);
    });
    return VerifyesSalida;
}

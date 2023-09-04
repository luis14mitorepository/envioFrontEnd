import User from  './userDTO';
import Puerto from  './puertoDTO';
import Producto from  './productoDTO';


export default interface envioMaritimo{
        id_envio_maritimo?:number;
        cantidad_producto?: number;
        fecha_registro?: Date;
        fecha_entrega?: Date
        precio_envio?: number 
        numero_flota?: string;
        numero_guia?: string
        user?: User;
        puerto?:Puerto;
        producto_maritimo?: Producto;
}
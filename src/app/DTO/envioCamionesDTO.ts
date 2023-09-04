import User from  '../DTO/userDTO';
import Bodega from  '../DTO/bodegaDTO';
import Producto from  '../DTO/productoDTO';


export default interface envioCamiones{
        id_envio_camiones?:number;
        cantidad_producto?: number;
        fecha_registro?: Date;
        fecha_entrega?: Date
        precio_envio?: number 
        placa_vehiculo?: string;
        numero_guia?: string
        user?: User;
        bodega?:Bodega;
        producto_camiones?: Producto;
}
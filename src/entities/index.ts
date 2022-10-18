export interface Provider {
  idregistro: number;
  nombre: string;
  apellidopaterno: string;
  apellidomaterno: string;
  edad: string;
  ciudad: string;  
}

export interface Product {
  ProductID: string,
  ProductName: string,
  ProductPrice: string,
  ProductStock: string,
  ProductImageUrl: string
}

export interface Sede {
  idsede: number;
  nombresede: string; 
  direccion:string;
  telefono:string;
  gerente:string;
  trabajadores:number;
  email:string;
}
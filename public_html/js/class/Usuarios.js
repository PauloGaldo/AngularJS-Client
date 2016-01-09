/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Usuarios(usuarioId, roles, documento, clave, nombre, domicilioParticular, domicilioEntrega, email, telefono, usuarioCreacion, fechaCreacion, usuarioModificacion, fechaModificacion, inhabilitado, fechaCambioClave, mailValidado) {
    this.usuarioId = usuarioId;
    this.roles = roles;
    this.documento = documento;
    this.clave = clave;
    this.nombre = nombre;
    this.domicilioParticular = domicilioParticular;
    this.domicilioEntrega = domicilioEntrega;
    this.email = email;
    this.telefono = telefono;
    this.usuarioCreacion = usuarioCreacion;
    this.fechaCreacion = fechaCreacion;
    this.usuarioModificacion = usuarioModificacion;
    this.fechaModificacion = fechaModificacion;
    this.inhabilitado = inhabilitado;
    this.fechaCambioClave = fechaCambioClave;
    this.mailValidado = mailValidado;
}


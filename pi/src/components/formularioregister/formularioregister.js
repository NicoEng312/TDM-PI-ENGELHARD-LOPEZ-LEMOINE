import React from "react";

function FormularioRegister() {
  return (
    <section>
      <h2 className="mensaje-register">Registro</h2>

      <div className="caja-register">
        <div className="cuadro-register">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingresá tu email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Ingresá tu contraseña"
              />
            </div>

            <button type="submit" className="button-register">
              Registrarse
            </button>
          </form>

          <p className="pregunta-login">
            ¿Ya tenés cuenta? <a href="/login">Iniciar sesión</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FormularioRegister;

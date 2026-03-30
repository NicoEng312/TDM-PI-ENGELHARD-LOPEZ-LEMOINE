import React from "react";

function FormularioLogin() {
  return (
    <section>
      <h2 className="mensaje-login">Iniciar sesión</h2>

      <div className="caja-login">
        <div className="cuadro-login">
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

            <button type="submit" className="button-login">
              Iniciar sesión
            </button>
          </form>

          <p className="mensaje-login">
            ¿No tenés cuenta? <a href="/register">Registrarse</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FormularioLogin;


import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./UserProvider";

export const MainApp = () => {
  return (
    <UserProvider> {/* 3. Asignamos el HOC en la parte principal de la app donde queremos que esté disponible el contexto */}
      {/* <a href="/">Home</a>
      <a href="login">Login</a>
      <a href="about">About</a> Enlace para navegar cargando nuevamente la pagina, se puede usar en react para recursos externos */}
        <NavBar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="login" element={<LoginPage />}/>
        <Route path="about" element={<AboutPage />}/>


        {/* <Route path="/*" element={<AboutPage />} /> //Envia cualquier ruta no matcheada al componente especificado en element */}
        <Route path="/*" element={<Navigate to="about" />} />  {/* Envia cualquier ruta no matcheada al componente especificado en element */}
      </Routes>
    </UserProvider>
  );
};

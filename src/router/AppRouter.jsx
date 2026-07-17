import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

// Layouts
import PublicLayout from "../layouts/PublicLayout";

// Pages
const HomePage = lazy(() => import("../pages/HomePage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const PkiPage = lazy(() => import("../pages/PkiPage"));


// --------------------------------------------------------------
// --> AppRouter.jsx - Configuración de Rutas
// --------------------------------------------------------------
function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas públicas */}
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/pki" element={<PkiPage />} />
                </Route>

                {/* Errores */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}


export default AppRouter;
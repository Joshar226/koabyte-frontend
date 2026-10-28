import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";

const HomeView = lazy(() => import('./views/HomeView'))


export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner/>}>
        <Routes >
          <Route path="/" element={<HomeView/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

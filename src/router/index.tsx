import { Routes, Route } from 'react-router-dom'
import { Home, Favourites } from 'src/pages'
function Router() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/favourites" element={<Favourites />} />
      </Routes>
   )
}
export default Router

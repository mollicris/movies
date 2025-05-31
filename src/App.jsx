
import { AuthProvider } from './components/AuthContext';
import Welcome from './pages/Welcome';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Trending from './pages/Trending';
import Comunity from './pages/Comunity';
import CommingSoon from './pages/CommingSoon';
import Social from './pages/Social';
import MainLayout from './components/MainLayout';
import ProtectedRoute from './pages/ProtectedRoute';



function App() {
  return (    
    <AuthProvider> 
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route 
          path='/*'
          element={
            <ProtectedRoute>
            <MainLayout>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/community" element={<Comunity />} />
                <Route path="/coming-soon" element={<CommingSoon />} />
                <Route path="/social" element={<Social />} />
              </Routes>
            </MainLayout>
            </ProtectedRoute>
          }/>        
      </Routes>
    </Router>
    </AuthProvider>   
  )
}

export default App

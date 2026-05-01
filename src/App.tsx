import  { useState, useEffect } from 'react';
import Navbar from "./components/pages/Navbar";
import PlanningSection from './components/Home';

const App = () => {
  const [favoriteCount, setFavoriteCount] = useState(0);

  // Fonction pour synchroniser le compteur avec le LocalStorage
  const updateFavoriteCount = () => {
    const saved = localStorage.getItem('eventsync_favs');
    if (saved) {
      const favs = JSON.parse(saved);
      setFavoriteCount(favs.length);
    }
  };

  // Initialisation au montage du composant
  useEffect(() => {
    updateFavoriteCount();

    // Écouter les changements pour mettre à jour la Navbar instantanément
    window.addEventListener('storage', updateFavoriteCount);
    return () => window.removeEventListener('storage', updateFavoriteCount);
  }, []);

  const handleOpenFavorites = () => {
    console.log("Ouvrir le tiroir des favoris");
    // Ici, tu pourrais changer un état pour afficher une Sidebar
  };

  return (
    <div className="bg-[#020617] min-h-screen">
      {/* On passe le compte et la fonction d'ouverture à la Navbar */}
      <Navbar
        favoriteCount={favoriteCount}
        onOpenFavorites={handleOpenFavorites}
      />
      <PlanningSection/>
    </div>
  );
};

export default App;

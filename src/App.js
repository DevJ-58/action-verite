import React, { useState } from 'react';
import { Camera, Mic, Video, Users, Settings, Crown, Zap, Heart, Moon, Flame, Eye, LogOut, Plus, Play, X, Check, Volume2, VolumeX, Globe, ChevronRight, User, Bell, CreditCard, UserPlus, Search, Home, Clock, Award, TrendingUp, Target, Copy, Share2, Wifi, Sparkles, Smartphone, Shield, Lock, Edit, Trash2, Save } from 'lucide-react';

// Styles CSS pour animations
const globalStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out;
  }
  
  .animate-slide-in {
    animation: slideIn 0.4s ease-out;
  }
`;

// Injection des styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = globalStyles;
  document.head.appendChild(styleSheet);
}

// Composant Loader
const Loader = () => (
  <div className="flex items-center justify-center p-4">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-zinc-800 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  </div>
);

// Traductions
const translations = {
  fr: {
    appName: "Action ou Vérité",
    login: "Connexion",
    register: "S'inscrire",
    email: "Email",
    password: "Mot de passe",
    username: "Nom d'utilisateur",
    confirmPassword: "Confirmer le mot de passe",
    forgotPassword: "Mot de passe oublié?",
    alreadyAccount: "Déjà un compte?",
    noAccount: "Pas de compte?",
    welcome: "Bienvenue",
    home: "Accueil",
    friends: "Amis",
    profile: "Profil",
    settings: "Paramètres",
    logout: "Déconnexion",
    startGame: "Lancer une partie",
    selectFriend: "Choisir un ami",
    selectPlayers: "Choisir les joueurs",
    selectMode: "Mode de jeu",
    nearby: "Proche de moi",
    distant: "Loin de moi",
    selectCategories: "Catégories",
    customDares: "Défis personnalisés",
    addCustomDare: "Ajouter un défi",
    addFriend: "Ajouter un ami",
    searchFriend: "Rechercher un ami...",
    inviteCode: "Code d'invitation",
    myCode: "Mon code",
    enterCode: "Entrer un code",
    findPlayers: "Trouver des joueurs",
    onlinePlayers: "Joueurs en ligne",
    joinRoom: "Rejoindre une partie",
    gameSettings: "Paramètres de jeu",
    music: "Musique",
    timer: "Minuteur",
    rounds: "Tours",
    startPlaying: "Commencer",
    spinBottle: "Tourner la bouteille",
    truth: "Vérité",
    dare: "Action",
    skip: "Passer",
    completed: "C'est fait !",
    validate: "Valider",
    videoCall: "Appel vidéo",
    endGame: "Terminer",
    history: "Historique",
    subscription: "Abonnement",
    weekly: "Hebdomadaire",
    monthly: "Mensuel",
    yearly: "Annuel",
    subscribe: "S'abonner",
    subscribeNow: "Débloquez toutes les fonctionnalités",
    features: "Fonctionnalités",
    unlimitedGames: "Parties illimitées",
    allCategories: "Toutes les catégories",
    customDaresFeature: "Défis personnalisés",
    videoCallFeature: "Appels vidéo",
    language: "Langue",
    notifications: "Notifications",
    itsYourTurn: "C'est ton tour !",
    chooseType: "Choisis ton défi",
    
    categories: {
      fun: { name: "Juste pour rire", desc: "Des défis amusants pour briser la glace" },
      romantic: { name: "Romantique", desc: "Rapprochez vos cœurs" },
      spicy: { name: "Osé", desc: "Montez la température" },
      intimate: { name: "Très intime", desc: "Pour ceux qui osent tout" },
      naughty: { name: "Plaisir coquin", desc: "Explorez vos désirs" },
      closer: { name: "Rapproche-toi", desc: "Éliminez la distance" },
      night: { name: "Après la tombée de la nuit", desc: "Quand l'obscurité règne" },
      honest: { name: "Limite franchise", desc: "Des vérités qui dévoilent tout" },
      heat: { name: "Vague de chaleur", desc: "L'intensité maximale" },
      allnight: { name: "Nuit blanche", desc: "Pour repousser l'aube" },
      noreturn: { name: "Pas de retour en arrière", desc: "Le point de non-retour" }
    }
  },
  en: {
    appName: "Truth or Dare",
    login: "Login",
    register: "Sign Up",
    email: "Email",
    password: "Password",
    username: "Username",
    confirmPassword: "Confirm Password",
    forgotPassword: "Forgot password?",
    alreadyAccount: "Already have an account?",
    noAccount: "Don't have an account?",
    welcome: "Welcome",
    home: "Home",
    friends: "Friends",
    profile: "Profile",
    settings: "Settings",
    logout: "Logout",
    startGame: "Start Game",
    selectFriend: "Select Friend",
    selectPlayers: "Select Players",
    selectMode: "Game Mode",
    nearby: "Nearby",
    distant: "Distant",
    selectCategories: "Categories",
    customDares: "Custom Dares",
    addCustomDare: "Add Dare",
    addFriend: "Add Friend",
    searchFriend: "Search friend...",
    inviteCode: "Invite Code",
    myCode: "My Code",
    enterCode: "Enter Code",
    findPlayers: "Find Players",
    onlinePlayers: "Online Players",
    joinRoom: "Join Room",
    gameSettings: "Game Settings",
    music: "Music",
    timer: "Timer",
    rounds: "Rounds",
    startPlaying: "Start",
    spinBottle: "Spin Bottle",
    truth: "Truth",
    dare: "Dare",
    skip: "Skip",
    completed: "Done!",
    validate: "Validate",
    videoCall: "Video Call",
    endGame: "End Game",
    history: "History",
    subscription: "Subscription",
    weekly: "Weekly",
    monthly: "Monthly",
    yearly: "Yearly",
    subscribe: "Subscribe",
    subscribeNow: "Unlock all features",
    features: "Features",
    unlimitedGames: "Unlimited games",
    allCategories: "All categories",
    customDaresFeature: "Custom dares",
    videoCallFeature: "Video calls",
    language: "Language",
    notifications: "Notifications",
    itsYourTurn: "It's your turn!",
    chooseType: "Choose your challenge",
    
    categories: {
      fun: { name: "Just for Fun", desc: "Light challenges to break the ice" },
      romantic: { name: "Romantic", desc: "Bring hearts closer" },
      spicy: { name: "Spicy", desc: "Turn up the heat" },
      intimate: { name: "Very Intimate", desc: "For those who dare all" },
      naughty: { name: "Naughty Pleasure", desc: "Explore your desires" },
      closer: { name: "Get Closer", desc: "Eliminate the distance" },
      night: { name: "After Nightfall", desc: "When darkness rules" },
      honest: { name: "Brutal Honesty", desc: "Truths that reveal all" },
      heat: { name: "Heat Wave", desc: "Maximum intensity" },
      allnight: { name: "All-Nighter", desc: "Push back the dawn" },
      noreturn: { name: "Point of No Return", desc: "The point of no return" }
    }
  }
};

const daresByCategory = {
  fun: {
    truths: [
      "Quelle est la chose la plus embarrassante que tu as faite?",
      "Quel est ton plus gros mensonge?",
      "Qui est ton crush secret?",
      "Quel est ton plus grand regret?",
      "As-tu déjà triché à un examen?"
    ],
    dares: [
      "Fais 10 pompes en chantant",
      "Imite un joueur pendant 2 minutes",
      "Danse sans musique pendant 1 minute",
      "Parle avec un accent pendant 3 tours",
      "Fais le poirier pendant 30 secondes"
    ]
  },
  romantic: {
    truths: [
      "Qu'est-ce qui t'attire le plus chez quelqu'un ici?",
      "Quel est ton meilleur souvenir romantique?",
      "As-tu déjà eu le béguin pour quelqu'un ici?",
      "Décris ton premier baiser",
      "Quelle est la chose la plus romantique qu'on t'ait faite?"
    ],
    dares: [
      "Complimente sincèrement chaque joueur",
      "Envoie un message vocal romantique à quelqu'un",
      "Écris un court poème pour un joueur",
      "Regarde quelqu'un dans les yeux pendant 30 secondes",
      "Décris ton rendez-vous idéal"
    ]
  },
  spicy: {
    truths: [
      "Quelle est ta plus grande fantaisie?",
      "Où aimerais-tu être embrassé(e)?",
      "Décris ton rendez-vous idéal",
      "Quelle partie du corps préfères-tu?",
      "As-tu déjà eu un rêve coquin?"
    ],
    dares: [
      "Fais un regard séducteur à quelqu'un",
      "Complimente de façon osée",
      "Mime une scène romantique",
      "Danse de façon sensuelle",
      "Fais un clin d'œil séducteur"
    ]
  },
  intimate: {
    truths: [
      "Quelle est ta zone érogène préférée?",
      "Décris ton fantasme le plus fou",
      "Combien de personnes as-tu embrassées?",
      "Quelle est ton expérience la plus audacieuse?",
      "As-tu déjà fait quelque chose d'interdit?"
    ],
    dares: [
      "Murmure quelque chose de coquin à l'oreille de quelqu'un",
      "Décris ce qui te rend attirant(e)",
      "Fais un massage d'épaules à quelqu'un",
      "Partage un secret intime",
      "Raconte ton moment le plus gênant"
    ]
  }
};

// Fonction pour générer un code d'invitation unique
const generateInviteCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

const App = () => {
  const [language, setLanguage] = useState('fr');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [currentView, setCurrentView] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [showAddFriendModal, setShowAddFriendModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showCreateDareModal, setShowCreateDareModal] = useState(false);
  const [showEditDareModal, setShowEditDareModal] = useState(false);
  const [pendingInvitations, setPendingInvitations] = useState([]);
  const [customDaresList, setCustomDaresList] = useState([
    { id: '1', title: 'Mon premier défi', category: 'fun', type: 'dare', content: 'Fais 20 pompes en chantant', icon: '😄' },
    { id: '2', title: 'Question personnelle', category: 'romantic', type: 'truth', content: 'Quelle est ta plus grande peur en amour?', icon: '💕' },
    { id: '3', title: 'Action secrète', category: 'spicy', type: 'dare', content: 'Envoie un message osé à quelqu\'un', icon: '🔥' }
  ]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [friendsList, setFriendsList] = useState([
    { id: '1', username: 'Sarah', avatar: '👩', status: 'En ligne', code: 'SARAH1' },
    { id: '2', username: 'Marc', avatar: '👨', status: 'Hors ligne', code: 'MARC23' },
    { id: '3', username: 'Julie', avatar: '👱‍♀️', status: 'En ligne', code: 'JULIE5' },
    { id: '4', username: 'Tom', avatar: '👨‍🦱', status: 'En ligne', code: 'TOM789' },
    { id: '5', username: 'Emma', avatar: '👧', status: 'En ligne', code: 'EMMA42' }
  ]);
  
  const [gameState, setGameState] = useState({
    players: [],
    mode: null,
    selectedCategories: [],
    customDares: [],
    musicEnabled: true,
    timerEnabled: false,
    rounds: 10,
    currentRound: 0,
    currentPlayerIndex: -1,
    isSpinning: false,
    bottleRotation: 0,
    currentChallenge: null,
    challengeType: null,
    gamePhase: 'spin', // 'spin', 'choose', 'challenge'
    history: []
  });

  const t = translations[language];

  // Avatars disponibles
  const availableAvatars = ['👤', '😎', '🎮', '🎯', '⚡', '🔥', '💎', '🌟', '👑', '🎭', '🦁', '🐺', '🦅', '🐉', '👨', '👩', '👨‍🦱', '👩‍🦱', '👨‍🦰', '👩‍🦰', '👱‍♂️', '👱‍♀️', '🧔', '👴', '👵'];

  // Modal Éditer le profil
  const EditProfileModal = () => {
    const [profileData, setProfileData] = useState({
      username: currentUser?.username || '',
      avatar: currentUser?.avatar || '👤',
      bio: currentUser?.bio || '',
      photoURL: currentUser?.photoURL || null
    });

    const handlePhotoUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfileData({...profileData, photoURL: reader.result, avatar: null});
        };
        reader.readAsDataURL(file);
      }
    };

    const saveProfile = () => {
      setCurrentUser({
        ...currentUser,
        username: profileData.username,
        avatar: profileData.avatar,
        photoURL: profileData.photoURL,
        bio: profileData.bio
      });
      setShowEditProfileModal(false);
    };

    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6">
        <div className="bg-gray-900 rounded-2xl w-full max-w-md border border-gray-800 max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Modifier le profil</h2>
              <button onClick={() => setShowEditProfileModal(false)} className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Photo de profil */}
            <div className="text-center mb-6">
              <div className="relative inline-block">
                {profileData.photoURL ? (
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-600 bg-gray-800">
                    <img src={profileData.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-5xl border-4 border-blue-600 bg-gradient-to-br from-blue-600 to-blue-700">
                    {profileData.avatar}
                  </div>
                )}
                <label className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <Camera className="w-4 h-4 text-white" />
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                </label>
              </div>
              <p className="text-gray-400 text-xs mt-2">Clique pour changer la photo</p>
            </div>

            {/* Nom d'utilisateur */}
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2 font-medium">Nom d'utilisateur</label>
              <input
                type="text"
                value={profileData.username}
                onChange={(e) => setProfileData({...profileData, username: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Ton nom"
              />
            </div>

            {/* Bio */}
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2 font-medium">Bio</label>
              <textarea
                value={profileData.bio}
                onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                placeholder="Raconte quelque chose sur toi..."
                rows="3"
              />
            </div>

            {/* Sélection d'avatar */}
            {!profileData.photoURL && (
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-3 font-medium">Ou choisis un avatar</label>
                <div className="grid grid-cols-8 gap-2">
                  {availableAvatars.map((avatar, i) => (
                    <button
                      key={i}
                      onClick={() => setProfileData({...profileData, avatar, photoURL: null})}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-2xl transition-all ${
                        profileData.avatar === avatar ? 'bg-blue-600 scale-110' : 'bg-gray-800 hover:bg-gray-700'
                      }`}
                    >
                      {avatar}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {profileData.photoURL && (
              <button
                onClick={() => setProfileData({...profileData, photoURL: null, avatar: '👤'})}
                className="w-full mb-4 py-2 bg-gray-800 text-gray-400 rounded-lg text-sm hover:bg-gray-700 transition-colors"
              >
                Supprimer la photo
              </button>
            )}

            {/* Boutons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowEditProfileModal(false)}
                className="flex-1 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={saveProfile}
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Composant SVG Bouteille
  // Composant Bouteille 3D Réaliste avec effets
  const BottleSVG = ({ rotation }) => (
    <div 
      className="transition-transform"
      style={{ 
        transform: `rotate(${rotation}deg)`,
        transitionDuration: gameState.isSpinning ? '4000ms' : '0ms',
        transitionTimingFunction: gameState.isSpinning ? 'cubic-bezier(0.17, 0.67, 0.35, 0.95)' : 'linear',
        willChange: 'transform'
      }}
    >
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bottleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9"/>
            <stop offset="50%" stopColor="#2563eb" stopOpacity="1"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.8"/>
          </linearGradient>
          <linearGradient id="glassShine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0"/>
            <stop offset="50%" stopColor="white" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <filter id="bottleShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="2" dy="4" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <radialGradient id="capGradient">
            <stop offset="0%" stopColor="#1e40af"/>
            <stop offset="100%" stopColor="#1e3a8a"/>
          </radialGradient>
        </defs>
        <g transform="translate(70, 70)" filter="url(#bottleShadow)">
          <path 
            d="M -10 -45 L -10 -32 L -14 -22 L -14 38 Q -14 43 -10 43 L 10 43 Q 14 43 14 38 L 14 -22 L 10 -32 L 10 -45 Z" 
            fill="url(#bottleGradient)" 
            stroke="#1e40af" 
            strokeWidth="1.5"
          />
          <rect 
            x="-6" 
            y="-55" 
            width="12" 
            height="10" 
            rx="2" 
            fill="url(#bottleGradient)" 
            stroke="#1e40af" 
            strokeWidth="1.5"
          />
          <rect 
            x="-7" 
            y="-58" 
            width="14" 
            height="3" 
            rx="1" 
            fill="url(#capGradient)"
          />
          <ellipse 
            cx="-6" 
            cy="-5" 
            rx="4" 
            ry="20" 
            fill="url(#glassShine)" 
            opacity="0.4"
          />
          <ellipse 
            cx="8" 
            cy="10" 
            rx="2" 
            ry="12" 
            fill="white" 
            opacity="0.2"
          />
          <circle 
            cx="0" 
            cy="-52" 
            r="3" 
            fill="#ef4444"
            className="animate-pulse"
          />
          <line x1="-10" y1="-32" x2="-14" y2="-22" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
          <line x1="10" y1="-32" x2="14" y2="-22" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
        </g>
      </svg>
    </div>
  );

  // Composant Particules d'animation pendant le spin
  const SpinParticles = () => {
    if (!gameState.isSpinning) return null;
    
    return (
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * (Math.PI / 180);
          const distance = 100;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            />
          );
        })}
        {/* Cercle lumineux central */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/10 rounded-full animate-pulse"></div>
      </div>
    );
  };

  // Fonction pour calculer la position en cercle
  const getCirclePosition = (index, total, radius = 140) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y, angle: angle * (180 / Math.PI) + 90 };
  };

  // Modal Ajouter un ami
  // Modal d'invitation complet (Code + Recherche + Matchmaking)
  const AddFriendModal = () => {
    const [activeTab, setActiveTab] = useState('code');
    const [searchQuery, setSearchQuery] = useState('');
    const [enteredCode, setEnteredCode] = useState('');
    const userCode = currentUser?.inviteCode || generateInviteCode();

    const copyCode = () => {
      navigator.clipboard.writeText(userCode);
      // Simple feedback visuel
      const btn = document.activeElement;
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Copié !</span>';
      setTimeout(() => btn.innerHTML = originalText, 2000);
    };

    const shareCode = () => {
      if (navigator.share) {
        navigator.share({
          title: 'Action ou Vérité',
          text: `Rejoins-moi sur Action ou Vérité ! Mon code: ${userCode}`,
          url: window.location.href
        });
      } else {
        copyCode();
      }
    };

    const onlinePlayers = [
      { id: '10', username: 'Alex', avatar: '👨‍🦰', status: 'En recherche de partie', code: 'ALEX99' },
      { id: '11', username: 'Sophie', avatar: '👩‍🦱', status: 'Disponible', code: 'SOPH12' },
      { id: '12', username: 'Lucas', avatar: '👨‍🦲', status: 'En partie', code: 'LUC456' }
    ];

    const searchResults = [
      { id: '6', username: 'Alex', avatar: '👨‍🦰', status: 'En ligne', code: 'ALEX99' },
      { id: '7', username: 'Sophie', avatar: '👩‍🦱', status: 'En ligne', code: 'SOPH12' },
      { id: '8', username: 'Lucas', avatar: '👨‍🦲', status: 'Hors ligne', code: 'LUC456' }
    ];

    const addFriend = (friend) => {
      if (!friendsList.find(f => f.id === friend.id)) {
        setFriendsList([...friendsList, {...friend, code: friend.code || generateInviteCode()}]);
      }
      setShowAddFriendModal(false);
    };

    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6">
        <div className="bg-gray-900 rounded-2xl w-full max-w-md border border-gray-800 max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">{t.addFriend}</h2>
              <button onClick={() => setShowAddFriendModal(false)} className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
              {[
                { id: 'code', icon: Copy, label: t.inviteCode },
                { id: 'search', icon: Search, label: 'Recherche' },
                { id: 'online', icon: Wifi, label: t.onlinePlayers }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-2 rounded-lg transition-all text-xs sm:text-sm ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {/* Tab: Code d'invitation */}
            {activeTab === 'code' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-white font-bold mb-2 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    {t.myCode}
                  </h3>
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 animate-pulse"></div>
                    <div className="relative text-4xl font-black text-white tracking-widest mb-3 font-mono">{userCode}</div>
                    <div className="relative text-blue-100 text-sm">Partage ce code avec tes amis</div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={copyCode} className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                      <Copy className="w-4 h-4" />
                      Copier
                    </button>
                    <button onClick={shareCode} className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Partager
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-800 pt-6">
                  <h3 className="text-white font-bold mb-3">{t.enterCode}</h3>
                  <input
                    type="text"
                    placeholder="ABCD12"
                    value={enteredCode}
                    onChange={(e) => setEnteredCode(e.target.value.toUpperCase())}
                    maxLength={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 text-center text-xl font-bold tracking-widest font-mono mb-3"
                  />
                  <button 
                    disabled={enteredCode.length !== 6}
                    onClick={() => {
                      // Simuler l'ajout d'un ami par code
                      addFriend({ id: Date.now().toString(), username: 'Nouvel ami', avatar: '👤', status: 'En ligne', code: enteredCode });
                    }}
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      enteredCode.length === 6
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Ajouter cet ami
                  </button>
                </div>
              </div>
            )}

            {/* Tab: Recherche */}
            {activeTab === 'search' && (
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder={t.searchFriend}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="space-y-2">
                  {searchResults.filter(u => u.username.toLowerCase().includes(searchQuery.toLowerCase())).map(user => (
                    <button
                      key={user.id}
                      onClick={() => addFriend(user)}
                      className="w-full bg-gray-800 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-700 transition-all"
                    >
                      <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-2xl">
                        {user.avatar}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-white font-medium">{user.username}</div>
                        <div className="text-gray-400 text-sm">Code: {user.code}</div>
                      </div>
                      <UserPlus className="w-5 h-5 text-blue-500" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Joueurs en ligne */}
            {activeTab === 'online' && (
              <div className="space-y-4">
                <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Wifi className="w-4 h-4 animate-pulse" />
                    <span className="font-semibold">{onlinePlayers.length} joueurs en ligne</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {onlinePlayers.map(player => (
                    <button
                      key={player.id}
                      onClick={() => addFriend(player)}
                      className="w-full bg-gray-800 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-700 transition-all"
                    >
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-2xl">
                          {player.avatar}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800 animate-pulse"></div>
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-white font-medium">{player.username}</div>
                        <div className="text-gray-400 text-sm">{player.status}</div>
                      </div>
                      <Play className="w-5 h-5 text-blue-500" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Login View
  const LoginView = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '', username: '', confirmPassword: '' });

    const handleSubmit = (e) => {
      e.preventDefault();
      setCurrentUser({ 
        id: '0', 
        username: formData.username || 'Utilisateur', 
        email: formData.email, 
        avatar: '👤',
        inviteCode: generateInviteCode()
      });
      setIsAuthenticated(true);
      setCurrentView('home');
    };

    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gray-950">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">{t.appName}</h1>
            <p className="text-gray-400 text-sm">{isRegister ? t.register : t.welcome}</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegister && (
                <div>
                  <label className="block text-gray-400 text-sm mb-2">{t.username}</label>
                  <input type="text" placeholder={t.username} value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
                </div>
              )}
              <div>
                <label className="block text-gray-400 text-sm mb-2">{t.email}</label>
                <input type="email" placeholder={t.email} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">{t.password}</label>
                <input type="password" placeholder={t.password} value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
              </div>
              {isRegister && (
                <div>
                  <label className="block text-gray-400 text-sm mb-2">{t.confirmPassword}</label>
                  <input type="password" placeholder={t.confirmPassword} value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
                </div>
              )}
              <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">{isRegister ? t.register : t.login}</button>
            </form>
            {!isRegister && <button className="w-full text-gray-400 text-sm mt-3 hover:text-white transition-colors">{t.forgotPassword}</button>}
            <div className="mt-6 text-center">
              <button onClick={() => setIsRegister(!isRegister)} className="text-blue-500 text-sm hover:underline">{isRegister ? t.alreadyAccount : t.noAccount}</button>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button onClick={() => setLanguage('fr')} className={`px-4 py-2 rounded-lg font-medium transition-all ${language === 'fr' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>🇫🇷 FR</button>
            <button onClick={() => setLanguage('en')} className={`px-4 py-2 rounded-lg font-medium transition-all ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>🇬🇧 EN</button>
          </div>
        </div>
      </div>
    );
  };

  // Modal de Paiement - VERSION PROFESSIONNELLE
  const PaymentModal = () => {
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCVV, setCardCVV] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const plans = [
      { id: 'weekly', name: 'Hebdomadaire', price: '300', period: '/semaine', popular: false, save: null },
      { id: 'monthly', name: 'Mensuel', price: '2000', period: '/mois', popular: true, save: '30%' },
      { id: 'yearly', name: 'Annuel', price: '10000', period: '/an', popular: false, save: '60%' }
    ];

    const mobileMoneyProviders = [
      { 
        id: 'orange', 
        name: 'Orange Money', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/200px-Orange_logo.svg.png',
        bgColor: 'bg-zinc-900',
        textColor: 'text-white'
      },
      { 
        id: 'mtn', 
        name: 'MTN Mobile Money', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/MTN_Logo.svg/200px-MTN_Logo.svg.png',
        bgColor: 'bg-zinc-900',
        textColor: 'text-white'
      },
      { 
        id: 'moov', 
        name: 'Moov Money', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Moov_africa_logo.svg/200px-Moov_africa_logo.svg.png',
        bgColor: 'bg-zinc-900',
        textColor: 'text-white'
      },
      { 
        id: 'wave', 
        name: 'Wave', 
        logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"%3E%3Ctext x="10" y="40" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="%2300D9B4"%3E🐬 Wave%3C/text%3E%3C/svg%3E',
        bgColor: 'bg-zinc-900',
        textColor: 'text-white'
      }
    ];

    const handlePayment = () => {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setHasSubscription(true);
        setShowPaymentModal(false);
        alert('✅ Paiement réussi ! Ton abonnement est maintenant actif.');
      }, 2000);
    };

    const currentPlan = plans.find(p => p.id === selectedPlan) || plans[1];

    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6 overflow-y-auto">
        <div className="bg-zinc-900 rounded-lg w-full max-w-md border border-zinc-800 my-6 shadow-2xl">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Paiement sécurisé</h2>
              <button onClick={() => setShowPaymentModal(false)} className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Plan sélectionné */}
            <div className="bg-black border border-zinc-800 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-400 text-sm">Plan {currentPlan.name}</div>
                  <div className="text-white text-2xl font-bold">{currentPlan.price} F CFA</div>
                  <div className="text-gray-500 text-xs">{currentPlan.period}</div>
                </div>
                {currentPlan.save && (
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    -{currentPlan.save}
                  </div>
                )}
              </div>
            </div>

            {/* Sélection de la méthode de paiement */}
            {!paymentMethod && (
              <div className="space-y-4">
                <h3 className="text-white font-semibold mb-3">Mode de paiement</h3>
                
                {/* Mobile Money */}
                <div className="space-y-2">
                  <div className="text-gray-400 text-sm font-medium mb-3">Mobile Money</div>
                  {mobileMoneyProviders.map(provider => (
                    <button
                      key={provider.id}
                      onClick={() => setPaymentMethod(provider.id)}
                      className="w-full bg-zinc-900 border-2 border-zinc-800 hover:border-zinc-700 rounded-lg p-4 transition-all flex items-center gap-4 group"
                    >
                      <div className="w-16 h-12 bg-black rounded flex items-center justify-center overflow-hidden">
                        <img src={provider.logo} alt={provider.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-white font-semibold">{provider.name}</div>
                        <div className="text-gray-500 text-sm">Paiement instantané</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-400" />
                    </button>
                  ))}
                </div>

                {/* Carte bancaire */}
                <div className="mt-4">
                  <div className="text-gray-400 text-sm font-medium mb-3">Carte bancaire</div>
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className="w-full bg-zinc-900 border-2 border-zinc-800 hover:border-zinc-700 rounded-lg p-4 transition-all flex items-center gap-4 group"
                  >
                    <div className="w-16 h-12 bg-black rounded flex items-center justify-center">
                      <CreditCard className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-white font-semibold">Visa / Mastercard</div>
                      <div className="text-gray-500 text-sm">Paiement sécurisé SSL</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-400" />
                  </button>
                </div>
              </div>
            )}

            {/* Formulaire Mobile Money */}
            {paymentMethod && paymentMethod !== 'card' && (
              <div className="space-y-4">
                <button onClick={() => setPaymentMethod(null)} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4">
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  <span className="text-sm font-medium">Retour</span>
                </button>

                <div className="bg-black border border-zinc-800 rounded-lg p-4 mb-4 flex items-center gap-3">
                  <div className="w-12 h-10 bg-zinc-900 rounded flex items-center justify-center overflow-hidden">
                    <img 
                      src={mobileMoneyProviders.find(p => p.id === paymentMethod)?.logo} 
                      alt={mobileMoneyProviders.find(p => p.id === paymentMethod)?.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {mobileMoneyProviders.find(p => p.id === paymentMethod)?.name}
                    </div>
                    <div className="text-gray-400 text-sm">Entre ton numéro</div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2 font-medium">Numéro de téléphone</label>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="+225 XX XX XX XX XX"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="text-blue-900 font-semibold text-sm mb-1">Paiement sécurisé</div>
                      <div className="text-blue-700 text-xs">Tu recevras une notification pour valider le paiement.</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={!phoneNumber || isProcessing}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    !phoneNumber || isProcessing
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Traitement...
                    </span>
                  ) : (
                    `Payer ${currentPlan.price} F CFA`
                  )}
                </button>
              </div>
            )}

            {/* Formulaire Carte bancaire */}
            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <button onClick={() => setPaymentMethod(null)} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4">
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  <span className="text-sm font-medium">Retour</span>
                </button>

                <div className="bg-black border border-zinc-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 text-white font-semibold mb-1">
                    <CreditCard className="w-6 h-6" />
                    Carte bancaire
                  </div>
                  <div className="text-gray-400 text-sm">Visa, Mastercard acceptées</div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2 font-medium">Numéro de carte</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim())}
                    maxLength="19"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2 font-medium">Expiration</label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      value={cardExpiry}
                      onChange={(e) => {
                        let val = e.target.value.replace(/\D/g, '');
                        if (val.length >= 2) val = val.slice(0, 2) + '/' + val.slice(2, 4);
                        setCardExpiry(val);
                      }}
                      maxLength="5"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2 font-medium">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      value={cardCVV}
                      onChange={(e) => setCardCVV(e.target.value.replace(/\D/g, '').slice(0, 3))}
                      maxLength="3"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                    />
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="text-green-900 font-semibold text-sm mb-1">Cryptage SSL 256 bits</div>
                      <div className="text-green-700 text-xs">Tes informations sont protégées.</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={!cardNumber || !cardExpiry || !cardCVV || isProcessing}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    !cardNumber || !cardExpiry || !cardCVV || isProcessing
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Traitement...
                    </span>
                  ) : (
                    `Payer ${currentPlan.price} F CFA`
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Modal Créer/Éditer un défi - VERSION SOBRE
  const CreateDareModal = ({ editingDare = null }) => {
    const [dareData, setDareData] = useState(editingDare || {
      title: '',
      category: 'fun',
      type: 'dare',
      content: '',
      icon: '🎯'
    });

    const categories = [
      { id: 'fun', name: 'Fun', icon: '😄' },
      { id: 'romantic', name: 'Romantique', icon: '💕' },
      { id: 'spicy', name: 'Osé', icon: '🔥' },
      { id: 'intimate', name: 'Intime', icon: '😈' }
    ];

    const availableIcons = ['🎯', '😄', '💕', '🔥', '😈', '⚡', '💎', '🌟', '👑', '🎭'];

    const handleSave = () => {
      if (!dareData.title || !dareData.content) {
        alert('⚠️ Remplis tous les champs !');
        return;
      }

      if (editingDare) {
        setCustomDaresList(customDaresList.map(d => d.id === editingDare.id ? {...dareData, id: editingDare.id} : d));
      } else {
        setCustomDaresList([...customDaresList, {...dareData, id: Date.now().toString()}]);
      }
      
      setShowCreateDareModal(false);
      setShowEditDareModal(false);
    };

    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6 overflow-y-auto">
        <div className="bg-zinc-900 rounded-lg w-full max-w-md border border-zinc-800 my-6 shadow-2xl">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">{editingDare ? 'Modifier' : 'Créer un défi'}</h2>
              <button onClick={() => { setShowCreateDareModal(false); setShowEditDareModal(false); }} className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-gray-200">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2 font-medium">Titre</label>
                <input
                  type="text"
                  placeholder="Ex: Mon défi"
                  value={dareData.title}
                  onChange={(e) => setDareData({...dareData, title: e.target.value})}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2 font-medium">Type</label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setDareData({...dareData, type: 'truth'})}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                      dareData.type === 'truth'
                        ? 'bg-blue-600 text-white'
                        : 'bg-zinc-800 text-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    Vérité
                  </button>
                  <button
                    onClick={() => setDareData({...dareData, type: 'dare'})}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                      dareData.type === 'dare'
                        ? 'bg-blue-600 text-white'
                        : 'bg-zinc-800 text-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    Action
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2 font-medium">Catégorie</label>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setDareData({...dareData, category: cat.id})}
                      className={`p-3 rounded-lg transition-all border-2 ${
                        dareData.category === cat.id
                          ? 'bg-blue-50 border-blue-600 text-blue-900'
                          : 'bg-zinc-900 border-zinc-800 text-gray-300 hover:border-zinc-700'
                      }`}
                    >
                      <div className="text-2xl mb-1">{cat.icon}</div>
                      <div className="text-xs font-medium">{cat.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2 font-medium">Icône</label>
                <div className="grid grid-cols-5 gap-2">
                  {availableIcons.map(icon => (
                    <button
                      key={icon}
                      onClick={() => setDareData({...dareData, icon})}
                      className={`w-full aspect-square rounded-lg flex items-center justify-center text-2xl transition-all border-2 ${
                        dareData.icon === icon
                          ? 'bg-blue-50 border-blue-600 scale-110'
                          : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2 font-medium">
                  {dareData.type === 'truth' ? 'Question' : 'Action'}
                </label>
                <textarea
                  placeholder={dareData.type === 'truth' ? 'Ex: Quelle est ta plus grande peur?' : 'Ex: Fais 10 pompes'}
                  value={dareData.content}
                  onChange={(e) => setDareData({...dareData, content: e.target.value})}
                  rows="3"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => { setShowCreateDareModal(false); setShowEditDareModal(false); }}
                  className="flex-1 py-3 bg-zinc-800 text-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Barre de navigation en bas (Mobile)
  const BottomNav = () => {
    const navItems = [
      { id: 'home', icon: Home, label: 'Accueil' },
      { id: 'friends', icon: Users, label: 'Amis' },
      { id: 'customDares', icon: Plus, label: 'Défis' },
      { id: 'profile', icon: User, label: 'Profil' }
    ];

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 px-2 pb-safe z-50">
        <div className="flex items-center justify-around h-16">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all ${
                currentView === item.id ? 'text-blue-500' : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <item.icon className={`w-6 h-6 transition-all ${currentView === item.id ? 'text-blue-500 scale-110' : 'text-gray-400'}`} />
              <span className={`text-xs font-medium ${currentView === item.id ? 'text-blue-500' : 'text-gray-400'}`}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Home View - VERSION PERSONNALISÉE
  const HomeView = () => (
    <div className="min-h-screen bg-black pb-20">
      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-6">
            {currentUser?.photoURL ? (
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-zinc-700">
                <img src={currentUser.photoURL} alt="Profile" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl border-2 border-zinc-700 bg-zinc-800">
                {currentUser?.avatar || '👤'}
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-xl font-bold text-white">Salut, {currentUser?.username}</h1>
              {currentUser?.bio && <p className="text-gray-400 text-sm mt-1">{currentUser.bio}</p>}
            </div>
          </div>
        </div>

        <button 
          onClick={() => !hasSubscription ? setCurrentView('subscription') : setCurrentView('selectPlayers')} 
          className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg p-6 mb-6 transition-all shadow-md"
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <div className="text-white text-xl font-bold mb-1">{t.startGame}</div>
              <div className="text-blue-100 text-sm">{hasSubscription ? 'Prêt à jouer' : 'Abonne-toi pour jouer'}</div>
            </div>
            <Play className="w-10 h-10 text-white" />
          </div>
        </button>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            {val: 12, label: 'Parties', icon: Play},
            {val: friendsList.length, label: 'Amis', icon: Users},
            {val: customDaresList.length, label: 'Défis', icon: Zap}
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center">
              <stat.icon className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{stat.val}</div>
              <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-white font-semibold mb-3">Statistiques récentes</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center">
                <Check className="w-6 h-6 text-green-500" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-white font-semibold">Dernière partie</div>
                <div className="text-gray-400 text-sm">Sarah, Tom • 15 défis complétés</div>
              </div>
            </div>
          </div>
        </div>

        {!hasSubscription && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Crown className="w-8 h-8 text-blue-600" />
              <h3 className="text-white font-bold text-lg">Premium</h3>
            </div>
            <div className="space-y-2 mb-4 text-sm text-gray-300">
              <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Parties illimitées</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Toutes les catégories</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Défis personnalisés</div>
            </div>
            <button onClick={() => setCurrentView('subscription')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all">
              Découvrir Premium
            </button>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );

  // Select Players View
  const SelectPlayersView = () => {
    const [selectedPlayers, setSelectedPlayers] = useState([currentUser]);

    const togglePlayer = (player) => {
      if (selectedPlayers.find(p => p.id === player.id)) {
        setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
      } else {
        setSelectedPlayers([...selectedPlayers, player]);
      }
    };

    const isSelected = (player) => selectedPlayers.find(p => p.id === player.id);

    const continueToMode = () => {
      setGameState({...gameState, players: selectedPlayers});
      setCurrentView('selectMode');
    };

    return (
      <div className="min-h-screen bg-black">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <button onClick={() => setCurrentView('home')} className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center hover:bg-zinc-800">
              <ChevronRight className="w-5 h-5 text-gray-400 rotate-180" />
            </button>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-white">Sélectionne les joueurs</h1>
              <p className="text-sm text-gray-400">{selectedPlayers.length} joueur(s) sélectionné(s)</p>
            </div>
          </div>

          {selectedPlayers.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-400 mb-3">Joueurs sélectionnés</h3>
              <div className="flex flex-wrap gap-2">
                {selectedPlayers.map(player => (
                  <div key={player.id} className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg">
                    <span className="text-lg">{player.avatar}</span>
                    <span className="text-sm font-medium">{player.username}</span>
                    {player.id !== currentUser.id && (
                      <button onClick={() => togglePlayer(player)} className="ml-1 hover:bg-blue-700 rounded p-0.5">
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <h3 className="text-sm font-medium text-gray-400 mb-3">Tes amis</h3>
          <div className="space-y-2 mb-6">
            {friendsList.map(friend => {
              const selected = isSelected(friend);
              return (
                <button key={friend.id} onClick={() => togglePlayer(friend)} className={`w-full rounded-xl p-4 flex items-center gap-3 transition-all ${selected ? 'bg-blue-600 border-2 border-blue-500' : 'bg-zinc-900 border border-zinc-800 hover:bg-zinc-800'}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${selected ? 'bg-blue-700' : 'bg-zinc-800'}`}>{friend.avatar}</div>
                  <div className="flex-1 text-left">
                    <div className="text-white font-medium">{friend.username}</div>
                    <div className="flex items-center gap-1 text-sm">
                      <div className={`w-2 h-2 rounded-full ${friend.status === 'En ligne' ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                      <span className="text-gray-400">{friend.status}</span>
                    </div>
                  </div>
                  {selected && <Check className="w-5 h-5 text-white" />}
                </button>
              );
            })}
          </div>

          <button onClick={() => setShowAddFriendModal(true)} className="w-full bg-zinc-900 border-2 border-dashed border-zinc-700 rounded-xl p-4 flex items-center justify-center gap-2 hover:border-zinc-600 hover:bg-zinc-800 transition-all mb-6">
            <UserPlus className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400 font-medium">{t.addFriend}</span>
          </button>

          <button onClick={continueToMode} disabled={selectedPlayers.length < 2} className={`w-full py-4 rounded-xl font-semibold transition-all ${selectedPlayers.length >= 2 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-zinc-800 text-gray-500 cursor-not-allowed'}`}>
            Continuer ({selectedPlayers.length} joueurs)
          </button>
        </div>
        {showAddFriendModal && <AddFriendModal />}
      </div>
    );
  };

  // Select Mode View
  const SelectModeView = () => (
    <div className="min-h-screen bg-black">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => setCurrentView('selectPlayers')} className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center hover:bg-zinc-800">
            <ChevronRight className="w-5 h-5 text-gray-400 rotate-180" />
          </button>
          <h1 className="text-xl font-bold text-white">{t.selectMode}</h1>
        </div>

        <div className="space-y-4">
          {[
            {mode: 'nearby', icon: Users, title: t.nearby, desc: 'Défis physiques et interactions en direct'},
            {mode: 'distant', icon: Video, title: t.distant, desc: 'Défis à distance avec vidéo'}
          ].map((item) => (
            <button key={item.mode} onClick={() => { setGameState({...gameState, mode: item.mode}); setCurrentView('selectCategories'); }} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800 transition-all">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-white font-bold text-xl mb-1">{item.title}</div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Select Categories View
  const SelectCategoriesView = () => {
    const [selected, setSelected] = useState([]);
    const categoryIcons = {fun: Zap, romantic: Heart, spicy: Flame, intimate: Eye, naughty: Moon, closer: Users, night: Moon, honest: Heart, heat: Flame, allnight: Moon, noreturn: Flame};

    const toggleCategory = (cat) => {
      if (selected.includes(cat)) {
        setSelected(selected.filter(c => c !== cat));
      } else {
        setSelected([...selected, cat]);
      }
    };

    const startGame = () => {
      setGameState({
        ...gameState, 
        selectedCategories: selected, 
        currentRound: 1,
        gamePhase: 'spin'
      });
      setCurrentView('game');
    };

    return (
      <div className="min-h-screen bg-black">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <button onClick={() => setCurrentView('selectMode')} className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center hover:bg-zinc-800">
              <ChevronRight className="w-5 h-5 text-gray-400 rotate-180" />
            </button>
            <h1 className="text-xl font-bold text-white">{t.selectCategories}</h1>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {Object.keys(t.categories).map((cat) => {
              const Icon = categoryIcons[cat] || Heart;
              const isSelected = selected.includes(cat);
              
              return (
                <button key={cat} onClick={() => toggleCategory(cat)} className={`relative rounded-xl p-4 transition-all border-2 ${isSelected ? 'bg-blue-600 border-blue-500' : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'}`}>
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                  )}
                  <Icon className="w-7 h-7 text-white mb-2" />
                  <div className="text-white font-semibold text-sm mb-1">{t.categories[cat].name}</div>
                  <div className={`text-xs ${isSelected ? 'text-blue-100' : 'text-gray-400'}`}>{t.categories[cat].desc}</div>
                </button>
              );
            })}
          </div>

          <button onClick={startGame} disabled={selected.length === 0} className={`w-full py-4 rounded-xl font-semibold transition-all ${selected.length > 0 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-zinc-800 text-gray-500 cursor-not-allowed'}`}>
            {t.startPlaying} ({selected.length} catégories)
          </button>
        </div>
      </div>
    );
  };

  // Game View - VERSION CORRIGÉE
  const GameView = () => {
    const spinBottle = () => {
      setGameState(prev => ({...prev, isSpinning: true, gamePhase: 'spin'}));
      
      const spins = 6 + Math.random() * 2; // Plus de tours
      const playerCount = gameState.players.length;
      const targetPlayerIndex = Math.floor(Math.random() * playerCount);
      const anglePerPlayer = 360 / playerCount;
      const targetAngle = targetPlayerIndex * anglePerPlayer;
      const finalRotation = gameState.bottleRotation + (spins * 360) + targetAngle;
      
      setGameState(prev => ({
        ...prev, 
        bottleRotation: finalRotation,
        currentPlayerIndex: targetPlayerIndex
      }));

      setTimeout(() => {
        setGameState(prev => ({
          ...prev, 
          isSpinning: false,
          gamePhase: 'choose'
        }));
      }, 4000); // 4 secondes au lieu de 3
    };

    const selectChallengeType = (type) => {
      const category = gameState.selectedCategories[Math.floor(Math.random() * gameState.selectedCategories.length)];
      const challenges = type === 'truth' ? daresByCategory[category]?.truths : daresByCategory[category]?.dares;
      const challenge = challenges?.[Math.floor(Math.random() * challenges.length)] || "Défi personnalisé!";
      
      setGameState(prev => ({
        ...prev,
        challengeType: type,
        currentChallenge: challenge,
        gamePhase: 'challenge'
      }));
    };

    const validateChallenge = () => {
      setGameState(prev => ({
        ...prev,
        currentRound: prev.currentRound + 1,
        gamePhase: 'spin',
        currentChallenge: null,
        challengeType: null,
        currentPlayerIndex: -1
      }));
    };

    const skipChallenge = () => {
      selectChallengeType(gameState.challengeType);
    };

    const currentPlayer = gameState.currentPlayerIndex >= 0 ? gameState.players[gameState.currentPlayerIndex] : null;

    return (
      <div className="min-h-screen bg-gray-950 flex flex-col">
        {/* Header */}
        <div className="p-6 flex items-center justify-between">
          <button onClick={() => setCurrentView('home')} className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-800">
            <X className="w-5 h-5 text-gray-400" />
          </button>
          <div className="text-white font-semibold">Tour {gameState.currentRound}/{gameState.rounds}</div>
          <div className="flex gap-2">
            <button onClick={() => setIsMuted(!isMuted)} className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-800">
              {isMuted ? <VolumeX className="w-5 h-5 text-gray-400" /> : <Volume2 className="w-5 h-5 text-gray-400" />}
            </button>
            <button onClick={() => setIsVideoEnabled(!isVideoEnabled)} className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-800">
              {isVideoEnabled ? <Video className="w-5 h-5 text-gray-400" /> : <Camera className="w-5 h-5 text-gray-400" />}
            </button>
          </div>
        </div>

        {/* Zone de jeu principale */}
        <div className="flex-1 flex items-center justify-center p-6">
          {gameState.gamePhase === 'spin' && (
            <div className="relative w-full max-w-md">
              {/* Joueurs en cercle */}
              <div className="relative w-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur rounded-3xl border border-gray-800 p-8" style={{ height: '450px' }}>
                {/* Cercle de jeu avec effet */}
                <div className="absolute inset-12 border-2 border-dashed border-gray-700/50 rounded-full"></div>
                
                {/* Particules d'animation */}
                <SpinParticles />
                
                {gameState.players.map((player, index) => {
                  const pos = getCirclePosition(index, gameState.players.length);
                  return (
                    <div
                      key={player.id}
                      className="absolute flex flex-col items-center transition-all duration-300"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`
                      }}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-2 transition-all duration-300 ${
                        currentPlayer?.id === player.id 
                          ? 'bg-blue-600 ring-4 ring-blue-400 scale-110 shadow-lg shadow-blue-600/50' 
                          : 'bg-gray-800 border border-gray-700'
                      }`}>
                        {player.avatar}
                      </div>
                      <div className={`text-sm font-medium text-center transition-all ${
                        currentPlayer?.id === player.id ? 'text-white font-bold' : 'text-gray-400'
                      }`}>{player.username}</div>
                      {player.id === currentUser.id && (
                        <div className="flex items-center gap-1 mt-1">
                          <Mic className="w-3 h-3 text-green-500 animate-pulse" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Bouteille au centre */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <BottleSVG rotation={gameState.bottleRotation} />
                </div>
              </div>

              {/* Bouton tourner */}
              <div className="text-center mt-8">
                <button
                  onClick={spinBottle}
                  disabled={gameState.isSpinning}
                  className={`px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl ${
                    gameState.isSpinning
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:scale-105 shadow-blue-600/30'
                  }`}
                >
                  {gameState.isSpinning ? (
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 animate-spin" />
                      La bouteille tourne...
                    </span>
                  ) : (
                    t.spinBottle
                  )}
                </button>
              </div>
            </div>
          )}

          {gameState.gamePhase === 'choose' && currentPlayer && (
            <div className="w-full max-w-sm">
              <div className="text-center mb-8">
                <div className="text-gray-400 text-lg mb-2">{t.itsYourTurn}</div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-3xl">
                    {currentPlayer.avatar}
                  </div>
                  <div className="text-3xl font-bold text-blue-500">{currentPlayer.username}</div>
                </div>
                <div className="text-gray-400 text-sm">{t.chooseType}</div>
              </div>
              <div className="space-y-3">
                <button onClick={() => selectChallengeType('truth')} className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl p-6 transition-all">
                  <div className="text-white text-2xl font-bold mb-1">{t.truth}</div>
                  <div className="text-blue-200 text-sm">Réponds sincèrement</div>
                </button>
                <button onClick={() => selectChallengeType('dare')} className="w-full bg-gray-800 hover:bg-gray-700 rounded-xl p-6 transition-all">
                  <div className="text-white text-2xl font-bold mb-1">{t.dare}</div>
                  <div className="text-gray-400 text-sm">Relève le défi</div>
                </button>
              </div>
            </div>
          )}

          {gameState.gamePhase === 'challenge' && (
            <div className="w-full max-w-lg px-6 animate-fade-in">
              {/* Carte principale du défi */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden mb-6 shadow-2xl">
                {/* Header avec type et joueur */}
                <div className="bg-zinc-800 border-b border-zinc-700 px-6 py-4 flex items-center justify-between">
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider ${
                    gameState.challengeType === 'truth' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-orange-600 text-white'
                  }`}>
                    {gameState.challengeType === 'truth' ? 'VÉRITÉ' : 'ACTION'}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center text-lg border-2 border-zinc-600">
                      {currentPlayer?.avatar}
                    </div>
                    <span className="text-white text-sm font-semibold">{currentPlayer?.username}</span>
                  </div>
                </div>

                {/* Contenu du défi */}
                <div className="px-6 py-8">
                  <div className="text-white text-xl leading-relaxed text-center font-medium">
                    {gameState.currentChallenge}
                  </div>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="space-y-3">
                <button 
                  onClick={validateChallenge} 
                  className="w-full bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Check className="w-5 h-5" />
                  Défi accompli
                </button>
                
                {gameState.mode === 'distant' && (
                  <button 
                    onClick={() => setIsVideoEnabled(true)} 
                    className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Video className="w-5 h-5" />
                    Lancer l'appel vidéo
                  </button>
                )}
                
                <button 
                  onClick={skipChallenge} 
                  className="w-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 active:scale-95 text-gray-300 font-semibold py-4 rounded-xl transition-all"
                >
                  Passer ce défi
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Subscription View - VERSION PROFESSIONNELLE
  const SubscriptionView = () => {
    const plans = [
      { id: 'weekly', name: t.weekly, price: '300', period: '/semaine', popular: false, save: null },
      { id: 'monthly', name: t.monthly, price: '2000', period: '/mois', popular: true, save: '30%' },
      { id: 'yearly', name: t.yearly, price: '10000', period: '/an', popular: false, save: '60%' }
    ];

    const handleSelectPlan = (planId) => {
      setSelectedPlan(planId);
      setShowPaymentModal(true);
    };

    return (
      <div className="min-h-screen bg-black">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <button onClick={() => setCurrentView('home')} className="w-10 h-10 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center hover:bg-black">
              <ChevronRight className="w-5 h-5 text-gray-400 rotate-180" />
            </button>
            <h1 className="text-xl font-bold text-white">{t.subscription}</h1>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6 text-center">
            <Crown className="w-16 h-16 text-blue-600 mx-auto mb-3" />
            <h2 className="text-white text-2xl font-bold mb-2">{t.subscribeNow}</h2>
            <p className="text-gray-400 text-sm">Accède à toutes les fonctionnalités premium</p>
          </div>

          <div className="space-y-3 mb-6">
            {plans.map(plan => (
              <button 
                key={plan.id} 
                onClick={() => handleSelectPlan(plan.id)} 
                className={`w-full rounded-lg p-5 transition-all relative border-2 ${
                  plan.popular 
                    ? 'bg-blue-50 border-blue-600' 
                    : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    LE PLUS POPULAIRE
                  </div>
                )}
                {plan.save && (
                  <div className="absolute -top-2.5 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    -{plan.save}
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-white font-bold text-lg mb-1">{plan.name}</div>
                    <div className="text-sm flex items-center gap-2 text-gray-400">
                      <Check className="w-4 h-4" />
                      Toutes les fonctionnalités
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-3xl">{plan.price} F</div>
                    <div className="text-sm font-medium text-gray-400">{plan.period}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-4 mb-6">
            <div className="text-white font-bold mb-3">Ce qui est inclus :</div>
            {[
              { icon: Play, text: t.unlimitedGames },
              { icon: Heart, text: t.allCategories },
              { icon: Plus, text: t.customDaresFeature },
              { icon: Video, text: t.videoCallFeature }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-gray-300" />
                </div>
                <span className="text-gray-300 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <div className="text-blue-900 font-semibold text-sm mb-1">Paiement 100% sécurisé</div>
                <div className="text-blue-700 text-xs">Mobile Money et Carte bancaire acceptées.</div>
              </div>
            </div>
          </div>
        </div>
        {showPaymentModal && <PaymentModal />}
      </div>
    );
  };

  // Friends View - VERSION PROFESSIONNELLE COMPLÈTE
  const FriendsView = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [enteredCode, setEnteredCode] = useState('');
    const userCode = currentUser?.inviteCode || generateInviteCode();

    const searchResults = [
      { id: '6', username: 'Alex', avatar: '👨‍🦰', status: 'En ligne', code: 'ALEX99' },
      { id: '7', username: 'Sophie', avatar: '👩‍🦱', status: 'En ligne', code: 'SOPH12' },
      { id: '8', username: 'Lucas', avatar: '👨‍🦲', status: 'Hors ligne', code: 'LUC456' }
    ].filter(u => u.username.toLowerCase().includes(searchQuery.toLowerCase()));

    const sendGameInvite = (friend) => {
      // Simuler l'envoi d'une invitation
      setPendingInvitations([...pendingInvitations, {
        id: Date.now().toString(),
        friendId: friend.id,
        friendName: friend.username,
        status: 'pending', // pending, accepted, refused
        sentAt: new Date()
      }]);
      alert(`✉️ Invitation envoyée à ${friend.username} !`);
    };

    const addFriend = (friend) => {
      if (!friendsList.find(f => f.id === friend.id)) {
        setFriendsList([...friendsList, {...friend, code: friend.code || generateInviteCode()}]);
        alert(`✅ ${friend.username} ajouté à tes amis !`);
      }
    };

    const addFriendByCode = () => {
      if (enteredCode.length === 6) {
        // Simuler l'ajout par code
        addFriend({ 
          id: Date.now().toString(), 
          username: 'Nouvel ami', 
          avatar: '👤', 
          status: 'Hors ligne', 
          code: enteredCode 
        });
        setEnteredCode('');
      }
    };

    const copyCode = () => {
      navigator.clipboard.writeText(userCode);
      alert('📋 Code copié !');
    };

    return (
      <div className="min-h-screen bg-black pb-20">
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-1">Mes amis</h1>
            <p className="text-gray-400 text-sm">{friendsList.length} ami{friendsList.length > 1 ? 's' : ''} • {friendsList.filter(f => f.status === 'En ligne').length} en ligne</p>
          </div>

          {/* Section 1: Mes amis */}
          <div className="mb-6">
            <h2 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Liste d'amis
            </h2>
            <div className="space-y-2">
              {friendsList.map(friend => {
                const hasPendingInvite = pendingInvitations.find(inv => inv.friendId === friend.id && inv.status === 'pending');
                
                return (
                  <div key={friend.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center text-2xl">
                          {friend.avatar}
                        </div>
                        <div className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-white ${
                          friend.status === 'En ligne' ? 'bg-green-500' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold">{friend.username}</div>
                        <div className="text-gray-500 text-sm">{friend.status}</div>
                      </div>
                      {friend.status === 'En ligne' && (
                        <button 
                          onClick={() => sendGameInvite(friend)}
                          disabled={hasPendingInvite}
                          className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                            hasPendingInvite
                              ? 'bg-zinc-800 text-gray-400 cursor-not-allowed'
                              : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                        >
                          {hasPendingInvite ? (
                            <>
                              <Clock className="w-4 h-4" />
                              En attente
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4" />
                              Jouer
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Rechercher un ami */}
          <div className="mb-6">
            <h2 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Search className="w-5 h-5" />
              Rechercher un ami
            </h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Nom d'utilisateur..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {searchQuery && searchResults.length > 0 && (
                <div className="space-y-2 pt-3 border-t border-zinc-800">
                  <div className="text-gray-400 text-sm font-medium mb-2">Résultats ({searchResults.length})</div>
                  {searchResults.map(user => (
                    <div key={user.id} className="flex items-center gap-3 p-3 bg-black rounded-lg hover:bg-zinc-800 transition-colors">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                        {user.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">{user.username}</div>
                        <div className="text-gray-500 text-xs">Code: {user.code}</div>
                      </div>
                      <button 
                        onClick={() => addFriend(user)}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-1"
                      >
                        <UserPlus className="w-4 h-4" />
                        Ajouter
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {searchQuery && searchResults.length === 0 && (
                <div className="text-center py-6 text-gray-500 text-sm">
                  Aucun résultat pour "{searchQuery}"
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Code d'invitation */}
          <div className="mb-6">
            <h2 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Copy className="w-5 h-5" />
              Code d'invitation
            </h2>
            
            {/* Mon code */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-3">
              <div className="text-gray-400 text-sm font-medium mb-2">Mon code</div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-black border border-zinc-700 rounded-lg px-4 py-3">
                  <div className="text-2xl font-bold text-white tracking-widest font-mono">{userCode}</div>
                </div>
                <button 
                  onClick={copyCode}
                  className="px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copier
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-2">Partage ce code avec tes amis</p>
            </div>

            {/* Entrer un code */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <div className="text-gray-400 text-sm font-medium mb-2">Entrer un code</div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="ABCD12"
                  value={enteredCode}
                  onChange={(e) => setEnteredCode(e.target.value.toUpperCase())}
                  maxLength={6}
                  className="flex-1 px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-xl font-bold tracking-widest font-mono"
                />
                <button 
                  onClick={addFriendByCode}
                  disabled={enteredCode.length !== 6}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    enteredCode.length === 6
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>

          {/* Invitations en attente */}
          {pendingInvitations.filter(inv => inv.status === 'pending').length > 0 && (
            <div className="mb-6">
              <h2 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Invitations en attente ({pendingInvitations.filter(inv => inv.status === 'pending').length})
              </h2>
              <div className="space-y-2">
                {pendingInvitations
                  .filter(inv => inv.status === 'pending')
                  .map(invite => (
                    <div key={invite.id} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-yellow-600" />
                        <div className="flex-1">
                          <div className="text-white font-medium">En attente de {invite.friendName}</div>
                          <div className="text-gray-400 text-sm">Invitation envoyée</div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
        <BottomNav />
      </div>
    );
  };

  // Custom Dares View - VERSION SOBRE ET INTUITIVE
  const CustomDaresView = () => {
    const [editingDare, setEditingDare] = useState(null);

    const deleteDare = (id) => {
      if (window.confirm('Supprimer ce défi ?')) {
        setCustomDaresList(customDaresList.filter(d => d.id !== id));
      }
    };

    return (
      <div className="min-h-screen bg-black pb-20">
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-1">Mes défis personnalisés</h1>
            <p className="text-gray-400 text-sm">{customDaresList.length} défi{customDaresList.length > 1 ? 's' : ''} créé{customDaresList.length > 1 ? 's' : ''}</p>
          </div>

          {/* Bouton d'ajout simple */}
          <button 
            onClick={() => setShowCreateDareModal(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg p-5 mb-6 transition-all flex items-center justify-center gap-3"
          >
            <Plus className="w-6 h-6 text-white" />
            <span className="text-white font-semibold text-lg">Créer un nouveau défi</span>
          </button>

          {/* Liste des défis */}
          {customDaresList.length > 0 ? (
            <div className="space-y-3">
              <h2 className="text-white font-semibold mb-3">Mes créations</h2>
              {customDaresList.map((dare) => (
                <div key={dare.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      {dare.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold mb-1">{dare.title}</div>
                      <div className="text-gray-400 text-sm mb-2 line-clamp-2">{dare.content}</div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          dare.type === 'truth' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {dare.type === 'truth' ? 'Vérité' : 'Action'}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-gray-300 font-medium">
                          {dare.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button 
                        onClick={() => {
                          setEditingDare(dare);
                          setShowEditDareModal(true);
                        }}
                        className="w-9 h-9 bg-zinc-800 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                        title="Modifier"
                      >
                        <Edit className="w-4 h-4 text-gray-400" />
                      </button>
                      <button 
                        onClick={() => deleteDare(dare.id)}
                        className="w-9 h-9 bg-zinc-800 hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Aucun défi personnalisé</h3>
              <p className="text-gray-400 text-sm">Crée ton premier défi pour personnaliser l'expérience</p>
            </div>
          )}
        </div>
        {showCreateDareModal && <CreateDareModal />}
        {showEditDareModal && <CreateDareModal editingDare={editingDare} />}
        <BottomNav />
      </div>
    );
  };

  // Profile View - VERSION PERSONNALISÉE
  const ProfileView = () => (
    <div className="min-h-screen bg-black pb-20">
      <div className="p-6">
        {/* En-tête de profil */}
        <div className="text-center mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent blur-3xl"></div>
          <div className="relative">
            {currentUser?.photoURL ? (
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl shadow-blue-600/30 mb-4">
                <img src={currentUser.photoURL} alt="Profile" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-6xl border-4 border-blue-600 bg-gradient-to-br from-blue-600 to-blue-700 shadow-2xl shadow-blue-600/30 mb-4">
                {currentUser?.avatar || '👤'}
              </div>
            )}
            <h1 className="text-3xl font-black text-white mb-2">{currentUser?.username}</h1>
            {currentUser?.bio ? (
              <p className="text-gray-400 max-w-xs mx-auto">{currentUser.bio}</p>
            ) : (
              <p className="text-gray-500 italic text-sm">Aucune bio</p>
            )}
            <button
              onClick={() => setShowEditProfileModal(true)}
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg"
            >
              <Settings className="w-4 h-4" />
              Modifier le profil
            </button>
          </div>
        </div>

        {/* Statistiques détaillées */}
        <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-6 mb-6">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            Statistiques
          </h2>
          <div className="space-y-4">
            {[
              { label: 'Parties jouées', value: '12', icon: Play, color: 'text-purple-400' },
              { label: 'Défis complétés', value: '48', icon: Target, color: 'text-yellow-400' },
              { label: 'Amis', value: friendsList.length, icon: Users, color: 'text-blue-400' },
              { label: 'Temps de jeu', value: '2h 34m', icon: Clock, color: 'text-green-400' }
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
                <span className={`font-bold text-xl ${stat.color}`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-6 mb-6">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            Succès
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {['🥇', '🔥', '💯', '⭐', '🎯', '👑', '💎', '🚀'].map((badge, i) => (
              <div key={i} className={`aspect-square rounded-xl flex items-center justify-center text-4xl ${
                i < 4 ? 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg' : 'bg-gray-800 opacity-40'
              }`}>
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Paramètres rapides */}
        <div className="space-y-3 mb-6">
          <h2 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5 text-gray-400" />
            Paramètres
          </h2>
          {[
            { icon: Globe, label: t.language, value: language === 'fr' ? 'Français 🇫🇷' : 'English 🇬🇧', action: () => setLanguage(language === 'fr' ? 'en' : 'fr') },
            { icon: Bell, label: t.notifications, value: 'Activées' },
            { icon: CreditCard, label: t.subscription, value: hasSubscription ? 'Premium' : 'Gratuit', action: () => setCurrentView('subscription'), badge: hasSubscription ? <Crown className="w-4 h-4 text-yellow-500" /> : null }
          ].map((item, i) => (
            <button 
              key={i} 
              onClick={item.action}
              className="w-full bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-4 flex items-center justify-between hover:bg-gray-800/50 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-gray-400" />
                </div>
                <span className="text-white font-medium">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge}
                <span className="text-gray-400 text-sm">{item.value}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          ))}
        </div>

        {/* Déconnexion */}
        <button 
          onClick={() => { setIsAuthenticated(false); setCurrentView('login'); }} 
          className="w-full bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-red-500/20 transition-all"
        >
          <LogOut className="w-5 h-5 text-red-400" />
          <span className="text-red-400 font-semibold">{t.logout}</span>
        </button>
      </div>
      {showEditProfileModal && <EditProfileModal />}
      <BottomNav />
    </div>
  );

  // Router avec transitions
  const renderView = () => {
    if (!isAuthenticated) return <div className="animate-fade-in"><LoginView /></div>;
    
    const ViewComponent = (() => {
      switch(currentView) {
        case 'home': return <HomeView />;
        case 'friends': return <FriendsView />;
        case 'customDares': return <CustomDaresView />;
        case 'profile': return <ProfileView />;
        case 'selectPlayers': return <SelectPlayersView />;
        case 'selectMode': return <SelectModeView />;
        case 'selectCategories': return <SelectCategoriesView />;
        case 'game': return <GameView />;
        case 'subscription': return <SubscriptionView />;
        default: return <HomeView />;
      }
    })();
    
    return <div key={currentView} className="animate-fade-in">{ViewComponent}</div>;
  };

  return <div className="font-sans antialiased bg-black min-h-screen">{renderView()}</div>;
};

export default App;
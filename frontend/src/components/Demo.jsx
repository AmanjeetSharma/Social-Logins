import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const games = [
  {
    title: "Apex Legends",
    image: "https://wallpapers.com/images/high/apex-legends-octane-jump-art-l6h6r2t0k4mto9t8.webp",
    color: "bg-gradient-to-br from-red-600 to-purple-900",
    link: "https://www.ea.com/games/apex-legends",
  },
  {
    title: "Valorant",
    image: "https://wallpapers.com/images/high/valorant-jett-geometric-art-m36c81xdxun38lo5.webp",
    color: "bg-gradient-to-br from-red-500 to-black",
    link: "https://playvalorant.com/",
  },
  {
    title: "PUBG Mobile",
    image: "https://wallpapers.com/images/high/playerunknowns-battlegrounds-4k-0n7c3eey1trj13c8.webp",
    color: "bg-gradient-to-br from-yellow-600 to-gray-800",
    link: "https://www.pubgmobile.com/",
  },
  {
    title: "Clash of Clans",
    image: "https://wallpapers.com/images/high/clash-of-clans-archer-queen-pdmpyuq0gv4l7ujx.webp",
    color: "bg-gradient-to-br from-yellow-400 to-orange-600",
    link: "https://clashofclans.com/",
  },
  {
    title: "Fortnite",
    image: "https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg",
    color: "bg-gradient-to-br from-blue-500 to-purple-600",
    link: "https://www.epicgames.com/fortnite/en-US/home",
  },
  {
    title: "Genshin Impact",
    image: "https://wallpapers.com/images/high/cryo-swordsman-kamisato-ayaka-jkhszk5ah3x5q1iv.webp",
    color: "bg-gradient-to-br from-blue-400 to-teal-600",
    link: "https://genshin.hoyoverse.com/en/",
  },
];

const GameCard = ({ game, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative h-64 rounded-2xl overflow-hidden shadow-2xl ${game.color} cursor-default`}
    >
      <motion.img
        src={game.image}
        alt={game.title}
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70"
        whileHover={{ scale: 1.05, opacity: 0.8 }}
        transition={{ duration: 0.3 }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <motion.h3
          className="text-white text-3xl font-bold tracking-wider mb-6 select-none"
          whileHover={{ scale: 1.1 }}
        >
          {game.title}
        </motion.h3>
        <motion.a
          href={game.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 py-2 rounded-full font-bold shadow-lg cursor-pointer select-none"
        >
          Play Now
        </motion.a>
      </div>
    </motion.div>
  );
};

const Demo = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 5 + 1 + "px",
              height: Math.random() * 5 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
              PROTECTED ACCESS
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
            Elite Gaming Portal
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Welcome to the ultimate gaming experience. Your exclusive access has been verified.
          </p>
        </motion.div>

        {/* Game Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {games.map((game, index) => (
            <GameCard key={game.title} game={game} index={index} />
          ))}
        </div>

        {/* Featured Game */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative rounded-3xl overflow-hidden h-96 mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />
          <img
            src="https://wallpapers.com/images/high/grand-theft-auto-v-michael-riding-jetski-exvxleveuaxn3ev2.webp"
            alt="GTA V"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center p-12">
            <div>
              <motion.div
                className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block"
                whileHover={{ scale: 1.05 }}
              >
                FEATURED GAME
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Grand Theft Auto V
              </h2>
              <p className="text-lg text-gray-300 max-w-lg">
                Experience the sprawling city of Los Santos and engage in epic heists in this iconic open-world action game.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-white text-black px-8 py-3 rounded-full font-bold shadow-lg"
                onClick={() =>
                  window.open("https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/", "_blank")
                }
              >
                Play Now
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "10M+", label: "Active Players" },
            { value: "200+", label: "Tournaments" },
            { value: "24/7", label: "Support" },
            { value: "100%", label: "Gamer Verified" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl p-6 text-center shadow-lg"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Access Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center p-8 bg-gray-800 rounded-2xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">Access Granted</h3>
          <p className="text-gray-400">
            Your elite gaming profile has been successfully authenticated
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Demo;

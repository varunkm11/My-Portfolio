import { useState } from "react";
import { motion } from "motion/react";

const DownloadResumeButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate loading process
    setTimeout(() => {
      setIsDownloading(false);
      
      // Open Google Drive link in new tab (users can preview and download from there)
      const driveLink = 'https://drive.google.com/file/d/1OquHcs8-oplCihJfEeytwM2YJpGtpzh0/view?usp=sharing';
      window.open(driveLink, '_blank');
    }, 1000);
  };

  return (
    <motion.button
      className="relative group overflow-hidden bg-gradient-to-r from-aqua/10 to-mint/10 border border-aqua/30 rounded-xl px-8 py-4 font-medium text-base transition-all duration-300 hover:border-aqua/60 hover:shadow-xl hover:shadow-aqua/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleDownload}
      disabled={isDownloading}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background glow animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-aqua/20 to-mint/20"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.4 }}
      />

      {/* Button content */}
      <div className="relative flex items-center gap-3 text-neutral-300 group-hover:text-white transition-colors">
        {isDownloading ? (
          <>
            <motion.div
              className="w-5 h-5 border-2 border-aqua border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-lg">Opening Resume...</span>
          </>
        ) : (
          <>
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ 
                y: isHovered ? [0, -3, 0] : 0 
              }}
              transition={{ 
                duration: 0.8, 
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </motion.svg>
            <span className="text-lg font-semibold">Download Resume</span>
          </>
        )}
      </div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "200%" : "-100%" }}
        transition={{ duration: 0.8, delay: isHovered ? 0.2 : 0 }}
      />
    </motion.button>
  );
};

export default DownloadResumeButton;

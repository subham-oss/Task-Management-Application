import { useState } from "react";
import type { ChangeEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Upload, Camera, Check, 
  X, Image as ImageIcon, Link as LinkIcon 
} from "lucide-react";
import Sidebar from "../components/Sidebar";

// Preset avatars for quick selection
const presetAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
];

export default function UpdateAvatar() {
  const { id = "default-user" } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Avatar state
  const [avatarPreview, setAvatarPreview] = useState<string>(presetAvatars[0]);
  const [customUrl, setCustomUrl] = useState<string>("");

  // Handle file upload from local machine
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setAvatarPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle custom URL apply
  const handleApplyUrl = () => {
    if (customUrl.trim()) {
      setAvatarPreview(customUrl.trim());
    }
  };

  // Save changes & render previous page
  const handleSave = () => {
    // 1. Save to localStorage or global state context
    localStorage.setItem("user_avatar", avatarPreview);
    
    // 2. Navigate back to the previous page
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex bg-transparent transition-colors duration-300">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Workspace Canvas */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 overflow-y-auto max-h-screen space-y-8 relative z-10">
        
        {/* Header with Back Button */}
        <header className="flex items-center gap-4 p-6 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
          <button
            onClick={() => navigate(-1)}
            className="p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 transition group cursor-pointer"
            title="Return to previous page"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <div>
            <h1 className="text-3xl font-black tracking-tight">Update Profile Avatar</h1>
            <p className="text-sm opacity-60 mt-0.5 font-medium">Upload a custom image, provide a URL, or pick a preset avatar.</p>
          </div>
        </header>

        {/* Form Grid Area */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl p-6 sm:p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md space-y-8"
        >
          
          {/* Avatar Preview Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
            <div className="relative group shrink-0">
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="w-32 h-32 rounded-3xl object-cover ring-4 ring-blue-500/30 shadow-xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera size={24} className="text-white" />
              </div>
            </div>

            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold">Live Canvas Preview</h3>
              <p className="text-xs opacity-60 max-w-xs font-medium leading-relaxed">
                This image will represent your identity across sidebars, team directories, and active task cards.
              </p>
            </div>
          </div>

          {/* Option A: Upload File */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider opacity-70 flex items-center gap-2">
              <Upload size={14} className="text-blue-500" />
              Option 1: Upload Image File
            </label>
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-black/10 dark:border-white/10 hover:border-blue-500/50 rounded-2xl p-6 cursor-pointer bg-black/5 dark:bg-white/5 transition">
              <ImageIcon size={28} className="opacity-40 mb-2" />
              <span className="text-sm font-semibold">Click or drag image to upload</span>
              <span className="text-xs opacity-50 mt-1">PNG, JPG, or WEBP up to 5MB</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Option B: Custom Image URL */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider opacity-70 flex items-center gap-2">
              <LinkIcon size={14} className="text-purple-500" />
              Option 2: Provide Image URL
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="https://example.com/my-photo.jpg"
                className="flex-1 px-4 py-3 text-sm rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 focus:outline-none focus:border-blue-500/50 transition text-current placeholder:opacity-40"
              />
              <button
                type="button"
                onClick={handleApplyUrl}
                className="px-5 py-3 rounded-xl bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition text-sm font-semibold cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Option C: Select from Presets */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider opacity-70">
              Option 3: Choose from Presets
            </label>
            <div className="flex flex-wrap gap-4">
              {presetAvatars.map((url, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setAvatarPreview(url)}
                  className={`relative rounded-2xl overflow-hidden border-2 transition cursor-pointer ${
                    avatarPreview === url
                      ? "border-blue-500 scale-105 shadow-md shadow-blue-500/20"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={url} alt={`Preset ${idx + 1}`} className="w-16 h-16 object-cover" />
                  {avatarPreview === url && (
                    <div className="absolute inset-0 bg-blue-600/30 flex items-center justify-center">
                      <Check size={18} className="text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Save / Cancel Action Bar */}
          <div className="pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 transition text-sm font-semibold cursor-pointer"
            >
              <X size={16} />
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-semibold shadow-md shadow-blue-600/10 cursor-pointer"
            >
              <Check size={16} />
              Save Avatar
            </button>
          </div>

        </motion.div>

      </main>
    </div>
  );
}

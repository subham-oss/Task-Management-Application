import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  UserPlus,
  Mail,
  Shield,
  Check,
  Activity,
  X,
  ShieldCheck,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import api from "../api/axios";

interface User {
  _id: string;
  Full_name: string;
  email: string;
}
interface Friend {
  _id: string;
  requester: User;
  receiver: User;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
}
interface FriendRequest {
  _id: string;
  requester: User;
  receiver: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
}

export default function TeamMembers() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [loading, setLoading] = useState(true);
  const [sendingRequest, setSendingRequest] = useState(false);
  const [processingRequestId, setProcessingRequestId] = useState<string | null>(
    null,
  );
  const [error, setError] = useState("");
  const getCurrentUserId = (): string | null => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return null;
      }
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.userId || null;
    } catch (error) {
      console.error("Unable to read current user:", error);
      return null;
    }
  };
  const currentUserId = getCurrentUserId();
  const fetchFriends = async () => {
    try {
      const response = await api.get("/api/friend/getfriend");
      setFriends(response.data.friends || []);
    } catch (error: any) {
      console.error("Error fetching friends:", error);
      setError(error?.response?.data?.message || "Failed to load friends.");
    }
  };
  const fetchFriendRequests = async () => {
    try {
      const response = await api.get("/api/friend/getfriendrequests");
      setFriendRequests(response.data.requests || []);
    } catch (error: any) {
      console.error("Error fetching friend requests:", error);
      setFriendRequests([]);
    }
  };
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError("");
        await Promise.all([fetchFriends(), fetchFriendRequests()]);
      } catch (error) {
        console.error("Error loading team data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  const handleSendFriendRequest = async () => {
    if (!receiverId.trim()) {
      setError("Please enter a receiver ID.");
      return;
    }
    if (receiverId.trim() === currentUserId) {
      setError("You cannot send a friend request to yourself.");
      return;
    }
    try {
      setSendingRequest(true);
      setError("");
      await api.post("/api/friend/sendfriendrequest", {
        receiverId: receiverId.trim(),
      });
      setReceiverId("");
      await fetchFriendRequests();
      alert("Friend request sent successfully.");
    } catch (error: any) {
      console.error("Error sending friend request:", error);
      setError(
        error?.response?.data?.message || "Failed to send friend request.",
      );
    } finally {
      setSendingRequest(false);
    }
  };
  const handleAcceptFriendRequest = async (friendId: string) => {
    try {
      setProcessingRequestId(friendId);
      setError("");
      await api.post(`/api/friend/acceptfriendrequest/${friendId}`);
      await Promise.all([fetchFriends(), fetchFriendRequests()]);
    } catch (error: any) {
      console.error("Error accepting friend request:", error);
      setError(
        error?.response?.data?.message || "Failed to accept friend request.",
      );
    } finally {
      setProcessingRequestId(null);
    }
  };
  const handleRejectFriendRequest = async (friendId: string) => {
    try {
      setProcessingRequestId(friendId);
      setError("");
      await api.post(`/api/friend/rejectfriendrequest/${friendId}`);
      await fetchFriendRequests();
    } catch (error: any) {
      console.error("Error rejecting friend request:", error);
      setError(
        error?.response?.data?.message || "Failed to reject friend request.",
      );
    } finally {
      setProcessingRequestId(null);
    }
  };
  const getFriendUser = (friend: Friend): User | null => {
    if (!currentUserId) {
      return friend.requester || friend.receiver;
    }
    if (friend.requester?._id === currentUserId) {
      return friend.receiver;
    }
    return friend.requester;
  };
  const filteredFriends = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) {
      return friends;
    }
    return friends.filter((friend) => {
      const friendUser = getFriendUser(friend);
      if (!friendUser) {
        return false;
      }
      return (
        friendUser.Full_name?.toLowerCase().includes(query) ||
        friendUser.email?.toLowerCase().includes(query)
      );
    });
  }, [friends, searchQuery, currentUserId]);

  if (loading) {
    return (
      <div className="min-h-screen flex bg-transparent">
        
        <Sidebar />
        <main className="flex-1 min-w-0 p-4 sm:p-6 md:p-8">
          
          <div className="min-h-[70vh] flex items-center justify-center">
            
            <div className="text-center">
              
              <div className="w-10 h-10 mx-auto mb-4 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin" />
              <p className="text-sm font-medium opacity-60">
                
                Loading team members...
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-transparent transition-colors duration-300">
      
   <Sidebar />
      <main className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 overflow-y-auto max-h-screen space-y-8 relative z-10">
        
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
          
          <div>
            
            <h1 className="text-3xl font-black tracking-tight">
              
              Team Members
            </h1>
            <p className="text-sm opacity-60 mt-1 font-medium">
              
              Manage your friends, team members, and connection requests.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 text-blue-400 text-sm font-semibold">
            
            <ShieldCheck size={17} /> {friends.length} Friends
          </div>
        </header>
        {error && (
          <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400">
            
            <p className="text-sm font-medium"> {error} </p>
            <button
              onClick={() => setError("")}
              className="shrink-0 p-1 rounded-lg hover:bg-red-500/10 transition"
            >
              
              <X size={16} />
            </button>
          </div>
        )}
        <section className="p-5 sm:p-6 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
          
          <div className="flex items-center gap-3 mb-4">
            
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              
              <UserPlus size={19} className="text-blue-500" />
            </div>
            <div>
              
              <h2 className="font-bold"> Add Team Member </h2>
              <p className="text-xs opacity-50">
                
                Send a friend request using their user ID.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            
            <input
              type="text"
              value={receiverId}
              onChange={(e) => setReceiverId(e.target.value)}
              placeholder="Enter user ID"
              className="flex-1 px-4 py-3 text-sm rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 focus:outline-none focus:border-blue-500/50 transition"
            />
            <button
              onClick={handleSendFriendRequest}
              disabled={sendingRequest || !receiverId.trim()}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              
              <UserPlus size={17} />
              {sendingRequest ? "Sending..." : "Send Request"}
            </button>
          </div>
        </section>
        {friendRequests.length > 0 && (
          <section>
            
            <div className="flex items-center justify-between mb-4">
              
              <div>
                
                <h2 className="text-xl font-bold"> Friend Requests </h2>
                <p className="text-sm opacity-50 mt-1">
                  
                  People who want to connect with you.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold">
                
                {friendRequests.length}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              
              <AnimatePresence mode="popLayout">
                
                {friendRequests.map((request) => (
                  <motion.div
                    key={request._id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-5 rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md"
                  >
                    
                    <div className="flex items-center gap-4">
                      
                      <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                        
                        <UserPlus size={24} className="text-blue-500" />
                      </div>
                      <div className="min-w-0">
                        
                        <h3 className="font-bold truncate">
                          
                          {request.requester.Full_name}
                        </h3>
                        <p className="text-sm opacity-50 truncate mt-1">
                          
                          {request.requester.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-5 pt-4 border-t border-black/5 dark:border-white/5">
                      
                      <button
                        onClick={() => handleAcceptFriendRequest(request._id)}
                        disabled={processingRequestId === request._id}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition text-sm font-semibold disabled:opacity-50"
                      >
                        
                        <Check size={15} /> Accept
                      </button>
                      <button
                        onClick={() => handleRejectFriendRequest(request._id)}
                        disabled={processingRequestId === request._id}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 transition text-sm font-semibold disabled:opacity-50"
                      >
                        
                        <X size={15} /> Reject
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>
        )}
        <section className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
          
          <div className="relative w-full">
            
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none"
              size={18}
            />
            <input
              type="text"
              placeholder="Search friends by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 focus:outline-none focus:border-blue-500/50 transition placeholder:opacity-50"
            />
          </div>
        </section>
        <section>
          
          <div className="flex items-center justify-between mb-5">
            
            <div>
              
              <h2 className="text-xl font-bold"> My Friends </h2>
              <p className="text-sm opacity-50 mt-1">
                
                Your accepted team connections.
              </p>
            </div>
            <span className="text-sm opacity-50">
              
              {filteredFriends.length} members
            </span>
          </div>
          {/* Friend Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            
            <AnimatePresence mode="popLayout">
              
              {filteredFriends.map((friend) => {
                const friendUser = getFriendUser(friend);
                if (!friendUser) {
                  return null;
                }
                return (
                  <motion.div
                    key={friend._id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md flex flex-col justify-between group shadow-sm relative overflow-hidden"
                  >
                    
                    {/* Top */}
                    <div>
                      
                      <div className="flex items-start justify-between gap-4 mb-5">
                        
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center ring-2 ring-blue-500/10">
                          
                          <ShieldCheck
                            size={29}
                            className="text-blue-500"
                          />
                        </div>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                          
                          <Activity size={10} /> Accepted
                        </span>
                      </div>
                      {/* Name */}
                      <div className="space-y-1">
                        
                        <h3 className="text-lg font-bold tracking-tight">
                          
                          {friendUser.Full_name}
                        </h3>
                        <p className="text-xs font-semibold text-blue-500/80 uppercase tracking-wider flex items-center gap-1.5">
                          
                          <Shield size={12} /> Team Member
                        </p>
                      </div>
                      {/* User Info */}
                      <div className="mt-5 space-y-3 text-xs font-medium opacity-70">
                        
                        <div className="flex items-center gap-2">
                          
                          <Mail size={14} className="opacity-60" />
                          <span className="truncate">
                            
                            {friendUser.email}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-end">
                      
                      <a
                        href={`mailto:${friendUser.email}`}
                        title={`Contact ${friendUser.Full_name}`}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-blue-600/10 border border-black/5 dark:border-white/5 hover:text-blue-400 transition cursor-pointer text-xs font-semibold"
                      >
                        
                        <Mail size={14} /> Contact
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
          {filteredFriends.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-16 text-center border border-dashed border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 rounded-3xl backdrop-blur-md"
            >
              
              <Shield className="mx-auto opacity-30 mb-4" size={32} />
              <h4 className="text-lg font-bold">
                
                {searchQuery ? "No friends found" : "No friends yet"}
              </h4>
              <p className="text-sm opacity-50 font-medium max-w-sm mx-auto mt-1">
                
                {searchQuery
                  ? "Try searching with a different name or email."
                  : "Send a friend request to start building your team."}
              </p>
            </motion.div>
          )}
        </section>
      </main>
    </div>
  );
}

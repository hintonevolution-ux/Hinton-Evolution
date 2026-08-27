import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Mail, Tag, DollarSign, FileText, Phone, Trash2, BarChart2, PieChart as PieChartIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from 'recharts';
import { collection, deleteDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { getFirebaseDb } from '../lib/firebase';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  description?: string;
  createdAt: string;
}

export default function AdminSubmissions({ onClose }: { onClose: () => void }) {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(getFirebaseDb(), 'inquiries'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate().toISOString() || new Date().toISOString()
      })) as Inquiry[];
      setInquiries(data);
      setIsLoading(false);
    }, (error) => {
      setErrorMsg(error.message);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      setDeletingId(id);
      await deleteDoc(doc(getFirebaseDb(), 'inquiries', id));
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      setDeletingId(null);
    }
  };

  // Analytics Calculations
  const analytics = useMemo(() => {
    const totalInquiries = inquiries.length;

    // Inquiries per day
    const inquiriesPerDayMap = inquiries.reduce((acc, curr) => {
      const d = new Date(curr.createdAt);
      if (isNaN(d.getTime())) return acc;
      const dateStr = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
      acc[dateStr] = (acc[dateStr] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const inquiriesPerDay = Object.keys(inquiriesPerDayMap)
      .sort() // simple string sort works for YYYY-MM-DD
      .map(key => {
         const [, m, d] = key.split('-');
         const shortDate = `${m}/${d}`; // quick format
         return { date: key, shortDate, count: inquiriesPerDayMap[key] };
      });

    // Most requested services
    const servicesMap = inquiries.reduce((acc, curr) => {
      const service = curr.projectType || 'Other';
      acc[service] = (acc[service] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const servicesData = Object.keys(servicesMap)
      .map(key => ({ name: key, value: servicesMap[key] }))
      .sort((a, b) => b.value - a.value);
    
    // Top service name
    const topService = servicesData.length > 0 ? servicesData[0].name : 'N/A';

    return { totalInquiries, inquiriesPerDay, servicesData, topService };
  }, [inquiries]);

  const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#f43f5e', '#06b6d4', '#eab308'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-md"
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-[#0B0A10] w-full max-w-6xl h-[95vh] md:h-[90vh] rounded-2xl overflow-hidden flex flex-col relative border border-white/10 shadow-2xl shadow-indigo-500/10"
      >
        <div className="px-8 py-6 border-b border-indigo-500/20 flex justify-between items-center bg-gradient-to-b from-[#0F0E17] to-[#0B0A10] relative overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
          <div className="relative z-10 flex gap-4 items-center">
             <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
               <BarChart2 size={20} />
             </div>
             <div>
               <h2 className="text-2xl font-black text-white tracking-tight">Analytics & Submissions</h2>
               <p className="text-xs font-mono text-indigo-400/70 tracking-widest uppercase mt-1">Admin Dashboard</p>
             </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 text-white/50 hover:text-white transition-all relative z-10"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#0B0A10] relative">
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0F0E17] to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-8">
            {isLoading && inquiries.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 gap-4">
                <div className="w-10 h-10 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
                <p className="text-xs font-mono uppercase tracking-widest text-indigo-400/50 animate-pulse">Decrypting data...</p>
              </div>
            ) : errorMsg ? (
              <div className="text-center py-20 px-6 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                <p className="text-rose-400 font-mono text-sm max-w-md mx-auto">Error: {errorMsg}</p>
              </div>
            ) : (
              <>
                {/* Analytics Dash */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#12111A] border border-white/5 rounded-2xl p-6 flex items-center gap-6 relative overflow-hidden">
                     <div className="absolute inset-0 bg-indigo-500/5 pointer-events-none" />
                     <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 relative z-10">
                        <FileText size={20} />
                     </div>
                     <div className="relative z-10">
                       <p className="text-xs font-mono text-white/50 tracking-widest uppercase mb-1">Total Submissions</p>
                       <p className="text-3xl font-black text-white">{analytics.totalInquiries}</p>
                     </div>
                  </div>
                  <div className="bg-[#12111A] border border-white/5 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden md:col-span-2">
                     <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />
                     <div className="relative z-10 flexItems gap-4 flex w-full">
                       <div className="flex-1">
                         <p className="text-xs font-mono text-white/50 tracking-widest uppercase mb-1">Top Requested Service</p>
                         <p className="text-2xl font-black text-white truncate text-emerald-400">{analytics.topService}</p>
                       </div>
                       <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                          <Tag size={20} />
                       </div>
                     </div>
                  </div>
                </div>

                {analytics.totalInquiries > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#12111A] border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col h-80">
                      <h3 className="text-sm font-black text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                         <BarChart2 size={16} className="text-indigo-400" /> Inquiries Over Time
                      </h3>
                      <div className="flex-1 w-full min-h-0">
                         <ResponsiveContainer width="100%" height="100%">
                           <BarChart data={analytics.inquiriesPerDay}>
                             <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                             <XAxis dataKey="shortDate" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                             <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
                             <RechartsTooltip 
                               cursor={{ fill: '#ffffff05' }}
                               contentStyle={{ backgroundColor: '#0B0A10', border: '1px solid #ffffff10', borderRadius: '8px' }}
                               itemStyle={{ color: '#818cf8' }}
                             />
                             <Bar dataKey="count" fill="#6366f1" radius={[4, 4, 0, 0]} />
                           </BarChart>
                         </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="bg-[#12111A] border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col h-80">
                      <h3 className="text-sm font-black text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                         <PieChartIcon size={16} className="text-emerald-400" /> Services Breakdown
                      </h3>
                      <div className="flex-1 w-full min-h-0 relative">
                         {analytics.servicesData.length > 0 ? (
                           <ResponsiveContainer width="100%" height="100%">
                             <PieChart>
                               <Pie
                                 data={analytics.servicesData}
                                 cx="50%"
                                 cy="50%"
                                 innerRadius={60}
                                 outerRadius={80}
                                 paddingAngle={5}
                                 dataKey="value"
                               >
                                 {analytics.servicesData.map((entry, index) => (
                                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                 ))}
                               </Pie>
                               <RechartsTooltip 
                                 contentStyle={{ backgroundColor: '#0B0A10', border: '1px solid #ffffff10', borderRadius: '8px' }}
                                 itemStyle={{ color: '#fff' }}
                               />
                             </PieChart>
                           </ResponsiveContainer>
                         ) : (
                           <p className="text-white/30 text-sm flex items-center justify-center h-full">Not enough data</p>
                         )}
                         <div className="absolute right-0 top-0 bottom-0 w-32 flex flex-col justify-center gap-2 pointer-events-none">
                            {analytics.servicesData.slice(0, 5).map((entry, i) => (
                               <div key={i} className="flex flex-col">
                                 <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                                    <span className="text-[10px] text-white/70 font-mono uppercase truncate">{entry.name}</span>
                                 </div>
                               </div>
                            ))}
                         </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submissions List */}
                <div className="mt-4">
                  <h3 className="text-lg font-black text-white tracking-tight mb-6">Recent Submissions</h3>
                  {inquiries.length === 0 ? (
                    <div className="text-center py-20 rounded-2xl border border-white/5 bg-white/[0.02]">
                      <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4 text-white/20">
                        <Mail size={24} />
                      </div>
                      <h3 className="text-lg font-medium text-white mb-2 tracking-tight">Inbox Zero</h3>
                      <p className="text-white/40 text-sm max-w-sm mx-auto">You don't have any inquiries yet. New submissions will appear here automatically.</p>
                    </div>
                  ) : (
                    <div className="grid gap-6">
                      <AnimatePresence mode="popLayout">
                        {inquiries.map((inquiry) => (
                          <motion.div 
                            key={inquiry.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                            className="bg-[#12111A] border border-white/5 rounded-2xl p-6 hover:border-indigo-500/30 transition-all shadow-lg hover:shadow-indigo-500/10 relative overflow-hidden group"
                          >
                            <div className="absolute top-0 right-0 p-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                              <button
                                onClick={(e) => handleDelete(inquiry.id, e)}
                                disabled={deletingId === inquiry.id}
                                className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all disabled:opacity-50"
                                title="Delete inquiry"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
                              <div className="md:col-span-5 space-y-5">
                                <div className="flex gap-4">
                                  <div className="w-10 h-10 shrink-0 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                    <span className="font-bold text-sm tracking-widest uppercase">{inquiry.name.slice(0, 2)}</span>
                                  </div>
                                  <div>
                                    <p className="font-semibold text-white tracking-tight text-lg mb-1">{inquiry.name}</p>
                                    <div className="flex items-center gap-2 text-indigo-400/80 text-sm">
                                      <Mail size={14} />
                                      <a href={`mailto:${inquiry.email}`} className="hover:text-indigo-300 transition-colors">{inquiry.email}</a>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-2 text-white/50 text-sm bg-black/20 p-3 rounded-xl border border-white/5 w-max">
                                  <Phone size={14} />
                                  <a href={`tel:${inquiry.phone}`} className="hover:text-white transition-colors">{inquiry.phone || 'No phone provided'}</a>
                                </div>
                              </div>

                              <div className="md:col-span-7 flex flex-col justify-between">
                                <div className="space-y-4 mb-6">
                                  <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium tracking-wide">
                                      <Tag size={12} /> {inquiry.projectType}
                                    </span>
                                    {inquiry.budget && (
                                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wide">
                                        <DollarSign size={12} /> {inquiry.budget}
                                      </span>
                                    )}
                                  </div>
                                  
                                  {inquiry.description && (
                                    <div className="bg-[#0B0A10] p-4 rounded-xl border border-white/5">
                                      <p className="text-sm leading-relaxed text-white/70">
                                        {inquiry.description}
                                      </p>
                                    </div>
                                  )}
                                </div>
                                
                                <div className="flex items-center gap-2 text-white/30 text-xs font-mono pt-4 border-t border-white/5">
                                  <Calendar size={12} />
                                  <span>
                                    {new Date(inquiry.createdAt).toLocaleString(undefined, { 
                                      dateStyle: 'medium', 
                                      timeStyle: 'short' 
                                    }) || 'Just now'}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

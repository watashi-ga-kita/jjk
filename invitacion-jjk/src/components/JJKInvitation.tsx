import { useState } from 'react';
import jjk from '../assets/jjk.jpg';
import gato from '../assets/gato.png';
import { Film, Calendar, Clock, MapPin } from 'lucide-react';

export default function JJKInvitation() {
    const [hasAccepted, setHasAccepted] = useState(false);
    const [hasRejected, setHasRejected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleAccept = () => {
        setIsLoading(true);
        setTimeout(() => {
            setHasAccepted(true);
            setIsLoading(false);
        }, 600);
    };

    const handleReject = () => {
        setIsLoading(true);
        setTimeout(() => {
            setHasRejected(true);
            setIsLoading(false);
        }, 600);
    };

    if (hasRejected) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-950 via-slate-900 to-black flex items-center justify-center p-4">
                <div className="text-center space-y-6">
                    <img src={gato} alt="Sad Reaction" />
                </div>
            </div>
        );
    }

    if (hasAccepted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-gradient-to-br from-blue-900/40 to-slate-900/40 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 shadow-2xl">
                    <div className="text-center space-y-6">
                        <h2 className="text-3xl font-bold text-white">Excelente</h2>
                        <p className="text-cyan-200 text-lg">
                            Paso por ti saliendo del jalecillo
                        </p>
                        <p className="text-sm text-slate-300">
                            Ya compré palomitas 🍿
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 overflow-hidden relative">
            {/* Animated background with JJK colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-slate-900 to-black"></div>

            {/* Red accent overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-950/20 via-transparent to-cyan-950/20"></div>

            {/* Particles effect with JJK colors */}
            <div className="absolute inset-0 opacity-40">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full animate-pulse ${i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-red-500' : 'bg-blue-400'
                            }`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Glowing orbs */}
            <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 bg-red-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 lg:p-6">
                {isLoading && (
                    <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 rounded-2xl">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                            <p className="text-white text-sm">Veamos...</p>
                        </div>
                    </div>
                )}
                {/* Header */}
                <div className="text-center mb-4 space-y-2 lg:mb-6 w-full">
                    <Film className="w-10 h-10 lg:w-11 lg:h-11 text-cyan-400 mx-auto animate-bounce drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                    <h1 className="text-xl lg:text-3xl font-bold text-white tracking-wider drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                        INVITACIÓN GRACIOSA
                    </h1>
                    <div className="h-1 w-20 lg:w-28 bg-gradient-to-r from-red-500 via-cyan-400 to-blue-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
                </div>

                {/* Container for desktop layout */}
                <div className="w-full max-w-5xl flex flex-col lg:flex-row lg:items-stretch lg:gap-6 items-center justify-center mx-auto">
                    {/* Movie Poster */}
                    <div className="relative mb-4 lg:mb-0 lg:flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-red-600/30 blur-2xl opacity-60 animate-pulse"></div>
                        <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-red-500/20 rounded-2xl blur"></div>
                        <img
                            src={jjk}
                            alt="Jujutsu Kaisen Execution"
                            className="relative rounded-2xl shadow-2xl w-full max-w-[280px] lg:max-w-[360px] border-2 border-cyan-500/30 transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Info Card */}
                    <div className="w-full max-w-sm lg:max-w-md lg:flex-1 bg-gradient-to-br from-slate-900/90 to-blue-950/90 backdrop-blur-xl rounded-3xl p-5 lg:p-10 border border-cyan-500/20 shadow-2xl shadow-cyan-900/20 mb-4 lg:mb-0 flex flex-col justify-center">

                        <div className="space-y-4 lg:space-y-10">
                            <div className="flex items-center gap-3 text-slate-200 bg-slate-950/50 p-3 lg:p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-colors">
                                <Calendar className="w-5 h-5 lg:w-9 lg:h-9 text-cyan-400 flex-shrink-0 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                                <div>
                                    <p className="text-xs lg:text-base text-cyan-300/80">Fecha</p>
                                    <p className="font-semibold text-white text-sm lg:text-2xl">Jueves 20 Noviembre</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-slate-200 bg-slate-950/50 p-3 lg:p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-colors">
                                <Clock className="w-5 h-5 lg:w-9 lg:h-9 text-cyan-400 flex-shrink-0 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                                <div>
                                    <p className="text-xs lg:text-base text-cyan-300/80">Hora</p>
                                    <p className="font-semibold text-white text-sm lg:text-2xl">5:50 p.m.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-slate-200 bg-slate-950/50 p-3 lg:p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-colors">
                                <MapPin className="w-5 h-5 lg:w-9 lg:h-9 text-cyan-400 flex-shrink-0 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                                <div>
                                    <p className="text-xs lg:text-base text-cyan-300/80">Lugar</p>
                                    <p className="font-semibold text-white text-sm lg:text-2xl">Altama</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* CTA Button - Below both sections on desktop */}
                <div className="w-full max-w-5xl flex flex-col items-center mt-4 lg:mt-6 gap-3">
                    <button
                        onClick={handleAccept}
                        disabled={isLoading}
                        className={`w-full max-w-sm lg:max-w-md bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 lg:py-3.5 px-8 rounded-full shadow-2xl shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-cyan-400/50 ${isLoading ? 'opacity-60 pointer-events-none' : ''}`}
                    >
                        <span className="text-base lg:text-lg">Hell yeah</span>
                    </button>

                    <button
                        onClick={handleReject}
                        disabled={isLoading}
                        className={`w-full max-w-xs lg:max-w-sm bg-gradient-to-r from-red-600/80 to-slate-600/80 hover:from-red-500 hover:to-slate-500 text-white font-semibold py-2.5 lg:py-3 px-6 rounded-full shadow-xl shadow-red-500/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 border border-red-400/30 ${isLoading ? 'opacity-60 pointer-events-none' : ''}`}
                    >
                        <span className="text-sm lg:text-base">Nah gg</span>
                    </button>

                    <p className="text-cyan-300/80 text-xs lg:text-sm mt-1 text-center drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                        Absolute Cinema
                    </p>
                </div>
            </div>
        </div>
    );
}
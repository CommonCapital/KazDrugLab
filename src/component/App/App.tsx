'use client'

import DefaultLayout from "@/component/Layout/DefaultLayout";
import { Metadata } from "next";
import { useEffect, useState } from 'react';
import {
  Microscope,
  Dna,
  Atom,
  FlaskConical,
  MessageSquare,
  Search,
  Upload,
  Database,
  Zap,
  Users,
  Globe,
  TrendingUp,
  ChevronRight,
  Sparkles,
  Activity,
  Lock,
  BarChart3,
  View,
  X,
  Menu
} from 'lucide-react';
import { useRouter } from "next/navigation";
type Props = {metadata: Metadata}
 
const App = ({metadata}: Props) => {
    const [activeSection, setActiveSection] = useState('home');
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
     const router = useRouter()
     useEffect(() => {
        if (activeSection === 'home') {
            router.push("/")
        } else {
        router.push(`/${activeSection}`)}
     }, [activeSection, setActiveSection]);
  return    (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
  <nav className=" top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"></div>
            <div className="relative bg-gradient-to-br from-cyan-400 to-blue-600 p-1.5 sm:p-2 rounded-lg sm:rounded-xl">
              <Microscope className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              KazDrugLab
            </h1>
            <p className="text-[10px] sm:text-xs text-slate-400 hidden xs:block">{metadata.title}</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => setActiveSection('home')}
            className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveSection('molecule-bank')}
            className={`text-sm font-medium transition-colors ${activeSection === 'platform' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
          >
            Platform
          </button>
          <button
            onClick={() => setActiveSection('research')}
            className={`text-sm font-medium transition-colors ${activeSection === 'research' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
          >
            Research Tools
          </button>
          <button
            onClick={() => setActiveSection('message')}
            className={`text-sm font-medium transition-colors ${activeSection === 'collaboration' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
          >
            Collaboration
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden sm:block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25">
            Get Started
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>

    {mobileMenuOpen && (
      <div className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-t border-slate-800/50">
        <div className="px-4 py-4 space-y-3">
          <button
            onClick={() => { setActiveSection('home'); setMobileMenuOpen(false); }}
            className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeSection === 'home' ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
          >
            Home
          </button>
          <button
            onClick={() => { setActiveSection('molecule-bank'); setMobileMenuOpen(false); }}
            className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeSection === 'platform' ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
          >
            Platform
          </button>
          <button
            onClick={() => { setActiveSection('research'); setMobileMenuOpen(false); }}
            className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeSection === 'research' ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
          >
            Research Tools
          </button>
          <button
            onClick={() => { setActiveSection('message'); setMobileMenuOpen(false); }}
            className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeSection === 'collaboration' ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
          >
            Collaboration
          </button>
          <div className="pt-3 border-t border-slate-800/50">
            <button className="block w-full px-4 py-3 text-sm font-medium text-center text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50">
              Sign In
            </button>
          </div>
        </div>
      </div>
    )}
  </nav>

  <main className="pt-16 sm:pt-20 lg:pt-24">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm text-cyan-400 font-medium">Powered by NVIDIA AI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4">
            Accelerate{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Molecular Discovery
            </span>
            {' '}with AI
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed mb-8 sm:mb-10 px-4">
            AI-powered platform for 3D biomolecular structure prediction, binding affinity estimation,
            molecular generation, and real-time collaborative drug discovery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-2">
              <span className="font-semibold">Launch Platform</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              <span className="font-semibold">Watch Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">250K+</div>
              <div className="text-xs sm:text-sm text-slate-400">Molecules in Bank</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">98.7%</div>
              <div className="text-xs sm:text-sm text-slate-400">Binding Affinity Accuracy</div>
            </div>
          
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1">50ms</div>
              <div className="text-xs sm:text-sm text-slate-400">Avg Response Time</div>
            </div>
          </div>
        </div>

        <div className="relative px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-slate-950/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-slate-800/30">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-cyan-500/10 rounded-lg">
                    <Database className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold">Molecular Bank</h3>
                    <p className="text-xs sm:text-sm text-slate-400">Comprehensive molecule database</p>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-slate-900/50 rounded-lg p-2.5 sm:p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm text-slate-400">3D Structure Prediction</span>
                      <span className="text-[10px] sm:text-xs text-cyan-400">Active</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 sm:h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 sm:h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-2.5 sm:p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm text-slate-400">Binding Affinity</span>
                      <span className="text-[10px] sm:text-xs text-green-400">Complete</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 sm:h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-1.5 sm:h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-slate-800/30">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-blue-500/10 rounded-lg">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold">AI-Powered Modeling</h3>
                    <p className="text-xs sm:text-sm text-slate-400">Reverse diffusion & SMILES generation</p>
                  </div>
                </div>
                <div className="flex items-end gap-1 sm:gap-2 h-24 sm:h-32">
                  {[65, 72, 58, 81, 69, 88, 76, 84, 79, 91, 85, 87].map((height, idx) => (
                    <div key={idx} className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Advanced Research{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto px-4">
            End-to-end AI tools for modern drug discovery and molecular research
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="group bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-slate-900/50 hover:border-cyan-500/30 transition-all cursor-pointer">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Dna className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">3D Biomolecular Prediction</h4>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-3 sm:mb-4">
              Predict the three-dimensional structure of protein complexes with atomic precision.
            </p>
            <div className="flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-medium">
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="group bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-slate-900/50 hover:border-blue-500/30 transition-all cursor-pointer">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Atom className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">Binding Affinity Analysis</h4>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-3 sm:mb-4">
              Predict binding affinity likelihood and IC50 values for protein-ligand interactions.
            </p>
            <div className="flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-medium">
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="group bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-slate-900/50 hover:border-purple-500/30 transition-all cursor-pointer">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <FlaskConical className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">Protein-Ligand Pose Prediction</h4>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-3 sm:mb-4">
              Generate multiple binding poses using reverse diffusion processes for accurate docking.
            </p>
            <div className="flex items-center gap-2 text-purple-400 text-xs sm:text-sm font-medium">
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="group bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-slate-900/50 hover:border-green-500/30 transition-all cursor-pointer">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">Molecular Generation</h4>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-3 sm:mb-4">
              Generate novel molecules in SMILES format by sampling the latent space around seed compounds.
            </p>
            <div className="flex items-center gap-2 text-green-400 text-xs sm:text-sm font-medium">
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="group bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-slate-900/50 hover:border-orange-500/30 transition-all cursor-pointer">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">Molecular Bank</h4>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-3 sm:mb-4">
              Access a vast repository of molecules with rich metadata for rapid screening and analysis.
            </p>
            <div className="flex items-center gap-2 text-orange-400 text-xs sm:text-sm font-medium">
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="group bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-slate-900/50 hover:border-pink-500/30 transition-all cursor-pointer">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">Real-Time Collaboration</h4>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-3 sm:mb-4">
              Collaborate instantly with researchers worldwide via integrated secure messaging.
            </p>
            <div className="flex items-center gap-2 text-pink-400 text-xs sm:text-sm font-medium">
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-900/30 backdrop-blur-xl border border-slate-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6">
                <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-xs sm:text-sm text-blue-400 font-medium">Built-in Collaboration</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                Real-Time Research{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Collaboration
                </span>
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed mb-4 sm:mb-6">
                Share molecules, binding results, and generated compounds instantly with your team.
                Discuss findings and iterate together in real time.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="p-1 bg-cyan-500/10 rounded-full mt-0.5 sm:mt-1 flex-shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-semibold mb-0.5 sm:mb-1">Team Workspaces</div>
                    <div className="text-xs sm:text-sm text-slate-400">Dedicated spaces for project collaboration</div>
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="p-1 bg-blue-500/10 rounded-full mt-0.5 sm:mt-1 flex-shrink-0">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-semibold mb-0.5 sm:mb-1">Global Network</div>
                    <div className="text-xs sm:text-sm text-slate-400">Connect with researchers across institutions</div>
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="p-1 bg-purple-500/10 rounded-full mt-0.5 sm:mt-1 flex-shrink-0">
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-semibold mb-0.5 sm:mb-1">Secure Communication</div>
                    <div className="text-xs sm:text-sm text-slate-400">End-to-end encrypted messaging</div>
                  </div>
                </li>
              </ul>
              <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:from-blue-400 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                <span className="text-sm sm:text-base font-semibold">Start Collaborating</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="bg-slate-950/50 backdrop-blur-sm border border-slate-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs sm:text-sm font-bold">DR</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm sm:text-base font-semibold truncate">Dr. Sarah Chen</span>
                      <span className="text-[10px] sm:text-xs text-slate-500 flex-shrink-0">2 min ago</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Just uploaded new binding affinity predictions for compound KL-442. IC50: 12.3 nM.
                    </p>
                    <div className="mt-2 sm:mt-3 bg-slate-900/50 rounded-lg p-2 sm:p-3 border border-slate-800/30">
                      <div className="flex items-center gap-2 text-[10px] sm:text-xs text-cyan-400 mb-1 sm:mb-2">
                        <Database className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="truncate">kl442_affinity.csv</span>
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-500">1.8 MB</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/50 backdrop-blur-sm border border-slate-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs sm:text-sm font-bold">MK</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm sm:text-base font-semibold truncate">Dr. Michael Kumar</span>
                      <span className="text-[10px] sm:text-xs text-slate-500 flex-shrink-0">5 min ago</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Generated 50 new analogs from seed molecule. Top candidate shows improved solubility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/50 backdrop-blur-sm border border-slate-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2 sm:gap-3 w-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                    <input type="text" placeholder="3 researchers typing..." className="text-xs sm:text-sm text-slate-400 w-full"/>
                  </div>
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Powered by{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              NVIDIA AI
            </span>
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto px-4">
            High-performance inference and generative modeling on enterprise-grade GPU infrastructure
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 sm:p-8 text-center">
            <div className="inline-flex p-3 sm:p-4 bg-green-500/10 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-400" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">100x Faster</h4>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Accelerate molecular simulations and AI inference with NVIDIA GPU clusters
            </p>
          </div>

          <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 sm:p-8 text-center">
            <div className="inline-flex p-3 sm:p-4 bg-cyan-500/10 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-cyan-400" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">98.7% Accuracy</h4>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              State-of-the-art models trained on extensive biomolecular interaction datasets
            </p>
          </div>

          <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 sm:p-8 text-center sm:col-span-2 lg:col-span-1">
            <div className="inline-flex p-3 sm:p-4 bg-blue-500/10 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
              <Database className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Scalable Infrastructure</h4>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Cloud-native architecture that scales with your research demands
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Accelerate Your Research?
          </h3>
          <p className="text-sm sm:text-base lg:text-xl text-slate-400 mb-6 sm:mb-8 leading-relaxed px-4">
            Join leading researchers using KazDrugLab to pioneer the next generation of therapeutics
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-2 font-semibold">
              <span>Start Free Trial</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-800 transition-all font-semibold">
              Request Demo
            </button>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-4 sm:mt-6">
            No credit card required • Full access to all features • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  </main>

  <footer className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-xl mt-12 sm:mt-16 lg:mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-1.5 sm:p-2 rounded-lg">
              <Microscope className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-base sm:text-lg font-bold">KazDrugLab</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            AI-powered platform for drug discovery, molecular modeling, and collaborative research.
          </p>
        </div>

        <div>
          <h5 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Platform</h5>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">API</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Resources</h5>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Research Papers</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Tutorials</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Community</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Company</h5>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/50 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <p className="text-xs sm:text-sm text-slate-400">
          © 2025 KazDrugLab. All rights reserved.
        </p>
        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
          <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Security</a>
        </div>
      </div>
    </div>
  </footer>
</div>
  )
}

export default App
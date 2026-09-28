import React, { useState } from 'react';
import { 
  Sun, 
  Layers, 
  Eye, 
  Sliders, 
  Maximize2, 
  Check, 
  Sparkles, 
  Tag, 
  Move3d, 
  Info,
  RotateCw,
  Compass
} from 'lucide-react';
import { MATERIAL_OPTIONS, SPATIAL_SCENES } from '../data/mockData';
import { MaterialOption } from '../types';

export const InteractiveSpatialViewer: React.FC = () => {
  const [selectedScene, setSelectedScene] = useState(SPATIAL_SCENES[0]);
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialOption>(MATERIAL_OPTIONS[0]);
  const [timeOfDay, setTimeOfDay] = useState<number>(17.5); // 17:30 (5:30 PM)
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [activePin, setActivePin] = useState<number | null>(1);
  const [cameraPerspective, setCameraPerspective] = useState<'eye-level' | 'aerial' | 'detail'>('eye-level');

  // Format time of day
  const hours = Math.floor(timeOfDay);
  const minutes = Math.round((timeOfDay - hours) * 60);
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  // Lighting calculations
  const sunElevation = Math.max(5, Math.sin(((timeOfDay - 6) / 14) * Math.PI) * 75);
  const shadowLength = Math.max(10, (90 - sunElevation) * 2.2);
  const isTwilight = timeOfDay >= 19 || timeOfDay <= 7;
  const isGolden = timeOfDay >= 16.5 && timeOfDay < 19;
  
  // Ambient colors
  const ambientBackground = isTwilight
    ? 'linear-gradient(145deg, #1C1512 0%, #2E221B 100%)'
    : isGolden
    ? 'linear-gradient(145deg, #F5ECE0 0%, #EDE1D1 100%)'
    : 'linear-gradient(145deg, #F8F6F2 0%, #EFEBE4 100%)';

  const architecturalWallColor = isTwilight
    ? '#382D26'
    : isGolden
    ? '#E8DEC9'
    : '#EDE8DF';

  return (
    <section id="spatial-viewer" className="py-24 bg-[#F2EDE5] border-y border-[#2B1F17]/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C7667] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B45E28]" />
            <span>Interactive Spatial Canvas</span>
            <span aria-hidden="true">·</span>
            <span>Real-Time Photometric Preview</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#2B1F17] tracking-tight mb-4">
            Test materials & daylight with architectural accuracy.
          </h2>
          <p className="text-base text-[#68584E] leading-relaxed">
            Drag the sun scrubber, swap calibrated PBR materials, and explore spatial geometry. What you inspect here runs at 60 FPS in every modern client browser.
          </p>
        </div>

        {/* The Spatial Studio Console Frame */}
        <div className="glass-panel rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/80">
          
          {/* Top Control Bar of the App */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-[#2B1F17]/10">
            {/* Scene Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#7C6D63] hidden sm:inline">
                Environment:
              </span>
              <div className="flex items-center gap-1.5 p-1 bg-white/70 rounded-xl border border-[#2B1F17]/10">
                {SPATIAL_SCENES.map((scene) => (
                  <button
                    key={scene.id}
                    onClick={() => setSelectedScene(scene)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      selectedScene.id === scene.id
                        ? 'bg-[#2B1F17] text-white shadow-xs'
                        : 'text-[#6B5A4F] hover:text-[#2B1F17]'
                    }`}
                  >
                    {scene.title.split(' ')[0]} {scene.title.split(' ')[1]}
                  </button>
                ))}
              </div>
            </div>

            {/* Camera View Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#7C6D63] hidden sm:inline">
                Perspective:
              </span>
              <div className="flex items-center gap-1 p-1 bg-white/70 rounded-xl border border-[#2B1F17]/10">
                {(['eye-level', 'aerial', 'detail'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setCameraPerspective(mode)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg capitalize transition-all ${
                      cameraPerspective === mode
                        ? 'bg-[#B45E28] text-white shadow-xs'
                        : 'text-[#6B5A4F] hover:text-[#2B1F17]'
                    }`}
                  >
                    {mode.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Annotation Toggle */}
            <button
              onClick={() => setShowAnnotations(!showAnnotations)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl border transition-all ${
                showAnnotations
                  ? 'bg-[#EAE1D5] text-[#2B1F17] border-[#2B1F17]/20'
                  : 'bg-white/60 text-[#7C6D63] border-[#2B1F17]/10'
              }`}
            >
              <Tag className="w-3.5 h-3.5 text-[#B45E28]" />
              <span>{showAnnotations ? 'Hide Pins' : 'Show Pins'}</span>
            </button>
          </div>

          {/* Main Workspace Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* 3D Visual Viewport Area (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col">
              <div 
                className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-white/90 shadow-inner transition-all duration-700 flex items-center justify-center select-none"
                style={{ background: ambientBackground }}
              >
                {/* Architectural Spatial Geometry Render (Pure CSS/SVG Perspective Architecture) */}
                <div className="relative w-full h-full p-8 flex items-center justify-center">
                  
                  {/* Sun / Light Ray effect */}
                  <div 
                    className="absolute -top-12 transition-all duration-500 pointer-events-none rounded-full blur-2xl opacity-60"
                    style={{
                      left: `${((timeOfDay - 8) / 12) * 80 + 10}%`,
                      width: '260px',
                      height: '260px',
                      background: isTwilight 
                        ? 'radial-gradient(circle, rgba(235,115,45,0.4) 0%, transparent 70%)' 
                        : isGolden 
                        ? 'radial-gradient(circle, rgba(245,170,80,0.6) 0%, transparent 70%)' 
                        : 'radial-gradient(circle, rgba(255,245,210,0.7) 0%, transparent 70%)'
                    }}
                  />

                  {/* Architectural Back Wall & Columns */}
                  <div className="relative w-full max-w-lg h-72 rounded-2xl border border-white/40 flex items-end justify-center overflow-hidden transition-all duration-500 shadow-md"
                    style={{ backgroundColor: architecturalWallColor }}
                  >
                    {/* Architectural Arches */}
                    <div className="absolute inset-x-8 top-0 h-48 border-t-2 border-x-2 border-white/50 rounded-t-full opacity-60" />
                    <div className="absolute inset-x-20 top-6 h-40 border-t-2 border-x-2 border-white/30 rounded-t-full opacity-40" />

                    {/* Sunlight shadow cast */}
                    <div 
                      className="absolute inset-0 transition-all duration-300 pointer-events-none"
                      style={{
                        background: `linear-gradient(${timeOfDay * 15}deg, rgba(0,0,0,0) 40%, rgba(35,22,14,${isTwilight ? 0.35 : 0.12}) 100%)`
                      }}
                    />

                    {/* Central Sculptural Stone Pedestal showcasing the selected material */}
                    <div className="relative z-10 mb-4 flex flex-col items-center">
                      
                      {/* Sculpted Geometry on the Pedestal */}
                      <div className="relative mb-3 flex items-center justify-center">
                        {/* Smooth Ceramic Sphere */}
                        <div 
                          className="w-20 h-20 rounded-full shadow-2xl transition-all duration-500 border border-white/80"
                          style={{
                            background: `radial-gradient(circle at 35% 30%, #FFFFFF 0%, ${selectedMaterial.colorHex} 65%, #2B1F17 100%)`,
                            boxShadow: `0 16px 32px -8px rgba(43,31,23,0.35), 0 0 24px ${isGolden ? 'rgba(215,118,50,0.3)' : 'transparent'}`
                          }}
                        />

                        {/* Smaller ambient companion sphere */}
                        <div 
                          className="absolute -right-5 -bottom-1 w-10 h-10 rounded-full shadow-lg border border-white/60 transition-all duration-500"
                          style={{
                            background: `radial-gradient(circle at 40% 35%, #FFFFFF 0%, #D4C6B5 60%, #4A3A2F 100%)`
                          }}
                        />
                      </div>

                      {/* Tactile Pedestal Base */}
                      <div 
                        className="w-48 h-12 rounded-t-xl border-t border-x border-white/70 shadow-lg flex items-center justify-center px-4 transition-all duration-300"
                        style={{
                          backgroundColor: selectedMaterial.colorHex,
                          boxShadow: `0 ${shadowLength / 3}px ${shadowLength}px rgba(40,25,15,0.25)`
                        }}
                      >
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-[#2B1F17]/80 truncate">
                          {selectedMaterial.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hotspot Annotation Pin 1 */}
                  {showAnnotations && (
                    <div 
                      onClick={() => setActivePin(1)}
                      className={`absolute top-28 left-20 z-20 cursor-pointer group`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        activePin === 1 
                          ? 'bg-[#B45E28] text-white scale-110 shadow-md ring-4 ring-[#B45E28]/30' 
                          : 'bg-white text-[#2B1F17] hover:bg-[#B45E28] hover:text-white shadow-xs'
                      }`}>
                        <span className="text-[11px] font-bold">1</span>
                      </div>
                      {activePin === 1 && (
                        <div className="absolute left-8 top-0 w-52 glass-panel p-2.5 rounded-xl shadow-lg text-left text-xs z-30 animate-fade-in">
                          <div className="font-semibold text-[#2B1F17] mb-0.5">Tactile Arch Geometry</div>
                          <div className="text-[11px] text-[#6E5D52]">Honed Italian limestone with 35mm shadow reveal and acoustic dampening.</div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Hotspot Annotation Pin 2 */}
                  {showAnnotations && (
                    <div 
                      onClick={() => setActivePin(2)}
                      className={`absolute bottom-28 right-24 z-20 cursor-pointer group`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        activePin === 2 
                          ? 'bg-[#B45E28] text-white scale-110 shadow-md ring-4 ring-[#B45E28]/30' 
                          : 'bg-white text-[#2B1F17] hover:bg-[#B45E28] hover:text-white shadow-xs'
                      }`}>
                        <span className="text-[11px] font-bold">2</span>
                      </div>
                      {activePin === 2 && (
                        <div className="absolute right-8 bottom-0 w-52 glass-panel p-2.5 rounded-xl shadow-lg text-left text-xs z-30 animate-fade-in">
                          <div className="font-semibold text-[#2B1F17] mb-0.5">Photometric Specular</div>
                          <div className="text-[11px] text-[#6E5D52]">PBR reflectance calibrated to {selectedMaterial.reflectance} with micro-facet diffusion.</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Viewport Overlay Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                  <div className="glass-panel px-3 py-1.5 rounded-xl text-xs font-medium text-[#4A3B31] flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-[#B45E28]" />
                    <span>Azimuth: {Math.round(timeOfDay * 15)}°</span>
                    <span aria-hidden="true" className="opacity-40">·</span>
                    <span>Altitude: {Math.round(sunElevation)}°</span>
                  </div>

                  <div className="glass-panel px-3 py-1.5 rounded-xl text-xs font-semibold text-[#2B1F17] flex items-center gap-1.5 tabular-nums">
                    <Sun className="w-3.5 h-3.5 text-[#B45E28]" />
                    <span>{formattedTime}</span>
                    <span className="text-[10px] uppercase text-[#7C6D63] font-normal">
                      {isTwilight ? 'Evening' : isGolden ? 'Golden Hour' : 'Daylight'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sun Time of Day Slider */}
              <div className="mt-4 p-4 rounded-2xl bg-white/70 border border-[#2B1F17]/10 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#5C4D43] flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-[#B45E28]" />
                    Sun Position & Architectural Daylight Simulation
                  </span>
                  <span className="text-[#B45E28] font-bold tabular-nums">{formattedTime}</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="20"
                  step="0.25"
                  value={timeOfDay}
                  onChange={(e) => setTimeOfDay(parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#E5DCD2] rounded-lg appearance-none cursor-pointer accent-[#B45E28]"
                  aria-label="Sun time of day scrubber"
                />
                <div className="flex justify-between text-[10px] text-[#8C7B70] uppercase tracking-wider font-semibold">
                  <span>08:00 Morning</span>
                  <span>12:00 Midday</span>
                  <span>17:30 Golden Hour</span>
                  <span>20:00 Twilight</span>
                </div>
              </div>
            </div>

            {/* Material Inspector & Physical Twin Specs (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              <div className="p-4 rounded-2xl bg-white/80 border border-[#2B1F17]/10 shadow-xs">
                <div className="text-xs uppercase tracking-wider font-bold text-[#7C6D63] mb-3">
                  Calibrated Material Twin
                </div>

                {/* Swatch Selector */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {MATERIAL_OPTIONS.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        selectedMaterial.id === mat.id
                          ? 'border-[#B45E28] bg-[#F7F2EA] shadow-xs'
                          : 'border-[#2B1F17]/10 hover:border-[#2B1F17]/30 bg-white/50'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span 
                          className="w-4 h-4 rounded-full border border-black/10 shrink-0" 
                          style={{ backgroundColor: mat.colorHex }}
                        />
                        <span className="text-xs font-semibold text-[#2B1F17] truncate">
                          {mat.name.split(' ')[0]}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#7C6D63] block truncate">
                        {mat.category} · {mat.origin.split(',')[0]}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Material Physics Detail Box */}
                <div className="p-3.5 rounded-xl bg-[#F6F1EA] border border-[#2B1F17]/10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#2B1F17]">{selectedMaterial.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-[#2B1F17]/10 font-medium text-[#7C6D63]">
                      {selectedMaterial.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B5A4F] leading-relaxed">
                    {selectedMaterial.textureHint}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#2B1F17]/10 text-xs">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#8C7B70]">Reflectance</div>
                      <div className="font-semibold text-[#2B1F17] tabular-nums">{selectedMaterial.reflectance}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#8C7B70]">Surface Roughness</div>
                      <div className="font-semibold text-[#2B1F17] tabular-nums">{selectedMaterial.roughness}</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#2B1F17]/10 text-[11px] text-[#7C6D63]">
                    <span className="font-semibold text-[#4A3B31]">Spec Code:</span> {selectedMaterial.specs}
                  </div>
                </div>
              </div>

              {/* Spatial Metadata Card */}
              <div className="p-4 rounded-2xl bg-white/80 border border-[#2B1F17]/10 space-y-3">
                <div className="text-xs uppercase tracking-wider font-bold text-[#7C6D63]">
                  Spatial Environment Metrics
                </div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#2B1F17]/5">
                    <span className="text-[#6B5A4F]">Project Scope</span>
                    <span className="font-semibold text-[#2B1F17]">{selectedScene.type}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#2B1F17]/5">
                    <span className="text-[#6B5A4F]">Spatial Footprint</span>
                    <span className="font-semibold text-[#2B1F17] tabular-nums">{selectedScene.area}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#2B1F17]/5">
                    <span className="text-[#6B5A4F]">Ceiling Clearance</span>
                    <span className="font-semibold text-[#2B1F17] tabular-nums">{selectedScene.ceilingHeight}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#6B5A4F]">Active Pins</span>
                    <span className="font-semibold text-[#B45E28] tabular-nums">{selectedScene.annotationCount} Specs Recorded</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

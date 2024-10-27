

import { useState } from 'react';

export function AddMarker({ onAddMarker, addMarkerMode }) {
  // AddMarker takes an onAddMarker function prop that App will provide.
  return (
    <button onClick={onAddMarker} className={`add-marker-button transition-colors hover:bg-stone-700 hover:text-white ${addMarkerMode? "bg-white text-blue-400" : "bg-[#B54338]" }`}>
      Report New Incident
    </button>
  );
}
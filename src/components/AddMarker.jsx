

import { useState } from 'react';

export function AddMarker({ onAddMarker, addMarkerMode }) {
  // AddMarker takes an onAddMarker function prop that App will provide.
  return (
    <button onClick={onAddMarker} className={`add-marker-button transition-colors hover:bg-blue-400 hover:text-white ${addMarkerMode? "bg-white text-blue-400" : null }`}>
      Add Marker Mode
    </button>
  );
}
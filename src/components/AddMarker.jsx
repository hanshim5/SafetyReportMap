import { useState } from 'react';

export function AddMarker({ onAddMarker }) {
  // AddMarker takes an onAddMarker function prop that App will provide.
  return (
    <button onClick={onAddMarker} className="add-marker-button">
      Add Marker Mode
    </button>
  );
}
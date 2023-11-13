'use client';

import { useEffect } from 'react';
import { enableOverlays } from './overlays';

export const VisualEditingOverlay = () => {
  useEffect(enableOverlays, []);

  return null;
};

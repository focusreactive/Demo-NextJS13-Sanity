'use client';

import { useEffect } from 'react';
import { enableOverlays } from './overlays';

export const VisualEditingOverlay = ({ isDraftMode }: { isDraftMode: boolean }) => {
  useEffect(() => {
    isDraftMode && enableOverlays();
  }, [isDraftMode]);

  return null;
};

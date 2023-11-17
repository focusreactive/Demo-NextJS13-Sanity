'use client';

import { useEffect } from 'react';
import { enableVisualEditing } from '@sanity/overlays';

export const VisualEditingOverlay = () => {
  useEffect(enableVisualEditing, []);

  return null;
};

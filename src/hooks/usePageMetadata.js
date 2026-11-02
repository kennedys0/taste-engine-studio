import { useEffect } from 'react';

export function usePageMetadata(title, description) {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} — Taste Engine Studio`
      : 'Taste Engine Studio — Real Interfaces in 10 Visual Styles';
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }
  }, [title, description]);
}

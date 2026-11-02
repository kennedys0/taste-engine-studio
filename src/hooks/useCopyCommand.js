import { useState } from 'react';

export function useCopyCommand() {
  const [copiedText, setCopiedText] = useState(null);
  const [copyStatus, setCopyStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  const copy = async (text) => {
    if (!navigator?.clipboard) {
      // Fallback
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopiedText(text);
        setCopyStatus('success');
        setTimeout(() => {
          setCopyStatus('idle');
          setCopiedText(null);
        }, 2500);
        return true;
      } catch {
        setCopyStatus('error');
        setTimeout(() => setCopyStatus('idle'), 2500);
        return false;
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setCopyStatus('success');
      setTimeout(() => {
        setCopyStatus('idle');
        setCopiedText(null);
      }, 2500);
      return true;
    } catch {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 2500);
      return false;
    }
  };

  return { copy, copiedText, copyStatus };
}


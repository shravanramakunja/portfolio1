import React from 'react';

export default function OnekoCat() {
  React.useEffect(() => {
    if (document.getElementById('oneko-script')) return;

    const script = document.createElement('script');
    script.id = 'oneko-script';
    script.src = '/oneko/oneko.js';
    script.setAttribute('data-cat', '/oneko/oneko.gif');
    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById('oneko-script');
      if (existing) existing.remove();
      const cat = document.getElementById('oneko');
      if (cat) cat.remove();
    };
  }, []);

  return null;
}

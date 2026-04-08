'use client';

import React from 'react';
import Script from 'next/script';

export default function WistiaPlayer({ mediaId }: { mediaId: string }) {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script
        src={`https://fast.wistia.com/embed/${mediaId}.js`}
        strategy="afterInteractive"
        type="module"
      />
      <style>{`
        wistia-player[media-id='${mediaId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>

      {/* ✅ React.createElement avoids the media-id hyphen arithmetic error */}
      {React.createElement('wistia-player', {
        'media-id': mediaId,
        'aspect': '1.7777777777777777',
      })}
    </>
  );
}
'use client';

import Script from 'next/script';
import '../styles/globals.css';
import { ReactNode } from 'react';

import { useEffect } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Script>
  {`(function(w, d, t, h, s, n) {
    w.FlodeskObject = n;
    var fn = function() {
      (w[n].q = w[n].q || []).push(arguments);
    };
    w[n] = w[n] || fn;
    var f = d.getElementsByTagName(t)[0];
    var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
    var sm = d.createElement(t);
    sm.async = true;
    sm.type = 'module';
    sm.src = h + s + '.mjs' + v;
    f.parentNode.insertBefore(sm, f);
    var sn = d.createElement(t);
    sn.async = true;
    sn.noModule = true;
    sn.src = h + s + '.js' + v;
    f.parentNode.insertBefore(sn, f);
  })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');`}
</Script>
<Script>
  {`window.fd('form:handle', {
    formId: '68716212bedecce39b8014a9',
    rootEl: '.ff-68716212bedecce39b8014a9',
  });`}
</Script>
      <body>{children}</body>
    </html>
  );
}

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class _Document extends Document {
  render() {
    return (
      <Html className="font-sans">
        <Head>
          <title>Patrick Souza - Dev</title>
        </Head>
        <body className="h-full min-w-screen bg-gray-100 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

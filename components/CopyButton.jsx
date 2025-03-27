'use client';

import { useState } from 'react';
import { FaClipboard } from 'react-icons/fa';

const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(err => {
        console.error('Erro ao copiar o código: ', err);
      });
  };

  return (
    <>
      <button
        onClick={handleCopyToClipboard}
        className="absolute top-2 right-5 text-white p-1 bg-[#27272c] rounded-md hover:bg-[#444] transition-all"
      >
        <FaClipboard />
      </button>
      {isCopied && (
        <div className="absolute top-10 right-0 bg-accent text-white text-sm px-2 py-1 rounded-md">
          Copiado!
        </div>
      )}
    </>
    
  );
};

export default CopyButton;
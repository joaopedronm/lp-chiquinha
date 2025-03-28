// components/Modal.js
'use client'

export default function Modal({ onClose, title, description, buttonText }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full flex flex-col items-center">
        <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
        <p className="mb-4 text-center">{description}</p>
        <button
          onClick={onClose}
          className="bg-accent text-white font-semibold px-4 py-2 rounded hover:bg-accent-dark transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
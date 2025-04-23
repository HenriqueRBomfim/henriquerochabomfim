import React from 'react';

function WiseDonationButton() {
  return (
    <div className="p-4">
      <a
        href="https://wise.com/pay/me/henriquer1131"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-green-700 transition"
      >
        Doe via Wise 🌍
      </a>
    </div>
  );
}

export default WiseDonationButton;
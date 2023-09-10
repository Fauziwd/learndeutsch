import React, { useState } from 'react';
import Botnav from "./layout/Botnav";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar.jsx";
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    // Handle navigasi ke halaman sesuai dengan opsi yang dipilih
    if (option === 'Kata Benda') {
      // Navigasi ke halaman Kata Benda
    } else if (option === 'Kata Sifat') {
      // Navigasi ke halaman Kata Sifat
    } else if (option === 'Kata Kerja') {
      // Navigasi ke halaman Kata Kerja
    }
  };

  

  // Simpan hasil dari input atau data yang ingin Anda tampilkan dalam state, misalnya hasilGambar
  const hasilGambar = 'url_gambar.jpg';

  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white h-screen" style={{ fontFamily: "Montserrat" }}>
       <Botnav /> 
       <Sidebar /> 
       <Navbar /> 
      {/* Bagian Atas: Header */}
      <div className="p-4 text-white text-center">
  <img src="./image/jerman.jpeg" alt="😊" className="rounded-lg w-96 h-20 object-fill mb-2" />
</div>
      
      <div className="mt-4 text-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <p className="text-lg font-semibold">Tambah Kosakata Baru!</p>
    </div>

    <div className="relative flex justify-center text-left mt-2">
      <button
        id="dropdownDelayButton"
        data-dropdown-toggle="dropdownDelay"
        data-dropdown-delay="500"
        data-dropdown-trigger="hover"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Tambah Kosakata!
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div id="dropdownDelay" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
          <li>
            <a href="benda" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kata Benda</a>
          </li>
          <li>
            <a href="sifat" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kata Sifat</a>
          </li>
          <li>
            <a href="verb" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kata Kerja</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>



      {/* Bagian Tengah: Menu Utama */}
      <div className="container mx-auto p-4 mt-8">
        <p className="text-xl font-semibold dark:text-white mb-4 text-center">Hafalkan Kosakatamu!</p>
        <div className="flex justify-center space-x-4">
          <a href="nomen" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg">Kata Benda</a>
          <a href="data-sifat" className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg">Kata Sifat</a>
          <a href="verben" className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg">Kata Kerja</a>
        </div>
      </div>

      
    
      {/* Bagian Bawah: Footer */}
      <div className="bg-blue-500 p-4 text-white text-center absolute bottom-0 left-0 w-full">
        <p className="text-sm">&copy; 2023 Aplikasi Kosakata Bahasa Jerman</p>
      </div>
    </div>
    
  );
}

export default App;

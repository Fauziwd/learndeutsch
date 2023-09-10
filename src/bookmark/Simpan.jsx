import React from "react";
import '../App.css';
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Botnav from "../layout/Botnav";


function Simpan({ bookmarks }) {
  return (
    <div className="flex flex-col h-screen dark:bg-gray-900" style={{ fontFamily: "Montserrat" }}>
      <Navbar />
      <Sidebar />
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Daftar Bookmark</h1>
        <ul className="list-none p-0">
          {bookmarks && bookmarks.length > 0 ? (
            bookmarks.map((item, index) => (
              <li key={index} className="mb-2 p-2 border rounded-md shadow-md">
                {item.namaBenda}
              </li>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center mt-10">
              <img src="./image/data-kosong.png"  alt="Gambar Bookmark Kosong" className="w-full h-32 mb-4" />
              <span className="text-gray-600 text-xl">Tidak ada bookmark saat ini.</span>
            </div>
          )}
        </ul>
      </div>
      <Botnav />
    </div>
  );
}

export default Simpan;

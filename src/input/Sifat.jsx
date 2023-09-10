import React, { useState } from "react";
import Botnav from "../layout/Botnav";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

function Adjektif() {
  const [sifat, setSifat] = useState("");
  const [artiSifat, setArtiSifat] = useState("");


  const handleSifatChange = (e) => {
    setSifat(e.target.value.toLowerCase());
  };  

  const handleArtiSifatChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
    setArtiSifat(inputValue);
  };  


 

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Inisialisasi Firestore
    // const db = firebase.firestore();
  
    // // Menyimpan data ke Firestore
    // db.collection('kataSifat').add({
    //   sifat: sifat,
    //   artiSifat: artiSifat
 
    // })
    // .then((docRef) => {
    //   console.log("Dokumen berhasil ditambahkan dengan ID: ", docRef.id);
    //   // Setelah berhasil disimpan, Anda dapat melakukan sesuatu, misalnya mereset nilai input
    //   setSifat("");
    //   setArtiSifat("");

    // })
    // .catch((error) => {
    //   console.error("Error menambahkan data: ", error);
    // });
  };  

  return (
    <>
     <Navbar />
     <Sidebar /> 
     <div className="mx-auto p-8 h-screen dark:bg-gray-900 shadow-md" style={{ fontFamily: "Montserrat" }}>
      <h1 className="text-2xl font-bold mb-4">Kata Sifat</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="artikel" className="block text-sm font-medium text-gray-600">Kata Sifat:</label>
          <input
            type="text"
            id="artikel"
            name="artikel"
            value={sifat}
            onChange={handleSifatChange}
            placeholder="Masukkan "
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="namaBenda" className="block text-sm font-medium text-gray-600">Artinya:</label>
          <input
            type="text"
            id="namaBenda"
            name="namaBenda"
            value={artiSifat}
            onChange={handleArtiSifatChange}
            placeholder="Masukkan Artinya"
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
      
        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300"
        >
          Simpan
        </button>
      </form>
    </div>
    <Botnav /> 
    </>
  );
}

export default Adjektif;

import React, { useState } from "react";
import Botnav from "../layout/Botnav";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

function Benda() {
  const [artikel, setArtikel] = useState("");
  const [namaBenda, setNamaBenda] = useState("");
  const [arti, setArti] = useState("");
  const [plural, setPlural] = useState("");

  const handleArtikelChange = (e) => {
    setArtikel(e.target.value.toLowerCase());
  };  

  const handleNamaBendaChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
    setNamaBenda(inputValue);
  };  

  const handleArtiChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
    setArti(inputValue);
  };

  const handlePluralChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
    setPlural(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Inisialisasi Firestore
    // const db = firebase.firestore();
  
    // // Menyimpan data ke Firestore
    // db.collection('kataBenda').add({
    //   artikel: artikel,
    //   namaBenda: namaBenda,
    //   arti: arti,
    //   plural: plural
    // })
    // .then((docRef) => {
    //   console.log("Dokumen berhasil ditambahkan dengan ID: ", docRef.id);
    //   // Setelah berhasil disimpan, Anda dapat melakukan sesuatu, misalnya mereset nilai input
    //   setArtikel("");
    //   setNamaBenda("");
    //   setArti("");
    //   setPlural("");
    // })
    // .catch((error) => {
    //   console.error("Error menambahkan dokumen: ", error);
    // });
  };  

  return (
    <>
     <Navbar />
     <Sidebar /> 
     <div className="mx-auto p-8 h-screen dark:bg-gray-900 shadow-md" style={{ fontFamily: "Montserrat" }}>
      <h1 className="text-2xl font-bold mb-4">Kata Benda</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="artikel" className="block text-sm font-medium text-gray-600">Artikel:</label>
          <input
            type="text"
            id="artikel"
            name="artikel"
            value={artikel}
            onChange={handleArtikelChange}
            placeholder="Masukkan artikel"
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="namaBenda" className="block text-sm font-medium text-gray-600">Nama Benda:</label>
          <input
            type="text"
            id="namaBenda"
            name="namaBenda"
            value={namaBenda}
            onChange={handleNamaBendaChange}
            placeholder="Masukkan nama benda"
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="namaBenda" className="block text-sm font-medium text-gray-600">Nama Benda:</label>
          <input
            type="text"
            id="namaBenda"
            name="namaBenda"
            value={plural}
            onChange={handlePluralChange}
            placeholder="Masukkan Pluralnya"
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="arti" className="block text-sm font-medium text-gray-600">Arti:</label>
          <input
            type="text"
            id="arti"
            name="arti"
            value={arti}
            onChange={handleArtiChange}
            placeholder="Masukkan arti"
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

export default Benda;

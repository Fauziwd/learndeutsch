import React, { useState } from "react";
import Botnav from "../layout/Botnav";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

function Verb() {
  const [verben, setVerben] = useState("");
  const [artiVerben, setArtiVerben] = useState("");


  const handleVerbenChange = (e) => {
    setVerben(e.target.value.toLowerCase());
  };  

  const handleArtiVerbenChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
    setArtiVerben(inputValue);
  };  


 

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Inisialisasi Firestore
    // const db = firebase.firestore();
  
    // // Menyimpan data ke Firestore
    // db.collection('kataKerja').add({
    //   verben: verben,
    //   artiVerben: artiVerben
 
    // })
    // .then((docRef) => {
    //   console.log("Dokumen berhasil ditambahkan dengan ID: ", docRef.id);
    //   // Setelah berhasil disimpan, Anda dapat melakukan sesuatu, misalnya mereset nilai input
    //   setVerben("");
    //   setArtiVerben("");

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
            value={verben}
            onChange={handleVerbenChange}
            placeholder="Masukkan Verb"
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
            value={artiVerben}
            onChange={handleArtiVerbenChange}
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

export default Verb;

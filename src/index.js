import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import 'flowbite';
import App from './App';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
import Simpan from './bookmark/Simpan';
import Benda from './input/Benda';
import Verb from './input/Verb';
import Sifat from './input/Sifat';
import Nomen from './menu/nomen';
import Verben from './menu/Verben';
import Sifatdata from './menu/Sifatdata';
import reportWebVitals from './reportWebVitals';

// const firebaseConfig = {
//   apiKey: "AIzaSyBOfrUxJdpS2-f4I6xhJ-eZDPkr8nuI8Gc",
//   authDomain: "deutsch-45c71.firebaseapp.com",
//   projectId: "deutsch-45c71",
//   storageBucket: "deutsch-45c71.appspot.com",
//   messagingSenderId: "206654139341",
//   appId: "1:206654139341:web:32e8fd07f95a823063f284"
// };

// // Inisialisasi Firebase
// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bookmark" element={<Simpan />} />
        <Route path="/nomen" element={<Nomen />} /> {/* Tambahkan route untuk halaman Nomen */}
        <Route path="/verben" element={<Verben />} />
        <Route path="/sifat" element={<Sifat />} />
        <Route path="/benda" element={<Benda />} /> {/* Misalnya, jika Anda ingin menyimpan route Benda */}
        <Route path="/verb" element={<Verb />} />
        <Route path="/data-sifat" element={<Sifatdata />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root') 
);


reportWebVitals();

import React, { useEffect, useState } from "react";
import '../App.css';
import Simpan from "../bookmark/Simpan";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Botnav from "../layout/Botnav";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

function Nomen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [kataFilter, setKataFilter] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const filterOptions = ["", "der", "die", "das"];

  // Simpan bookmarked items di state
  const [bookmarks, setBookmarks] = useState([]);

  // Fungsi untuk menambah atau menghapus bookmark
  const handleBookmarkChange = (item) => {
    if (bookmarks.some((bookmark) => bookmark.namaBenda === item.namaBenda)) {
      // Hapus item dari bookmark jika sudah ada
      const updatedBookmarks = bookmarks.filter(
        (bookmark) => bookmark.namaBenda !== item.namaBenda
      );
      setBookmarks(updatedBookmarks);
    } else {
      // Tambahkan item ke bookmark jika belum ada
      setBookmarks([...bookmarks, item]);
    }
  };

  // useEffect(() => {
  //   const db = firebase.firestore();

  //   db.collection("kataBenda")
  //     .get()
  //     .then((querySnapshot) => {
  //       const items = [];
  //       querySnapshot.forEach((doc) => {
  //         items.push(doc.data());
  //       });
  //       setData(items);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error mengambil data: ", error);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
     
      <div className="mx-auto p-8 h-screen bg-white dark:bg-gray-900 shadow-md" style={{ fontFamily: "Montserrat" }}>
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Data Kata Benda</h1>
        <div className="flex flex-col sm:flex-row sm:space-x-2">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          >
            {filterOptions.map((option) => (
              <option key={option} value={option}>
                {option || "Semua"}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Cari kata..."
            value={kataFilter}
            onChange={(e) => setKataFilter(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        {loading ? (
           <div className="loader-container">
           <div className="loader">
           <div>
             <ul>
               <li>
                 <svg fill="currentColor" viewBox="0 0 90 120">
                   <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                 </svg>
               </li>
               <li>
                 <svg fill="currentColor" viewBox="0 0 90 120">
                   <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                 </svg>
               </li>
               <li>
                 <svg fill="currentColor" viewBox="0 0 90 120">
                   <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                 </svg>
               </li>
               <li>
                 <svg fill="currentColor" viewBox="0 0 90 120">
                   <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                 </svg>
               </li>
               <li>
                 <svg fill="currentColor" viewBox="0 0 90 120">
                   <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                 </svg>
               </li>
             </ul>
           </div><span>Mengambil data..</span></div>
           </div>
        ) : (
          <div className="overflow-x-auto mt-7">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="p-3 font-bold uppercase bg-gray-100 text-gray-600 border border-gray-300">
                    Artikel
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-100 text-gray-600 border border-gray-300">
                    Nama Benda
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-100 text-gray-600 border border-gray-300">
                    Plural
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-100 text-gray-600 border border-gray-300">
                    Arti
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-100 text-gray-600 border border-gray-300">
                    Bookmark
                  </th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((item) =>
                    (selectedFilter === "" ||
                      item.artikel.toLowerCase() === selectedFilter.toLowerCase() ||
                      selectedFilter === "Semua") &&
                    (item.artikel.toLowerCase().includes(kataFilter.toLowerCase()) ||
                      item.namaBenda.toLowerCase().includes(kataFilter.toLowerCase()) ||
                      item.arti.toLowerCase().includes(kataFilter.toLowerCase()))
                  )
                  .map((item, index) => (
                    <tr key={index}>
                      <td className="p-3 border border-gray-300">{item.artikel}</td>
                      <td className="p-3 border border-gray-300">{item.namaBenda}</td>
                      <td className="p-3 border border-gray-300">{item.plural}</td>
                      <td className="p-3 border border-gray-300">{item.arti}</td>
                      <td className="p-3 border border-gray-300">
                        <input
                          type="checkbox"
                          checked={bookmarks.some((bookmark) => bookmark.namaBenda === item.namaBenda)}
                          onChange={() => handleBookmarkChange(item)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Simpan bookmarks={bookmarks} />
      <Botnav />
    </>
  );
}

export default Nomen;

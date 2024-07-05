import { collection, query, where, getDocs } from "firebase/firestore";
import { create } from 'zustand';
import { db } from "../.firebase/firebaseConf";
import { doc, getDoc } from "firebase/firestore";


const useUserStore = create((set) => ({
  user: null,
  error: null,
  fetchUser: async (matricule) => {
    try {
      const docRef = doc(db, "users", matricule);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ user: docSnap.data(), error: null });
      } else {
        set({ user: null, error: 'No such document!' });
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      console.log("je suis");
      set({ user: null, error: error.message || 'Unknown error occurred' });
    }
  },

}));


const useAnnonceStore = create((set) => ({
  annonces: null,
  error: null,
  fetchAnnonces: async () => {
    const user = localStorage.getItem("userData")
    console.log(JSON.parse(user).depart);
try {
const queryPromotion = query(
  collection(db, "annonces"), 
  where("promotion", "==", "all_promotions")
);

const queryDepartment = query(
  collection(db, "annonces"), 
  where("department", "==", JSON.parse(user).depart)
);

const queryPromotionDepartment = query(
  collection(db, "annonces"), 
  where("promotion", "==", JSON.parse(user).promotion)
);

  const [snapPromotion, snapDepartment, snapPromotionDepartment] = await Promise.all([
    getDocs(queryPromotion),
    getDocs(queryDepartment),
    getDocs(queryPromotionDepartment)
  ]);

  const allDocs = [
    ...snapPromotion.docs,
    ...snapDepartment.docs,
    ...snapPromotionDepartment.docs
  ];
        const annonces = [];
        allDocs.forEach((doc) => {
          annonces.push(doc.data());
        });
        set({ annonces: annonces, error: null });
      }
     catch (error) {
      console.error("Error fetching annonces:", error);
      set({ annonces: null, error: error.message || 'Unknown error occurred' });
    }
  }
}));


export { useUserStore, useAnnonceStore };

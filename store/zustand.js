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
      set({ user: null, error: error.message || 'Unknown error occurred' });
    }
  },
}));

export { useUserStore };

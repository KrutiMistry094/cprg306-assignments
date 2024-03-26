import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const items = [];
    const querySnapshot = await getDocs(
      collection(db, `users/${userId}/items`)
    );
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, data: doc.data() });
    });
    return items;
  } catch (error) {
    console.error("Error in getting items", error);
    return [];
  }
};

export const addItems = async (userId, item) => {
  try {
    const docRef = await addDoc(collecion(db, `users/${userId}/items`), item);
    return docRef.id;
  } catch (error) {
    console.error("Error in getting an item", error);
    return [];
  }
};

export const deleteItems = async (userId, itemId) => {
  try {
    const itemDel = doc(db, `users/${userId}/items`, item);
    await deleteDoc(itemDel);
    console.log("Item deleted");
    return true;
  } catch (error) {
    console.error("Error occurred", error);
    return false;
  }
};

export default function ShoppingListService() {
  return <div></div>;
}

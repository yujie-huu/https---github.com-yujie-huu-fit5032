<template>
    <div>
        <h1>Books with ISBN > 1000</h1>
        <ul>
            <li v-for="book in books" :key="book.id">
                {{ book.name }} - ISBN: {{ book.isbn }}
            </li>
        </ul>
        <div class="mt-2">
            <button @click="deleteBooksNamedBBB">Delete Book bbb</button>
        </div>
        <div class="mt-2">
            <button @click="updateBookISBN">Update ISBN for Book Yujie</button>
        </div>
        
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, query, where, getDocs, deleteDoc, updateDoc, orderBy, limit } from 'firebase/firestore';

export default {
  setup() {
    const books = ref([]);

    const fetchBooks = async () => {
      try {
        const q = query(collection(db, 'books'), orderBy('isbn'), 
        where('isbn', '>', 1000), limit(2));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

    onMounted(() => {
      fetchBooks();
    });

    return {
      books
    };
  },
  methods: {
    async deleteBooksNamedBBB() {
        try {
        // Attempt to retrieve the books with name 'bbb'
        const q = query(collection(db, 'books'), where('name', '==', 'bbb'));
        const querySnap = await getDocs(q);

        // Delete each book
        querySnap.forEach(async (doc) => {
            try {
            await deleteDoc(doc.ref); // Use doc.ref to get DocumentReference
            console.log(`Deleted book with id: ${doc.id}`);
            } catch (deleteError) {
            console.error('Error deleting book: ', deleteError);
            }
        });
        } catch (error) {
        console.error('Error retrieving books: ', error);
        }
    },
    async updateBookISBN() {
        try {
        // Attempt to retrieve the books with name 'Yujie'
        const q1 = query(collection(db, 'books'), where('name', '==', 'Yujie'));
        const querySnap1 = await getDocs(q1);

        // Delete each book
        querySnap1.forEach(async (doc) => {
            try {
            await updateDoc(doc.ref, {isbn: 1003}); // Use doc.ref to get DocumentReference
            console.log(`Updated book with id: ${doc.id}`);
            } catch (updateError) {
            console.error('Error deleting book: ', updateError);
            }
        });
        } catch (error) {
        console.error('Error retrieving books: ', error);
        }
    }
  }
};
</script>

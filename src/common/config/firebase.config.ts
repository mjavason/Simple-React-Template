import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBSN9O3szQF8O4u92UjYubiqN_s-0xrFZA',
  authDomain: 'analytics-test-1086d.firebaseapp.com',
  projectId: 'analytics-test-1086d',
  storageBucket: 'analytics-test-1086d.firebasestorage.app',
  messagingSenderId: '851066400252',
  appId: '1:851066400252:web:e8cb386e60956e9bfb1679',
  measurementId: 'G-SV6TBT8VRZ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)

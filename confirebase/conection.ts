// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import type { UploadResult } from 'firebase/storage'
import { v4 } from 'uuid'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESAGGEID,
  appId: process.env.NEXT_PUBLIC_APPID,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export const uploadFile = async (file: Blob): Promise<UploadResult> => {
  const storageRef = ref(storage, v4())
  return await uploadBytes(storageRef, file)
}

export const updateloadFile = async (
  file: Blob,
  idImg: string
): Promise<UploadResult> => {
  const storageRef = ref(storage, idImg)
  return await uploadBytes(storageRef, file)
}

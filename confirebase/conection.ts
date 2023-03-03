/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import type { UploadResult } from 'firebase/storage'
import { v4 } from 'uuid'

const {
  NEXT_PUBLIC_APIKEY,
  NEXT_PUBLIC_AUTHDOMAIN,
  NEXT_PUBLIC_PROJECTID,
  NEXT_PUBLIC_STORAGEBUCKET,
  NEXT_PUBLIC_MESAGGEID,
  NEXT_PUBLIC_APPID,
  NEXT_PUBLIC_MESID,
} = process.env

const firebaseConfig = {
  apiKey: NEXT_PUBLIC_APIKEY,
  authDomain: NEXT_PUBLIC_AUTHDOMAIN,
  projectId: NEXT_PUBLIC_PROJECTID,
  storageBucket: NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: NEXT_PUBLIC_MESAGGEID,
  appId: NEXT_PUBLIC_APPID,
  measurementId: NEXT_PUBLIC_MESID,
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

import firebase from 'firebase'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDVe1_cr3Rnu0dWquVMWMBNh7XFBkb5jQ8",
    authDomain: "nuxt-lesson-9235d.firebaseapp.com",
    databaseURL: "https://nuxt-lesson-9235d.firebaseio.com",
    projectId: "nuxt-lesson-9235d",
    storageBucket: "nuxt-lesson-9235d.appspot.com",
    messagingSenderId: "813996364662",
    appId: "1:813996364662:web:cb3a9f6e2115569a85a057",
    measurementId: "G-Y2JBKPH52K"
  })
}

export  const db = firebase.firestore()
//const settings = { timestampsInSnapshots: true }
//db.settings(settings)

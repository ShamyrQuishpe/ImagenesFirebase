import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  constructor(private auth: Auth, private firestore: Firestore, private storage: Storage) {}

  // Obtiene el perfil de usuario de Firestore
  getUserProfile() {
    const user = this.auth.currentUser;

    // Verifica si el usuario está autenticado
    if (!user) {
      console.error('Usuario no autenticado');
      return null; // O puedes redirigir al usuario a la pantalla de login
    }

    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return docData(userDocRef, { idField: 'id' });
  }

  // Sube la imagen de perfil a Firebase
  async uploadImage(cameraFile: Photo) {
    const user = this.auth.currentUser;

    // Verifica si el usuario está autenticado
    if (!user) {
      console.error('Usuario no autenticado');
      return null;
    }

    // Asegúrate de que 'cameraFile' contenga datos válidos
    if (!cameraFile || !cameraFile.base64String) {
      console.error('La imagen no es válida o no se ha capturado correctamente');
      return null;
    }

    const path = `uploads/${user.uid}/profile.webp`; // Ruta para almacenar la imagen en Firebase
    const storageRef = ref(this.storage, path); // Referencia al archivo en Firebase Storage

    try {
      // Sube la imagen al almacenamiento de Firebase
      await uploadString(storageRef, cameraFile.base64String, 'base64');

      // Obtiene la URL de descarga de la imagen
      const imageUrl = await getDownloadURL(storageRef);

      // Actualiza el perfil del usuario en Firestore con la URL de la imagen
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await setDoc(userDocRef, { imageUrl });

      return true; // Indica que la subida fue exitosa
    } catch (e) {
      console.error('Error al subir la imagen:', e); // Muestra errores si algo sale mal
      return null;
    }
  }
}

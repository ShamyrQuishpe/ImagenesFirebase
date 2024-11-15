---
El inicio de sesión en la aplicación se gestiona mediante Firebase Authentication. Los usuarios ingresan su correo electrónico y contraseña en el formulario.
Cuando se envía el formulario, se utiliza el método signInWithEmailAndPassword() de Firebase para verificar las credenciales. 
Si son correctas, Firebase autentica al usuario y lo redirige a la página principal. En caso de error, se muestra un mensaje de advertencia. 
Este proceso asegura que solo los usuarios autenticados puedan acceder a la aplicación.

<img src="https://github.com/user-attachments/assets/6a50da93-5118-4c81-96c9-5807084c7952" alt="Icono personalizado" width="200">
![Captura de pantalla 2024-11-15 121701](https://github.com/user-attachments/assets/d55439a5-c71c-4f66-af77-7903aa9d4ab1)

---
Por otro lado, La carga de imágenes en la aplicación se maneja mediante Firebase Storage. Primero, el usuario selecciona una imagen desde su dispositivo.
Luego, se utiliza el método uploadBytesResumable() de Firebase para cargar la imagen al servidor. Durante el proceso, se muestra el progreso de la carga,
y una vez completada, se obtiene la URL de la imagen cargada. Esta URL se puede utilizar para mostrar la imagen en la aplicación o almacenar su enlace 
en la base de datos de Firebase para acceder más tarde.

<img src="https://github.com/user-attachments/assets/ad624736-607f-4411-a64c-680c32a04b31" alt="Icono personalizado" width="200">
<img src="https://github.com/user-attachments/assets/d032d157-fbfa-479a-ab45-d51f76c6a4f3" alt="Icono personalizado" width="200">
![Captura de pantalla 2024-11-15 121820](https://github.com/user-attachments/assets/619da5bf-6d74-4b6c-83d4-81650cd1bef0)

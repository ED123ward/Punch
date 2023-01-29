import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
const useFB = () => {
  const handleLoginFB = () => {
    return new Promise (function(resolve,reject){
      const provider = new FacebookAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then(async result => {
          const user = result.user;
          console.log(user);
         resolve(user.providerData)
        })
        .catch(error => {
          console.log(error);
          const credential = FacebookAuthProvider.credentialFromError(error);
          console.log(credential)
        });

    })
  
  };
  return { handleLoginFB };
};
export default useFB;
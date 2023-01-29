import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const useGoogle = () => {
  const handleLoginGoogle = async () => {
    return new Promise(function(resolve,reject){
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then(async result => {
          const user = result.user;
          console.log(user);
          resolve(user.providerData)
          // 在這邊把user資料寫入locaStorage或是進行後端寫入資料庫等等的操作
        })
        .catch(error => {
          console.log(error);
          reject(error)
        });
    })

  };

  return { handleLoginGoogle };
};
export default useGoogle;
import Swal from "sweetalert2/dist/sweetalert2.all";

export const useLoginError = (res, setRes, userLogin, setLoginOk) => {
    // esta todo ok -> 200
  
    if (res?.status === 200) {
      const dataCustom = { //nos quedamos solo con estos items
        token: res.data.token,
        user: res.data.user.name,
        email: res.data.user.email,
        image: res.data.user.image,
        check: res.data.user.check,
        _id: res.data.user._id,
      };
  
      const stringUser = JSON.stringify(dataCustom); // lo convertimos a string
      userLogin(stringUser); //llamamos a userLogin que lo hemos llamado asi en nuestra funcion de arriba, realmente es la funcion login del contexto
      setLoginOk(() => true); // como la funcion no es nuestra le ponemos callback
  
      Swal.fire({
        icon: "success",
        title: "Welcome to my Page",
        text: "Login ok ✅",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  
    // 404: 'User no register'
  
    if (res?.response?.data?.includes("User no register")) {
      setRes(() => ({}));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Unregistered user ❎",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  
    // 404: 'password dont match'
  
    if (res?.response?.data?.includes("password dont match")) {
      setRes(() => ({}));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password dont match ❎",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  
    // interval server error -> 500 (que falle el backend)
    if (res?.response?.status === 500) {
      setRes(() => ({}));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Interval Server Error ❎!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
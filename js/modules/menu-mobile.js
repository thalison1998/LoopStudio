export default function menuMobile(btnMenuJs, listMenuJs, midiaMenuJs) {
  const buttonMenu = document.querySelector(btnMenuJs);
  const listMenu = document.querySelector(listMenuJs);
  const midiaJs = document.querySelector(midiaMenuJs);
  const html = document.documentElement;
  let show;
  const check = () => {
    show = listMenu.classList.contains("on");
    document.body.style.overflow = show ? "hidden" : "initial";
  };
  const clickOutside = (e) => {
    e.stopPropagation();
    if (!listMenu.contains(e.target)) {
      listMenu.classList.remove("on");
      html.removeEventListener("click", clickOutside);
    }
    check();
  };
  const ativedModal = () => {
    html.addEventListener("click", clickOutside);
    buttonMenu.addEventListener("click", activeModalMenu);
  };
  const activeModalMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    listMenu.classList.toggle("on");
    midiaJs.classList.add("on");
    check();
    ativedModal();
  };

  const init = () => {
    if (!!btnMenuJs && !!listMenuJs && !!midiaMenuJs) {
      ativedModal();
    }else{
      throw 'Ocorreu um erro'
    }
  };
  
  return {
    init,
  };
}

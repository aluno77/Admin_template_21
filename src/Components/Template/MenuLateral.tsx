import useAuth from "../../data/Hook/useAuth";
import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../Icons";
import Logo from "./Logo";
import MenuItem from "./Menuitem";

function MenuLateral() {
  
  const { logout } = useAuth()
  return (
    <aside className={`
     flex flex-col
      dark:bg-gray-600
    `}>
      <div
        className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
        h-20 w-20
      `}
      >
        <Logo />
      </div>

      <ul className="flex-grow">
        <MenuItem url="/" text="Início" icons={IconeCasa} />
        <MenuItem url="/ajustes" text="Ajustes" icons={IconeAjustes} />
        <MenuItem url="/notificacoes" text="Notificações" icons={IconeSino} />
      </ul>
      <ul>
        <MenuItem
          text="Sair"
          icons={IconeSair}
          onClick={logout}
          className={`
            text-red-600  dark:text-red-400
            hover:bg-red-400 hover:text-white
            dark:hover:text-white
          `}
        />
      </ul>
    </aside>
  );
}

export default MenuLateral;

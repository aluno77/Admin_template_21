import Link from "next/link";

interface IMenuItemProps {
  text: string;
  url?: string;
  icons: any;
  className?: string;
  onClick?: (evento: any) => void;
}

function MenuItem(props: IMenuItemProps) {
  
  function renderizarLink() {
    return (
      <a
        className={`
            flex flex-col justify-center items-center
            h-20 w-20 
            dark:text-gray-200
            ${props.className}
            `}
      >
        {props.icons}
        <span
          className={`text-xs font-light`}
        >
          {props.text}
        </span>
      </a>
    );
  }

  return (
    <li
      onClick={props.onClick}
      className={`
    hover:bg-gray-200 dark:hover:bg-gray-800
      cursor-pointer
    `}
    >
      {props.url ? (
        <Link href={props.url}>{renderizarLink()}</Link>
      ) : (
        renderizarLink()
      )}
    </li>
  );
}
export default MenuItem;

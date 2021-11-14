interface ITituloProps {
  titulo: string;
  subtitulo: string;
}

function Titulo(props: ITituloProps) {
  return (
    <div>
      <h1
        className={` 
            font-black text-3xl
            text-gray-900 dark:text-gray-100
           `}
      >
        {props.titulo}
      </h1>

      <h2
        className={`
            font-ligth text-sm 
            text-gray-600 dark:text-gray-300
            `}
      >
        {props.subtitulo}
      </h2>
    </div>
  );
}

export default Titulo;

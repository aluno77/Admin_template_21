interface AuthInputProps {
  label: string;
  valor: any;
  obrigatorio?: boolean;
  nãoRenderizarQuando?: boolean;
  tipo?: 'text' | 'email' | 'password';
  valorMudo: (novoValor: any) => void;
}

function AuthInput(props: AuthInputProps) {
  
  return props.nãoRenderizarQuando ? null : (
    <div className="flex flex-col mt-4">
      <label>{props.label}</label>
      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        onChange={(e) => props.valorMudo?.(e.target.value)}
        required={props.obrigatorio}
        className={`
          px-4 py-3 rounded-lg bg-gray-200 mt-2
          border focus:border-blue-500 focus:bg-white
          focus:outline-none
        `}
      />
    </div>
  );
}

export default AuthInput;

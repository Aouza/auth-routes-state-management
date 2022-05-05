import { InputWrapper, InputStyled } from "./styles";

interface InputProps {
  type?: string;
  label: string;
  title: string;
  placeholder: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  label,
  title,
  placeholder,
  id,
  value,
  onChange,
}: InputProps) => {
  return (
    <InputWrapper>
      <label htmlFor={id}>{label}</label>
      <InputStyled
        type={type ?? "text"}
        title={title}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}: InputProps) => {
  return (
    <input
      className="
  w-full
  mt-4
  p-4
  text-lg
  bg-black
  border-2
  border-neutral-800
  rounded-md
  outline-none
  text-white
  focus:ring-sky-500
  focus:border-2
  transition
  disabled:bg-neutral-900
  disabled:opacity-70
  disabled:cursor-not-allowed
  "
      placeholder={placeholder}
      value={value}
      type={type}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Input;

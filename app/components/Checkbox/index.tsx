import {Checkbox as MCheckbox} from "@mantine/core";

export const Checkbox = ({
  checked,
  onChange,
  label,
  ...rest
}: CheckboxProps) => {
  return (
    <MCheckbox
      label={label}
      color="#ffffff"
      iconColor="#000"
      classNames={{
        input: "border-2 !border-black/opacity-20 checked:!border-black",
        label: "text-base text-right",
        body: "flex items-center justify-between mb-4",
      }}
      checked={checked}
      onChange={onChange}
      {...rest}
    />
  );
};

interface CheckboxProps {
  checked?: boolean;
  onChange?: () => void;
  label?: string;
}

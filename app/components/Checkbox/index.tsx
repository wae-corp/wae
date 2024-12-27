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
      iconColor="currentcolor"
      classNames={{
        input:
          "border-2 border-[#7f7f7f] checked:border-white checked:bg-black peer checked:text-white bg-transparent xl:!border-black/opacity-20 xl:checked:!border-black",
        label: "text-base xl:text-black text-right",
        body: "flex items-center justify-between mb-4",
        icon: "peer-checked:text-white",
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

import {Label} from '@/components/ui/label';

export default function OptionAnswer({name, value, choice, text}) {
  return (
    <Label
      className={`flex bg-red-100 items-center cursor-pointer space-x-2 rounded-full justify-center py-3 w-full`} htmlFor={name}>
      <input
        className="cursor-pointer appearance-none w-4 h-4 border bg-gray-100 border-gray-400 rounded-full checked:bg-red-500 checked:border-transparent focus:outline-none checked:ring-2 checked:ring-offset-2 checked:ring-red-500"
        required
        type="radio"
        name={name}
        value={value}
        key={choice}
      />
      <span>{choice.toUpperCase()}</span>
      <span>{text}</span>
    </Label>
  );
}
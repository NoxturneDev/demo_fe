import {Label} from '@/components/ui/label';

export default function OptionAnswer({name, value, choice, text}) {
  return (
    <Label
      className={`flex bg-blue-100 items-center cursor-pointer space-x-2 rounded-full justify-center py-3 w-full`} htmlFor={`${name}-${value}`}>
      <input
        className="cursor-pointer appearance-none w-4 h-4 border bg-gray-100 border-gray-400 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none checked:ring-2 checked:ring-offset-2 checked:ring-blue-500"
        required
        type="radio"
        name={name}
        value={value}
        key={choice}
        id={`${name}-${value}`}
      />
      <span>{choice.toUpperCase()}</span>
      <span>{text}</span>
    </Label>
  );
}
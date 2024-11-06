import {Label} from '@/components/ui/label';
import OptionAnswer from "./OptionAnswers.jsx";

export default function Questions({ questions, name, options }) {
  return (
    <div className="flex flex-col mb-5 bg-blue-500 p-5 text-left text-white gap-2 rounded-lg">
      <div className="flex flex-col mb-3 md:flex-row md:items-center md:mb-7">
        <div className="mb-2 text-base md:w-1/2 font-bold">
          {questions}
          <span className="text-white"> *</span>
        </div>
      </div>
      {options.map((option, index) => (
        <OptionAnswer
          key={index}
          name={name}
          text={option.text}
          value={option.value}
          choice={String.fromCharCode(65 + index)}
        />
      ))}
    </div>
  );
}

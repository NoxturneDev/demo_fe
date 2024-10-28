import {Label} from '@/components/ui/label';
import OptionAnswer from "./OptionAnswers.jsx";

export default function Questions({questions, name}) {
  return (
    <>
      <div className="flex flex-col mb-5 bg-red-200 p-5 text-left text-black">
        <div className="flex flex-col mb-3 md:flex-row md:items-center md:mb-7">
          <div className="mb-2 text-base md:w-1/2">
            {questions}
            <span className="text-red-500"> *</span>
          </div>
        </div>
        <OptionAnswer name={name} text="test" value={1} choice={"A"}/>
        <OptionAnswer name={name} text="test 2" value={2} choice={"B"}/>
        <OptionAnswer name={name} text="test 3" value={3} choice={"C"}/>
        <OptionAnswer name={name} text="test 4" value={4} choice={"D"}/>
      </div>
    </>
  );
}
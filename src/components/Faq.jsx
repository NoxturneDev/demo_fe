import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function Faq() {
  const faq = [
    {
      id: 1,
      q: "Apa itu senam RAS",
      ans: "Jawaban"
    },
    {
      id: 2,
      q: "Mengapa penting melakukan senam RAS",
      ans: "Jawaban"
    },
];
  
  return (
    <div className="bg-blue-500 w-full">
      <Accordion type="single" collapsible className="w-full px-12 py-12 z-50">
        {faq.map((item) => (
          <FaqItem key={item.id} value={item.id} question={item.q} answer={item.ans}/>
        ))}
      </Accordion>
    </div>
  );
}

function FaqItem({value, question, answer}) {
  return (
    <AccordionItem className="text-white" value={`item-${value}`}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  );
}

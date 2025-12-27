import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { refundAccordionData } from "@/data/RefundAccordionData"

export function CustomAccordion() {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
        >
            {
                refundAccordionData.map((data, index) => (
                    <AccordionItem key={index} value={`item-${data.id}`} className="bg-(--bg-white-0) my-2 p-5 rounded-[20px]  "  >
                        <AccordionTrigger > {data.question} </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                {data.answer}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                ))
            }

        </Accordion>
    )
}

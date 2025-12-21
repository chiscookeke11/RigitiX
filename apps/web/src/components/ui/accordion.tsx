import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Minus, Plus } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex ">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-base text-(--text-dark-gray) font-medium transition-all outline-none cursor-pointer focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 ",
          className
        )}
        {...props}
      >
        <span className="max-w-[333px] " >   {children}</span>
        <button className="border border-[#E4E4E4] h-9 w-9 rounded-full flex items-center justify-center cursor-pointer shrink-0  " >
          <Plus color="#A3A3A3" className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-opacity duration-200 [[data-state=open]_&]:hidden" />
          <Minus color="#A3A3A3" className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-opacity duration-200 [[data-state=closed]_&]:hidden" />
        </button>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-base text-(--text-medium-gray) font-medium "
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

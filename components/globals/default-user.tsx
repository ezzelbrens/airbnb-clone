import { cn } from "@/lib/utils";
import { User2Icon } from "lucide-react";

export function DefaultUserIcon({className} : { className?:string }) {
  return (
    <div className={cn("flex size-8 rounded-full overflow-hidden bg-slate-300 text-white justify-center	content-end", className)}>
        <User2Icon className="size-7 self-end fill-slate-500 text-slate-500"/>
    </div>
  )
}
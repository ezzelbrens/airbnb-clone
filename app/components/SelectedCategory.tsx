"use client"

import Image from "next/image"
import { categoryItems } from "../lib/categoryItems"
import { Card, CardHeader } from "@/components/ui/card"
import { useState } from "react"
import { cn } from "@/lib/utils"


export function SelectCategory(){

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return(
        <div className="grid grid-cols-4 gap-8 mt-10 w-3/5 mx-auto mb-36">
            {categoryItems.map((item) => (
                <div key={item.id} className="cursor-pointer ">
                    <Card className={cn("w-max sm:overflow-scroll lg:overflow-hidden", selectedCategory === item.name ? " border-primary " : "opacity-60")} onClick={() => setSelectedCategory(item.name)}>
                        <CardHeader className="flex flex-row gap-3">
                            <Image src={item.imageUrl} alt={item.name} height={32} width={32} className="size-8" />
                        
                            <h3 className="font-medium w-max">{item.title}</h3>
                        </CardHeader>

                    </Card>
                </div>
            ))}
        </div>
    )
}
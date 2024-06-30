"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function createAirbnbHome({ userID }: { userID: string }) {
  
  let data = await prisma.home.findFirst({
    where: {
      userId: userID,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
   return NextResponse.redirect(`/create/${data?.id}/structure`);
//   if (data === null) {
//     data = await prisma.home.create({
//       data: {
//         userId: userID,
//       },
//     });

//     return redirect(`/create/${data.id}/structure`);
//   } else if (!data.addedCategory && !data.addDescription && !data.addedLocation) {
//     return redirect(`/create/${data.id}/structure`);
//   }
}

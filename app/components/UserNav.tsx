/* eslint-disable @next/next/no-img-element */
import { DefaultUserIcon } from "@/components/globals/default-user";
import { Button } from "@nextui-org/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { HeartCrackIcon, HeartIcon, MenuIcon, ReceiptText } from "lucide-react";
import Link from "next/link";
import { createAirbnbHome } from "@/app/actions";



export async function UserNav() {

    const { getUser } = getKindeServerSession();
    const user = await getUser();
    
    const createHomewithId = createAirbnbHome.bind(null, {userID: user?.id as string,});

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                    <MenuIcon className="size-6 lg:size-5" />
                    
                    <img 
                        src={user?.picture ?? "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"} 
                        className="rounded-full size-8 hidden lg:block" 
                        alt="User image"
                    />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                {user? (
                    <>
                        {/* User is logged In */}
                        <DropdownMenuItem>
                            <form action={createHomewithId} className="w-full border-violet-100/0">
                                <button type="submit" className="w-full text-start">
                                    Airbnb your Home
                                </button>
                            </form>
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem>
                            <Link href="/my-homes" className="w-full">
                                My Listings
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <Link href="/favorites" className="w-full">
                                Favorites
                            </Link>
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem>
                            <Link href="/reservations" className="w-full">My Reservations</Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator className="border-b border-slate-800/35 border-dashed mx-1" />
                        
                        <DropdownMenuItem>
                            <LogoutLink className="w-full hover:bg-danger-500/25 p-2 rounded-md hover:text-red-500/85">Logout</LogoutLink>
                        </DropdownMenuItem>
                    </>
                ): (
                    <>
                        {/* User isn't logged In */}
                        <DropdownMenuItem>
                            <RegisterLink className="w-full">Register</RegisterLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LoginLink className="w-full">Login</LoginLink>
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
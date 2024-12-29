"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Sidebar() {
  return (
    <Sheet>
      <Tooltip>
        <SheetTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="border-border size-8 shrink-0 border md:hidden"
            >
              <Menu className="size-4" />
              <span className="sr-only">Menu</span>
            </Button>
          </TooltipTrigger>
        </SheetTrigger>
        <TooltipContent align="start">Menu</TooltipContent>
        <SheetContent
          side="left"
          className="flex w-full flex-col p-4 pt-12 md:w-3/4"
        >
          <SheetTitle>Main Menu</SheetTitle>
          <SearchBar className="w-full sm:hidden" />
          <SheetClose asChild>
            <Link href="/" className="w-full">
              <Button className="justify-start w-full" variant="ghost">
                Products
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/about">
              <Button className="justify-start" variant="ghost">
                About
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/services">
              <Button className="justify-start" variant="ghost">
                Services
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/contact">
              <Button className="justify-start" variant="ghost">
                Contact
              </Button>
            </Link>
          </SheetClose>
        </SheetContent>
      </Tooltip>
    </Sheet>
  );
}

function SearchBar({ className }: { className?: string }) {
  return (
    <form className={cn("relative max-w-lg lg:max-w-xs", className)}>
      <Search className="text-muted-foreground absolute left-2 top-2 size-4" />
      <Input
        type="search"
        placeholder="Search products..."
        className="h-8 rounded-lg pl-8 text-sm sm:w-[200px] md:w-[200px] lg:w-[200px]"
      />
    </form>
  );
}

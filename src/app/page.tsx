"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <main className="grid place-items-center h-screen ">
      <Card className="w-full max-w-xl p-2">
        <CardHeader>
          <CardTitle className="font-bold text-3xl">
            Think Talk Ventures
          </CardTitle>
          <CardDescription className="font-medium text-base">
            Conversas que inspiram, ideias que revolucionam.
          </CardDescription>
        </CardHeader>
        <ScrollArea className="pt-2 pr-6 h-[400px]">
          <CardContent className="relative pr-0 space-y-8">
            <div className="flex flex-row-reverse text-right items-start gap-3">
              <Avatar>
                <AvatarImage
                  src="https://github.com/mynameiskayky.png"
                  alt="@shadcn"
                />
                <AvatarFallback>KV</AvatarFallback>
              </Avatar>
              <div>
                <Label className="font-bold">Kayky:</Label>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  assumenda dignissimos velit sit autem quod esse quo, ducimus
                  laborum.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src="/resumo-cast.jpg" alt="ResumoCast Ventures" />
                <AvatarFallback>TT</AvatarFallback>
              </Avatar>
              <div>
                <Label className="font-bold">Think Talk:</Label>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  assumenda dignissimos velit sit autem quod esse quo, ducimus
                  laborum.
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse text-right items-start gap-3">
              <Avatar>
                <AvatarImage
                  src="https://github.com/mynameiskayky.png"
                  alt="@shadcn"
                />
                <AvatarFallback>KV</AvatarFallback>
              </Avatar>
              <div>
                <Label className="font-bold">Kayky:</Label>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  assumenda dignissimos velit sit autem quod esse quo, ducimus
                  laborum.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src="/resumo-cast.jpg" alt="ResumoCast Ventures" />
                <AvatarFallback>TT</AvatarFallback>
              </Avatar>
              <div>
                <Label className="font-bold">Think Talk:</Label>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  assumenda dignissimos velit sit autem quod esse quo, ducimus
                  laborum.
                </p>
              </div>
            </div>
          </CardContent>
        </ScrollArea>
        <CardFooter className="pt-2">
          <form className="flex items-center gap-3 w-full">
            <Input placeholder="Escreva suas ideias..." className="flex-1" />
            <Button>Enviar</Button>
          </form>
        </CardFooter>
      </Card>
    </main>
  );
}

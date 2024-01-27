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
import { cn } from "@/lib/utils";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
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
          {messages.map((message) => {
            console.log(message);
            return (
              <div
                key={message.id}
                className={cn(
                  message.role === "user" && "flex-row-reverse text-right",
                  "flex items-start gap-3"
                )}
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/mynameiskayky.png"
                      alt="Kayky"
                    />
                    <AvatarFallback>KV</AvatarFallback>
                  </Avatar>
                )}

                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarImage src="resumo-cast.jpg" alt="ResumoCast" />
                    <AvatarFallback>RC</AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <Label className="font-bold">
                    {message.role === "user" ? "Kayky" : "Think Talk"}
                  </Label>
                  <p>{message.content}</p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </ScrollArea>
      <CardFooter className="pt-2">
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-3 w-full"
        >
          <Input
            placeholder="Escreva suas ideias..."
            value={input}
            onChange={handleInputChange}
            className="flex-1"
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
}

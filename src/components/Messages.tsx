import { Message } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

export const MessagesChat = (message: Message) => {
  return (
    <div
      key={message.id}
      className={cn(
        message.role === "user" && "flex-row-reverse text-right",
        "flex items-start gap-3 mb-6"
      )}
    >
      {message.role === "user" && (
        <Avatar>
          <AvatarImage src="https://github.com/mynameiskayky.png" alt="Kayky" />
          <AvatarFallback>KV</AvatarFallback>
        </Avatar>
      )}

      {message.role === "assistant" && (
        <Avatar>
          <AvatarImage src="resumo-cast.jpg" alt="ResumoCast" />
          <AvatarFallback>RC</AvatarFallback>
        </Avatar>
      )}
      <div className="">
        <Label className="font-bold text-lg text-neutral-100">
          {message.role === "user" ? "Kayky" : "Think Talk"}
        </Label>
        <p className="text-neutral-200 max-w-[400px]">{message.content}</p>
      </div>
    </div>
  );
};

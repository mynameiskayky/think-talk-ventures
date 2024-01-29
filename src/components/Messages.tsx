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
        "flex items-start gap-3"
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
      <div>
        <Label className="font-bold">
          {message.role === "user" ? "Kayky" : "Think Talk"}
        </Label>
        <p>{message.content}</p>
      </div>
    </div>
  );
};

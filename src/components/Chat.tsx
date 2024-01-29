"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessagesChat } from "@/components/Messages";

import { cn } from "@/lib/utils";

import { Message, useChat } from "ai/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  innovateIndustry: z
    .object({
      industry: z.string(),
      innovation: z.string(),
      targetPublic: z.string(),
    })
    .optional(),
  simplifyProcess: z
    .object({
      industry: z.string(),
      painPoint: z.string(),
      targetPublic: z.string(),
    })
    .optional(),
  createMyPrompt: z.string().optional(),
});

export default function Chat() {
  const [activeTab, setActiveTab] = useState<
    "innovateIndustry" | "simplifyProcess" | "createPrompt"
  >("innovateIndustry");
  const [chatMessages, setChatMessages] = useState<{
    innovateIndustry: Message[];
    simplifyProcess: Message[];
    createPrompt: Message[];
  }>({
    innovateIndustry: [],
    simplifyProcess: [],
    createPrompt: [],
  });
  const { messages, input, handleInputChange, handleSubmit, append } = useChat({
    api: "/api/chat",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const innovateIndustry = form.watch("innovateIndustry");
    const simplifyProcess = form.watch("simplifyProcess");
    let prompt;
    switch (activeTab) {
      case "innovateIndustry":
        prompt = `Crie um conceito inovador de startup para a indústria de ${innovateIndustry?.industry}, focando em ${innovateIndustry?.innovation} para ${innovateIndustry?.targetPublic}. Desenvolva um plano de negócios detalhado e estratégias para a implementação do MVP.`;
        append({ role: "user", content: prompt });
        break;

      case "simplifyProcess":
        prompt = `Simplifique um processo na indústria de ${simplifyProcess?.industry}. Focando em ${simplifyProcess?.painPoint} para ${simplifyProcess?.targetPublic}. Desenvolva um plano de implementação.`;
        append({ role: "user", content: prompt });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setChatMessages((prev) => ({
      ...prev,
      [activeTab]: [...messages],
    }));
  }, [activeTab, messages]);

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
      <CardContent className="relative pr-0 space-y-8 h-full">
        <Tabs defaultValue="innovateIndustry" className="h-full pr-6">
          <TabsList className="w-full mb-3">
            <TabsTrigger
              value="innovateIndustry"
              onClick={() => setActiveTab("innovateIndustry")}
            >
              Inovar uma indústria
            </TabsTrigger>
            <TabsTrigger
              value="simplifyProcess"
              onClick={() => setActiveTab("simplifyProcess")}
            >
              Simplificar um processo
            </TabsTrigger>
            <TabsTrigger
              value="createPrompt"
              onClick={() => setActiveTab("createPrompt")}
            >
              Conversa livre
            </TabsTrigger>
          </TabsList>

          <TabsContent value="innovateIndustry" className="space-y-4">
            <ScrollArea
              className={cn(
                "pt-2 pr-6 ",
                chatMessages.innovateIndustry.length && "h-[400px]"
              )}
            >
              {chatMessages.innovateIndustry?.map((message) => (
                <MessagesChat key={message.id} {...message} />
              ))}
            </ScrollArea>
            {!chatMessages.innovateIndustry.length && (
              <Form {...form}>
                <form
                  className="space-y-3 w-full"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="innovateIndustry.industry"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="setor">
                          Gostaria de inovar em qual setor?
                        </Label>
                        <FormControl>
                          <Input
                            id="setor"
                            placeholder="IA, Saúde, Educação..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="innovateIndustry.innovation"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="setor">Qual inovação especifica?</Label>
                        <FormControl>
                          <Input
                            id="setor"
                            placeholder="Um software de resumir podcasts..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="innovateIndustry.targetPublic"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="setor">Quem é seu público-alvo?</Label>
                        <FormControl>
                          <Input
                            id="setor"
                            placeholder="Crianças, Idosos, Estudantes..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full" type="submit">
                    Criar plano de Inovação
                  </Button>
                </form>
              </Form>
            )}
          </TabsContent>

          <TabsContent value="simplifyProcess" className="space-y-4">
            <ScrollArea
              className={cn(
                "pt-2 pr-6 ",
                chatMessages.simplifyProcess.length && "h-[400px]"
              )}
            >
              {chatMessages.simplifyProcess?.map((message) => (
                <MessagesChat key={message.id} {...message} />
              ))}
            </ScrollArea>
            {!chatMessages.simplifyProcess.length && (
              <Form {...form}>
                <form
                  className="space-y-3 w-full"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="simplifyProcess.industry"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="industry">
                          Em qual industría você deseja facilitar um processo?
                        </Label>
                        <FormControl>
                          <Input
                            id="industry"
                            placeholder="IA, Saúde, Educação..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="simplifyProcess.painPoint"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="painPoint">
                          Qual é a dor que você deseja focar?
                        </Label>
                        <FormControl>
                          <Input
                            id="painPoint"
                            placeholder="No processo chato da emissão de notas fiscais"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="simplifyProcess.targetPublic"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="targetPublic">
                          Quem é seu público-alvo?
                        </Label>
                        <FormControl>
                          <Input
                            id="targetPublic"
                            placeholder="Crianças, Idosos, Estudantes..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full" type="submit">
                    Criar plano para facilitar processo
                  </Button>
                </form>
              </Form>
            )}
          </TabsContent>

          <TabsContent value="createPrompt" className="space-y-4">
            <ScrollArea
              className={cn("pt-2 pr-6 ", messages.length && "h-[400px]")}
            >
              {messages?.map((message) => (
                <MessagesChat key={message.id} {...message} />
              ))}
            </ScrollArea>
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
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

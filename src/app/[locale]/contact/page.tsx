"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contactPage");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", { name, email, message });
    toast({
      title: t("toast.title"),
      description: t("toast.description"),
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          {t("title")}
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-muted-foreground">
          {t("description")}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              {t("form.name.label")}
            </label>
            <Input
              type="text"
              id="name"
              placeholder={t("form.name.placeholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              {t("form.email.label")}
            </label>
            <Input
              type="email"
              id="email"
              placeholder={t("form.email.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              {t("form.message.label")}
            </label>
            <Textarea
              id="message"
              placeholder={t("form.message.placeholder")}
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            {t("form.submit")}
          </Button>
        </form>
      </div>
    </div>
  );
}

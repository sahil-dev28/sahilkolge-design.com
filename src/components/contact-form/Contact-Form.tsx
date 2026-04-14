import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import { useRef, useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_piqr1oe",
        "template_xl6eyz5",
        form.current as HTMLFormElement,
        "alASxCSYV3LXn0R6i",
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again later.");
        },
      );
    form.current?.reset();
    setOpenModal(false);
  };
  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger asChild>
        <Button variant="default" className="cursor-pointer">
          <Send />
          Get in touch
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md lg:max-w-lg">
        <DialogHeader className="items-center my-3">
          <DialogTitle className="text-3xl font-bold tracking-tight lg:text-4xl text-center">
            Contact
          </DialogTitle>
          <DialogDescription>
            Get in touch with me. I will get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <Separator />

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full gap-8 mt-3"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name" className="font-light">
                Name*
              </Label>
              <Input id="ame" name="name" placeholder="Your full name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phone" className="font-light">
                Phone*
              </Label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+1 (123)xxx-xxxx"
              />
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email" className="font-light">
              Email*
            </Label>
            <Input
              type="email"
              id="email"
              name="user_email"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="message" className="font-light">
              Message*
            </Label>
            <Textarea
              id="password"
              name="message"
              placeholder="Send me a message"
              className="min-h-26"
            />
          </div>

          <DialogFooter className="pt-4 sm:flex-col">
            <Button variant="default" className="font-medium" type="submit">
              <Send />
              Send message
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;

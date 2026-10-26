import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@rbillyjames0221",
    icon: Icons.gitHub,
    link: "https://github.com/rbillyjames0221",
  },
  {
    name: "Gmail",
    username: "rbillyjames0221@gmail.com",
    icon: Icons.gmail,
    link: "mailto:rbillyjames0221@gmail.com",
  },
  {
    name: "Phone",
    username: "+639364536500",
    icon: Icons.contact,
    link: "tel:+639364536500",
  },
];

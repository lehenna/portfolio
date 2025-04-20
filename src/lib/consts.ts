export const socialLinks = {
  linkedIn: "https://www.linkedin.com/in/lehenna1",
  github: "https://github.com/lehenna",
  contact: "mailto:hello@lehenna.com",
  coffee: "https://buymeacoffee.com/lehenna",
};

export interface Project {
  href: {
    code?: string;
    demo?: string;
  };
  name: string;
  description: string;
  keywords: string[];
  cover?: string;
}

export const projects: Project[] = [
  {
    href: {
      code: "https://github.com/lehenna/osu-autohost",
      demo: "https://osu.lehenna.com/",
    },
    description:
      "Proyecto de código abierto que permite a los usuarios de Osu! crear salas multijugador con rotación automática de host, junto con varios comandos de chat. También ofrece una interfaz web para interactuar sin tener que tocar código.",
    name: "Osu Autohost",
    keywords: ["React", "Tailwind", "SQLite", "Socket.IO", "Osu API"],
    cover: "/projects/osu-autohost.png",
  },
  {
    href: {
      code: "https://github.com/lehenna/auth",
      demo: "https://www.npmjs.com/package/@lehenna/auth",
    },
    description:
      "With @lehenna/auth you can implement an authentication system using email or OAuth providers in minutes. This module is database agnostic, so it can be used in any project.",
    name: "@lehenna/auth",
    keywords: ["TypeScript", "NPM", "Esbuild"],
  },
  {
    href: {
      code: "https://github.com/lehenna/authorize",
      demo: "https://www.npmjs.com/package/@lehenna/authorize",
    },
    description: "Implement a roles and permissions system in minutes.",
    name: "@lehenna/authorize",
    keywords: ["TypeScript", "NPM", "Esbuild"],
  },
];

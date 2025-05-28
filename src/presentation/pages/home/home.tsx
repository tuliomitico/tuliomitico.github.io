import {
  Button,
  ProjectCard,
  LinkedIn as Linkedin,
  Kaggle,
  ThemeToggle,
} from "@/presentation/components";
import ContactForm from "@/presentation/components/contact-form/contact-form";
import TechStack from "@/presentation/components/tech-stack/tech-stack";
import { SiGithub as Github } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-2 w-full flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                Túlio de Freitas Castro
              </span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a
                href="#about"
                className="transition-colors hover:text-foreground/80"
              >
                Sobre
              </a>
              <a
                href="#projects"
                className="transition-colors hover:text-foreground/80"
              >
                Projetos
              </a>
              <a
                href="#contact"
                className="transition-colors hover:text-foreground/80"
              >
                Contato
              </a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end gap-2">
            <ThemeToggle />
            <Button variant="outline" asChild>
              <a
                href="https://drive.google.com/file/d/1MxUUI8IqQ1K3tBWHxW3qH3dcXT10owkJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center w-full px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Desenvolvedor FullStack e Entuasiasta dos Dados
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Construindo experiências digitais com tecnologias modernas.
                  Focado em criar soluções elegantes para problemas complexos.
                </p>
              </div>
              <div className="space-x-4">
                <a href="https://github.com/tuliomitico" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/tulio-de-freitas-castro-661227156"
                  target="_blank"
                >
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
                <a href="https://www.kaggle.com/tuliofc" target="_blank">
                  <Button variant="outline" size="icon">
                    <Kaggle className="h-4 w-4" />
                    <span className="sr-only">Kaggle</span>
                  </Button>
                </a>
                <a href="mailto:tuliofc2008@hotmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projetos
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Surf Forecast API"
                description="A API for scoring good beaches to surf."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/tuliomitico/surf-forecast-flask"
                tags={["Python", "Flask", "MongoDB"]}
              />
              <ProjectCard
                title="Portfolio Website"
                description="A personal portfolio website built with Vite, React, shadcn/ui and TailwindCSS."
                image="https://5q46wjaxzj.ufs.sh/f/mJ6fL8NfXtlUXiqHWHlwEfoPU95Le2JZAqcX4wzi071HyFYv"
                link="https://github.com/tuliomitico/tuliomitico.github.io"
                tags={["Vite", "React", "shadcn/ui", "v0.dev", "TailwindCSS"]}
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>
        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Entre em contato
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Túlio de Freitas Castro. Todos
            direitos reservados.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Termos de Serviço
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Privacidade
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

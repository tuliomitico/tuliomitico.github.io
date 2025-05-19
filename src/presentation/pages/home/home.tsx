import {
  Button,
  ProjectCard,
  LinkedIn as Linkedin,
} from "@/presentation/components";
import {
  SiGithub as Github,
  SiX as Twitter,
} from "@icons-pack/react-simple-icons";
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
          <Button variant="outline" className="ml-auto">
            Resume
          </Button>
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
                <a href="https://twitter.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </a>
                <a href="mailto:hello@example.com">
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
                title="E-commerce Platform"
                description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["Next.js", "Prisma", "Stripe"]}
              />
              <ProjectCard
                title="Task Management App"
                description="A real-time task management application with team collaboration features."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["React", "Node.js", "Socket.io"]}
              />
              <ProjectCard
                title="AI Chat Interface"
                description="An AI-powered chat interface with natural language processing capabilities."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["OpenAI", "Next.js", "TailwindCSS"]}
              />
              <ProjectCard
                title="Portfolio Website"
                description="A personal portfolio website built with Next.js and TailwindCSS."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/tuliomitico/tuliomitico.github.io"
                tags={["Vite", "React", "shadcn/ui", "v0.dev", "TailwindCSS"]}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

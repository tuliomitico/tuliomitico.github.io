import { Card, CardContent, CardFooter } from "@/presentation/components/ui";
import { SiGithub as Github } from "@icons-pack/react-simple-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
}: ProjectCardProps): React.JSX.Element {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <img
          src={image || "./placeholder.svg"}
          alt={title}
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <a
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </a>
      </CardFooter>
    </Card>
  );
}

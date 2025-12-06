import { notFound } from 'next/navigation';
import { projects } from '@/utils/projects';
import ProjectDetailClient from '@/components/ProjectDetailClient';

// This function generates the static paths for all projects at build time
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailClient project={project} />;
}

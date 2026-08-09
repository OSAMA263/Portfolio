import { useState } from "react";
import { Spinner } from "@chakra-ui/react";

export default function Pictures({ selectedProject, i }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const mobileSrc = `projects/mobile/slider/${selectedProject}/pic${i}.webp`;
  const desktopSrc = `projects/pc/slider/${selectedProject}/pic${i}.webp`;

  return (
    <div className="relative flex h-full w-full items-start justify-start overflow-hidden rounded-lg">
      <picture className="block h-full w-full">
        <source media="(max-width: 645px)" srcSet={mobileSrc} />
        <img
          className="h-full w-full sm:object-cover object-fill object-top"
          src={desktopSrc}
          alt={selectedProject}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </picture>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70">
          <Spinner size="lg" className="!p-24 text-4xl"></Spinner>
        </div>
      )}
    </div>
  );
}

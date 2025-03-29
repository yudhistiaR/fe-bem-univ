import { cn } from "@/lib/utils";

const HeroLayout = ({ children, className }) => {
  return (
    <section
      className={cn(
        className,
        "max-w-screen max-h-screen overflow-hidden relative top-10 md:top-0 mb-14 lg:mb-10",
      )}
    >
      {children}
    </section>
  );
};

export default HeroLayout;

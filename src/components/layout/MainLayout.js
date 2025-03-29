import { cn } from "@/lib/utils";

const MainLayout = ({ children, className }) => {
  return (
    <section className={cn("w-full container mx-auto", className)}>
      <div className="mx-5 md:mx-0">{children}</div>
    </section>
  );
};

export default MainLayout;

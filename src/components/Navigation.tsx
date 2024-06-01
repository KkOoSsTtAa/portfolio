import { HeaderButton, type NavLink } from "@/components";

type NavigationProps = {
  navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: NavigationProps) => {
  const navLinks2or3or4InView =
    navLinks[2]?.inView || navLinks[3]?.inView || navLinks[4]?.inView;

  return (
    <nav className="flex w-full justify-center gap-10 text-sm">
      {navLinks.map((navLink, index) => {
        if (!navLink.label) return null;

        let active = navLink.inView;

        if (navLink.label === "work" && !active) {
          active =
            navLinks[2]?.inView ||
            navLinks[3]?.inView ||
            navLinks[4]?.inView ||
            false;
        }

        return (
          <HeaderButton
            key={index}
            active={active}
            className={navLinks2or3or4InView ? "text-white" : "text-myBlack"}
            motionDivClassName={navLinks2or3or4InView ? "bg-white" : undefined}
          >
            {navLink.label}
          </HeaderButton>
        );
      })}
    </nav>
  );
};

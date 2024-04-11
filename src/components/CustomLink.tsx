import React from "react";

type CustomLinkProps = {
  href: string;
};

export const CustomLink = ({ href }: CustomLinkProps) => {
  return (
    <a
      href={href}
      className="mx-auto mt-4 flex w-fit flex-col items-center justify-center gap-1"
      target="_blank"
    >
      <svg
        style={{ color: "#000000" }}
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        className="bi bi-link"
        viewBox="0 0 16 16"
      >
        {" "}
        <path
          d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"
          fill="white"
        ></path>{" "}
        <path
          d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"
          fill="white"
        ></path>{" "}
      </svg>
      <div className="text-white">Visit</div>
    </a>
  );
};

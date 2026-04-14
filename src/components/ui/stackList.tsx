import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export const StackList = ({ stack }) => {
  return (
    <li className="flex">
      <Tooltip>
        <TooltipTrigger>
          <a href="https://www.typescriptlang.org/">
            <img
              width="20"
              height="20"
              src="https://assets.chanhdai.com/images/tech-stack-icons/typescript.svg"
            />
          </a>
        </TooltipTrigger>
        <TooltipContent>TypeScript</TooltipContent>
      </Tooltip>
    </li>
  );
};

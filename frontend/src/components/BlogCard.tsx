import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-300 pb-4 cursor-pointer">
        <div className="flex">
          {/* <div className="flex justify-center flex-col text-sm"> */}
          <Avatar name={authorName} />
          {/* </div> */}
          <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
            {authorName}{" "}
          </div>
          <div className="text-sm pl-2 flex justify-center flex-col">
            {/* &#9679; */}|
          </div>
          <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
        <div className="text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(
          content.length / 100
        )} mintues read`}</div>
        {/* <div className="bg-slate-200 h-1 w-full"></div> */}
      </div>
    </Link>
  );
};

// function Avatar({ name }: { name: string }) {
//   return (
//     <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
//       <span className="font-medium text-gray-600 dark:text-gray-300">
//         {name[0]}
//       </span>
//     </div>
//   );
// }

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  // Split the name by spaces and get the first character of each word
  const nameParts = name.split(" ");
  const initials = nameParts
    .map((part) => part[0])
    .slice(0, 2) // Get the first two initials
    .join("")
    .toUpperCase(); // Make initials uppercase

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-extralight text-gray-600 dark:text-gray-300`}
      >
        {initials}
      </span>
    </div>
  );
}

//   For "John Doe", the initials will be JD.
//   For "John", the initials will be J.

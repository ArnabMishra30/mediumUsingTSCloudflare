import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Navbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/'}><div className="flex flex-col justify-center"><b>Medium</b></div></Link>
        <Avatar size="big" name="Rahul Dey" />
    </div>
  )
}

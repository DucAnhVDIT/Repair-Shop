import { User } from "@supabase/supabase-js";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Sidebar = ({
  user,
  onFilterChange,
  onSignOut,
}: {
  user: User | null;
  onFilterChange: (filter: string) => void;
  onSignOut: () => void;
}) => (
  <div className="w-64 bg-white shadow-md">
    <div className="p-4">
      <Avatar className="w-20 h-20 mx-auto mb-4">
        <AvatarImage src="/api/placeholder/150/150" alt="User" />
        <AvatarFallback>{user?.email?.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <h2 className="text-xl font-bold text-center mb-2">{user?.email}</h2>
    </div>
    <Separator />
    <nav className="mt-4">
      <Button
        variant="ghost"
        className="w-full justify-start"
        onClick={() => onFilterChange("all")}
      >
        All Tasks
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start"
        onClick={() => onFilterChange("active")}
      >
        Active Tasks
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start"
        onClick={() => onFilterChange("completed")}
      >
        Completed Tasks
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start"
        onClick={onSignOut}
      >
        Sign Out
      </Button>
    </nav>
  </div>
);

export default Sidebar;

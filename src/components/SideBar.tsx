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
    <div className="w-64 bg-gray-800 p-4">
    <div className="mb-8">
      <Avatar className="w-16 h-16 mx-auto mb-2">
      <AvatarFallback>{user?.email?.[0]?.toUpperCase() ?? 'U'}</AvatarFallback>
      </Avatar>
      <p className="text-center text-sm">{user?.email}</p>
    </div>
    <nav className="space-y-2">
      <Button
        variant="ghost"
        className="w-full justify-start text-white hover:bg-gray-700"
        onClick={() => onFilterChange("all")}
      >
        All Tasks
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start text-white hover:bg-gray-700"
        onClick={() => onFilterChange("active")}
      >
        Active Tasks
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start text-white hover:bg-gray-700"
        onClick={() => onFilterChange("completed")}
      >
        Completed Tasks
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start text-white hover:bg-gray-700"
        onClick={onSignOut}
      >
        Sign Out
      </Button>
    </nav>
  </div>
);

export default Sidebar;

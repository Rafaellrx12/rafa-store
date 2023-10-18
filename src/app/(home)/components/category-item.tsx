import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";


interface CategoryItemProps{
    category: Category
}



const CategoryItem = ({category}: CategoryItemProps) => {
    const categoryIcon = {
        keyboards:<KeyboardIcon  size={22}/>,
        monitors: <MonitorIcon size={22}/>,
        headphones: <HeadphonesIcon size={22}/>,
        mousepads:<SquareIcon size={22}/>,
        speakers: <SpeakerIcon size={22}/>,
        mouses: <MouseIcon size={22}/>
    }
    return (
        <Badge  variant ="outline" className="py-3 flex justify-center items-center gap-2 rounded-lg  ">
            {categoryIcon[category.slug as keyof typeof categoryIcon]}
        <span className ="font-bold text-xs ">{category.name}</span>
        </Badge>
      );
}
 
export default CategoryItem;
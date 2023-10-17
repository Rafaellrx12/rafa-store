import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const Header = () => {
    return ( 
    <div>
        <Card className="flex justify-between p-[1.875rem]">
            <Button size="icon" variant="outline">
                <MenuIcon/>
            </Button>
       


        <h1 className="text-lg font-semibold">
            <span className="text-primary">Rafa</span> Store
            </h1>

           <Button size="icon" variant="outline">
                <ShoppingCartIcon/>
            </Button>
        </Card>
    </div> 

    );
}
 
export default Header;
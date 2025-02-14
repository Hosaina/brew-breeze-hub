
import { Coffee, Home, ShoppingBag, Users, Settings, Menu } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Coffee, label: "Menu", href: "/menu" },
  { icon: ShoppingBag, label: "Orders", href: "/orders" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function CafeSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-cafe-800 dark:text-cafe-100">Brew Breeze</h2>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2 text-cafe-700 dark:text-cafe-200 hover:bg-cafe-100/50 dark:hover:bg-cafe-800/50 rounded-lg transition-colors"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

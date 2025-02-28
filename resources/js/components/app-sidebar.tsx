import { useState, useEffect } from "react";
import { NavFooter } from "@/components/nav-footer";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { type NavItem } from "@/types";
import { Link } from "@inertiajs/react";
import { BookOpen, Folder, LayoutGrid, ChartBar, ChartPie, Copy, Tickets, BellRing, Paperclip, TriangleAlert, Bot, Rocket, Settings } from "lucide-react";
import { motion } from "framer-motion";
import AppLogo from "./app-logo";

const base = import.meta.env.BASE_URL;

const mainNavItems: NavItem[] = [
    { title: "Dashboard", url: `${base}/dashboard`, icon: LayoutGrid },
    { title: "Analíticas", url: `${base}/analitycs`, icon: ChartBar },
    { title: "Kpi´s", url: `${base}/kpi`, icon: ChartPie },
    { title: "Conversaciones", url: `${base}/conversations`, icon: Copy },
    { title: "Tickets", url: `${base}/tickets`, icon: Tickets },
    { title: "Recordatorios", url: `${base}/reminders`, icon: BellRing  },
    { title: "Seguimientos", url: `${base}/trackings`, icon: Paperclip  },
    { title: "Alertas", url: `${base}/alerts`, icon: TriangleAlert  },
    { title: "Bot", url: `${base}/bot`, icon: Bot },
    { title: "Integraciones", url: `${base}/integrations`, icon: Rocket },
    { title: "Configuración", url: `${base}/config`, icon: Settings },
];

const footerNavItems: NavItem[] = [
    { title: "Repository", url: "https://github.com/laravel/react-starter-kit", icon: Folder },
    { title: "Documentation", url: "https://laravel.com/docs/starter-kits", icon: BookOpen },
    { title: "Changelog", url: "https://github.com/laravel/react-starter-kit", icon: Folder },
    { title: "Support", url: "https://github.com/laravel/react-starter-kit", icon: Folder },
];

export function AppSidebar() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const currentIndex = mainNavItems.findIndex((item) => window.location.pathname.includes(item.url));
        if (currentIndex !== -1) {
            setActiveIndex(currentIndex);
        }
    }, []);

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarMenu>
                    {mainNavItems.map((item, index) => (
                        <SidebarMenuItem key={index} className="relative">
                            {/* Indicador animado a la izquierda */}
                            {activeIndex === index && (
                                <motion.div
                                    className="absolute left-0 top-1/8 h-6 w-1 bg-white rounded-r"
                                    layoutId="activeIndicator"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <SidebarMenuButton asChild>
                                <Link
                                    href={item.url}
                                    className="flex items-center space-x-3 px-4"
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {item.icon && <item.icon  className="w-5 h-5" />}
                                    <span className="text-md">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

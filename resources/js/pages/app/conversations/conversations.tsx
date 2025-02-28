import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ConversationsTable from './components/table';
import Cards from './components/cards';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Conversaciones',
        href: '/conversations',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Conversaciones" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h2 className="text-white text-xl font-bold mb-4">Conversaciones</h2>
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>

                {/* Tabla de conversaciones responsiva */}
                <div className="md:flex hidden relative flex-1 rounded-xl md:min-h-min overflow-x-auto">
                    <ConversationsTable />
                </div>
                <div className="md:hidden flex relative flex-1 rounded-xl md:min-h-min overflow-x-auto">
                    <Cards />
                </div>
            </div>
        </AppLayout>
    );
}

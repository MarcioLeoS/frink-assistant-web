import AppLayout from "@/layouts/app-layout";
import { Head, usePage } from "@inertiajs/react";
import MessageCard from "../components/messages-card";
import { PageProps as InertiaPageProps } from "@inertiajs/core"; // 🚀 Importamos PageProps de Inertia

export interface Message {
    id: number;
    message_content: string;
    timestamp: string;
    role: "user" | "assistant";
    sentiment: string | null;
    customer_id: number;
    conversation_id: number;
}

interface Conversation {
    id: number;
    status: string;
    sentiment: string;
    created_at: string;
    updated_at: string;
    customer_id: number;
    customer: {
        id: number;
        name: string;
        email: string | null;
        phone_number: string;
    };
    chat_contexts: Message[];
}

// 🚀 Heredamos PageProps desde Inertia para evitar errores
interface PageProps extends InertiaPageProps {
    conversation: Conversation;
}

export default function MessagesView() {
    const { conversation } = usePage<PageProps>().props;
    const messages = conversation?.chat_contexts ?? [];

    return (
        <AppLayout breadcrumbs={[{ title: "Conversaciones", href: "/conversations" }, { title: conversation.customer.name, href: "#" }]}>
            <Head title={`Conversación con ${conversation.customer.name}`} />
            <div className="flex flex-col gap-4 p-4 max-w-7xl mx-auto">
                <h2 className="text-white text-xl font-bold mb-4">Conversación con {conversation.customer.name}</h2>
                <p className="text-gray-400">Total de mensajes: {messages.length}</p>
                <div className="space-y-4">
                    {messages.length > 0 ? (
                        messages.map((message) => <MessageCard key={message.id} message={message} />)
                    ) : (
                        <p className="text-gray-400">No hay mensajes disponibles.</p>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

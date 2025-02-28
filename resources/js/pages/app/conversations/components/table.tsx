import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import ModalBasic from "@/components/ui/modal-basic";
import Table from "@/components/ui/table"; // Importamos el componente reutilizable

const BASE_URL = import.meta.env.VITE_APP_URL || "http://localhost/frink-assistant-web/public";

interface Customer {
    id: number;
    name: string;
    phone_number: string;
}

interface ChatContext {
    id: number;
    message_content: string;
    timestamp: string;
    role: string;
}

interface Conversation {
    id: number;
    customer: Customer;
    sentiment: string;
    status: string;
    updated_at: string;
    chat_contexts: ChatContext[];
}

export default function ConversationsTable() {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [lastMessage, setLastMessage] = useState<string | null>(null);
    const [selectedConversationId, setSelectedConversationId] = useState<number | null>(null);

    useEffect(() => {
        fetch(`${BASE_URL}/conversations/getData`)
            .then((res) => res.json())
            .then((data) => {
                setConversations(data.customers);
                setTimeout(() => setLoading(false), 200);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    const handleOpenModal = (conversationId: number) => {
        const conversation = conversations.find((conv) => conv.id === conversationId);
        if (conversation) {
            const chatContexts = conversation.chat_contexts || [];
            const lastChat =
                chatContexts.length > 0
                    ? chatContexts[chatContexts.length - 1].message_content
                    : "No hay mensajes en esta conversación.";

            setLastMessage(lastChat);
            setSelectedConversationId(conversationId);
            setModalOpen(true);
        }
    };

    if (loading) {
        return <img src={BASE_URL + '/loader.svg'} className="mx-auto"></img>;
    }

    return (
        <Table>
            <thead>
                <tr className="border-b border-neutral-800">
                    <th className="py-2 text-left px-4">Teléfono</th>
                    <th className="py-2 text-left px-4">Cliente</th>
                    <th className="py-2 text-left px-4">Estado</th>
                    <th className="py-2 text-left px-4">Feedback</th>
                    <th className="py-2 text-left px-4">Conversación</th>
                    <th className="py-2 text-left px-4">Última edición</th>
                </tr>
            </thead>
            <tbody>
                {conversations.map((conv) => (
                    <tr key={conv.id} className="border-b border-neutral-800">
                        <td className="py-2 px-4">{conv.customer.phone_number}</td>
                        <td className="py-2 px-4">{conv.customer.name}</td>
                        <td className="py-2 px-4">{conv.status || "Sin estado"}</td>
                        <td className="py-2 px-4">{conv.sentiment || "N/A"}</td>
                        <td className="py-2 px-4">
                            <button
                                onClick={() => handleOpenModal(conv.id)}
                                className="text-blue-400 hover:underline"
                            >
                                {conv.chat_contexts.length > 0
                                    ? conv.chat_contexts[conv.chat_contexts.length - 1].message_content.slice(0, 20) + "..."
                                    : "Sin mensajes"}
                            </button>
                        </td>
                        <td className="py-2 px-4">{conv.updated_at}</td>
                    </tr>
                ))}
            </tbody>

            {/* Modal para mostrar el último mensaje */}
            <ModalBasic isOpen={modalOpen} setIsOpen={setModalOpen} title="Último Mensaje de la Conversación">
                <div className="px-5 pt-4 pb-1">
                    <p className="text-white">{lastMessage}</p>
                </div>
                <div className="px-5 py-4 flex justify-end space-x-2">
                    <button
                        className="px-2 py-1 cursor-pointer rounded-lg border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300"
                        onClick={() => setModalOpen(false)}
                    >
                        Cerrar
                    </button>
                    {selectedConversationId && (
                        <Link
                            href={`${BASE_URL}/conversations/conversation/${selectedConversationId}`}
                            className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        >
                            Visualizar
                        </Link>
                    )}
                </div>
            </ModalBasic>
        </Table>
    );
}

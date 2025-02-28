import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import ModalBasic from "@/components/ui/modal-basic";

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

export default function ConversationsList() {
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
                setLoading(false);
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
        return <p className="text-center text-white text-md">Cargando...</p>;
    }

    return (
        <div className="bg-transparent rounded-xl w-full">
            {/* Diseño responsive con grid en pantallas pequeñas */}
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                {conversations.map((conv) => (
                    <div
                        key={conv.id}
                        className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl shadow-md flex flex-col gap-2"
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-white">
                                {conv.customer.name}
                            </h3>
                            <span className="text-sm px-3 py-1 rounded-full bg-gray-700 text-gray-200">
                                {conv.status || "Sin estado"}
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm">📞 {conv.customer.phone_number}</p>
                        <p className="text-gray-400 text-sm">📝 Feedback: {conv.sentiment || "N/A"}</p>
                        <p className="text-gray-500 text-xs">🕒 Última edición: {conv.updated_at}</p>

                        {/* Botón para ver la conversación en modal */}
                        <button
                            onClick={() => handleOpenModal(conv.id)}
                            className="mt-3 text-blue-400 text-sm hover:underline"
                        >
                            {conv.chat_contexts.length > 0
                                ? conv.chat_contexts[conv.chat_contexts.length - 1].message_content.slice(0, 30) + "..."
                                : "Sin mensajes"}
                        </button>

                        {/* Botón de acción */}
                        <Link
                            href={`/conversation/${conv.id}`}
                            className="mt-2 text-center py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-lg text-sm"
                        >
                            Ver conversación
                        </Link>
                    </div>
                ))}
            </div>

            {/* Modal para mostrar el último mensaje */}
            <ModalBasic isOpen={modalOpen} setIsOpen={setModalOpen} title="Último Mensaje">
                <div className="px-5 pt-4 pb-1">
                    <p className="text-white">{lastMessage}</p>
                </div>
                <div className="px-5 py-4 flex justify-end space-x-2">
                    <button
                        className="px-3 py-1 cursor-pointer rounded-lg border border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white"
                        onClick={() => setModalOpen(false)}
                    >
                        Cerrar
                    </button>
                    {selectedConversationId && (
                        <Link
                            href={`/conversation/${selectedConversationId}`}
                            className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white px-3 py-1 rounded-lg"
                        >
                            Visualizar
                        </Link>
                    )}
                </div>
            </ModalBasic>
        </div>
    );
}

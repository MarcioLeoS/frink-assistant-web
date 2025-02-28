import { Message } from '../conversation/messages';

interface MessageCardProps {
    message: Message;
}

function MessageCard({ message }: MessageCardProps) {
    const isUser = message.role === "user";

    return (
        <div className="bg-white dark:bg-zinc-800 shadow-sm rounded-xl p-5">
            {/* Header */}
            <header className="flex justify-between items-start space-x-3 mb-3">
                {/* User */}
                <div className="flex items-start space-x-3">
                    <img
                        className="rounded-full shrink-0"
                        src={isUser ? "/images/user-40-03.jpg" : "/images/assistant-avatar.png"}
                        width="40"
                        height="40"
                        alt={isUser ? "Usuario" : "Asistente"}
                    />
                    <div>
                        <div className="leading-tight">
                            <a className="text-sm font-semibold text-gray-800 dark:text-gray-100" href="#0">
                                {isUser ? "Tú" : "Asistente"}
                            </a>
                        </div>
                        <div className="text-xs text-gray-500">{new Date(message.timestamp).toLocaleString()}</div>
                    </div>
                </div>
                {/* Menu button */}
                <div className="relative">
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                        ⋮
                    </button>
                </div>
            </header>

            {/* Body */}
            <div className="text-sm text-gray-800 dark:text-gray-100 space-y-2 mb-5">
                <p>{message.message_content}</p>
            </div>

            {/* Footer */}
            <footer className="flex items-center space-x-4">
                {/* Like button */}
                <button className="flex items-center text-gray-400 dark:text-gray-500 hover:text-violet-500">
                    <svg className="shrink-0 fill-current mr-1.5" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M14.682 2.318A4.485 4.485 0 0011.5 1 4.377 4.377 0 008 2.707 4.383 4.383 0 004.5 1a4.5 4.5 0 00-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 014.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 011.785 4.251h-.003z" />
                    </svg>
                    <div className="text-sm text-gray-500 dark:text-gray-400">4</div>
                </button>
                {/* Share button */}
                <button className="flex items-center text-gray-400 dark:text-gray-500 hover:text-violet-500">
                    <svg className="shrink-0 fill-current mr-1.5" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M13 7h2v6a1 1 0 0 1-1 1H4v2l-4-3 4-3v2h9V7ZM3 9H1V3a1 1 0 0 1 1-1h10V0l4 3-4 3V4H3v5Z" />
                    </svg>
                    <div className="text-sm text-gray-500 dark:text-gray-400">44</div>
                </button>
                {/* Replies button */}
                <button className="flex items-center text-gray-400 dark:text-gray-500 hover:text-violet-500">
                    <svg className="shrink-0 fill-current mr-1.5" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                    </svg>
                    <div className="text-sm text-gray-500 dark:text-gray-400">7</div>
                </button>
            </footer>
        </div>
    );
}

export default MessageCard;
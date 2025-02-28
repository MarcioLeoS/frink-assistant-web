<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChatContext extends Model
{
    // Si la tabla se llama 'chat_context' o 'chat_contexts' según tu convención
    protected $table = 'chat_context';

    // Si no usas los timestamps automáticos de Laravel en este modelo, puedes deshabilitarlos
    public $timestamps = false;

    protected $fillable = [
        'message_content',    // corresponde a messageContent
        'timestamp',
        'role',
        'sentiment',
        'customer_id',
        'conversation_id',
    ];

    protected $casts = [
        'timestamp' => 'datetime',
    ];

    // Relaciones

    // Relación muchos a uno con Customer
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    // Relación muchos a uno con Conversation (opcional)
    public function conversation()
    {
        return $this->belongsTo(Conversation::class);
    }

    // Relación uno a muchos con Ticket
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    // Relación uno a muchos con TicketMarketing
    public function ticketMarketings()
    {
        return $this->hasMany(TicketMarketing::class);
    }
}

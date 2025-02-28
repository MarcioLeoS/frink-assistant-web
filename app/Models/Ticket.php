<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $table = 'ticket';
    protected $fillable = [
        'customer_id',
        'chat_context_id',
        'status',               // Valores: open, in_progress, resolved, closed
        'bot_contacted',
        'urgency',              // Valores: low, medium, high
        'problem_type',
        'problem_description',
        'resolution_description',
        'asigned_to',
        'resolved_at',
    ];

    protected $casts = [
        'bot_contacted' => 'boolean',
        'created_at'    => 'datetime',
        'resolved_at'   => 'datetime',
    ];

    // Relaciones

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function chatContext()
    {
        return $this->belongsTo(ChatContext::class);
    }
}

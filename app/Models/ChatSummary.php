<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChatSummary extends Model
{
    protected $table = 'chat_summary';
    protected $fillable = [
        'summary',
        'chat_context_id',
        'customer_id',
    ];

    // Sólo se maneja automáticamente la fecha de creación
    const UPDATED_AT = null;
    const CREATED_AT = 'created_at';

    // Relaciones

    public function chatContext()
    {
        return $this->belongsTo(ChatContext::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}

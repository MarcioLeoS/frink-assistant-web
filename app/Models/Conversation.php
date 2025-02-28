<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    protected $table = 'conversation';
    protected $fillable = [
        'last_prompt',
        'customer_id',
        'status',     // Valores: active, closed, escalated
        'sentiment',  // Valores: positive, negative, duda, support, unknown
    ];

    protected $casts = [
        'created_at' => 'date:d/m/Y H:i:s',
        'updated_at' => 'date:d/m/Y H:i:s',
    ];

    // Relaciones

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function chatContexts()
    {
        return $this->hasMany(ChatContext::class);
    }
}

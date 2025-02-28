<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FollowUp extends Model
{
    protected $table = 'follow_up';

    // En este modelo se utiliza únicamente created_at
    public $timestamps = false;
    const CREATED_AT = 'created_at';
    const UPDATED_AT = null;

    protected $fillable = [
        'customer_id',
        'conversation_id',
        'follow_up_date', // Corresponde a followUpDate
        'status',
        'notes',
    ];

    protected $casts = [
        'follow_up_date' => 'datetime',
        'created_at'   => 'datetime',
    ];

    // Relaciones

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function conversation()
    {
        return $this->belongsTo(Conversation::class);
    }
}
